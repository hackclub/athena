interface EventHost {
  username: `@${string}`;
  avatarUrl: string;
}

type EventType = 'athena-event' | 'workshop' | 'athena-award' | 'ama';
type Disciplines = 'web' | 'hardware' | 'game-dev' | 'ai' | 'cybersecurity' | 'other' | 'backend' | 'frontend' | 'fullstack' | 'mobile';
export type Tag = EventType | Disciplines;

export interface CalendarEvent {
  date: Date;
  name: string;
  description?: string;
  hostedBy?: EventHost[];
  recording?: string;
  artifactsAvailable?: boolean;
  rsvpLink?: string;
  tags: Tag[];
}

export const formatTag = (tag: EventType | Disciplines): string => {
  const tagMapping: Record<EventType | Disciplines, string> = {
    'athena-event': 'Athena Event',
    'workshop': 'Workshop',
    'athena-award': 'Athena Award',
    'web': 'Web Development',
    'backend': 'Backend Development',
    'frontend': 'Frontend Development',
    'fullstack': 'Fullstack Development',
    'mobile': 'Mobile Development',
    'hardware': 'Hardware',
    'game-dev': 'Game Development',
    'ai': 'Artificial Intelligence',
    'cybersecurity': 'Cybersecurity',
    'ama': 'Ask Me Anything',
    'athenaeum': 'Athenaeum',
    'other': 'Other',
  };
  return tagMapping[tag];
};

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    date: new Date('05-22-2025'),
    name: 'Athena Award Launch',
    description: 'see the [Athena Award](https://award.athena.hackclub.com) for more details',
    tags: ['athena-award']
  },
  {
    date: new Date('05-30-2025'),
    name: 'Kick Off Call',
    hostedBy: [
      { username: '@phaedra', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U05468GUS7J-53ffbb76641b-512' },
      { username: '@phthallo', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U078J6H1XL3-724a93fb0c6f-512' },
    ],
    tags: ['athena-award']
  },
  {
    date: new Date('05-30-2025'),
    name: 'Solder Workshop',
    hostedBy: [
      { username: '@acon', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U04KEK4TS72-7a65eae6cb6d-512' },
    ],
    artifactsAvailable: true,
    tags: ['hardware', 'workshop']
  },
  {
    date: new Date('06-09-2025'),
    name: 'Intro to Github',
    description: 'Learn how to use Git, Github, VScode and Codespaces. To see the slides click [here](https://docs.google.com/presentation/d/1Bvlc6PLaPOWEu_K9H2rqyYPyxSbU_-iYkh6T2AW9Kf4/edit)',
    hostedBy: [
      { username: '@reem', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06U80G86H1-a7cc92358101-512' },
      { username: '@Meghana', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06P62WGWAV-f150278a6fda-512' },
    ],
    artifactsAvailable: true,
    tags: ['web', 'workshop']
  },
  {
    date: new Date('06-16-2025'),
    name: 'Tribute Workshop',
    hostedBy: [
      { username: '@phthallo', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U078J6H1XL3-724a93fb0c6f-512' },
    ],
    recording: "https://hackclub.zoom.us/rec/play/Dgdz8YSz9hJr6F4ejUYFnP97o0jbIYJHoDE629UoTZZejGjKjqUigL6hWJH1roODhQ92VriOWyVmBmBt.xiyaNoQI5rUD0Foz?eagerLoadZvaPages=&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fhackclub.zoom.us%2Frec%2Fshare%2F6WIXmM8MFUJqtNqMiCsdHbjrnICn0DoXPWCvYK_rco_mqU9dTHLe5BzjZYshn99I.r5JUsa45GPNOu_Q8",
    artifactsAvailable: true,
    rsvpLink: 'https://lu.ma/c0eswrg9?tk=0eYxXf',
    tags: ['other', 'workshop']
  },
  {
    date: new Date('06-23-2025'),
    name: 'Express Workshop (Intro to Backend)',
    description: 'learn more at [express.athena.hackclub.com](https://express.athena.hackclub.com)!',
    hostedBy: [
      { username: '@chxsi', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U077C11T3A8-fbdfa7b256a4-512' }
    ],
    recording: "https://mega.nz/file/TBVVTQDb#L91Z7uVN8jTshs30ulKtHEHAz8D1pdrK6HZgHJpk8e4",
    artifactsAvailable: true,
    rsvpLink: 'https://lu.ma/3855gi0x',
    tags: ['web', 'workshop']
  },
  {
    date: new Date('06-24-2025'),
    name: 'Hackpad Speedrun with @Meghana',
    description: 'Meghana will be hosting a hackpad workshop/speedrun, where she\'ll make a hackpad in 2 hours and answer all of your questions. You can follow along, or just sit and vibe to learn',
    hostedBy: [
      { username: '@Meghana', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06P62WGWAV-f150278a6fda-512' }
    ],
    artifactsAvailable: true,
    recording: "https://youtu.be/KP1T5V40Sfc",
    rsvpLink: 'https://lu.ma/hmftz58z',
    tags: ['hardware', 'workshop']
  },

  {
    date: new Date('06-28-2025'),
    name: 'Flourish',
    description: '📍 Philadelphia\'s Athena Event! Learn more at [flourish.hackclub.com](https://flourish.hackclub.com)!',
    tags: ['athena-event']
  },

  {
    date: new Date('06-30-2025'),
    name: 'Intro to Hardware',
    description: 'learn how to build a Pathfinder, an eFidget and controller pad',
    hostedBy: [
      { username: '@lou', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06EMBJH71S-9b9ef0992de0-512' },
      { username: '@Meghana', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06P62WGWAV-f150278a6fda-512' },
    ],
    recording: "https://youtu.be/Wy1X5jSPJhA",
    rsvpLink: 'https://lu.ma/fwjvl4uo',
    tags: ['hardware', 'workshop']
  },
  {
    date: new Date('06-30-2025'),
    name: 'Jumpstart (Godot) Game Dev Workshop',
    description: "Build a Godot platformer for Estella's YSWS Jumpstart!",
    hostedBy: [
      { username: '@estella', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06UYA4AH6F-a85235815241-512' },
    ],
    recording: "https://hackclub.slack.com/archives/C0931T5SEH4/p1751299015727739",
    tags: ['game-dev']
  },
  {
    date: new Date('06-30-2025'),
    name: 'How to Deploy Websites (Frontend and Backend)',
    description: 'Learn how to deploy your fullstack website!',
    hostedBy: [
      { username: '@chxshi', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U077C11T3A8-fbdfa7b256a4-512' },
      { username: '@lou', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06EMBJH71S-9b9ef0992de0-512' },
    ],
    rsvpLink: 'https://lu.ma/509y6w45',
    tags: ['web', 'workshop']
  },
  {
    date: new Date('07-02-2025'),
    name: 'Spatula Workshop',
    description: '',
    hostedBy: [
      { username: '@Angad', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U075RTSLDQ8-42c3f01d5932-512' },
    ],
    rsvpLink: '',
    tags: ['hardware', 'workshop']
  },
  {
    date: new Date('07-03-2025'),
    name: 'Pathfinder Workshop',
    description: "The second Pathfinder workshop, learn how to make a sick PCB",
    hostedBy: [
      { username: '@Meghana', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06P62WGWAV-f150278a6fda-512' },
    ],
    rsvpLink: 'https://lu.ma/lsc2n1g6',
    tags: ['hardware', 'workshop']
  },
  {
    date: new Date('07-05-2025'),
    name: 'JPEG in Ottawa',
    description: "Ottawa's first all-girls hackathon! July 5–6 at Carleton University.",
    tags: ['athena-event', 'game-dev']
  },
  {
    date: new Date('07-06-2025'),
    name: 'Rewind Workshop',
    description: 'Learn how to build a simple desktop app using Electron for the Rewind YSWS',
    hostedBy: [
      { username: '@Lou', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06EMBJH71S-9b9ef0992de0-512' },
    ],
    rsvpLink: 'https://lu.ma/ylkmwaj4',
    tags: ['other', 'workshop']
  },
  {
    date: new Date('07-07-2025'),
    name: 'Intern & Gap Year at Hack Club AMA',
    description: 'Meet the interns and gap years!',
    tags: ['ama', 'athena-event'],
  },
  {
    date: new Date('07-10-2025'),
    name: 'Bakebuild Workshop',
    description: 'Learn how to make a cookie cutter using OnShape and get cookies!',
    hostedBy: [
      { username: '@Kate', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U07PXU0657B-19a567a11837-512' },
    ],
    rsvpLink: 'https://lu.ma/cifnfwq5',
    tags: ['hardware', 'workshop']
  },
  {
    date: new Date('07-14-2025'),
    name: 'How to Deploy Websites (Frontend and Backend)',
    description: 'Learn how to deploy your fullstack website!',
    hostedBy: [
      { username: '@chxshi', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U077C11T3A8-fbdfa7b256a4-512' },
      { username: '@lou', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06EMBJH71S-9b9ef0992de0-512' },
    ],
    rsvpLink: 'https://lu.ma/509y6w45',
    tags: ['web', 'workshop']
  },
  {
    date: new Date('07-18-2025'),
    name: 'Aurora in San Francisco',
    description: 'See [aurora.hackclub.com](https://aurora.hackclub.com) for more details',
    tags: ['athena-event']
  },
  {
    date: new Date('07-25-2025'),
    name: 'Episode 1: Lara Rubbelke AMA',
    description: "Join us for Episode 1 of the Athenaeum web series, where we'll be having a Q&A session with [Lara Rubbelke](https://www.linkedin.com/in/lararubbelke/), the CTO of Microsoft Americas!",
    hostedBy: [
      { username: '@elia', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06HPP9GZ3R-c28081aa1f5d-512'},
      { username: '@Charlotte', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U084T4KCZ8Q-fc1551bf4b82-512'}
    ],
    rsvpLinks: ['https://hackclub.slack.com/archives/C0266FRGT/p1753316127392049'],
    tags: ['ama', 'athenaeum']
  }
  {
    date: new Date('07-28-2025'),
    name: 'Intro to Cybersecurity',
    hostedBy: [
      {username: '@thanishkka', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U07TE70UG7Q-242d5a37918d-512'}
      ],
    rsvpLink: 'https://lu.ma/qcs24861',
    tags: ['cybersecurity', 'workshop']
  },
  {

    date: new Date('08-05-2025'),
    name: 'Plunge Workshop',
    description: 'Plunge into CAD! Learn how to make custom, stamp-style cookie cutters and get them shipped!',
    hostedBy: [
      { username: '@Kate', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U07PXU0657B-19a567a11837-512' },
    ],
    rsvpLink: 'https://lu.ma/am58in3m',
    tags: ['hardware', 'workshop']
  },
  {
    date: new Date('08-09-2025'),
    name: 'Full Stack Web Development',
    description: 'Learn how to build full stack web applications using Django!',
    hostedBy: [
      {username: '@celeste', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06TV3F4HEU-ee45e446ed7e-512'}
    ],
    rsvpLink: 'https://lu.ma/h60zvf4h',
    tags: ['web', 'workshop']
  },
  {
    date: new Date('08-09-2025'),
    name: 'Show and Tell',
    description: 'Show off what you\'ve been working on through the summer!',
    hostedBy: [
      {username: '@lou', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06EMBJH71S-9b9ef0992de0-512'}
    ],
    rsvpLink: 'https://lu.ma/pado52rp',
    tags: ['other']
  },
  {
    date: new Date('08-18-2025'),
    name: 'App Development Workshop',
    description: 'Wanna make cool mobile apps? Hannah will show you exactly how in this workshop!',
    hostedBy: [
      { username: '@hannah oss', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U08QKM7KPQD-g772c316ea02-512' },
    ],
    rsvpLink: 'https://lu.ma/6bxt91m7',
    tags: ['mobile', 'workshop']
  },
  {
    date: new Date('08-23-2025'),
    name: 'Project Showcase',
    description: 'Show off your amazing projects!',
    hostedBy: [],
    rsvpLink: '',
    tags: ['other', 'athena-event']
  },
  
  {
    date: new Date('11-14-2025'),
    name: 'Parthenon',
    description: 'Completed the Athena Award? We\'ll see you in New York City! 🗽',
    tags: ['athena-award', 'athena-event']
  }
]