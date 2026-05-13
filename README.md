# Kanban Task Board

A lightweight and intuitive Kanban-style task management app for organizing work across **To Do**, **In Progress**, and **Done** columns.

# Live Demo

https://module1-task-board-vibe.vercel.app/

## Bootcamp Context

This project was built as part of the **EPAM A!Tech Bootcamp - Module 1 Vibe Coding Challenge**.

It was developed using **React**, **Vite**, and **TypeScript**, with **AI-assisted development using GitHub Copilot** to support faster implementation and iteration.

## Features

- Three-column Kanban board: To Do, In Progress, Done
- Create new tasks with title and description
- Edit existing tasks
- Delete tasks
- Drag-and-drop task movement between columns
- Keyboard shortcut support (`N`) for quick task creation
- Empty-column drop target guidance
- Persistent task data via browser `localStorage`

## Tech Stack

- React 18
- TypeScript
- Vite
- @dnd-kit/core and @dnd-kit/utilities (drag-and-drop)
- HTML/CSS

## Screenshots

> Add project screenshots here.

Suggested placeholders:

- `screenshots/board-overview.png`
- `screenshots/create-task-modal.png`
- `screenshots/drag-and-drop-flow.png`

## Installation

1. Clone the repository.
2. Navigate to the project directory:

```bash
cd Module1/task-board-vibe
```

3. Install dependencies:

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173`).

Optional production build and preview:

```bash
npm run build
npm run preview
```

## Test Cases

Functional test cases and expected outcomes are documented in:

- [TEST_CASES.md](TEST_CASES.md)

## Project Structure

```text
task-board-vibe/
|-- index.html
|-- package.json
|-- TEST_CASES.md
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- src/
|   |-- App.tsx
|   |-- index.css
|   |-- main.tsx
|   |-- types.ts
|   |-- components/
|       |-- Board.tsx
|       |-- Column.tsx
|       |-- TaskCard.tsx
|       |-- TaskModal.tsx
```

## localStorage Notes

- Task data is saved in browser `localStorage` to persist state across page refreshes.
- Data is stored locally in your browser only (not synced to a backend).
- Clearing browser storage/site data will remove saved tasks.

## Author

Created for the **EPAM A!Tech Bootcamp Module 1 Vibe Coding Challenge**.
