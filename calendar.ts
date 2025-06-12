interface EventHost {
  username: `@${string}`;
  avatarUrl: string;
}

type EventType = 'athena-event' | 'workshop' | 'athena-award'
type Disciplines = 'web' | 'hardware' | 'game-dev' | 'ai' | 'cybersecurity' | 'other';
export type Tag = EventType | Disciplines;

export interface CalendarEvent {
  date: Date;
  name: string;
  description?: string;
  hostedBy?: EventHost[];
  artifactsAvailable?: boolean;
  tags: Tag[];
}

export const formatTag = (tag: EventType | Disciplines): string => {
  const tagMapping: Record<EventType | Disciplines, string> = {
    'athena-event': 'Athena Event',
    'workshop': 'Workshop',
    'athena-award': 'Athena Award',
    'web': 'Web Development',
    'hardware': 'Hardware',
    'game-dev': 'Game Development',
    'ai': 'Artificial Intelligence',
    'cybersecurity': 'Cybersecurity',
    'other': 'Other',
  };
  return tagMapping[tag];
};

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    date: new Date('2025-05-22'),
    name: 'Athena Award Launch',
    description: 'see the [Athena Award](https://award.athena.hackclub.com) for more details',
    tags: ['athena-award']
  },
  {
    date: new Date('2025-05-30'),
    name: 'Kick Off Call',
    hostedBy: [
      { username: '@phaedra', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U05468GUS7J-53ffbb76641b-512' },
      { username: '@phthallo', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U078J6H1XL3-724a93fb0c6f-512' },
    ],
    tags: ['athena-award']
  },
  {
    date: new Date('2025-05-30'),
    name: 'Solder Workshop',
    hostedBy: [
      { username: '@acon', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U04KEK4TS72-7a65eae6cb6d-512' },
    ],
    artifactsAvailable: true,
    tags: ['hardware', 'workshop']
  },
  {
    date: new Date('2025-06-09'),
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
    date: new Date('2025-06-16'),
    name: 'Tribute workshop',
    hostedBy: [
      { username: '@phthallo', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U078J6H1XL3-724a93fb0c6f-512' },
    ],
    artifactsAvailable: true,
    tags: ['other', 'workshop']
  },
  {
    date: new Date('2025-06-23'),
    name: 'Express workshop (Intro to backend)',
    description: 'learn more at [express.athena.hackclub.com](https://express.athena.hackclub.com)!',
    hostedBy: [],
    tags: ['web', 'workshop']
  },
  {
    date: new Date('2025-06-28'),
    name: 'Flourish',
    description: '📍 Philadelphia\'s Athena Event! Learn more at [flourish.hackclub.com](https://flourish.hackclub.com)!',
    tags: ['athena-event']
  },
  {
    date: new Date('2025-06-30'),
    name: 'How to deploy websites (Frontend and Backend)',
    hostedBy: [],
    tags: ['web', 'workshop']
  },
  {
    date: new Date('2025-07-05'),
    name: 'JPEG in Ottawa',
    description: 'Ottawa's first all-girls hackathon! July 5–6 at Carleton University.',
    tags: ['athena-event', 'game-dev']
  },
  {
    date: new Date('2025-07-07'),
    name: 'Intern & Gap Year at Hack Club AMA',
    description: 'meet the interns and gap years!',
    tags: ['other']
  },
  {
    date: new Date('2025-07-14'),
    name: 'Intro to game development using Godot',
    hostedBy: [],
    tags: ['game-dev', 'workshop']
  },
  {
    date: new Date('2025-07-18'),
    name: 'Aurora in San Francisco',
    description: 'see [aurora.hackclub.com](https://aurora.hackclub.com) for more details',
    tags: ['athena-event']
  },
  {
    date: new Date('2025-07-21'),
    name: 'Intro to hardware',
    hostedBy: [
      { username: '@Meghana', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06P62WGWAV-f150278a6fda-512' },
      { username: '@lou', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U06EMBJH71S-9b9ef0992de0-512' },
    ],
    tags: ['hardware', 'workshop']
  },
  {
    date: new Date('2025-07-28'),
    name: 'Intro to Cybersecurity',
    tags: ['cybersecurity', 'workshop']
  },
  {
    date: new Date('2025-08-04'),
    name: 'Intro to AI',
    tags: ['ai', 'workshop']
  },
  {
    date: new Date('2025-11-14'),
    name: 'Parthenon',
    description: 'Completed the Athena Award? We\'ll see you in New York City! 🗽',
    tags: ['athena-award', 'athena-event']
  },
]