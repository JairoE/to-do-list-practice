# Todo List App Scaffold

This is a minimal full-stack project scaffold for a Todo List application using React, Node.js, Express, Sequelize, and PostgreSQL.

## Project Structure

- `client/`: React frontend (Vite + TypeScript)
- `server/`: Node.js backend (Express + Sequelize + TypeScript)

## Prerequisites

- Node.js (v16+)
- PostgreSQL installed and running
- A PostgreSQL database created (e.g., `todo_db`)

## Setup Instructions

### Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `env.example` to `.env`:
     ```bash
     cp env.example .env
     ```
   - Update `.env` with your PostgreSQL credentials (user, password, db name).

4. Start the development server:
   ```bash
   npm run dev
   ```
   The server will start on port 3000 (or as configured in `.env`). It will automatically attempt to sync the database schema.

### Frontend

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or similar).

## Implementation Status

This is a scaffold. Key logic is marked with `// TODO` comments.

- **Backend**: API routes are defined in `server/src/routes/` but return 501 Not Implemented. Models are defined in `server/src/models/`.
- **Frontend**: The UI is basic (`client/src/App.tsx`) with static data. The API helper (`client/src/api/client.ts`) contains stubs for backend calls.

## Next Steps

1. Implement user creation and retrieval in `server/src/routes/users.ts`.
2. Implement todo creation, retrieval, and updates in `server/src/routes/todos.ts`.
3. Wire up the Frontend API client in `client/src/api/client.ts` to make actual network requests.
4. Update `client/src/App.tsx` to use the API client for fetching and creating todos.

