// db.js — SQLite connection + schema bootstrap.
// Creates the database file and tables automatically on first run.
const path = require('path');
const Database = require('better-sqlite3');

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data.db');
const db = new Database(DB_PATH);

// Recommended pragmas for a small web app.
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// --- Schema: created automatically at startup if missing ---
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id             TEXT PRIMARY KEY,
    name           TEXT NOT NULL,
    domain         TEXT,
    updated        TEXT,
    thumb          TEXT,
    reviewers      TEXT    DEFAULT '[]',   -- JSON array of reviewer ids
    open_count     INTEGER DEFAULT 0,
    resolved_count INTEGER DEFAULT 0,
    html_content   TEXT,                   -- the project's index.html (composed) build
    files          TEXT    DEFAULT '[]',   -- JSON array of file paths
    created_at     TEXT    DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS comments (
    id          TEXT PRIMARY KEY,
    project_id  TEXT NOT NULL,
    seq         INTEGER,
    x           REAL,
    y           REAL,
    author_id   INTEGER,
    body        TEXT,
    status      TEXT DEFAULT 'open',       -- 'open' | 'resolved'
    replies     TEXT DEFAULT '[]',         -- JSON array of {id, authorId, text, created}
    created     TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
  );

  CREATE INDEX IF NOT EXISTS idx_comments_project ON comments(project_id);
`);

module.exports = db;
