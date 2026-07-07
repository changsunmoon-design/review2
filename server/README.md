# UX Review — Server (SQLite persistence)

A small Node.js + Express backend that persists the project-review app's data in a
local **SQLite** database. Projects and comments are stored in real tables, survive
server restarts, and are exposed through a REST API. All SQL uses **prepared
statements** (bound parameters), so user input can't be injected into queries.

## What it stores

- **projects** — id, name, domain, reviewers, open/resolved counts, uploaded
  **`html_content`** (the build preview), file list, timestamps.
- **comments** — id, project_id (FK, cascades on delete), pin position (x/y), author,
  body text, status (`open`/`resolved`), and threaded `replies` (JSON).

The database file (`data.db`) and both tables are **created automatically** the first
time the server starts — no migration step needed.

## Requirements

- Node.js 18 or newer (includes `--watch`).

## Install

```bash
cd server
npm install
```

`better-sqlite3` compiles a native binding on install; on most systems this works out
of the box. If it fails, ensure you have build tools (`xcode-select --install` on macOS,
`build-essential` + `python3` on Linux, or the "Desktop development with C++" workload on
Windows).

## Run

```bash
npm start        # starts on http://localhost:3000
# or, auto-restart on file changes:
npm run dev
```

Environment overrides (optional):

```bash
PORT=8080 DB_PATH=/tmp/review.db npm start
```

## Serving the UI

Put your built HTML at `server/public/index.html` (a copy is already included). It is
served at `http://localhost:3000/`. The static UI currently keeps state in the browser;
point its data calls at the REST API below to use the shared database.

## REST API

Base URL: `http://localhost:3000`

### Projects
| Method | Path | Body | Description |
|---|---|---|---|
| GET | `/api/projects` | — | List all projects (newest first) |
| GET | `/api/projects/:id` | — | Get one project |
| POST | `/api/projects` | `{ name, domain?, reviewers?, html_content?, files?, openCount?, resolvedCount? }` | Create |
| PUT | `/api/projects/:id` | any of the above fields | Update (partial) |
| DELETE | `/api/projects/:id` | — | Delete (its comments cascade) |

### Comments
| Method | Path | Body | Description |
|---|---|---|---|
| GET | `/api/projects/:id/comments` | — | List a project's comments |
| POST | `/api/projects/:id/comments` | `{ x, y, text, authorId?, status?, replies? }` | Create (auto-assigns `seq`) |
| PUT | `/api/comments/:id` | `{ text?, x?, y?, status?, replies? }` | Update (partial) |
| DELETE | `/api/comments/:id` | — | Delete |

### Examples

```bash
# create a project
curl -X POST http://localhost:3000/api/projects \
  -H 'Content-Type: application/json' \
  -d '{"name":"Marketing Site","domain":"acme.com","html_content":"<!doctype html>..."}'

# add a comment pin
curl -X POST http://localhost:3000/api/projects/<PROJECT_ID>/comments \
  -H 'Content-Type: application/json' \
  -d '{"x":120,"y":260,"text":"Tighten this heading","authorId":0}'

# resolve a comment
curl -X PUT http://localhost:3000/api/comments/<COMMENT_ID> \
  -H 'Content-Type: application/json' \
  -d '{"status":"resolved"}'
```

## Notes

- Data lives in `server/data.db` (plus `-wal`/`-shm` files while running). Delete those
  files to reset. Restarting the server keeps all data.
- Replies are stored as a JSON array on each comment; deleting a project cascades to its
  comments via the `ON DELETE CASCADE` foreign key.
