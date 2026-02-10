# ThinkBoard
A centralized platform for your ideas.

## Description
A streamlined note-taking platform designed to capture your ideas and thoughts. Every note features an automated timestamp and a simple title-content structure, allowing for effortless editing and organization.

## Implementation
- User Rate Limiting: Integrated Upstash Redis to implement scalable rate limiting. Configuration settings, including request thresholds, are managed in ` backend/src/config/upstash.js`.

- Automatic Date Formatting: Centralized date logic within `frontend/src/lib/utils.js`. This utility ensures consistent date rendering across the UI by automatically formatting creation timestamps.

### API
| Method | Endpoint | Description |
|--------|----------|-------------|
| Get    |	/api/notes | Fetch all notes. Returns a list of all notes.|
| Get    | /api/notes/:id| Fetch note by ID. Return a the note which has the ID|
| POST	 |/api/notes| Create a new note.|
| PUT	 |/api/notes/:id|	Update a note. Edit the content or title of an existing note by ID.|
|DELETE	 |/api/notes/:id| Delete a note. Permanently removes a note from the database.|

## Getting Started

### Installation


### Execution program
Run backend: 
` cd backend `
` npm install `
` npm run dev `

Run frontend: 
` cd frontend `
` npm install `
` npm run dev `

