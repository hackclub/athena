# Contributing to Athena Calendar
 This guide will help you add events and make updates to the calendar system.

## Adding New Events

### Event Structure

Events are defined in `calendar.ts` using the `CalendarEvent` interface:

```typescript
interface CalendarEvent {
  date: Date;           // Required: Event date
  name: string;         // Required: Event name
  description?: string; // Optional: Markdown description
  hostedBy?: EventHost[]; // Optional: Array of hosts
  artifactsAvailable?: boolean; // Optional: Whether artifacts are available
  rsvpLinks: string; // Optional: Array of RSVP/registration URLs
  tags: Tag[];          // Required: Array of event tags
}
```

### Adding an Event

1. Open `calendar.ts`
2. Add your event to the `CALENDAR_EVENTS` array in chronological order
3. Use this template:

```typescript
{
  date: new Date('MM-DD-YYYY'),
  name: 'Your Event Name',
  description: 'Optional markdown description with [links](https://example.com)',
  hostedBy: [
    { username: '@hostHandle', avatarUrl: 'https://host-avatar-url' }
  ],
  artifactsAvailable: true, // Only if artifacts are available
  rsvpLinks: ['https://forms.hackclub.com/event-rsvp'], // Optional registration links
  tags: ['event-type', 'discipline']
}
```

### Event Tags

Choose appropriate tags from these categories:

**Event Types:**
- `'athena-event'` - In-person Athena events
- `'workshop'` - Virtual workshops
- `'athena-award'` - Athena Award related events

**Disciplines:**
- `'web'` - Web development
- `'hardware'` - Hardware/electronics
- `'game-dev'` - Game development
- `'ai'` - Artificial Intelligence
- `'cybersecurity'` - Cybersecurity
- `'other'` - Other topics

### Host Information

For `hostedBy`, use Slack profile information:
- `username`: Include the `@` prefix (e.g., `'@username'`)
- `avatarUrl`: Use the Slack avatar URL (512px preferred)

### Descriptions

- Use Markdown formatting
- Include links to relevant resources
- Keep descriptions concise but informative
- Use single quotes for strings containing apostrophes

### RSVP Links

For `rsvpLinks`, provide registration/RSVP URLs:
- Use an array of strings for multiple registration options
- Include Hack Club forms, Eventbrite links, or other registration platforms
- Example: `rsvpLinks: ['https://forms.hackclub.com/event-name', 'https://eventbrite.com/event-id']`

## Adding New Tags

To add new event types or disciplines:

1. Update the `EventType` or `Disciplines` type definition
2. Add the new tag to the `formatTag` function with a display name
3. Update this contributing guide with the new tag

## Code Style

- Use single quotes for strings
- Format dates as `new Date('MM-DD-YYYY')` with leading zeros
- Keep events in chronological order
- Use consistent indentation (2 spaces)
- Add trailing commas in arrays and objects

## Testing Your Changes

1. Run `npm run build` to check for TypeScript errors
2. Run `npm run lint` to check code style
3. Test locally with `npm run dev`
4. Verify events appear correctly on the calendar

## Example Event

```typescript
{
  date: new Date('08-15-2025'),
  name: 'Intro to React',
  description: 'Learn React fundamentals! See [slides](https://example.com/slides)',
  hostedBy: [
    { username: '@alice', avatarUrl: 'https://ca.slack-edge.com/T0266FRGM-U123456789-abcd1234-512' }
  ],
  artifactsAvailable: true,
  rsvpLinks: ['https://forms.hackclub.com/intro-to-react'],
  tags: ['web', 'workshop']
}
```

## Questions?

If you need help or have questions about contributing to the calendar, reach out in the [Athena Award](https://hackclub.slack.com/archives/C06T17NQB0B) Slack channel!
