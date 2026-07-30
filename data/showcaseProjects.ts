// Synced from the "Athena Website 2026" Airtable base > projects table.
// Ask Claude to re-sync after adding/editing entries there.
export interface ShowcaseProject {
  projectName: string;
  name: string;
  age: string;
  country: string;
  screenshot: string;
  program: string;
  playableLink: string;
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    projectName: "Zoe's Personal Website",
    name: "Zoe",
    age: "16",
    country: "Florida",
    program: "Stardance",
    screenshot:
      "https://cdn.hackclub.com/019faebb-7dc3-7aae-a3cf-48e30bbe3029/screenshot_2026-07-29_at_12.35.39___pm.png",
    playableLink: "https://zoebiscuit.github.io/personalWebsite/",
  },
  {
    projectName: "This This Rice 兩餸飯",
    name: "Kristena",
    age: "18",
    country: "Hong Kong",
    program: "Sleepover",
    screenshot:
      "https://cdn.hackclub.com/019faea4-29d3-7f99-9167-920800fc6bfa/image.png",
    playableLink: "https://www.roblox.com/games/82479517875218/This-This-Rice",
  },
  {
    projectName: "Catatime: Fill Your Coding Cup",
    name: "Joy, Kaylee, Kat",
    age: "17, 17, 15",
    country: "US & CA",
    program: "Parthenon",
    screenshot:
      "https://cdn.hackclub.com/019faea8-af0b-7df8-b597-ac501f141429/screenshot_2026-07-29_at_12.15.04___pm.png",
    playableLink: "https://github.com/joysudo/cattatime/releases",
  },
  {
    projectName: "CelestePad",
    name: "Ara",
    age: "17",
    country: "Singapore",
    program: "Highway",
    screenshot:
      "https://cdn.hackclub.com/019faec2-1e0e-775e-bd0b-5eb14db746ce/image.png",
    playableLink:
      "https://www.reddit.com/r/celestegame/comments/1mbj6k7/i_made_a_mini_keypad_to_play_celeste/",
  },
  {
    projectName: "Signal Lost",
    name: "Estella",
    age: "14",
    country: "Massachusetts",
    program: "Juice",
    screenshot:
      "https://cdn.hackclub.com/019faeb8-3d8d-70ef-9c32-4eb0916cd5ff/image.png",
    playableLink: "https://themagicfrog.itch.io/signal-lost",
  },
  {
    projectName: "Mini-Pokemon Vending Machine",
    name: "Selena",
    age: "16",
    country: "Canada",
    program: "Highway",
    screenshot:
      "https://cdn.hackclub.com/019faebe-b1dd-7976-a7bb-77ae295791a0/image.png",
    playableLink: "https://github.com/possiblyselena/pokemon-vending-machine",
  },
  {
    projectName: "WEATHERbird",
    name: "Amelie",
    age: "16",
    country: "Vermont",
    program: "Congressional App Challenge",
    screenshot:
      "https://cdn.hackclub.com/019faeb9-aad8-7c8c-b9a6-9293515a788a/screenshot_2026-07-29_at_12.33.38___pm.png",
    playableLink: "https://weather-bird.vercel.app/",
  },
];
