// server.js — REST API for the UX Review app, backed by SQLite.
// Every query uses prepared statements (parameter binding) to prevent SQL injection.
const path = require('path');
const crypto = require('crypto');
const express = require('express');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '5mb' })); // html_content can be large
app.use(express.static(path.join(__dirname, 'public')));

const uid = (p) => p + crypto.randomBytes(5).toString('hex');

// ---------- helpers: (de)serialize JSON columns ----------
function rowToProject(r) {
  if (!r) return null;
  return {
    id: r.id,
    name: r.name,
    domain: r.domain,
    updated: r.updated,
    thumb: r.thumb,
    reviewers: JSON.parse(r.reviewers || '[]'),
    openCount: r.open_count,
    resolvedCount: r.resolved_count,
    html_content: r.html_content,
    files: JSON.parse(r.files || '[]'),
    createdAt: r.created_at,
  };
}
function rowToComment(r) {
  if (!r) return null;
  return {
    id: r.id,
    projectId: r.project_id,
    seq: r.seq,
    x: r.x,
    y: r.y,
    authorId: r.author_id,
    text: r.body,
    status: r.status,
    replies: JSON.parse(r.replies || '[]'),
    created: r.created,
  };
}

// ---------- prepared statements ----------
const q = {
  allProjects: db.prepare('SELECT * FROM projects ORDER BY created_at DESC'),
  getProject: db.prepare('SELECT * FROM projects WHERE id = ?'),
  insProject: db.prepare(`INSERT INTO projects
    (id, name, domain, updated, thumb, reviewers, open_count, resolved_count, html_content, files)
    VALUES (@id, @name, @domain, @updated, @thumb, @reviewers, @open_count, @resolved_count, @html_content, @files)`),
  updProject: db.prepare(`UPDATE projects SET
    name=@name, domain=@domain, updated=@updated, thumb=@thumb, reviewers=@reviewers,
    open_count=@open_count, resolved_count=@resolved_count, html_content=@html_content, files=@files
    WHERE id=@id`),
  delProject: db.prepare('DELETE FROM projects WHERE id = ?'),

  commentsFor: db.prepare('SELECT * FROM comments WHERE project_id = ? ORDER BY seq ASC'),
  getComment: db.prepare('SELECT * FROM comments WHERE id = ?'),
  insComment: db.prepare(`INSERT INTO comments
    (id, project_id, seq, x, y, author_id, body, status, replies)
    VALUES (@id, @project_id, @seq, @x, @y, @author_id, @body, @status, @replies)`),
  updComment: db.prepare(`UPDATE comments SET
    seq=@seq, x=@x, y=@y, author_id=@author_id, body=@body, status=@status, replies=@replies
    WHERE id=@id`),
  delComment: db.prepare('DELETE FROM comments WHERE id = ?'),
  maxSeq: db.prepare('SELECT COALESCE(MAX(seq),0) AS m FROM comments WHERE project_id = ?'),
};

// ============ PROJECT ROUTES ============
app.get('/api/projects', (_req, res) => {
  res.json(q.allProjects.all().map(rowToProject));
});

app.get('/api/projects/:id', (req, res) => {
  const p = rowToProject(q.getProject.get(req.params.id));
  if (!p) return res.status(404).json({ error: 'Project not found' });
  res.json(p);
});

app.post('/api/projects', (req, res) => {
  const b = req.body || {};
  if (!b.name || !String(b.name).trim()) return res.status(400).json({ error: 'name is required' });
  const row = {
    id: b.id || uid('p'),
    name: String(b.name).trim(),
    domain: b.domain || '',
    updated: b.updated || 'just now',
    thumb: b.thumb || null,
    reviewers: JSON.stringify(b.reviewers || []),
    open_count: b.openCount || 0,
    resolved_count: b.resolvedCount || 0,
    html_content: b.html_content || null,
    files: JSON.stringify(b.files || []),
  };
  q.insProject.run(row);
  res.status(201).json(rowToProject(q.getProject.get(row.id)));
});

app.put('/api/projects/:id', (req, res) => {
  const existing = q.getProject.get(req.params.id);
  if (!existing) return res.status(404).json({ error: 'Project not found' });
  const b = req.body || {};
  const row = {
    id: req.params.id,
    name: b.name != null ? String(b.name).trim() : existing.name,
    domain: b.domain != null ? b.domain : existing.domain,
    updated: b.updated != null ? b.updated : existing.updated,
    thumb: b.thumb != null ? b.thumb : existing.thumb,
    reviewers: JSON.stringify(b.reviewers != null ? b.reviewers : JSON.parse(existing.reviewers || '[]')),
    open_count: b.openCount != null ? b.openCount : existing.open_count,
    resolved_count: b.resolvedCount != null ? b.resolvedCount : existing.resolved_count,
    html_content: b.html_content != null ? b.html_content : existing.html_content,
    files: JSON.stringify(b.files != null ? b.files : JSON.parse(existing.files || '[]')),
  };
  q.updProject.run(row);
  res.json(rowToProject(q.getProject.get(req.params.id)));
});

app.delete('/api/projects/:id', (req, res) => {
  const info = q.delProject.run(req.params.id); // comments cascade-delete
  if (!info.changes) return res.status(404).json({ error: 'Project not found' });
  res.json({ ok: true });
});

// ============ COMMENT ROUTES ============
app.get('/api/projects/:id/comments', (req, res) => {
  res.json(q.commentsFor.all(req.params.id).map(rowToComment));
});

app.post('/api/projects/:id/comments', (req, res) => {
  const project = q.getProject.get(req.params.id);
  if (!project) return res.status(404).json({ error: 'Project not found' });
  const b = req.body || {};
  const seq = b.seq != null ? b.seq : q.maxSeq.get(req.params.id).m + 1;
  const row = {
    id: b.id || uid('c'),
    project_id: req.params.id,
    seq,
    x: b.x || 0,
    y: b.y || 0,
    author_id: b.authorId != null ? b.authorId : 0,
    body: b.text || '',
    status: b.status || 'open',
    replies: JSON.stringify(b.replies || []),
  };
  q.insComment.run(row);
  res.status(201).json(rowToComment(q.getComment.get(row.id)));
});

app.put('/api/comments/:id', (req, res) => {
  const existing = q.getComment.get(req.params.id);
  if (!existing) return res.status(404).json({ error: 'Comment not found' });
  const b = req.body || {};
  const row = {
    id: req.params.id,
    seq: b.seq != null ? b.seq : existing.seq,
    x: b.x != null ? b.x : existing.x,
    y: b.y != null ? b.y : existing.y,
    author_id: b.authorId != null ? b.authorId : existing.author_id,
    body: b.text != null ? b.text : existing.body,
    status: b.status != null ? b.status : existing.status,
    replies: JSON.stringify(b.replies != null ? b.replies : JSON.parse(existing.replies || '[]')),
  };
  q.updComment.run(row);
  res.json(rowToComment(q.getComment.get(req.params.id)));
});

app.delete('/api/comments/:id', (req, res) => {
  const info = q.delComment.run(req.params.id);
  if (!info.changes) return res.status(404).json({ error: 'Comment not found' });
  res.json({ ok: true });
});

// SPA / static fallback
app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => {
  console.log(`UX Review server running → http://localhost:${PORT}`);
});
