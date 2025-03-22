import { extractColors } from 'extract-colors';
import axios from 'axios';
import sharp from 'sharp';
import { FinalColor } from "extract-colors/lib/types/Color";
import { cache } from "react";
import { AirtableEventsManager } from './airtable';
import { AirtableEventRecord, EventWithColors, Event } from '@/types'
import { hackClubLogo, defaultAthenaPhoto } from '@/constants'
import { formatDate } from '@/lib/utils'

export async function fetchEvents() {
  const data = await new AirtableEventsManager().getAllEvents();
  
  return data.map((record) => {
    const eventRecord = record as unknown as AirtableEventRecord;
    let photos: string[] = [defaultAthenaPhoto];
    
    if (eventRecord.fields.Photos && eventRecord.fields.Photos.trim() !== "") {
      try {
        const parsedPhotos = JSON.parse(eventRecord.fields.Photos);
        if (Array.isArray(parsedPhotos) && parsedPhotos.length > 0) {
          photos = parsedPhotos;
        }
      } catch (error) {
        console.error('Error parsing Photos field:', error);
      }
    }

    return {
      id: eventRecord.id,
      name: eventRecord.fields.Name,
      status: eventRecord.fields.Status,
      description: eventRecord.fields.Description,
      location: eventRecord.fields.Location,
      startDate: formatDate(eventRecord.fields['Start Date']),
      endDate: formatDate(eventRecord.fields['End Date']),
      logo: eventRecord.fields.Logo,
      photos: photos,
      photocreds: eventRecord.fields['Photo Creds'],
      website: eventRecord.fields.Website
    };
  });
}

function hslToHex({ hue, saturation, lightness }: { hue: number, saturation: number, lightness: number }) {
  hue *= 360;
  const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = c * (1 - Math.abs((hue / 60) % 2 - 1));
  const m = lightness - c / 2;

  let r = 0, g = 0, b = 0;

  if (hue < 60) {
      r = c;
      g = x;
  } else if (hue < 120) {
      r = x;
      g = c;
  } else if (hue < 180) {
      g = c;
      b = x;
  } else if (hue < 240) {
      g = x;
      b = c;
  } else if (hue < 300) {
      r = x;
      b = c;
  } else {
      r = c;
      b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function makePastel(color: FinalColor) {
  const isPastel = color.saturation < 0.3 || color.lightness > 0.75;

  if (isPastel) {
    return color;
  }
  const hue = color.hue;
  const saturation = color.saturation * 0.7;
  const lightness = Math.min(color.lightness + 0.1, 0.9);

  return {
    ...color,
    hex: hslToHex({ hue, saturation, lightness }),
    saturation,
    lightness,
  };
}

export const getEvents: () => Promise<EventWithColors[]> = cache(async () => {
  const events = await fetchEvents();
  const recoloredEvents = [];

  for (const event of events.filter(e => e.status !== "Upcoming") as EventWithColors[]) {
    try {
      const response = await axios.get(event.logo || hackClubLogo, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(response.data);

      const { data, info } = await sharp(imageBuffer).raw().toBuffer({ resolveWithObject: true });

      const width = info.width;
      const height = info.height;
      
      const colors = await extractColors({ data: data as unknown as Uint8ClampedArray<ArrayBufferLike>, width, height }, {
        colorValidator: (red, green, blue, alpha = 255) => {
          const greyShade = Math.abs(red - green) < 30 && Math.abs(red - blue) < 30 && Math.abs(green - blue) < 30;
          return alpha > 200 && !greyShade;
        },
      });

      const sortedColors = colors.sort((a, b) => b.intensity - a.intensity)
      const pastel = sortedColors.map(c => makePastel(c));

      recoloredEvents.push({ colors: { pastel, intense: sortedColors }});
    } catch (e) {
      console.error(e);
    }
  }

  const eventsWithColors = recoloredEvents.map((event, i) => hardcodeEventColors({
    ...events[i],
    tagColor: event.colors.intense[0].hex,
    logoPreviewBackgroundColor: event.colors.pastel[0].hex,
  } as EventWithColors));
  
  return eventsWithColors;
})

export async function getUpcomingEvents(): Promise<Event[]> {
  const events = await fetchEvents();
  return events.filter(event => event.status === "Upcoming" || event.status === "Active");
}

export async function getRecentEvents(): Promise<EventWithColors[]> {
  const allEvents: EventWithColors[] = await getEvents();
  return allEvents.filter(event => event.status === "Complete");
}

/**
 * This is a function to hardcode old events that have white backgrounds OR hardcode other colors with flat backgrounds that weren't detected by the algorithm; please don't edit this unless the event looks wonky on deployment and you want to set a specific background color on the card!
 */
function hardcodeEventColors(event: EventWithColors) {
  const shouldBeSetToWhite = ['Horizon', 'Halo', 'Alpine', 'Harvest', 'LoneStar', 'Think Like a Programmer']
  const shouldBeSetToASpecificNonWhiteColor = [
    ['Luna', '#c8a2e0'],
    ['Spark', '#eadfff'],
    ['Ascend', '#2B028B'],
    ['Blossom', '#FFD3E0'],
  ]

  if (shouldBeSetToWhite.includes(event.name)) {
    return {
      ...event,
      logoPreviewBackgroundColor: '#FFFFFF',
    };
  } else if (shouldBeSetToASpecificNonWhiteColor.some(([name]) => name === event.name)) {
    return {
      ...event,
      logoPreviewBackgroundColor: shouldBeSetToASpecificNonWhiteColor.find(([name]) => name === event.name)![1],
    };
  } else {
    return event;
  }
}