<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="stylesheet" href="_ds/individual-contacts-fb83c327-3bd9-4a7e-9e03-ae72680c9760/tokens/colors.css">
<link rel="stylesheet" href="_ds/individual-contacts-fb83c327-3bd9-4a7e-9e03-ae72680c9760/tokens/typography.css">
<link rel="stylesheet" href="_ds/individual-contacts-fb83c327-3bd9-4a7e-9e03-ae72680c9760/tokens/spacing.css">
<link rel="stylesheet" href="_ds/individual-contacts-fb83c327-3bd9-4a7e-9e03-ae72680c9760/tokens/effects.css">
<link rel="stylesheet" href="_ds/individual-contacts-fb83c327-3bd9-4a7e-9e03-ae72680c9760/styles.css">
<script src="_ds/individual-contacts-fb83c327-3bd9-4a7e-9e03-ae72680c9760/_ds_bundle.js"></script>
<style>
  * { box-sizing: border-box; }
  html, body { margin: 0; height: 100%; }
  body { font-family: var(--font-body); background: var(--bg-app); color: var(--text-body); -webkit-font-smoothing: antialiased; font-size: var(--text-md); }
  textarea, input, button, select { font-family: inherit; }
  @keyframes ovfade { from { opacity: 0; } }
  @keyframes popin { from { opacity: 0; transform: translateY(10px) scale(.98); } }
  @keyframes slideup { from { opacity: 0; transform: translateY(14px); } }
  @keyframes pindrop { from { opacity: 0; transform: translate(-50%,-72%) scale(.4); } to { opacity: 1; transform: translate(-50%,-50%) scale(1); } }
  @keyframes spin { to { transform: rotate(360deg); } }
</style>
</helmet>

<div style="height:100vh; overflow:hidden;">

  <template id="__bundler_thumbnail">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="16" fill="#0D418C"/><g fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M70 55a5 5 0 0 1-5 5H40l-10 10V38a5 5 0 0 1 5-5h30a5 5 0 0 1 5 5z"/><path d="m42 46 5 5 10-10"/></g></svg>
  </template>

  <!-- ============ PROJECTS DASHBOARD ============ -->
  <sc-if value="{{ isList }}" hint-placeholder-val="{{ true }}">
  <div style="display:grid; grid-template-columns:248px 1fr; grid-template-rows:minmax(0,1fr); height:100vh; overflow:hidden;">
    <aside style="background:var(--surface-card); border-right:var(--border-hairline); display:flex; flex-direction:column; padding:20px 14px; gap:3px;">
      <div style="display:flex; align-items:center; gap:10px; padding:6px 10px 20px;">
        <div style="width:30px; height:30px; border-radius:9px; background:#0D418C; display:grid; place-items:center; color:#fff;">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="m9 10 2 2 4-4"/></svg>
        </div>
        <span style="font-family:var(--font-display); font-weight:var(--weight-bold); font-size:17px; color:var(--text-strong); letter-spacing:-.01em;">K Team</span>
      </div>
      <div style="display:flex; align-items:center; gap:11px; padding:9px 10px; border-radius:var(--radius-md); background:#0D418C; color:#fff; font-weight:var(--weight-semibold); font-size:var(--text-sm); cursor:pointer;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>Review Projects</div>
      <div style="margin-top:auto; display:flex; align-items:center; gap:10px; padding:10px; border-top:var(--border-hairline);">
        <div style="width:32px; height:32px; border-radius:var(--radius-pill); background:#2f6fed; color:#fff; display:grid; place-items:center; font-weight:var(--weight-semibold); font-size:var(--text-sm); flex:0 0 auto;">{{ accountInitials }}</div>
        {{ accountNameEl }}
      </div>
    </aside>

    <div style="display:flex; flex-direction:column; min-width:0; min-height:0; overflow:hidden;">
      <div style="flex:0 0 auto; background:var(--surface-card); border-bottom:var(--border-hairline); padding:22px 32px 20px; display:flex; align-items:flex-start; justify-content:space-between; gap:16px; flex-wrap:wrap;">
        <div>
          <h1 style="margin:0; font-family:var(--font-display); font-size:var(--text-h1); color:var(--text-strong); letter-spacing:var(--tracking-tight); line-height:1.1; font-weight:var(--weight-medium);">Review Projects</h1>
          <div style="display:flex; align-items:center; gap:12px; margin-top:6px;">
            <p style="margin:0; color:var(--text-muted); font-size:var(--text-sm);">{{ projectCountLabel }}</p>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:10px;">
          <button onClick="{{ openNew }}" style="display:inline-flex; align-items:center; gap:8px; height:var(--control-h-md); padding:0 16px; border-radius:var(--radius-md); font-size:var(--text-sm); font-weight:var(--weight-semibold); cursor:pointer; border:1px solid transparent; background:#0D418C; color:#fff; box-shadow:var(--shadow-xs);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>New Project</button>
          <div style="display:flex; align-items:center; gap:10px;">
            <button onClick="{{ selBtnClick }}" disabled="{{ selectMode }}" style="display:inline-flex; align-items:center; gap:8px; height:var(--control-h-md); padding:0 15px; border-radius:var(--radius-md); font-size:var(--text-sm); font-weight:var(--weight-semibold); cursor:{{ selBtnCursor }}; pointer-events:{{ selBtnPE }}; border:1px solid {{ selBtnBorder }}; background:{{ selBtnBg }}; color:{{ selBtnColor }};"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>{{ selBtnLabel }}</button>
            <div style="position:relative; width:300px;">
              <svg style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--text-faint);" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input value="{{ search }}" onInput="{{ onSearch }}" placeholder="Search projects…" style="width:100%; height:var(--control-h-md); border:1px solid var(--border-default); border-radius:var(--radius-md); background:var(--surface-card); padding:0 12px 0 36px; font-size:var(--text-sm); color:var(--text-strong);" />
            </div>
          </div>
        </div>
      </div>

      <sc-if value="{{ selectMode }}">
        <div style="flex:0 0 auto; display:flex; align-items:center; gap:14px; padding:12px 32px; background:var(--brand-50, #eef4ff); border-bottom:1px solid rgba(13,65,140,.18);">
          <button onClick="{{ toggleSelectAll }}" style="display:inline-flex; align-items:center; gap:8px; border:none; background:transparent; cursor:pointer; font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong);"><span style="width:18px; height:18px; border-radius:5px; border:2px solid {{ allBoxBorder }}; background:{{ allBoxBg }}; display:grid; place-items:center; color:#fff;">{{ allBoxTick }}</span>{{ selAllLabel }}</button>
          <span style="font-size:var(--text-sm); color:var(--text-muted);">{{ selCountLabel }}</span>
          <div style="flex:1;"></div>
          <button onClick="{{ bulkDelete }}" disabled="{{ noSelection }}" style="display:inline-flex; align-items:center; gap:7px; height:36px; padding:0 15px; border-radius:var(--radius-md); font-size:var(--text-sm); font-weight:var(--weight-semibold); cursor:{{ bulkCursor }}; border:1px solid transparent; background:{{ bulkBg }}; color:#fff; opacity:{{ bulkOpacity }};"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>Delete{{ bulkCountSuffix }}</button>
          <button onClick="{{ toggleSelectMode }}" style="height:36px; padding:0 14px; border-radius:var(--radius-md); font-size:var(--text-sm); font-weight:var(--weight-semibold); cursor:pointer; background:var(--surface-card); color:var(--text-strong); border:1px solid var(--border-default);">Cancel</button>
        </div>
      </sc-if>

      <div onScroll="{{ onListScroll }}" style="flex:1; overflow:auto; padding:28px 32px;">
        <sc-if value="{{ hasProjects }}" hint-placeholder-val="{{ true }}">
        <div style="display:flex; flex-direction:column; max-width:820px;">
          <sc-for list="{{ projects }}" as="p" hint-placeholder-count="4">
            <div style="display:flex; gap:16px; align-items:stretch;">
              <div style="flex:0 0 88px; text-align:right; padding-top:20px; color:var(--text-faint); font-size:var(--text-xs); font-weight:var(--weight-medium);">{{ p.updated }}</div>
              <div style="position:relative; flex:0 0 20px; display:flex; justify-content:center;">
                <div style="position:absolute; top:26px; bottom:0; width:2px; background:var(--border-subtle); display:{{ p.connectorDisplay }};"></div>
                <div style="position:relative; margin-top:20px; width:13px; height:13px; border-radius:50%; background:{{ p.nodeColor }}; border:3px solid var(--surface-card); box-shadow:0 0 0 2px var(--border-subtle); z-index:1;"></div>
              </div>
              <div onClick="{{ p.onOpen }}" style="flex:1; min-width:0; margin-bottom:16px; background:var(--surface-card); border:1px solid {{ p.cardBorder }}; border-radius:var(--radius-lg); box-shadow:{{ p.cardShadow }}; cursor:pointer; transition:box-shadow var(--dur-fast), transform var(--dur-fast);" style-hover="box-shadow:var(--shadow-lg); transform:translateY(-1px);">
                <div style="padding:16px 16px 15px;">
                  <div style="display:flex; align-items:flex-start; gap:11px;">
                    <sc-if value="{{ selectMode }}">
                      <span style="flex:0 0 auto; margin-top:1px; width:22px; height:22px; border-radius:6px; border:2px solid {{ p.boxBorder2 }}; background:{{ p.boxBg2 }}; display:grid; place-items:center; color:#fff;">{{ p.boxTick }}</span>
                    </sc-if>
                    <div style="min-width:0; flex:1;">
                      <div style="font-family:var(--font-display); font-weight:var(--weight-medium); font-size:16px; color:var(--text-strong); overflow-wrap:anywhere; text-wrap:pretty;">{{ p.name }}</div>
                      <div style="display:flex; align-items:center; gap:6px; margin-top:4px; color:var(--text-muted); font-size:var(--text-xs); min-width:0;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex:0 0 auto;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg><span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ p.domain }}</span></div>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px; flex:0 0 auto;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span style="display:inline-flex; align-items:center; gap:6px; height:24px; padding:0 10px; border-radius:var(--radius-pill); background:var(--warning-50); color:var(--warning-700); font-size:var(--text-xs); font-weight:var(--weight-semibold);"><span style="width:6px; height:6px; border-radius:50%; background:currentColor;"></span>{{ p.openCount }} Open</span>
                        <span style="display:inline-flex; align-items:center; gap:6px; height:24px; padding:0 10px; border-radius:var(--radius-pill); background:var(--success-50); color:var(--success-700); font-size:var(--text-xs); font-weight:var(--weight-semibold);"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>{{ p.resolvedCount }}</span>
                      </div>
                      <div style="display:flex;">
                        <sc-for list="{{ p.reviewers }}" as="rv" hint-placeholder-count="2">
                          <div title="{{ rv.name }}" style="width:26px; height:26px; border-radius:var(--radius-pill); background:{{ rv.color }}; color:#fff; display:grid; place-items:center; font-size:10px; font-weight:var(--weight-bold); margin-left:-7px; border:2px solid var(--surface-card);">{{ rv.initials }}</div>
                        </sc-for>
                      </div>
                      <div style="position:relative;">
                        <button onClick="{{ p.onMenu }}" style="width:30px; height:30px; border-radius:var(--radius-sm); border:none; background:transparent; cursor:pointer; color:var(--text-faint); display:grid; place-items:center;" style-hover="background:var(--neutral-100); color:var(--text-strong);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg></button>
                        <sc-if value="{{ p.menuOpen }}">
                          <div style="position:absolute; right:0; top:34px; background:var(--surface-card); border:var(--border-hairline); border-radius:var(--radius-md); box-shadow:var(--shadow-lg); padding:6px; min-width:150px; z-index:30;">
                            <button onClick="{{ p.onEdit }}" style="display:flex; align-items:center; gap:10px; width:100%; border:none; background:transparent; padding:9px 10px; border-radius:var(--radius-sm); font:var(--weight-medium) var(--text-sm) var(--font-body); color:var(--text-body); cursor:pointer; text-align:left;" style-hover="background:var(--neutral-100);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>Rename</button>
                            <button onClick="{{ p.onDelete }}" style="display:flex; align-items:center; gap:10px; width:100%; border:none; background:transparent; padding:9px 10px; border-radius:var(--radius-sm); font:var(--weight-medium) var(--text-sm) var(--font-body); color:var(--danger-700); cursor:pointer; text-align:left;" style-hover="background:var(--danger-50);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>Delete</button>
                          </div>
                        </sc-if>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </sc-for>
        </div>
        <sc-if value="{{ showLoadingMore }}">
          <div style="display:flex; align-items:center; justify-content:center; gap:10px; padding:18px; color:var(--text-muted); font-size:var(--text-sm); max-width:820px;">
            <span style="width:16px; height:16px; border:2px solid var(--border-strong); border-top-color:#0D418C; border-radius:50%; display:inline-block; animation:spin .7s linear infinite;"></span>Loading more…
          </div>
        </sc-if>
        <sc-if value="{{ hasMoreProjects }}">
          <div style="text-align:center; padding:6px 0 10px; color:var(--text-faint); font-size:var(--text-xs); max-width:820px;">{{ loadedRangeLabel }} · scroll to load more</div>
        </sc-if>
        </sc-if>
        <sc-if value="{{ noProjects }}">
          <div style="padding:80px 20px; text-align:center; color:var(--text-muted);">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:12px;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <h3 style="margin:0 0 4px; color:var(--text-strong); font-family:var(--font-display);">No projects found</h3>
            <p style="margin:0;">Try a different search, or create a new project.</p>
          </div>
        </sc-if>
      </div>
    </div>
  </div>
  </sc-if>

  <!-- ============ REVIEW WORKSPACE ============ -->
  <sc-if value="{{ isReview }}">
  <div style="display:grid; grid-template-columns:{{ reviewGridCols }}; grid-template-rows:minmax(0,1fr); height:100vh; overflow:hidden; transition:grid-template-columns var(--dur-med, .2s) var(--ease-out, ease);">

    <!-- Left rail: files + reviewers -->
    <aside style="background:var(--surface-card); border-right:var(--border-hairline); display:flex; flex-direction:column; min-width:0; min-height:0;">
      <div style="padding:16px 16px 14px; border-bottom:var(--border-hairline);">
        <button onClick="{{ backToList }}" style="display:inline-flex; align-items:center; gap:6px; border:none; background:transparent; color:var(--text-muted); font-size:var(--text-sm); font-weight:var(--weight-medium); cursor:pointer; padding:2px 0; margin-bottom:12px;" style-hover="color:var(--text-strong);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>All projects</button>
        <div style="font-family:var(--font-display); font-weight:var(--weight-bold); font-size:16px; color:var(--text-strong); line-height:1.2;">{{ activeProjectName }}</div>
        <div style="margin-top:3px; color:var(--text-faint); font-size:var(--text-xs);">{{ activeProjectDomain }}</div>
      </div>
      <div style="flex:1; overflow:auto; padding:14px 12px;">
        <div style="font:var(--weight-semibold) var(--text-2xs)/1 var(--font-body); letter-spacing:var(--tracking-wide); text-transform:uppercase; color:var(--text-faint); padding:4px 8px 10px;">Files</div>
        {{ filesEl }}
        <div style="font:var(--weight-semibold) var(--text-2xs)/1 var(--font-body); letter-spacing:var(--tracking-wide); text-transform:uppercase; color:var(--text-faint); padding:22px 8px 10px;">Reviewers</div>
        {{ reviewersEl }}
      </div>
    </aside>

    <!-- Center: preview canvas -->
    <section style="position:relative; display:flex; flex-direction:column; min-width:0; min-height:0; background:var(--bg-app);">
      <button onClick="{{ togglePanel }}" title="{{ panelToggleTitle }}" style="position:absolute; top:80px; right:-1px; z-index:20; width:24px; height:52px; display:grid; place-items:center; border:1px solid var(--border-default); border-right:none; border-radius:10px 0 0 10px; background:var(--surface-card); color:var(--text-muted); cursor:pointer; box-shadow:-2px 0 8px rgba(22,35,58,.06);" style-hover="color:var(--text-strong); background:var(--neutral-50);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="{{ panelToggleD }}"/></svg></button>
      <div style="flex:0 0 auto; height:var(--topbar-h); background:var(--surface-card); border-bottom:var(--border-hairline); display:flex; align-items:center; gap:12px; padding:0 20px;">
        <span style="font-size:var(--text-sm); color:var(--text-muted); display:inline-flex; align-items:center; gap:8px;">{{ activeProjectName }} <b style="color:var(--text-strong);">›</b> {{ htmlDropdownEl }}</span>
        <div style="flex:1;"></div>
        <button onClick="{{ toggleCommentMode }}" title="Drop a comment pin" style="display:inline-flex; align-items:center; gap:8px; height:38px; padding:0 15px; border-radius:var(--radius-md); font-size:var(--text-sm); font-weight:var(--weight-semibold); cursor:pointer; border:1px solid {{ cmBorder }}; background:{{ cmBg }}; color:{{ cmColor }}; transition:all var(--dur-fast);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>{{ cmLabel }}
        </button>
      </div>
      <div ref="{{ previewViewportRef }}" style="flex:1; overflow:auto; padding:12px; display:flex; justify-content:flex-start; align-items:flex-start;">
        <div style="position:relative; width:1000px; zoom:{{ previewZoom }}; flex:0 0 auto; background:#fff; border-radius:12px; box-shadow:0 10px 40px rgba(22,35,58,.14); overflow:hidden;">
          {{ previewEl }}
          <!-- click-capture overlay -->
          <div onClick="{{ canvasClick }}" style="position:absolute; inset:0; z-index:5; cursor:{{ overlayCursor }}; pointer-events:{{ overlayPE }};"></div>
          <!-- pins -->
          {{ pinsEl }}
        </div>
      </div>
    </section>

    <!-- Right: comments / activity panel -->
    <aside style="background:var(--surface-card); border-left:var(--border-hairline); display:flex; flex-direction:column; min-width:0; min-height:0;">
      <div style="flex:0 0 auto; padding:16px 18px 0; border-bottom:var(--border-hairline);">
        <div style="display:flex; gap:4px; align-items:center;">
          <button onClick="{{ setTabComments }}" style="position:relative; padding:6px 4px 14px; border:none; background:none; cursor:pointer; font-size:var(--text-sm); font-weight:var(--weight-semibold); color:{{ tabCommentsColor }}; border-bottom:2px solid {{ tabCommentsBorder }};">Comments <span style="display:inline-flex; align-items:center; justify-content:center; min-width:18px; height:18px; padding:0 5px; border-radius:9px; background:var(--neutral-100); color:var(--text-muted); font-size:11px; font-weight:var(--weight-bold); margin-left:4px;">{{ totalCount }}</span></button>
          <div style="flex:1;"></div>
        </div>
      </div>

      <sc-if value="{{ tabComments }}" hint-placeholder-val="{{ true }}">
        <div style="flex:0 0 auto; display:flex; align-items:center; gap:7px; padding:12px 18px; border-bottom:var(--border-hairline);">
          <button onClick="{{ setFilterAll }}" style="height:28px; padding:0 12px; border-radius:var(--radius-pill); border:1px solid {{ fAllBorder }}; background:{{ fAllBg }}; color:{{ fAllColor }}; font-size:var(--text-xs); font-weight:var(--weight-semibold); cursor:pointer;">All {{ totalCount }}</button>
          <button onClick="{{ setFilterOpen }}" style="height:28px; padding:0 12px; border-radius:var(--radius-pill); border:1px solid {{ fOpenBorder }}; background:{{ fOpenBg }}; color:{{ fOpenColor }}; font-size:var(--text-xs); font-weight:var(--weight-semibold); cursor:pointer;">Open {{ openCount }}</button>
          <button onClick="{{ setFilterResolved }}" style="height:28px; padding:0 12px; border-radius:var(--radius-pill); border:1px solid {{ fResBorder }}; background:{{ fResBg }}; color:{{ fResColor }}; font-size:var(--text-xs); font-weight:var(--weight-semibold); cursor:pointer;">Resolved {{ resolvedCount }}</button>
        </div>
        <div style="flex:1; overflow:auto; padding:14px 16px 24px;">
          {{ commentCardsEl }}
        </div>
      </sc-if>
    </aside>
  </div>
  </sc-if>

  <!-- ============ PROJECT MODAL ============ -->
  <sc-if value="{{ modalOpen }}">
    <div onClick="{{ closeModal }}" style="position:fixed; inset:0; background:rgba(22,35,58,.45); backdrop-filter:blur(2px); display:grid; place-items:center; z-index:100; padding:24px; animation:ovfade var(--dur-med) var(--ease-out);">
      <div onClick="{{ stop }}" style="background:var(--surface-card); border-radius:var(--radius-xl); box-shadow:var(--shadow-xl); width:100%; max-width:480px; overflow:hidden; animation:popin var(--dur-slow) var(--ease-out);">
        <div style="display:flex; align-items:flex-start; justify-content:space-between; padding:22px 24px 4px;">
          <div>
            <h2 style="margin:0; font-family:var(--font-display); font-size:var(--text-h2); font-weight:var(--weight-bold); color:var(--text-strong); letter-spacing:var(--tracking-snug);">{{ modalTitle }}</h2>
            <p style="margin:5px 0 0; font-size:var(--text-sm); color:var(--text-muted);">{{ modalSub }}</p>
          </div>
          <button onClick="{{ closeModal }}" style="border:none; background:transparent; cursor:pointer; color:var(--text-faint); padding:4px; border-radius:var(--radius-sm);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
        </div>
        <div style="padding:18px 24px 4px;">
          <div style="margin-bottom:16px;">
            <label style="display:block; font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); margin-bottom:7px;">Project name <span style="color:var(--danger-500);">*</span></label>
            <input value="{{ modalName }}" onInput="{{ onModalName }}" placeholder="e.g. Marketing Site Redesign" style="width:100%; height:var(--control-h-md); border:1px solid var(--border-default); border-radius:var(--radius-md); padding:0 12px; font-size:var(--text-sm); color:var(--text-strong); background:var(--surface-card);" />
          </div>
          <sc-if value="{{ modalIsNew }}">
            <label style="display:block; font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); margin-bottom:7px;">Source files</label>
            {{ dropzoneEl }}
            {{ modalFilesEl }}
          </sc-if>
        </div>
        <div style="display:flex; justify-content:flex-end; gap:10px; padding:20px 24px 24px;">
          <button onClick="{{ closeModal }}" style="height:var(--control-h-md); padding:0 16px; border-radius:var(--radius-md); font-size:var(--text-sm); font-weight:var(--weight-semibold); cursor:pointer; background:var(--surface-card); color:var(--text-strong); border:1px solid var(--border-default);">Cancel</button>
          <button onClick="{{ saveProject }}" style="height:var(--control-h-md); padding:0 18px; border-radius:var(--radius-md); font-size:var(--text-sm); font-weight:var(--weight-semibold); cursor:pointer; background:#0D418C; color:#fff; border:1px solid transparent; box-shadow:var(--shadow-xs);">{{ modalCta }}</button>
        </div>
      </div>
    </div>
  </sc-if>

  <!-- ============ DELETE CONFIRM ============ -->
  <sc-if value="{{ confirmOpen }}">
    <div onClick="{{ cancelConfirm }}" style="position:fixed; inset:0; background:rgba(22,35,58,.45); backdrop-filter:blur(2px); display:grid; place-items:center; z-index:100; padding:24px; animation:ovfade var(--dur-med) var(--ease-out);">
      <div onClick="{{ stop }}" style="background:var(--surface-card); border-radius:var(--radius-xl); box-shadow:var(--shadow-xl); width:100%; max-width:420px; overflow:hidden; animation:popin var(--dur-slow) var(--ease-out);">
        <div style="display:flex; align-items:flex-start; gap:14px; padding:24px 24px 0;">
          <div style="width:44px; height:44px; border-radius:var(--radius-pill); background:var(--danger-50); color:var(--danger-500); display:grid; place-items:center; flex:0 0 auto;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></div>
          <div style="flex:1;">
            <h2 style="margin:0; font-family:var(--font-display); font-size:var(--text-h3); font-weight:var(--weight-bold); color:var(--text-strong);">{{ confirmTitle }}</h2>
            <p style="margin:5px 0 0; font-size:var(--text-sm); color:var(--text-muted);">{{ confirmBody }}</p>
          </div>
        </div>
        <div style="display:flex; justify-content:flex-end; gap:10px; padding:22px 24px 24px;">
          <button onClick="{{ cancelConfirm }}" style="height:var(--control-h-md); padding:0 16px; border-radius:var(--radius-md); font-size:var(--text-sm); font-weight:var(--weight-semibold); cursor:pointer; background:var(--surface-card); color:var(--text-strong); border:1px solid var(--border-default);">Cancel</button>
          <button onClick="{{ doDeleteProject }}" style="height:var(--control-h-md); padding:0 18px; border-radius:var(--radius-md); font-size:var(--text-sm); font-weight:var(--weight-semibold); cursor:pointer; background:var(--danger-500); color:#fff; border:1px solid transparent;">Delete</button>
        </div>
      </div>
    </div>
  </sc-if>

  <!-- ============ TOAST ============ -->
  <sc-if value="{{ toastShow }}">
    <div style="position:fixed; bottom:24px; left:50%; transform:translateX(-50%); z-index:200; display:flex; align-items:center; gap:11px; background:var(--ink-900); color:#fff; padding:12px 18px; border-radius:var(--radius-md); box-shadow:var(--shadow-lg); font-size:var(--text-sm); font-weight:var(--weight-medium); animation:slideup var(--dur-slow) var(--ease-out);">
      <span style="color:{{ toastIconColor }}; display:inline-flex;">{{ toastIcon }}</span>{{ toastMsg }}
    </div>
  </sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;pinColor&quot;:{&quot;editor&quot;:&quot;color&quot;,&quot;default&quot;:&quot;#0D418C&quot;,&quot;tsType&quot;:&quot;string&quot;,&quot;section&quot;:&quot;Review&quot;},&quot;dimResolved&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:true,&quot;tsType&quot;:&quot;boolean&quot;,&quot;section&quot;:&quot;Review&quot;},&quot;startView&quot;:{&quot;editor&quot;:&quot;enum&quot;,&quot;options&quot;:[&quot;list&quot;,&quot;review&quot;],&quot;default&quot;:&quot;list&quot;,&quot;tsType&quot;:&quot;string&quot;,&quot;section&quot;:&quot;Review&quot;}}">
class Component extends DCLogic {
  constructor(props) {
    super(props);
    const REV = [
      { id: 4, name: 'Mina Park', initials: 'MP', color: '#8a4fdb', role: 'UX Reviewer', online: true },
    ];
    this.reviewers = REV;
    this.currentUser = 0;
    this.state = {
      view: props.startView === 'review' ? 'review' : 'list',
      search: '',
      projects: this.buildProjects(),
      visibleCount: 30,
      loadingMore: false,
      projMenu: null,
      selectMode: false,
      selected: [],
      activeProject: 'p1',
      filter: 'all',
      tab: 'comments',
      panelOpen: true,
      previewScale: 0.34,
      activeHtml: null,
      commentMode: false,
      selectedId: null,
      editingId: null,
      editingText: '',
      replyFor: null,
      replyText: '',
      editReplyKey: null,
      editReplyText: '',
      cardMenu: null,
      assigneeMenu: null,
      revNames: {},
      editRevId: null,
      editRevText: '',
      accountName: 'US Team',
      editAccount: false,
      accountDraft: '',
      activeFile: 'index.html',
      modal: null,       // {mode, id, name, files}
      confirm: null,     // {id, name}
      toast: null,       // {msg, kind}
      comments: [
        { id: 'c1', pid: 'p1', seq: 1, x: 52, y: 34, authorId: 2, text: "The logo reads a little light against the nav — can we bump it to 600 weight and 24px?", status: 'open', assigneeId: 1, created: '2h ago', replies: [{ id: 'r1', authorId: 1, text: "Agreed, I'll size it up in this pass.", created: '1h ago' }] },
        { id: 'c2', pid: 'p1', seq: 2, x: 120, y: 250, authorId: 3, text: "Headline line-height feels tight where it wraps. Try 1.06 → 1.15.", status: 'open', assigneeId: null, created: '2h ago', replies: [] },
        { id: 'c3', pid: 'p1', seq: 3, x: 168, y: 440, authorId: 4, text: "'Start free' and the nav 'Get started' compete. Let's demote one to secondary.", status: 'resolved', assigneeId: 2, created: 'Yesterday', replies: [{ id: 'r3', authorId: 2, text: "Made the nav button secondary — fixed.", created: '3h ago' }] },
        { id: 'c4', pid: 'p1', seq: 4, x: 118, y: 792, authorId: 1, text: "Feature-card icons aren't optically centered. Nudge them down ~2px.", status: 'open', assigneeId: 3, created: 'Yesterday', replies: [] },
      ],
      activity: [
        { id: 'a1', pid: 'p1', who: 4, action: 'resolved', target: 'pin 3', time: '3h ago' },
        { id: 'a2', pid: 'p1', who: 2, action: 'replied to', target: 'pin 3', time: '3h ago' },
        { id: 'a3', pid: 'p1', who: 1, action: 'commented on', target: 'pin 4', time: 'Yesterday' },
        { id: 'a4', pid: 'p1', who: 3, action: 'commented on', target: 'pin 2', time: '2h ago' },
        { id: 'a5', pid: 'p1', who: 2, action: 'commented on', target: 'pin 1', time: '2h ago' },
      ],
    };
    this._docClick = this._docClick.bind(this);
    // restore saved comments/activity so writes survive a reload
    try {
      const raw = localStorage.getItem('uxreview_comments_v1');
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved && Array.isArray(saved.comments)) this.state.comments = saved.comments.map(c => c.pid ? c : { ...c, pid: 'p1' });
        if (saved && Array.isArray(saved.activity)) this.state.activity = saved.activity.map(a => a.pid ? a : { ...a, pid: 'p1' });
      }
    } catch (e) { /* ignore corrupt storage */ }
    // restore saved projects (incl. uploaded html_content) so they survive a reload
    try {
      const rawP = localStorage.getItem('uxreview_projects_v2');
      if (rawP) {
        const savedP = JSON.parse(rawP);
        if (Array.isArray(savedP) && savedP.length) this.state.projects = savedP;
      }
    } catch (e) { /* ignore corrupt storage */ }
  }
  persistProjects() {
    try { localStorage.setItem('uxreview_projects_v2', JSON.stringify(this.state.projects)); } catch (e) { /* quota / disabled */ }
  }
  persistComments() {
    try { localStorage.setItem('uxreview_comments_v1', JSON.stringify({ comments: this.state.comments, activity: this.state.activity })); } catch (e) { /* quota / disabled */ }
  }

  sampleSite(brand, pageLabel) {
    const name = brand || 'Halcyon';
    const tag = (pageLabel || 'HOME').toUpperCase();
    return '<!doctype html><html><head><meta charset="utf-8"><style>*{margin:0;box-sizing:border-box;font-family:system-ui,sans-serif}body{color:#1a1526}a,.btn{cursor:default}.nav{height:70px;display:flex;align-items:center;gap:26px;padding:0 34px;border-bottom:1px solid #efeef4}.brand{display:flex;align-items:center;gap:9px;font-weight:800;font-size:19px;color:#4f46e5;letter-spacing:-.02em}.dot{width:22px;height:22px;border-radius:7px;background:#4f46e5;transform:rotate(45deg)}.sp{flex:1}.nav span{color:#4a4460;font-size:14px;font-weight:600}.cta{display:inline-flex;align-items:center;height:38px;padding:0 18px;border-radius:9px;background:#4f46e5;color:#fff!important;font-size:14px;font-weight:700}.hero{display:grid;grid-template-columns:1fr 1fr;gap:36px;padding:64px 34px 56px;align-items:center}.tag{display:inline-block;font-size:12px;font-weight:800;letter-spacing:.12em;color:#7c73f0;background:#efeefe;padding:6px 11px;border-radius:99px;margin-bottom:20px}h1{font-size:44px;line-height:1.06;font-weight:800;letter-spacing:-.03em;color:#17122b;margin-bottom:16px}.lede{font-size:17px;line-height:1.6;color:#5a5470;max-width:400px;margin-bottom:26px}.row{display:flex;gap:12px}.btn2{display:inline-flex;align-items:center;height:46px;padding:0 24px;border-radius:11px;background:#4f46e5;color:#fff;font-size:15px;font-weight:700}.btn3{display:inline-flex;align-items:center;gap:8px;height:46px;padding:0 22px;border-radius:11px;background:#fff;color:#17122b;font-size:15px;font-weight:700;border:1px solid #e2e0ec}.art{background:linear-gradient(160deg,#eef0ff,#f7f4ff);border:1px solid #e6e4f5;border-radius:16px;height:280px}.feat{padding:16px 34px 56px}.feat h2{text-align:center;font-size:30px;font-weight:800;letter-spacing:-.02em;color:#17122b;margin-bottom:34px}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.card{background:#faf9ff;border:1px solid #eeecf8;border-radius:14px;padding:24px}.ic{width:44px;height:44px;border-radius:11px;background:#eae7ff;margin-bottom:16px}.card b{display:block;font-size:17px;color:#17122b;margin-bottom:6px}.card p{font-size:14px;line-height:1.6;color:#6a6480}.stats{margin:0 34px 52px;background:#4f46e5;border-radius:18px;padding:38px 34px;display:flex;justify-content:space-around;color:#fff;text-align:center}.stats .n{font-size:34px;font-weight:800}.stats .l{font-size:13px;opacity:.85}.foot{padding:22px 34px 30px;border-top:1px solid #efeef4;display:flex;justify-content:space-between;color:#a19bb5;font-size:13px}</style></head><body>'
      + '<div class="nav"><div class="brand"><span class="dot"></span>' + name + '</div><div class="sp"></div><span>Product</span><span>Pricing</span><span>Docs</span><span>Sign in</span><span class="cta">Get started</span></div>'
      + '<div class="hero"><div><div class="tag">' + tag + '</div><h1>Plan your team\'s week in minutes, not meetings.</h1><p class="lede">Halcyon turns shift planning, reminders, and time-off into one calm, shared view your whole team actually enjoys.</p><div class="row"><span class="btn2">Start free</span><span class="btn3">\u25B6 Watch demo</span></div></div><div class="art"></div></div>'
      + '<div class="feat"><h2>Everything in one calm view</h2><div class="cards"><div class="card"><div class="ic"></div><b>Smart shifts</b><p>Auto-fill the roster from availability and get conflict warnings before they happen.</p></div><div class="card"><div class="ic"></div><b>Auto reminders</b><p>Nudge the right people by text or email so nobody misses a shift again.</p></div><div class="card"><div class="ic"></div><b>Time-off in a tap</b><p>Requests, approvals, and balances stay in sync with the live schedule.</p></div></div></div>'
      + '<div class="stats"><div><div class="n">12k+</div><div class="l">teams scheduled</div></div><div><div class="n">4.2 hrs</div><div class="l">saved per week</div></div><div><div class="n">99.9%</div><div class="l">uptime</div></div></div>'
      + '<div class="foot"><span>\u00A9 2026 ' + name + ' Labs</span><span>Privacy \u00B7 Terms \u00B7 Status</span></div>'
      + '</body></html>';
  }
  buildProjects() {
    const base = [
      { id: 'p1', name: 'Halcyon Marketing Site', domain: 'halcyon.com', updated: '2h ago', reviewers: [1, 2, 3], openCount: 3, resolvedCount: 1, preview: this.sampleSite('Halcyon') },
      { id: 'p2', name: 'Orbit Dashboard v2', domain: 'app.orbit.io', updated: 'Yesterday', reviewers: [2, 4], openCount: 5, resolvedCount: 8, preview: this.sampleSite('Orbit') },
      { id: 'p3', name: 'Bloom Checkout Flow', domain: 'bloom.shop', updated: '3 days ago', reviewers: [1, 4], openCount: 0, resolvedCount: 12, preview: this.sampleSite('Bloom') },
      { id: 'p4', name: 'Ledger Pricing Page', domain: 'ledger.co', updated: '1 week ago', reviewers: [3], openCount: 2, resolvedCount: 2, preview: this.sampleSite('Ledger') },
    ];
    const nouns = ['Marketing Site', 'Dashboard', 'Checkout Flow', 'Pricing Page', 'Onboarding', 'Landing Page', 'Mobile App', 'Docs Portal', 'Admin Console', 'Settings UI', 'Blog Redesign', 'Email Templates', 'Design System', 'Help Center', 'Careers Page'];
    const brands = ['Nimbus', 'Vertex', 'Lumen', 'Cabana', 'Northwind', 'Quartz', 'Meridian', 'Fathom', 'Aster', 'Cobalt', 'Juniper', 'Marlin', 'Pinnacle', 'Solstice', 'Tessera', 'Vantage', 'Willow', 'Zephyr', 'Auric', 'Beacon'];
    const times = ['just now', '1h ago', '5h ago', 'Yesterday', '2 days ago', '4 days ago', '1 week ago', '2 weeks ago', '3 weeks ago', '1 month ago'];
    const tlds = ['com', 'io', 'app', 'co', 'dev'];
    const out = base.slice();
    let n = 5;
    for (let b = 0; b < brands.length; b++) {
      for (let k = 0; k < 4; k++) {
        const brand = brands[b];
        const noun = nouns[(b + k) % nouns.length];
        const open = (b * 3 + k * 2) % 9;
        const resolved = (b + k * 4) % 15;
        out.push({
          id: 'p' + n,
          name: brand + ' ' + noun,
          domain: brand.toLowerCase() + '.' + tlds[(b + k) % tlds.length],
          updated: times[(b + k) % times.length],
          reviewers: [1 + ((b + k) % 4), 1 + ((b + k + 2) % 4)].filter((v, i, a) => a.indexOf(v) === i),
          openCount: open,
          resolvedCount: resolved,
          files: ['index.html', 'pricing.html', 'about.html', 'style.css', 'script.js'],
          preview: this.sampleSite(brand),
          htmls: this.sampleHtmls(brand),
        });
        n++;
      }
    }
    return out.map(p => {
      if (p.htmls) return p;
      const brand = p.name.split(' ')[0];
      return { ...p, files: p.files || ['index.html', 'pricing.html', 'about.html', 'style.css', 'script.js'], htmls: this.sampleHtmls(brand) };
    });
  }
  sampleHtmls(brand) {
    return [
      { name: 'index.html', html: this.sampleSite(brand, 'Home') },
      { name: 'pricing.html', html: this.sampleSite(brand, 'Pricing') },
      { name: 'about.html', html: this.sampleSite(brand, 'About') },
    ];
  }
  onListScroll(e) {
    const el = e.currentTarget;
    if (el.scrollHeight - el.scrollTop - el.clientHeight > 220) return;
    this.setState(st => {
      const q = st.search.trim().toLowerCase();
      const total = st.projects.filter(p => !q || p.name.toLowerCase().includes(q) || p.domain.toLowerCase().includes(q)).length;
      if (st.visibleCount >= total || st.loadingMore) return null;
      return { loadingMore: true };
    }, () => {
      if (!this.state.loadingMore) return;
      clearTimeout(this._loadT);
      this._loadT = setTimeout(() => this.setState(st => ({ visibleCount: st.visibleCount + 30, loadingMore: false })), 380);
    });
  }

  componentDidMount() { document.addEventListener('click', this._docClick); }
  measurePreview() {
    const el = this._previewViewport;
    if (!el) return;
    const avail = el.clientWidth - 24; // minus padding
    const scale = Math.max(0.2, Math.min(1, avail / 1000));
    if (Math.abs(scale - this.state.previewScale) > 0.001) this.setState({ previewScale: scale });
  }
  setPreviewViewport(el) {
    this._previewViewport = el;
    if (el) {
      if (this._ro) this._ro.disconnect();
      this._ro = new ResizeObserver(() => this.measurePreview());
      this._ro.observe(el);
      this.measurePreview();
    }
  }
  componentWillUnmount() { document.removeEventListener('click', this._docClick); if (this._ro) this._ro.disconnect(); }
  _docClick() {
    if (this.state.projMenu || this.state.cardMenu || this.state.assigneeMenu)
      this.setState({ projMenu: null, cardMenu: null, assigneeMenu: null });
  }

  rid(p) { return p + Math.random().toString(36).slice(2, 8); }
  rev(id) {
    if (id === 0) {
      const nm = (this.state.accountName || 'US Team').trim();
      const initials = (nm.split(/\s+/).map(w => w[0]).slice(0, 2).join('') || 'US').toUpperCase();
      return { id: 0, name: nm, initials, color: '#2f6fed', role: 'UX Reviewer', online: true, isCurrent: true };
    }
    const base = this.reviewers.find(r => r.id === id);
    if (!base) return { id: id, name: 'Former reviewer', initials: '?', color: 'var(--neutral-400)', role: '', online: false };
    const nm = this.state.revNames && this.state.revNames[id];
    if (!nm) return base;
    const initials = nm.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase() || base.initials;
    return { ...base, name: nm, initials };
  }
  startEditRev(id) { return (e) => { e.stopPropagation(); this.setState({ editRevId: id, editRevText: this.rev(id).name }); }; }
  changeRev(e) { const v = e.target.value; this.setState({ editRevText: v }); }
  saveRev() {
    const id = this.state.editRevId;
    if (id == null) return;
    const v = this.state.editRevText.trim();
    this.setState(s => ({ revNames: v ? { ...s.revNames, [id]: v } : s.revNames, editRevId: null, editRevText: '' }));
  }
  cancelRev() { this.setState({ editRevId: null, editRevText: '' }); }
  startEditAccount() { this.setState(s => ({ editAccount: true, accountDraft: s.accountName })); }
  changeAccount(e) { const v = e.target.value; this.setState({ accountDraft: v }); }
  saveAccount() { const v = this.state.accountDraft.trim(); this.setState(s => ({ accountName: v || s.accountName, editAccount: false, accountDraft: '' })); }
  cancelAccount() { this.setState({ editAccount: false, accountDraft: '' }); }
  toast(msg, kind = 'ok') {
    const t = { msg, kind };
    this.setState({ toast: t });
    clearTimeout(this._tt);
    this._tt = setTimeout(() => { this.setState(s => (s.toast === t ? { toast: null } : null)); }, 2600);
  }
  pushActivity(action, target) {
    const pid = this.state.activeProject;
    this.setState(s => ({ activity: [{ id: this.rid('a'), pid, who: this.currentUser, action, target, time: 'just now' }, ...s.activity] }), () => this.persistComments());
  }

  // ---- navigation ----
  openProject(id) {
    return () => {
      const p = this.state.projects.find(x => x.id === id);
      const firstHtml = p && p.htmls && p.htmls.length ? p.htmls[0].name : 'index.html';
      this.setState({ view: 'review', activeProject: id, activeHtml: firstHtml, projMenu: null, tab: 'comments', filter: 'all', selectedId: null });
    };
  }
  selectHtml(name) { return () => this.setState({ activeHtml: name, selectedId: null }); }
  backToList() { this.setState({ view: 'list', commentMode: false, editingId: null, selectedId: null }); }
  togglePanel() { this.setState(s => ({ panelOpen: !s.panelOpen })); }

  // ---- projects CRUD ----
  openNew() { this.setState({ modal: { mode: 'new', id: null, name: '', files: [], fileData: {}, dragOver: false } }); }
  openEdit(id) { return (e) => { e.stopPropagation(); const p = this.state.projects.find(x => x.id === id); this.setState({ modal: { mode: 'edit', id, name: p.name, files: [] }, projMenu: null }); }; }
  onModalName(e) { const v = e.target.value; this.setState(s => ({ modal: { ...s.modal, name: v } })); }
  mergeFiles(paths) {
    const clean = paths.map(p => p.replace(/^\.?\//, '')).filter(Boolean);
    if (!clean.length) return;
    this.setState(s => {
      if (!s.modal) return null;
      const have = new Set(s.modal.files);
      const next = [...s.modal.files];
      clean.forEach(p => { if (!have.has(p)) { have.add(p); next.push(p); } });
      return { modal: { ...s.modal, files: next, dragOver: false } };
    });
  }
  removeModalFile(path) {
    return (e) => { e.stopPropagation(); this.setState(s => { if (!s.modal) return null; const fd = { ...(s.modal.fileData || {}) }; delete fd[path]; return { modal: { ...s.modal, files: s.modal.files.filter(f => f !== path), fileData: fd } }; }); };
  }
  readAsText(file) { return new Promise(res => { try { const r = new FileReader(); r.onload = () => res(String(r.result)); r.onerror = () => res(null); r.readAsText(file); } catch (e) { res(null); } }); }
  entryToFile(entry) { return new Promise(res => { try { entry.file(f => res(f), () => res(null)); } catch (e) { res(null); } }); }
  async ingestFiles(list) {
    const paths = [];
    const data = {};
    for (const it of list) {
      if (!it || !it.path) continue;
      paths.push(it.path);
      const clean = it.path.replace(/^\.?\//, '');
      if (it.file && /\.(html?|css|js|json|svg|txt|md)$/i.test(clean)) {
        const txt = await this.readAsText(it.file);
        if (txt != null) data[clean] = txt;
      }
    }
    this.mergeFiles(paths);
    this.setState(s => s.modal ? { modal: { ...s.modal, fileData: { ...(s.modal.fileData || {}), ...data } } } : null);
  }
  composePreview(files, data) {
    if (!data) return null;
    const idx = files.find(f => /(^|\/)index\.html?$/i.test(f)) || files.find(f => /\.html?$/i.test(f));
    if (!idx || data[idx] == null) return null;
    return this.composeOne(idx, data);
  }
  composeOne(name, data) {
    let html = data[name];
    if (html == null) return null;
    const findKey = (ref) => { const r = ref.replace(/^\.?\//, ''); return Object.keys(data).find(k => k === r || k.endsWith('/' + r) || k.endsWith(r)); };
    html = html.replace(/<link[^>]*href=["']([^"']+\.css)["'][^>]*>/gi, (m, href) => { const k = findKey(href); return k ? ('<style>' + data[k] + '</style>') : m; });
    html = html.replace(/<script[^>]*src=["']([^"']+\.js)["'][^>]*><\/script>/gi, (m, src) => { const k = findKey(src); return k ? ('<script>' + data[k] + '<\/script>') : m; });
    return html;
  }
  composeHtmls(files, data) {
    if (!data) return [];
    const htmlFiles = files.filter(f => /\.html?$/i.test(f) && data[f] != null);
    // index.html first, then the rest alphabetically
    htmlFiles.sort((a, b) => {
      const ai = /(^|\/)index\.html?$/i.test(a) ? 0 : 1;
      const bi = /(^|\/)index\.html?$/i.test(b) ? 0 : 1;
      return ai - bi || a.localeCompare(b);
    });
    return htmlFiles.map(name => ({ name, html: this.composeOne(name, data) }));
  }
  // recursively walk a dropped directory entry (webkitGetAsEntry) — collects {path, entry}
  walkEntry(entry, prefix, out) {
    return new Promise(resolve => {
      if (!entry) return resolve();
      if (entry.isFile) { out.push({ path: prefix + entry.name, entry }); return resolve(); }
      if (entry.isDirectory) {
        const reader = entry.createReader();
        const all = [];
        const readBatch = () => reader.readEntries(async batch => {
          if (!batch.length) {
            for (const child of all) await this.walkEntry(child, prefix + entry.name + '/', out);
            return resolve();
          }
          all.push(...batch); readBatch();
        }, () => resolve());
        readBatch();
      } else resolve();
    });
  }
  async onDropFiles(e) {
    e.preventDefault(); e.stopPropagation();
    const dt = e.dataTransfer;
    const collected = [];
    const items = dt && dt.items ? [...dt.items] : [];
    const entries = items.map(it => it.webkitGetAsEntry && it.webkitGetAsEntry()).filter(Boolean);
    if (entries.length) {
      for (const en of entries) await this.walkEntry(en, '', collected);
      const list = [];
      for (const c of collected) list.push({ path: c.path, file: await this.entryToFile(c.entry) });
      await this.ingestFiles(list);
    } else if (dt && dt.files) {
      await this.ingestFiles([...dt.files].map(f => ({ path: f.webkitRelativePath || f.name, file: f })));
    }
  }
  onDragOver(e) { e.preventDefault(); e.stopPropagation(); if (!this.state.modal || this.state.modal.dragOver) return; this.setState(s => s.modal ? { modal: { ...s.modal, dragOver: true } } : null); }
  onDragLeave(e) { e.preventDefault(); e.stopPropagation(); if (this.state.modal && this.state.modal.dragOver) this.setState(s => s.modal ? { modal: { ...s.modal, dragOver: false } } : null); }
  onBrowse(e) {
    const files = [...(e.target.files || [])];
    this.ingestFiles(files.map(f => ({ path: f.webkitRelativePath || f.name, file: f })));
    e.target.value = '';
  }
  triggerBrowse(dir) { return (e) => { e.stopPropagation(); const inp = dir ? this._dirInput : this._fileInput; if (inp) inp.click(); }; }
  saveProject() {
    const m = this.state.modal;
    if (!m || !m.name.trim()) { this.toast('Enter a project name', 'del'); return; }
    if (m.mode === 'edit') {
      this.setState(s => ({ projects: s.projects.map(p => p.id === m.id ? { ...p, name: m.name.trim(), updated: 'just now' } : p), modal: null }), () => this.persistProjects());
      this.toast('Project renamed');
    } else {
      if (!m.files || !m.files.length) { this.toast('Upload at least one file', 'del'); return; }
      const thumbs = ['linear-gradient(135deg,#4f46e5,#7c73f0)', 'linear-gradient(135deg,#0ea5a3,#22d3c5)', 'linear-gradient(135deg,#d6457f,#f78fb3)', 'linear-gradient(135deg,#d97706,#fbbf24)', 'linear-gradient(135deg,#2f6fed,#5b9bff)'];
      const files = m.files.slice();
      const htmls = this.composeHtmls(files, m.fileData);
      const preview = htmls.length ? htmls[0].html : this.composePreview(files, m.fileData);
      const np = { id: this.rid('p'), name: m.name.trim(), domain: m.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '') + '.com', updated: 'just now', thumb: thumbs[this.state.projects.length % thumbs.length], reviewers: [this.currentUser], files, preview, htmls, openCount: 0, resolvedCount: 0 };
      this.setState(s => ({ projects: [np, ...s.projects], modal: null, visibleCount: Math.max(s.visibleCount, 1) }), () => this.persistProjects());
      this.toast(files.length + ' file' + (files.length === 1 ? '' : 's') + ' uploaded · project created');
    }
  }
  closeModal() { this.setState({ modal: null }); }
  askDelete(id) { return (e) => { e.stopPropagation(); const p = this.state.projects.find(x => x.id === id); this.setState({ confirm: { id, name: p.name }, projMenu: null }); }; }
  cancelConfirm() { this.setState({ confirm: null }); }
  doDeleteProject() {
    const c = this.state.confirm;
    if (c && c.bulk) {
      const ids = c.ids;
      this.setState(s => ({ projects: s.projects.filter(p => !ids.includes(p.id)), confirm: null, selected: [], selectMode: false }), () => this.persistProjects());
      this.toast(ids.length + ' project' + (ids.length === 1 ? '' : 's') + ' deleted', 'del');
    } else {
      this.setState(s => ({ projects: s.projects.filter(p => p.id !== c.id), confirm: null, selected: s.selected.filter(x => x !== c.id) }), () => this.persistProjects());
      this.toast('Project deleted', 'del');
    }
  }
  toggleProjMenu(id) { return (e) => { e.stopPropagation(); this.setState(s => ({ projMenu: s.projMenu === id ? null : id, cardMenu: null, assigneeMenu: null })); }; }
  toggleSelectMode() { this.setState(s => ({ selectMode: !s.selectMode, selected: [], projMenu: null })); }
  toggleSelect(id) { this.setState(s => ({ selected: s.selected.includes(id) ? s.selected.filter(x => x !== id) : [...s.selected, id] })); }
  toggleSelectAll(visibleIds) {
    return () => this.setState(s => {
      const allSel = visibleIds.length > 0 && visibleIds.every(id => s.selected.includes(id));
      return { selected: allSel ? s.selected.filter(id => !visibleIds.includes(id)) : [...new Set([...s.selected, ...visibleIds])] };
    });
  }
  bulkDelete() {
    if (!this.state.selected.length) return;
    this.setState({ confirm: { bulk: true, ids: [...this.state.selected], name: this.state.selected.length + ' project' + (this.state.selected.length === 1 ? '' : 's') } });
  }

  // ---- review: pins & comments ----
  toggleCommentMode() { this.setState(s => ({ commentMode: !s.commentMode })); }
  canvasClick(e) {
    if (!this.state.commentMode) return;
    const r = e.currentTarget.getBoundingClientRect();
    const z = 1;
    const x = Math.round((e.clientX - r.left) / z);
    const y = Math.round((e.clientY - r.top) / z);
    const seq = Math.max(0, ...this.state.comments.filter(c => c.pid === this.state.activeProject && (c.hf || 'index.html') === (this.state.activeHtml || 'index.html')).map(c => c.seq)) + 1;
    const id = this.rid('c');
    const pid = this.state.activeProject;
    const hf = this.state.activeHtml || 'index.html';
    this.setState(s => ({
      comments: [...s.comments, { id, pid, hf, seq, x, y, authorId: this.currentUser, text: '', status: 'open', assigneeId: null, created: 'just now', replies: [] }],
      commentMode: false, selectedId: id, editingId: id, editingText: '', tab: 'comments', filter: 'all',
    }), () => this.persistComments());
  }
  selectComment(id) { return (e) => { if (e) e.stopPropagation(); if (this._suppressClick === id) return; this.setState({ selectedId: id, tab: 'comments' }); }; }
  startDragPin(cid) {
    return (e) => {
      if (this.state.commentMode) return;
      e.stopPropagation();
      const canvas = e.currentTarget.parentElement;
      const drag = { moved: false };
      const move = (ev) => {
        const rect = canvas.getBoundingClientRect();
        let x = Math.round(ev.clientX - rect.left);
        let y = Math.round(ev.clientY - rect.top);
        x = Math.max(0, Math.min(1000, x));
        y = Math.max(0, Math.min(rect.height, y));
        drag.moved = true;
        this.setState(s => ({ comments: s.comments.map(c => c.id === cid ? { ...c, x, y } : c) }));
      };
      const up = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
        if (drag.moved) { this.persistComments(); this._suppressClick = cid; setTimeout(() => { if (this._suppressClick === cid) this._suppressClick = null; }, 60); }
      };
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    };
  }
  startEdit(id) { return (e) => { e.stopPropagation(); const c = this.state.comments.find(x => x.id === id); this.setState({ editingId: id, editingText: c.text, cardMenu: null, selectedId: id }); }; }
  changeEdit(e) { const v = e.target.value; this.setState({ editingText: v }); }
  cancelEdit() {
    const id = this.state.editingId;
    const c = this.state.comments.find(x => x.id === id);
    if (c && !c.text.trim()) this.setState(s => ({ comments: s.comments.filter(x => x.id !== id), editingId: null, editingText: '', selectedId: null }), () => this.persistComments());
    else this.setState({ editingId: null, editingText: '' });
  }
  saveEdit() {
    const id = this.state.editingId;
    const txt = this.state.editingText.trim();
    const c = this.state.comments.find(x => x.id === id);
    const wasEmpty = c && !c.text;
    if (!txt) { this.cancelEdit(); return; }
    this.setState(s => ({ comments: s.comments.map(x => x.id === id ? { ...x, text: txt } : x), editingId: null, editingText: '' }), () => this.persistComments());
    this.pushActivity(wasEmpty ? 'commented on' : 'edited', 'pin ' + (c ? c.seq : ''));
    this.toast(wasEmpty ? 'Comment added' : 'Comment updated');
  }
  deleteComment(id) { return (e) => { e.stopPropagation(); const c = this.state.comments.find(x => x.id === id); this.setState(s => ({ comments: s.comments.filter(x => x.id !== id), cardMenu: null, selectedId: null, editingId: s.editingId === id ? null : s.editingId }), () => this.persistComments()); this.pushActivity('deleted', 'pin ' + (c ? c.seq : '')); this.toast('Comment deleted', 'del'); }; }
  toggleResolve(id) {
    return (e) => {
      e.stopPropagation();
      const c = this.state.comments.find(x => x.id === id);
      const next = c.status === 'open' ? 'resolved' : 'open';
      this.setState(s => ({ comments: s.comments.map(x => x.id === id ? { ...x, status: next } : x) }), () => this.persistComments());
      this.pushActivity(next === 'resolved' ? 'resolved' : 'reopened', 'pin ' + c.seq);
    };
  }
  toggleCardMenu(id) { return (e) => { e.stopPropagation(); this.setState(s => ({ cardMenu: s.cardMenu === id ? null : id, assigneeMenu: null, projMenu: null })); }; }
  toggleAssigneeMenu(id) { return (e) => { e.stopPropagation(); this.setState(s => ({ assigneeMenu: s.assigneeMenu === id ? null : id, cardMenu: null, projMenu: null })); }; }
  setAssignee(cid, uid) { return (e) => { e.stopPropagation(); this.setState(s => ({ comments: s.comments.map(x => x.id === cid ? { ...x, assigneeId: uid } : x), assigneeMenu: null }), () => this.persistComments()); }; }
  startReply(id) { return (e) => { e.stopPropagation(); this.setState({ replyFor: id, replyText: '', selectedId: id }); }; }
  changeReply(e) { const v = e.target.value; this.setState({ replyText: v }); }
  submitReply(id) {
    return (e) => {
      e.stopPropagation();
      const txt = this.state.replyText.trim();
      if (!txt) { this.setState({ replyFor: null }); return; }
      const c = this.state.comments.find(x => x.id === id);
      this.setState(s => ({ comments: s.comments.map(x => x.id === id ? { ...x, replies: [...x.replies, { id: this.rid('r'), authorId: this.currentUser, text: txt, created: 'just now' }] } : x), replyFor: null, replyText: '' }), () => this.persistComments());
      this.pushActivity('replied to', 'pin ' + c.seq);
    };
  }
  cancelReply() { this.setState({ replyFor: null, replyText: '' }); }
  startEditReply(cid, r) { return (e) => { e.stopPropagation(); this.setState({ editReplyKey: cid + ':' + r.id, editReplyText: r.text, selectedId: cid }); }; }
  changeEditReply(e) { const v = e.target.value; this.setState({ editReplyText: v }); }
  saveEditReply(cid, rid) {
    const txt = this.state.editReplyText.trim();
    if (!txt) { this.deleteReply(cid, rid)(); return; }
    this.setState(s => ({ comments: s.comments.map(x => x.id === cid ? { ...x, replies: x.replies.map(rp => rp.id === rid ? { ...rp, text: txt } : rp) } : x), editReplyKey: null, editReplyText: '' }), () => this.persistComments());
    this.toast('Reply updated');
  }
  cancelEditReply() { this.setState({ editReplyKey: null, editReplyText: '' }); }
  deleteReply(cid, rid) { return (e) => { if (e) e.stopPropagation(); this.setState(s => ({ comments: s.comments.map(x => x.id === cid ? { ...x, replies: x.replies.filter(rp => rp.id !== rid) } : x), editReplyKey: null }), () => this.persistComments()); this.toast('Reply deleted', 'del'); }; }
  setFilter(f) { return () => this.setState({ filter: f }); }
  setTab(t) { return () => this.setState({ tab: t }); }
  selectFile(f) { return () => this.setState({ activeFile: f }); }

  // ---- render helpers ----
  avatar(user, size) {
    const s = size || 28;
    return React.createElement('div', { style: { width: s, height: s, borderRadius: 999, background: user.color, color: '#fff', display: 'grid', placeItems: 'center', fontSize: s <= 24 ? 10 : 11, fontWeight: 700, flex: '0 0 auto' } }, user.initials);
  }
  ic(path, sw) {
    return React.createElement('svg', { width: 15, height: 15, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: sw || 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, ...path.map((d, i) => React.createElement('path', { key: i, d })));
  }

  renderCard(c) {
    const author = this.rev(c.authorId);
    const assignee = c.assigneeId ? this.rev(c.assigneeId) : null;
    const isSel = this.state.selectedId === c.id;
    const isEditing = this.state.editingId === c.id;
    const isNew = isEditing && !c.text;
    const resolved = c.status === 'resolved';
    const PIN = this.props.pinColor || '#0D418C';
    const pinBg = resolved ? '#00a86b' : PIN;
    const h = React.createElement;

    const header = h('div', { style: { display: 'flex', alignItems: 'center', gap: 9 } },
      h('div', { style: { width: 22, height: 22, borderRadius: 6, background: pinBg, color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 800, flex: '0 0 auto' } }, c.seq),
      this.avatar(author, 24),
      h('div', { style: { minWidth: 0, flex: 1 } },
        h('div', { style: { fontSize: 13, fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }, author.name),
        h('div', { style: { fontSize: 11, color: 'var(--text-faint)' } }, c.created)
      ),
      h('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 5, height: 21, padding: '0 9px', borderRadius: 99, background: resolved ? 'var(--success-50)' : 'var(--warning-50)', color: resolved ? 'var(--success-700)' : 'var(--warning-700)', fontSize: 11, fontWeight: 700 } },
        h('span', { style: { width: 6, height: 6, borderRadius: 50, background: 'currentColor' } }), resolved ? 'Resolved' : 'Open'),
      h('div', { style: { position: 'relative', flex: '0 0 auto' } },
        h('button', { onClick: this.toggleCardMenu(c.id), style: { width: 26, height: 26, border: 'none', background: 'transparent', color: 'var(--text-faint)', cursor: 'pointer', borderRadius: 6, display: 'grid', placeItems: 'center' } }, this.ic(['M12 5v.01M12 12v.01M12 19v.01'], 3)),
        this.state.cardMenu === c.id && h('div', { onClick: e => e.stopPropagation(), style: { position: 'absolute', right: 0, top: 30, background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 10, boxShadow: 'var(--shadow-lg)', padding: 6, minWidth: 130, zIndex: 40 } },
          h('button', { onClick: this.startEdit(c.id), style: menuBtn }, this.ic(['M12 20h9', 'M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z']), 'Edit'),
          h('button', { onClick: this.deleteComment(c.id), style: { ...menuBtn, color: 'var(--danger-700)' } }, this.ic(['M3 6h18', 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6', 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2']), 'Delete')
        )
      )
    );

    let body;
    if (isEditing) {
      body = h('div', { style: { marginTop: 10 } },
        h('textarea', { value: this.state.editingText, onChange: e => this.changeEdit(e), onClick: e => e.stopPropagation(), autoFocus: true, placeholder: 'Describe the issue or suggestion…', rows: 3, style: { width: '100%', resize: 'vertical', border: '1px solid var(--border-default)', borderRadius: 9, padding: '9px 11px', fontSize: 13, lineHeight: 1.5, color: 'var(--text-strong)', outline: 'none' } }),
        h('div', { style: { display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 8 } },
          h('button', { onClick: e => { e.stopPropagation(); this.cancelEdit(); }, style: { height: 32, padding: '0 12px', borderRadius: 8, border: '1px solid var(--border-default)', background: 'var(--surface-card)', color: 'var(--text-strong)', fontSize: 13, fontWeight: 600, cursor: 'pointer' } }, 'Cancel'),
          h('button', { onClick: e => { e.stopPropagation(); this.saveEdit(); }, style: { height: 32, padding: '0 14px', borderRadius: 8, border: 'none', background: '#0D418C', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' } }, isNew ? 'Post' : 'Save')
        )
      );
    } else {
      body = h('p', { style: { margin: '10px 0 0', fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-body)' } }, c.text);
    }

    // replies (each editable / deletable)
    const replies = c.replies.length ? h('div', { style: { marginTop: 12, paddingLeft: 12, borderLeft: '2px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 10 } },
      ...c.replies.map(r => {
        const ra = this.rev(r.authorId);
        const rEditing = this.state.editReplyKey === c.id + ':' + r.id;
        return h('div', { key: r.id, style: { display: 'flex', gap: 8 } }, this.avatar(ra, 22),
          rEditing
            ? h('div', { style: { minWidth: 0, flex: 1 } },
                h('input', { value: this.state.editReplyText, onChange: e => this.changeEditReply(e), onClick: e => e.stopPropagation(), onKeyDown: e => { if (e.key === 'Enter') { e.preventDefault(); this.saveEditReply(c.id, r.id); } else if (e.key === 'Escape') this.cancelEditReply(); }, autoFocus: true, style: { width: '100%', height: 32, border: '1px solid var(--border-default)', borderRadius: 8, padding: '0 10px', fontSize: 13, color: 'var(--text-strong)', outline: 'none' } }),
                h('div', { style: { display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 6 } },
                  h('button', { onClick: e => { e.stopPropagation(); this.cancelEditReply(); }, style: { height: 28, padding: '0 10px', borderRadius: 7, border: '1px solid var(--border-default)', background: 'var(--surface-card)', color: 'var(--text-strong)', fontSize: 12, fontWeight: 600, cursor: 'pointer' } }, 'Cancel'),
                  h('button', { onClick: e => { e.stopPropagation(); this.saveEditReply(c.id, r.id); }, style: { height: 28, padding: '0 12px', borderRadius: 7, border: 'none', background: '#0D418C', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer' } }, 'Save')))
            : h('div', { style: { minWidth: 0, flex: 1 } },
                h('div', { style: { display: 'flex', gap: 6, alignItems: 'baseline' } },
                  h('span', { style: { fontSize: 12.5, fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap' } }, ra.name),
                  h('span', { style: { fontSize: 11, color: 'var(--text-faint)' } }, r.created),
                  h('div', { style: { marginLeft: 'auto', display: 'flex', gap: 2 } },
                    h('button', { onClick: this.startEditReply(c.id, r), title: 'Edit reply', style: { width: 24, height: 24, border: 'none', background: 'transparent', color: 'var(--text-faint)', cursor: 'pointer', borderRadius: 5, display: 'grid', placeItems: 'center' } }, this.ic(['M12 20h9', 'M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z'])),
                    h('button', { onClick: this.deleteReply(c.id, r.id), title: 'Delete reply', style: { width: 24, height: 24, border: 'none', background: 'transparent', color: 'var(--text-faint)', cursor: 'pointer', borderRadius: 5, display: 'grid', placeItems: 'center' } }, this.ic(['M3 6h18', 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6', 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'])))),
                h('div', { style: { fontSize: 13, color: 'var(--text-body)', lineHeight: 1.5 } }, r.text)));
      })
    ) : null;

    const replyBox = this.state.replyFor === c.id ? h('div', { style: { marginTop: 10, display: 'flex', gap: 8 } },
      h('input', { value: this.state.replyText, onChange: e => this.changeReply(e), onClick: e => e.stopPropagation(), onKeyDown: e => { if (e.key === 'Enter') this.submitReply(c.id)(e); }, autoFocus: true, placeholder: 'Reply…', style: { flex: 1, height: 34, border: '1px solid var(--border-default)', borderRadius: 8, padding: '0 11px', fontSize: 13, color: 'var(--text-strong)', outline: 'none' } }),
      h('button', { onClick: this.submitReply(c.id), style: { width: 34, height: 34, borderRadius: 8, border: 'none', background: '#0D418C', color: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center' } }, this.ic(['m22 2-7 20-4-9-9-4Z', 'M22 2 11 13']))
    ) : null;

    // footer actions (hidden while editing a brand-new pin)
    const footer = isNew ? null : h('div', { style: { display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, flexWrap: 'wrap' } },
      h('button', { onClick: this.startReply(c.id), style: actionBtn }, this.ic(['M9 17H4v-5', 'M20 7a9 9 0 0 0-16-3']), 'Reply'),
      h('div', { style: { flex: 1 } }),
      h('button', { onClick: this.toggleResolve(c.id), style: { display: 'inline-flex', alignItems: 'center', gap: 6, height: 28, padding: '0 11px', borderRadius: 8, border: resolved ? '1px solid var(--border-default)' : '1px solid transparent', background: resolved ? 'var(--surface-card)' : 'var(--success-50)', color: resolved ? 'var(--text-muted)' : 'var(--success-700)', fontSize: 12, fontWeight: 700, cursor: 'pointer' } },
        this.ic(resolved ? ['M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0', 'M12 8v8'] : ['M20 6 9 17l-5-5'], resolved ? 2 : 3), resolved ? 'Reopen' : 'Resolve')
    );

    return h('div', { key: c.id, onClick: this.selectComment(c.id), style: { background: 'var(--surface-card)', border: '1px solid ' + (isSel ? '#0D418C' : 'var(--border-subtle)'), boxShadow: isSel ? '0 0 0 3px rgba(13,65,140,.12)' : 'none', borderRadius: 12, padding: 14, marginBottom: 12, cursor: 'pointer', opacity: (resolved && (this.props.dimResolved ?? true)) ? .82 : 1, transition: 'box-shadow .12s, border-color .12s' } },
      header, body, replies, replyBox, footer);
  }

  renderVals() {
    const s = this.state;
    const PIN = this.props.pinColor || '#0D418C';
    const dim = this.props.dimResolved ?? true;
    const h = React.createElement;

    // projects
    const q = s.search.trim().toLowerCase();
    const projFiltered = s.projects.filter(p => !q || p.name.toLowerCase().includes(q) || p.domain.toLowerCase().includes(q));
    const projShown = projFiltered.slice(0, s.visibleCount);
    const tick = this.ic(['M20 6 9 17l-5-5'], 3.2);
    const projects = projShown.map((p, i) => {
      const isSel = s.selected.includes(p.id);
      return {
        ...p,
        reviewers: p.reviewers.map(id => this.rev(id)),
        menuOpen: s.projMenu === p.id,
        onOpen: s.selectMode ? (() => this.toggleSelect(p.id)) : this.openProject(p.id),
        onMenu: this.toggleProjMenu(p.id),
        onEdit: this.openEdit(p.id),
        onDelete: this.askDelete(p.id),
        selected: isSel,
        boxBorder2: isSel ? '#0D418C' : 'var(--border-strong)',
        boxBg2: isSel ? '#0D418C' : 'transparent',
        boxTick: isSel ? tick : '',
        cardBorder: isSel ? '#0D418C' : 'var(--border-subtle)',
        cardShadow: isSel ? '0 0 0 3px rgba(13,65,140,.14), var(--shadow-sm)' : 'var(--shadow-sm)',
        nodeColor: isSel ? '#0D418C' : (p.openCount > 0 ? 'var(--warning-500)' : 'var(--success-500)'),
        connectorDisplay: i === projShown.length - 1 ? 'none' : 'block',
      };
    });
    const visibleIds = projFiltered.map(p => p.id);
    const selCount = s.selected.length;
    const allSelected = visibleIds.length > 0 && visibleIds.every(id => s.selected.includes(id));

    // review data (scoped to the active project + selected HTML file)
    const activeHtmlName = s.activeHtml || 'index.html';
    const comments = s.comments.filter(c => c.pid === s.activeProject && (c.hf || 'index.html') === activeHtmlName);
    const openCount = comments.filter(c => c.status === 'open').length;
    const resolvedCount = comments.filter(c => c.status === 'resolved').length;
    const shown = comments.filter(c => s.filter === 'all' ? true : c.status === s.filter);

    // pins
    const pinEls = shown.map(c => {
      const resolved = c.status === 'resolved';
      const sel = s.selectedId === c.id;
      const bg = resolved ? '#00a86b' : PIN;
      return h('button', { key: c.id, onMouseDown: this.startDragPin(c.id), onClick: this.selectComment(c.id), title: c.text || 'New comment',
        style: { position: 'absolute', left: c.x + 'px', top: c.y + 'px', transform: 'translate(-50%,-50%)', width: 27, height: 27, borderRadius: '50% 50% 50% 3px', background: bg, color: '#fff', border: '2px solid #fff', boxShadow: sel ? '0 0 0 4px rgba(13,65,140,.32), var(--shadow-lg)' : 'var(--shadow-md)', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 800, cursor: 'grab', zIndex: sel ? 12 : 10, opacity: (resolved && dim) ? .7 : 1, animation: 'pindrop .28s var(--ease-out)', touchAction: 'none' } },
        resolved ? this.ic(['M20 6 9 17l-5-5'], 3.4) : c.seq);
    });
    const pinsEl = h(React.Fragment, null, ...pinEls);

    // comment cards
    const cards = shown.slice().sort((a, b) => a.seq - b.seq);
    const commentCardsEl = cards.length
      ? h(React.Fragment, null, ...cards.map(c => this.renderCard(c)))
      : h('div', { style: { padding: '48px 12px', textAlign: 'center', color: 'var(--text-muted)' } },
          this.ic(['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'], 1.6),
          h('div', { style: { marginTop: 8, fontSize: 13.5 } }, s.filter === 'resolved' ? 'No resolved comments yet.' : s.filter === 'open' ? 'No open comments — all clear!' : 'No comments yet. Turn on Comment mode and click the preview.'));

    // activity (scoped to the active project)
    const activityList = s.activity.filter(a => a.pid === s.activeProject);
    const activityEl = h(React.Fragment, null, ...activityList.map((a, i) => {
      const u = this.rev(a.who);
      return h('div', { key: a.id, style: { display: 'flex', gap: 11, paddingBottom: 16, position: 'relative' } },
        i < activityList.length - 1 && h('div', { style: { position: 'absolute', left: 13, top: 30, bottom: 0, width: 2, background: 'var(--border-subtle)' } }),
        this.avatar(u, 28),
        h('div', { style: { paddingTop: 2, fontSize: 13, lineHeight: 1.5, color: 'var(--text-body)' } },
          h('b', { style: { color: 'var(--text-strong)', fontWeight: 600 } }, u.name), ' ' + a.action + ' ',
          h('b', { style: { color: 'var(--text-strong)', fontWeight: 600 } }, a.target),
          h('div', { style: { fontSize: 11, color: 'var(--text-faint)', marginTop: 1 } }, a.time)));
    }));
    const activityWrapEl = activityList.length ? activityEl : h('div', { style: { padding: '48px 12px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 13.5 } }, 'No activity yet for this project.');

    // files rail
    const files = [
      { name: 'index.html', icon: ['M13 2v7h7'], type: 'html' },
      { name: 'style.css', icon: null, type: 'css' },
      { name: 'script.js', icon: null, type: 'js' },
    ];
    const fileRow = (name, glyph, dotColor, active, disabled) => h('button', { key: name, onClick: this.selectFile(name), style: { display: 'flex', alignItems: 'center', gap: 9, width: '100%', textAlign: 'left', border: 'none', background: active ? 'var(--brand-50, #eef4ff)' : 'transparent', color: active ? 'var(--text-strong)' : 'var(--text-body)', padding: '8px 9px', borderRadius: 8, fontSize: 13, fontWeight: active ? 600 : 500, cursor: 'pointer', boxShadow: active ? 'inset 2px 0 0 #0D418C' : 'none' } },
      h('span', { style: { width: 7, height: 7, borderRadius: 2, background: dotColor, flex: '0 0 auto' } }), name,
      active && h('span', { style: { marginLeft: 'auto', fontSize: 10, fontWeight: 700, color: '#0D418C', background: 'rgba(13,65,140,.1)', padding: '2px 6px', borderRadius: 5 } }, 'PREVIEW'));
    const filesEl = h('div', { style: { display: 'flex', flexDirection: 'column', gap: 2 } },
      fileRow('index.html', null, '#e0463b', s.activeFile === 'index.html'),
      fileRow('style.css', null, '#2f6fed', s.activeFile === 'style.css'),
      fileRow('script.js', null, '#d97706', s.activeFile === 'script.js'),
      h('div', { style: { display: 'flex', alignItems: 'center', gap: 8, padding: '8px 9px', color: 'var(--text-muted)', fontSize: 13, fontWeight: 500 } }, this.ic(['M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z']), 'assets/'),
      ...['hero.jpg', 'logo.svg'].map(f => h('div', { key: f, style: { display: 'flex', alignItems: 'center', gap: 9, padding: '7px 9px 7px 26px', color: 'var(--text-muted)', fontSize: 12.5 } }, h('span', { style: { width: 7, height: 7, borderRadius: 2, background: '#8a4fdb', flex: '0 0 auto' } }), f)));

    // reviewers rail
    const reviewersEl = h('div', { style: { display: 'flex', flexDirection: 'column', gap: 4 } },
      ...this.reviewers.map(base => {
        const u = this.rev(base.id);
        const editing = s.editRevId === u.id;
        return h('div', { key: u.id, style: { display: 'flex', alignItems: 'center', gap: 10, padding: '7px 8px', borderRadius: 8 } },
          h('div', { style: { position: 'relative', flex: '0 0 auto' } }, this.avatar(u, 30),
            h('span', { style: { position: 'absolute', right: -1, bottom: -1, width: 9, height: 9, borderRadius: 50, background: u.online ? '#00a86b' : 'var(--neutral-300)', border: '2px solid var(--surface-card)' } })),
          editing
            ? h('div', { style: { flex: 1, minWidth: 0 } },
                h('input', { value: s.editRevText, onChange: e => this.changeRev(e), onBlur: () => this.saveRev(), autoFocus: true,
                  onKeyDown: e => { if (e.key === 'Enter') { e.preventDefault(); this.saveRev(); } else if (e.key === 'Escape') this.cancelRev(); },
                  style: { width: '100%', height: 28, border: '1px solid #0D418C', borderRadius: 7, padding: '0 8px', fontSize: 13, fontWeight: 600, color: 'var(--text-strong)', outline: 'none' } }),
                h('div', { style: { fontSize: 11.5, color: 'var(--text-faint)', marginTop: 2 } }, u.role))
            : h('div', { onClick: this.startEditRev(u.id), title: 'Click to rename', style: { minWidth: 0, flex: 1, cursor: 'text', borderRadius: 6 } },
                h('div', { style: { display: 'flex', alignItems: 'center', gap: 6 } },
                  h('span', { style: { fontSize: 13, fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }, u.name),
                  h('span', { style: { color: 'var(--text-faint)', display: 'inline-flex', flex: '0 0 auto' } }, this.ic(['M12 20h9', 'M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z']))),
                h('div', { style: { fontSize: 11.5, color: 'var(--text-faint)' } }, u.role)));
      }));

    // ---- dropzone (real drag & drop + browse file / folder) ----
    const dragging = !!(s.modal && s.modal.dragOver);
    const glyphFor = (f) => {
      if (/\.html?$/i.test(f)) return { c: '#e0463b', p: ['M13 2v7h7', 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z'] };
      if (/\.css$/i.test(f)) return { c: '#2f6fed', p: ['M13 2v7h7', 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z'] };
      if (/\.jsx?$/i.test(f)) return { c: '#d97706', p: ['M13 2v7h7', 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z'] };
      if (/\.(png|jpe?g|gif|svg|webp)$/i.test(f)) return { c: '#8a4fdb', p: ['M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z', 'M8.5 10a1.5 1.5 0 1 0 0-.01', 'm21 15-5-5L5 21'] };
      return { c: '#8a8598', p: ['M13 2v7h7', 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z'] };
    };
    const dropzoneEl = h('div', {
      onDragOver: e => this.onDragOver(e), onDragEnter: e => this.onDragOver(e), onDragLeave: e => this.onDragLeave(e), onDrop: e => this.onDropFiles(e),
      onClick: this.triggerBrowse(false),
      style: { border: '1.5px dashed ' + (dragging ? '#0D418C' : 'var(--border-strong)'), borderRadius: 'var(--radius-md)', padding: '22px 18px', textAlign: 'center', cursor: 'pointer', marginBottom: 12, background: dragging ? 'rgba(13,65,140,.06)' : 'transparent', transition: 'border-color .12s, background .12s' }
    },
      h('input', { type: 'file', multiple: true, ref: el => this._fileInput = el, onChange: e => this.onBrowse(e), style: { display: 'none' } }),
      h('input', { type: 'file', ref: el => { this._dirInput = el; if (el) { el.setAttribute('webkitdirectory', ''); el.setAttribute('directory', ''); } }, onChange: e => this.onBrowse(e), style: { display: 'none' } }),
      h('svg', { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: dragging ? '#0D418C' : 'var(--text-muted)', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', style: { marginBottom: 8 } },
        h('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }), h('path', { d: 'M17 8l-5-5-5 5' }), h('path', { d: 'M12 3v12' })),
      h('div', { style: { fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)' } }, dragging ? 'Drop to upload' : 'Drag & drop files or a folder here'),
      h('div', { style: { fontSize: 'var(--text-xs)', color: 'var(--text-faint)', marginTop: 3 } }, 'HTML, CSS, JS & assets — index.html is the entry point'),
      h('div', { style: { display: 'flex', gap: 8, justifyContent: 'center', marginTop: 12 } },
        h('button', { onClick: this.triggerBrowse(false), style: { display: 'inline-flex', alignItems: 'center', gap: 6, height: 32, padding: '0 13px', borderRadius: 8, border: '1px solid var(--border-default)', background: 'var(--surface-card)', color: 'var(--text-strong)', fontSize: 12.5, fontWeight: 600, cursor: 'pointer' } },
          this.ic(['M13 2v7h7', 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z']), 'Choose files')));

    // modal files (with count + remove)
    const mFiles = s.modal && s.modal.mode === 'new' ? s.modal.files : [];
    const modalFilesEl = s.modal && s.modal.mode === 'new' ? h('div', null,
      mFiles.length
        ? h('div', null,
            h('div', { style: { fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 8 } }, mFiles.length + ' file' + (mFiles.length === 1 ? '' : 's') + ' ready'),
            h('div', { style: { display: 'flex', flexDirection: 'column', gap: 4, maxHeight: 168, overflowY: 'auto' } },
              ...mFiles.map(f => { const g = glyphFor(f); return h('div', { key: f, style: { display: 'flex', alignItems: 'center', gap: 9, padding: '6px 8px', borderRadius: 8, background: 'var(--neutral-50)' } },
                h('span', { style: { color: g.c, display: 'inline-flex', flex: '0 0 auto' } }, this.ic(g.p)),
                h('span', { style: { flex: 1, minWidth: 0, fontSize: 12.5, color: 'var(--text-body)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }, f),
                h('button', { onClick: this.removeModalFile(f), title: 'Remove', style: { width: 22, height: 22, border: 'none', background: 'transparent', color: 'var(--text-faint)', cursor: 'pointer', borderRadius: 5, display: 'grid', placeItems: 'center', flex: '0 0 auto' } }, this.ic(['M18 6 6 18M6 6l12 12']))); })))
        : h('div', { style: { fontSize: 12.5, color: 'var(--text-faint)', textAlign: 'center', padding: '4px 0 6px' } }, 'No files added yet.')) : null;

    const active = s.projects.find(p => p.id === s.activeProject) || s.projects[0] || { name: '', domain: '' };
    const htmlList = active.htmls && active.htmls.length ? active.htmls : (active.preview ? [{ name: 'index.html', html: active.preview }] : []);
    const curEntry = htmlList.find(x => x.name === activeHtmlName) || htmlList[0];
    const curHtml = curEntry ? curEntry.html : null;
    const previewEl = curHtml
      ? h('iframe', { key: active.id + ':' + (curEntry ? curEntry.name : ''), title: 'Build preview', srcDoc: curHtml, scrolling: 'no', onLoad: (e) => { const f = e.target; try { const d = f.contentDocument; const hgt = Math.max(640, d.documentElement.scrollHeight, d.body ? d.body.scrollHeight : 0); f.style.height = hgt + 'px'; } catch (_) {} }, style: { display: 'block', width: '1000px', height: '1400px', border: 'none', background: '#fff', overflow: 'hidden' } })
      : h('div', { style: { minHeight: '640px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: '60px 40px', textAlign: 'center', background: 'repeating-linear-gradient(45deg,#fafafa,#fafafa 12px,#f4f4f6 12px,#f4f4f6 24px)' } },
          h('div', { style: { width: 72, height: 72, borderRadius: 18, background: '#fff', border: '1px solid #ececf1', boxShadow: '0 6px 20px rgba(22,35,58,.06)', display: 'grid', placeItems: 'center', color: '#9aa2b1' } }, this.ic(['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z', 'M14 2v6h6', 'M12 18v-6', 'M9 15h6'], 1.6)),
          h('div', { style: { fontSize: 19, fontWeight: 800, color: '#2a2440', letterSpacing: '-.01em' } }, 'No preview yet'),
          h('div', { style: { maxWidth: 340, fontSize: 14, lineHeight: 1.6, color: '#8a8598' } }, "Upload the project's index.html and its assets to render the build here, then drop comment pins right on the page."));

    // current HTML file name shown in the breadcrumb (plain label)
    const htmlDropdownEl = h('b', { style: { color: 'var(--text-strong)', fontWeight: 600 } }, activeHtmlName);

    // filter chip styles
    const chip = (on) => on
      ? { border: '#0D418C', bg: '#0D418C', color: '#fff' }
      : { border: 'var(--border-default)', bg: 'var(--surface-card)', color: 'var(--text-body)' };
    const fa = chip(s.filter === 'all'), fo = chip(s.filter === 'open'), fr = chip(s.filter === 'resolved');

    const cm = s.commentMode;
    const toastKind = s.toast ? s.toast.kind : 'ok';
    const toastIcon = toastKind === 'del' ? this.ic(['M3 6h18', 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6', 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'], 2) : this.ic(['M22 11.08V12a10 10 0 1 1-5.93-9.14', 'M22 4 12 14.01l-3-3'], 2.4);

    const acctInitials = (s.accountName.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('') || 'US').toUpperCase();
    const accountNameEl = s.editAccount
      ? h('div', { style: { display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 } },
          h('input', { value: s.accountDraft, onChange: e => this.changeAccount(e), onBlur: () => this.saveAccount(), autoFocus: true,
            onKeyDown: e => { if (e.key === 'Enter') { e.preventDefault(); this.saveAccount(); } else if (e.key === 'Escape') this.cancelAccount(); },
            style: { width: '100%', height: 26, border: '1px solid #0D418C', borderRadius: 7, padding: '0 7px', fontSize: 13, fontWeight: 600, color: 'var(--text-strong)', outline: 'none' } }),
          h('span', { style: { color: 'var(--text-muted)', fontSize: 12, marginTop: 2 } }, 'UX Reviewer'))
      : h('div', { onClick: () => this.startEditAccount(), title: 'Click to rename', style: { display: 'flex', flexDirection: 'column', lineHeight: 1.25, minWidth: 0, flex: 1, cursor: 'text' } },
          h('span', { style: { display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 } },
            h('b', { style: { color: 'var(--text-strong)', fontWeight: 600, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 } }, s.accountName),
            h('span', { style: { color: 'var(--text-faint)', display: 'inline-flex', flex: '0 0 auto' } }, this.ic(['M12 20h9', 'M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z']))),
          h('span', { style: { color: 'var(--text-muted)', fontSize: 12 } }, 'UX Reviewer'));

    return {
      accountInitials: acctInitials,
      accountNameEl,
      isList: s.view === 'list',
      isReview: s.view === 'review',
      search: s.search,
      onSearch: e => this.setState({ search: e.target.value, visibleCount: 30, loadingMore: false }),
      projectCountLabel: s.projects.length + ' project' + (s.projects.length === 1 ? '' : 's') + (q ? ' · ' + projFiltered.length + ' matching' : ''),
      projects,
      onListScroll: e => this.onListScroll(e),
      showLoadingMore: s.loadingMore,
      hasMoreProjects: projShown.length < projFiltered.length,
      loadedRangeLabel: 'Showing ' + projShown.length + ' of ' + projFiltered.length,
      hasProjects: projects.length > 0,
      noProjects: projects.length === 0,
      openNew: () => this.openNew(),
      selectMode: s.selectMode,
      toggleSelectMode: () => this.toggleSelectMode(),
      selBtnLabel: 'Select',
      selBtnClick: s.selectMode ? (() => {}) : (() => this.toggleSelectMode()),
      selBtnCursor: s.selectMode ? 'default' : 'pointer',
      selBtnPE: s.selectMode ? 'none' : 'auto',
      selBtnBg: s.selectMode ? 'var(--neutral-100)' : 'var(--surface-card)',
      selBtnColor: s.selectMode ? 'var(--text-faint)' : 'var(--text-strong)',
      selBtnBorder: s.selectMode ? 'var(--border-subtle)' : 'var(--border-default)',
      toggleSelectAll: this.toggleSelectAll(visibleIds),
      allBoxBorder: allSelected ? '#0D418C' : 'var(--border-strong)',
      allBoxBg: allSelected ? '#0D418C' : 'transparent',
      allBoxTick: allSelected ? tick : '',
      selAllLabel: allSelected ? 'Deselect all' : 'Select all',
      selCountLabel: selCount ? selCount + ' selected' : 'None selected',
      noSelection: selCount === 0,
      bulkDelete: () => this.bulkDelete(),
      bulkBg: selCount ? 'var(--danger-500)' : 'var(--neutral-400)',
      bulkOpacity: selCount ? 1 : .55,
      bulkCursor: selCount ? 'pointer' : 'not-allowed',
      bulkCountSuffix: selCount ? ' (' + selCount + ')' : '',

      // review
      previewEl,
      htmlDropdownEl,
      previewZoom: 1,
      previewViewportRef: (el) => this.setPreviewViewport(el),
      reviewGridCols: s.panelOpen ? '236px 1fr 340px' : '236px 1fr 0px',
      panelClosed: !s.panelOpen,
      togglePanel: () => this.togglePanel(),
      panelToggleD: s.panelOpen ? 'm9 18 6-6-6-6' : 'm15 18-6-6 6-6',
      panelToggleTitle: s.panelOpen ? 'Hide comments' : 'Show comments',
      activeProjectName: active.name,
      activeProjectDomain: active.domain,
      filesEl, reviewersEl,
      pinsEl, commentCardsEl, activityEl: activityWrapEl,
      overlayCursor: cm ? 'crosshair' : 'default',
      overlayPE: cm ? 'auto' : 'none',
      canvasClick: e => this.canvasClick(e),
      toggleCommentMode: () => this.toggleCommentMode(),
      cmLabel: cm ? 'Click preview to place' : 'Comment',
      cmBg: cm ? '#0D418C' : 'var(--surface-card)',
      cmColor: cm ? '#fff' : 'var(--text-strong)',
      cmBorder: cm ? '#0D418C' : 'var(--border-default)',
      backToList: () => this.backToList(),

      totalCount: comments.length,
      openCount, resolvedCount,
      tabComments: s.tab === 'comments',
      tabActivity: s.tab === 'activity',
      setTabComments: this.setTab('comments'),
      setTabActivity: this.setTab('activity'),
      tabCommentsColor: s.tab === 'comments' ? 'var(--text-strong)' : 'var(--text-muted)',
      tabCommentsBorder: s.tab === 'comments' ? '#0D418C' : 'transparent',
      tabActivityColor: s.tab === 'activity' ? 'var(--text-strong)' : 'var(--text-muted)',
      tabActivityBorder: s.tab === 'activity' ? '#0D418C' : 'transparent',

      setFilterAll: this.setFilter('all'),
      setFilterOpen: this.setFilter('open'),
      setFilterResolved: this.setFilter('resolved'),
      fAllBorder: fa.border, fAllBg: fa.bg, fAllColor: fa.color,
      fOpenBorder: fo.border, fOpenBg: fo.bg, fOpenColor: fo.color,
      fResBorder: fr.border, fResBg: fr.bg, fResColor: fr.color,

      // modal
      modalOpen: !!s.modal,
      modalIsNew: !!s.modal && s.modal.mode === 'new',
      modalTitle: s.modal ? (s.modal.mode === 'edit' ? 'Rename project' : 'New review project') : '',
      modalSub: s.modal ? (s.modal.mode === 'edit' ? 'Update the project name.' : 'Upload the build you want reviewed.') : '',
      modalCta: s.modal ? (s.modal.mode === 'edit' ? 'Save' : 'Create project') : '',
      modalName: s.modal ? s.modal.name : '',
      onModalName: e => this.onModalName(e),
      dropzoneEl,
      modalFilesEl,
      saveProject: () => this.saveProject(),
      closeModal: () => this.closeModal(),
      stop: e => e.stopPropagation(),

      // confirm
      confirmOpen: !!s.confirm,
      confirmTitle: s.confirm && s.confirm.bulk ? 'Delete ' + s.confirm.name + '?' : 'Delete project?',
      confirmBody: s.confirm
        ? (s.confirm.bulk
            ? 'The selected projects and all their comments will be permanently removed. This can\u2019t be undone.'
            : '\u201C' + s.confirm.name + '\u201D and all its comments will be permanently removed. This can\u2019t be undone.')
        : '',
      cancelConfirm: () => this.cancelConfirm(),
      doDeleteProject: () => this.doDeleteProject(),

      // toast
      toastShow: !!s.toast,
      toastMsg: s.toast ? s.toast.msg : '',
      toastIcon,
      toastIconColor: toastKind === 'del' ? '#ff8e84' : 'var(--brand-300)',
    };
  }
}

const menuBtn = { display: 'flex', alignItems: 'center', gap: 8, width: '100%', border: 'none', background: 'transparent', padding: '8px 9px', borderRadius: 7, fontSize: 13, fontWeight: 500, color: 'var(--text-body)', cursor: 'pointer', textAlign: 'left' };
const actionBtn = { display: 'inline-flex', alignItems: 'center', gap: 6, height: 28, padding: '0 10px', borderRadius: 8, border: 'none', background: 'transparent', color: 'var(--text-muted)', fontSize: 12, fontWeight: 600, cursor: 'pointer' };
</script>
</body>
</html>
