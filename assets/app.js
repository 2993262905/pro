'use strict';
/* 锈蚀死域社区 · 社区软件版前端逻辑 */

const FALLBACK = {"about":{"eyebrow":"ABOUT US","paragraphs":["锈蚀死域是一个围绕《铁锈战争》模组文化的玩家社区。我们做这款社区软件的初衷很简单：让模组作者有个体面的地方发布作品，让新玩家遇到问题时能第一时间找到人问。","社区长期维护模组索引、图文教程与答疑频道，所有内容由成员共建。软件与网站均由社区自维护，非商业运营。"],"points":[{"desc":"模组与地图作品有专门的展示与版本管理，不再淹没在聊天记录里。","title":"作品优先"},{"desc":"AI 助手先答一遍，答不了的转帖子，让每个问题都留下可搜索的答案。","title":"问答沉淀"},{"desc":"频道分区、值班答疑、组队黑名单——热闹但不吵闹。","title":"氛围友好"}],"title":"关于锈蚀死域社区"},"ai":{"botName":"锈锈助手","eyebrow":"AI ASSISTANT","quickPrompts":["单位 ini 怎么写？","贴图不显示怎么办？","怎么做一张地图？","模组怎么打包发布？"],"subtitle":"模组问题先问它：ini 写法、报错排查、地图与单位制作。下面是可直接试用的演示版。","title":"AI 聊天 · 锈锈助手","welcome":"你好，我是锈锈助手。可以问我：单位 ini 怎么写、贴图不显示怎么办、怎么做地图，或者点下面的快捷问题试试。"},"chat":{"eyebrow":"LIVE CHAT","rooms":[{"id":"lobby","messages":[{"name":"阿盐","text":"早，新版教程帖发了，ini 入门的，欢迎来挑错","time":"09:02"},{"name":"西瓜霜","text":"新地图包也上线了，今晚有人测图吗","time":"09:05"},{"name":"路人甲","text":"刚入坑，这游戏模组也太多了吧","time":"09:07"},{"name":"Modder小北","text":"入坑先玩钢铁洪流，作者人很好（我装的）","time":"09:09"}],"name":"社区大厅","online":186,"reply":"大厅收到，消息已送达（演示版）。"},{"id":"modhelp","messages":[{"name":"求带","text":"单位贴图白框的问题解决了，是路径大小写，谢谢各位","time":"08:41"},{"name":"阿盐","text":"经典问题，记得把帖子标记已解决，方便后面的人搜","time":"08:43"},{"name":"像素君","text":"有人知道 turret 角度限制写哪个字段吗","time":"08:58"}],"name":"模组答疑","online":74,"reply":"答疑频道值班中，有问题直接发，看到就会回（演示版）。"},{"id":"team","messages":[{"name":"队长别开腔","text":"今晚 20:00 六人对战，死域边境新图，还差 2 个","time":"08:30"},{"name":"西瓜霜","text":"+1，我带新图作者 buff","time":"08:33"},{"name":"手速一般","text":"萌新能来吗，保证不送","time":"08:47"}],"name":"开黑组队","online":52,"reply":"已帮你喊话，组队频道马上就有人接（演示版）。"}],"subtitle":"三个常驻频道：大厅闲聊、模组答疑、开黑组队。下面是演示版，发条消息试试。","title":"社区聊天"},"download":{"eyebrow":"DOWNLOAD","note":"当前为展示页，下载按钮为占位；正式包请在社区公告帖获取。","platforms":[{"name":"Windows 客户端","note":"Win 10 / 11 64-bit","primary":true},{"name":"Android 客户端","note":"Android 9.0+","primary":false},{"name":"网页版","note":"免安装，浏览器直接用","primary":false}],"size":"38 MB","subtitle":"锈蚀死域社区软件，登录后发帖、聊天与 AI 助手全部解锁。","title":"获取社区软件","updated":"2026-10-12","version":"v2.4.0"},"features":{"eyebrow":"CORE FEATURES","items":[{"desc":"模组发布、图文教程、问题求助、版本公告——发帖、回帖、收藏，作品不再沉底。","icon":"posts","title":"帖子广场"},{"desc":"「锈锈助手」随时在线：ini 参数怎么写、报错怎么查、地图怎么做，先问它再翻帖。","icon":"ai","title":"AI 聊天助手"},{"desc":"时间戳转换、颜色代码、字数统计、进制转换……做模组和日常都会用到的小家伙们。","icon":"tools","title":"日常小工具"},{"desc":"大厅闲聊、模组答疑、开黑组队，多个频道随便串门，喊人不用再跨三个群。","icon":"chat","title":"社区聊天"}],"subtitle":"帖子、AI 聊天、小工具、实时聊天——模组玩家日常要用的，都在这里。","title":"一个软件，装下整个社区"},"footer":{"copyright":"© 2019-2026 锈蚀死域社区 · Rusty Deadzone Community","icp":"本站为社区非商业性站点 · 请勿用于商业用途","links":[{"href":"#posts","label":"帖子广场"},{"href":"#ai","label":"AI 助手"},{"href":"#tools","label":"小工具"},{"href":"#chat","label":"社区聊天"}]},"hero":{"badge":"社区软件 v2.4 现已发布","panelLines":["阿盐 发布了教程《units.ini 入门指南》","Modder小北 更新了模组《钢铁洪流》v1.7","聊天大厅正在组队：今晚 20:00 六人对战","AI 助手今日已回答 486 个模组问题","新成员「西瓜霜」发布了第一张自制地图"],"panelTitle":"社区动态 · LIVE","primary":{"href":"#posts","label":"去看帖子"},"secondary":{"href":"#download","label":"下载社区软件"},"stats":[{"label":"注册成员","value":"8,642"},{"label":"模组作品","value":"1,307"},{"label":"社区帖子","value":"26,915"},{"label":"当前在线","value":"312"}],"subtitle":"为《铁锈战争》模组玩家与作者打造的社区软件：发帖分享作品、向 AI 助手请教模组制作、用小工具处理日常杂活，再到聊天大厅里喊上一队人开黑。","titleBottom":"模组社区","titleTop":"锈蚀死域"},"meta":{"accent":"#38bdf8","accent2":"#6366f1","description":"锈蚀死域社区 —— 《铁锈战争》模组社区软件：发帖交流、AI 助手、实用小工具与实时聊天，和模组作者与玩家一起玩转模组。","favicon":"","logoImage":"","logoText":"锈蚀死域","title":"锈蚀死域社区"},"nav":[{"href":"#home","label":"首页"},{"href":"#posts","label":"帖子"},{"href":"#ai","label":"AI 聊天"},{"href":"#tools","label":"小工具"},{"href":"#chat","label":"聊天"},{"href":"#about","label":"关于"}],"navCta":{"href":"#chat","label":"加入社区"},"posts":{"eyebrow":"COMMUNITY POSTS","items":[{"author":"锈蚀君","cat":"公告","excerpt":"本次更新：发帖编辑器支持粘贴图片与 ini 代码块高亮；聊天新增频道置顶；AI 助手接入模组知识库。旧版本将在一周后停止自动更新，请尽快升级。","pinned":true,"replies":86,"role":"管理员","time":"10 分钟前","title":"社区软件 v2.4 更新说明：帖子支持图片与代码块","views":4210},{"author":"Modder小北","cat":"模组发布","excerpt":"新增重型攻城炮、维修无人机等 12 个单位，全部 ini 源码开放可改。适配游戏 1.15，含中文注释，新手也能照着魔改。","replies":154,"role":"模组作者","time":"32 分钟前","title":"《钢铁洪流》单位包 v1.7：新增 12 个单位，附 ini 源码","views":8932},{"author":"阿盐","cat":"教程","excerpt":"从复制模板、改名字与贴图、调血量造价，到放进游戏测试，一步不落。文末附常见报错对照表，写完第一个单位只需要二十分钟。","replies":231,"role":"教程组","time":"1 小时前","title":"新手向：从零写一个自定义单位（units.ini 全流程配图）","views":12567},{"author":"求带","cat":"求助","excerpt":"ini 里 image 写了，文件也在 mods 文件夹，就是进游戏白框。已附完整 ini 和目录截图，麻烦大佬们帮忙看看是哪一步漏了。","replies":47,"role":"成员","time":"2 小时前","title":"自定义单位进游戏不显示贴图，排查两天了求看看","views":1893},{"author":"西瓜霜","cat":"模组发布","excerpt":"四张图分别是废弃工业区、干涸河床、双子峡谷与中央熔炉，出生点与资源点全部重新标定，适合 3v3 正规对局，欢迎组队测图反馈。","replies":68,"role":"地图作者","time":"3 小时前","title":"地图包「死域边境」：4 张 6 人对战图，资源点重新平衡","views":3345},{"author":"社区运营","cat":"讨论","excerpt":"候选：模组一键打包、帖子草稿箱、聊天消息搜索、深色模式跟随系统。票数最高的优先排期，来投出你的一票。","replies":342,"role":"运营","time":"5 小时前","title":"投票：下个版本最想先补哪个功能？","views":6711}],"subtitle":"最新最热的社区帖子，点分类筛选；登录社区软件后即可发帖与回帖。","title":"帖子广场"},"tools":{"eyebrow":"DAILY TOOLS","subtitle":"不用登录、不用安装，打开就能用——全部在本地运行，不上传任何数据。","title":"日常小工具"}};

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

const ICONS = {
  posts: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  ai: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l1.9 5.7L20 9.6l-6.1 1.9L12 17.2l-1.9-5.7L4 9.6l6.1-1.9z"/><path d="M19 15.5l.8 2.2 2.2.8-2.2.8L19 21.5l-.8-2.2-2.2-.8 2.2-.8z"/></svg>',
  tools: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3z"/></svg>',
  chat: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
};

const AVATAR_COLORS = ['#0ea5e9', '#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6'];
function avatarColor(name) {
  let h = 0;
  for (const c of String(name || '?')) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return AVATAR_COLORS[h % AVATAR_COLORS.length];
}
function nowTime() {
  const d = new Date();
  return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}
function bubbleHTML(name, text, time, me) {
  const initial = esc(String(name || '?').slice(0, 1));
  const who = me ? '' : `<div class="who">${esc(name)}<span class="when">${esc(time || '')}</span></div>`;
  return `<div class="msg${me ? ' me' : ''}"><span class="msg-avatar" style="background:${me ? '' : avatarColor(name)}">${initial}</span><div class="bubble">${who}${esc(text)}</div></div>`;
}

/* ---------------- 渲染 ---------------- */

let DATA = null;

function render(data) {
  DATA = data;
  const m = data.meta || {};
  document.title = m.title || '锈蚀死域社区';
  const md = $('#metaDescription'); if (md) md.setAttribute('content', m.description || '');
  $('#brandText').textContent = m.logoText || '锈蚀死域';

  const nav = $('#navLinks');
  nav.innerHTML = (data.nav || []).map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join('');
  const cta = $('#navCta');
  if (data.navCta) { cta.textContent = data.navCta.label; cta.setAttribute('href', data.navCta.href); }

  const h = data.hero || {};
  $('#heroBadge').textContent = h.badge || '';
  $('#heroTitleTop').textContent = h.titleTop || '';
  $('#heroTitleBottom').textContent = h.titleBottom || '';
  $('#heroSubtitle').textContent = h.subtitle || '';
  if (h.primary) { const b = $('#heroPrimary'); b.textContent = h.primary.label; b.setAttribute('href', h.primary.href); }
  if (h.secondary) { const b = $('#heroSecondary'); b.textContent = h.secondary.label; b.setAttribute('href', h.secondary.href); }
  $('#heroStats').innerHTML = (h.stats || []).map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join('');
  $('#panelTitle').textContent = h.panelTitle || '社区动态';
  $('#panelLines').innerHTML = (h.panelLines || []).map((l) => `<li>${esc(l)}</li>`).join('');

  const f = data.features || {};
  $('#featuresEyebrow').textContent = f.eyebrow || '';
  $('#featuresTitle').textContent = f.title || '';
  $('#featuresSubtitle').textContent = f.subtitle || '';
  $('#featureGrid').innerHTML = (f.items || []).map((it) => `
    <div class="feature-card">
      <div class="feature-icon">${ICONS[it.icon] || ICONS.posts}</div>
      <h3>${esc(it.title)}</h3><p>${esc(it.desc)}</p>
    </div>`).join('');

  renderPosts(data.posts || {});
  renderAI(data.ai || {});
  const t = data.tools || {};
  $('#toolsEyebrow').textContent = t.eyebrow || '';
  $('#toolsTitle').textContent = t.title || '';
  $('#toolsSubtitle').textContent = t.subtitle || '';
  renderChat(data.chat || {});
  renderDownload(data.download || {});

  const a = data.about || {};
  $('#aboutEyebrow').textContent = a.eyebrow || '';
  $('#aboutTitle').textContent = a.title || '';
  $('#aboutBody').innerHTML = (a.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join('');
  $('#aboutPoints').innerHTML = (a.points || []).map((p) => `<div class="about-point"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p></div>`).join('');

  const ft = data.footer || {};
  $('#footerLinks').innerHTML = (ft.links || []).map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join('');
  $('#footerCopy').textContent = ft.copyright || '';
  $('#footerIcp').textContent = ft.icp || '';

  wireTools();
}

/* ---------------- 帖子 ---------------- */

let postFilter = '全部';
function renderPosts(posts) {
  $('#postsEyebrow').textContent = posts.eyebrow || '';
  $('#postsTitle').textContent = posts.title || '';
  $('#postsSubtitle').textContent = posts.subtitle || '';
  const cats = ['全部'];
  (posts.items || []).forEach((p) => { if (!cats.includes(p.cat)) cats.push(p.cat); });
  const chips = $('#postChips');
  chips.innerHTML = cats.map((c) => `<button class="chip${c === postFilter ? ' active' : ''}" data-cat="${esc(c)}" type="button">${esc(c)}</button>`).join('');
  chips.querySelectorAll('.chip').forEach((ch) => ch.addEventListener('click', () => { postFilter = ch.dataset.cat; renderPosts(posts); }));

  const list = (posts.items || []).filter((p) => postFilter === '全部' || p.cat === postFilter);
  $('#postList').innerHTML = list.map((p) => `
    <article class="post-item">
      <div class="post-top">
        <span class="post-cat${p.cat === '求助' ? ' hot' : ''}">${esc(p.cat)}</span>
        ${p.pinned ? '<span class="post-pin">置顶</span>' : ''}
        <h3>${esc(p.title)}</h3>
      </div>
      <p class="post-excerpt">${esc(p.excerpt)}</p>
      <div class="post-meta">
        <span><b>${esc(p.author)}</b> · ${esc(p.role || '')}</span>
        <span>${esc(p.time)}</span>
        <span>回复 ${esc(p.replies)}</span>
        <span>浏览 ${esc(p.views)}</span>
        <span style="margin-left:auto">点击展开</span>
      </div>
    </article>`).join('') || '<p style="text-align:center;color:var(--faint)">这个分类暂时没有帖子</p>';
  document.querySelectorAll('.post-item').forEach((el) => el.addEventListener('click', () => el.classList.toggle('open')));
}

/* ---------------- AI 聊天（演示版，本地规则回复） ---------------- */

const AI_RULES = [
  { keys: ['贴图', '图片', '不显示', '白框', 'image'], reply: '贴图不显示按这个顺序查：\n1. ini 里 image 路径与文件名大小写完全一致；\n2. 图片放在模组文件夹内、路径不带中文空格；\n3. 格式用 png，尺寸建议 2 的幂；\n4. 改完完全重启游戏，热重载不刷贴图。\n社区置顶求助帖里有同款案例，十有八九是大小写。' },
  { keys: ['地图'], reply: '做地图入门路线：\n1. 先用官方编辑器开一张空白图，铺地形与出生点；\n2. 资源点按「近少远多」摆，中央留争夺区；\n3. 导出后进游戏自测一遍视野与寻路；\n4. 打包时带上缩略图，发到帖子广场的「模组发布」。\n西瓜霜的地图包帖子附了完整的标点规范，可以抄作业。' },
  { keys: ['打包', '发布', '怎么发', '上传模组'], reply: '发布模组流程：\n1. 文件夹命名用英文+版本号，如 steel_flood_v17；\n2. 自查 ini 无报错、贴图路径无误；\n3. 打包成 zip，写清适配的游戏版本；\n4. 到帖子广场发「模组发布」，附截图与更新说明。\n发完把链接丢到聊天大厅，会有人来试玩反馈。' },
  { keys: ['报错', '崩溃', '闪退', '进不去', 'error'], reply: '报错排查三板斧：\n1. 先看日志最后一行，记下报错的 ini 文件名和行号；\n2. 逐段注释刚改过的字段，二分定位是哪一行；\n3. 常见原因：字段名拼写、漏了引号、数值带了单位。\n还定位不到的话，把 ini 和日志发到求助区，记得附游戏版本。' },
  { keys: ['ini', '单位', '怎么写', '参数'], reply: '写自定义单位先抓四件套：\n[core] 名字、血量 maxHp、造价 price；\n[graphics] 贴图 image 与尺寸；\n[movement] 移动类型与速度；\n[attack] 武器与伤害。\n建议直接复制一个原版单位改，别从空文件写。阿盐的置顶教程《units.ini 入门指南》是全流程配图版，照着改二十分钟出第一个单位。' },
  { keys: ['下载', '客户端', '软件', '安装'], reply: '社区软件在本站「下载」区有 Windows 与 Android 版，装好用社区账号登录即可；不想装也能用网页版，发帖、聊天、AI 助手都在。下载页的链接目前是占位，正式包看公告帖。' },
  { keys: ['你好', '您好', 'hi', 'hello', '在吗'], reply: '在的！我是锈锈助手，模组相关的问题都可以问我：ini 写法、贴图与报错排查、地图制作、发布流程。也可以点下面的快捷问题。' },
  { keys: ['谢谢', '辛苦'], reply: '不客气，能帮上忙就好。问题解决了记得回帖子标个「已解决」，后面的人就能直接搜到你的帖子了。' },
];
const AI_DEFAULT = '这个问题我先记下。能展开说说吗？比如你想做的效果、现在的 ini 写法，或者把报错原文发我。也可以换个问法——比如问我「贴图不显示怎么办」或者「单位 ini 怎么写」。';

let aiBusy = false;
function renderAI(ai) {
  $('#aiEyebrow').textContent = ai.eyebrow || '';
  $('#aiTitle').textContent = ai.title || '';
  $('#aiSubtitle').textContent = ai.subtitle || '';
  $('#aiBotName').textContent = ai.botName || 'AI 助手';
  const box = $('#aiMessages');
  box.innerHTML = bubbleHTML(ai.botName || 'AI 助手', ai.welcome || '你好，我是社区 AI 助手。', nowTime(), false);
  const qp = $('#aiPrompts');
  qp.innerHTML = (ai.quickPrompts || []).map((q) => `<button type="button">${esc(q)}</button>`).join('');
  qp.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => sendAI(b.textContent)));
  $('#aiForm').addEventListener('submit', (e) => { e.preventDefault(); sendAI($('#aiInput').value); });
}

function aiReply(text) {
  const s = String(text || '').toLowerCase();
  for (const r of AI_RULES) if (r.keys.some((k) => s.includes(k))) return r.reply;
  return AI_DEFAULT;
}

function sendAI(raw) {
  const text = String(raw || '').trim();
  if (!text || aiBusy) return;
  const ai = (DATA && DATA.ai) || {};
  const name = ai.botName || 'AI 助手';
  const box = $('#aiMessages');
  box.insertAdjacentHTML('beforeend', bubbleHTML('我', text, nowTime(), true));
  $('#aiInput').value = '';
  box.scrollTop = box.scrollHeight;
  aiBusy = true;
  const typing = document.createElement('div');
  typing.className = 'typing';
  typing.textContent = name + ' 正在输入…';
  box.appendChild(typing);
  box.scrollTop = box.scrollHeight;
  setTimeout(() => {
    typing.remove();
    box.insertAdjacentHTML('beforeend', bubbleHTML(name, aiReply(text), nowTime(), false));
    box.scrollTop = box.scrollHeight;
    aiBusy = false;
  }, 700 + Math.random() * 600);
}

/* ---------------- 小工具 ---------------- */

let toolsWired = false;
function wireTools() {
  if (toolsWired) return;
  toolsWired = true;
  const tick = () => { const el = $('#tsNow'); if (el) el.textContent = Math.floor(Date.now() / 1000) + ' 秒 / ' + Date.now() + ' 毫秒'; };
  tick(); setInterval(tick, 1000);

  $('#tsBtn').addEventListener('click', () => {
    const v = $('#tsInput').value.trim();
    const n = Number(v);
    const out = $('#tsOut');
    if (!v || isNaN(n)) { out.innerHTML = '先输入一个数字时间戳。当前时间戳：<b id="tsNow"></b>'; tick(); return; }
    const ms = v.length >= 13 ? n : n * 1000;
    const d = new Date(ms);
    out.innerHTML = '北京时间：<b>' + d.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai', hour12: false }) + '</b>（按' + (v.length >= 13 ? '毫秒' : '秒') + '解析）';
  });

  const colorSync = (hex) => {
    if (!/^#?[0-9a-fA-F]{6}$/.test(hex)) return;
    const h = hex.startsWith('#') ? hex : '#' + hex;
    $('#colorInput').value = h;
    $('#colorHex').value = h;
    const r = parseInt(h.slice(1, 3), 16), g = parseInt(h.slice(3, 5), 16), b = parseInt(h.slice(5, 7), 16);
    $('#colorRgb').textContent = r + ', ' + g + ', ' + b;
  };
  $('#colorInput').addEventListener('input', (e) => colorSync(e.target.value));
  $('#colorHex').addEventListener('change', (e) => colorSync(e.target.value.trim()));

  $('#wcInput').addEventListener('input', (e) => {
    const v = e.target.value;
    const han = (v.match(/[\u4e00-\u9fa5]/g) || []).length;
    const lines = v ? v.split('\n').length : 0;
    $('#wcOut').textContent = '字符 ' + v.length + ' · 汉字 ' + han + ' · 行数 ' + lines;
  });

  $('#baseBtn').addEventListener('click', () => {
    const v = $('#baseInput').value.trim();
    const n = parseInt(v, 10);
    const out = $('#baseOut');
    if (!v || isNaN(n)) { out.textContent = '先输入一个十进制整数'; return; }
    out.innerHTML = '二进制 <b>' + n.toString(2) + '</b> · 八进制 <b>' + n.toString(8) + '</b> · 十六进制 <b>' + n.toString(16).toUpperCase() + '</b>';
  });
}

/* ---------------- 社区聊天（演示版） ---------------- */

let currentRoom = null;
function renderChat(chat) {
  $('#chatEyebrow').textContent = chat.eyebrow || '';
  $('#chatTitle').textContent = chat.title || '';
  $('#chatSubtitle').textContent = chat.subtitle || '';
  const rooms = chat.rooms || [];
  const tabs = $('#roomTabs');
  tabs.innerHTML = rooms.map((r) => `<button class="room-tab" data-room="${esc(r.id)}" type="button">${esc(r.name)}<span class="cnt">${esc(r.online || '')} 在线</span></button>`).join('');
  tabs.querySelectorAll('.room-tab').forEach((b) => b.addEventListener('click', () => openRoom(b.dataset.room)));
  $('#chatForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#chatInput');
    const text = input.value.trim();
    if (!text || !currentRoom) return;
    input.value = '';
    const box = $('#chatMessages');
    box.insertAdjacentHTML('beforeend', bubbleHTML('我', text, nowTime(), true));
    box.scrollTop = box.scrollHeight;
    const room = (DATA.chat.rooms || []).find((r) => r.id === currentRoom);
    const members = (room && room.messages || []).map((m) => m.name);
    const from = members[Math.floor(Math.random() * members.length)] || '社区成员';
    setTimeout(() => {
      box.insertAdjacentHTML('beforeend', bubbleHTML(from, (room && room.reply) || '收到！', nowTime(), false));
      box.scrollTop = box.scrollHeight;
    }, 1100);
  });
  if (rooms.length) openRoom(rooms[0].id);
}
function openRoom(id) {
  currentRoom = id;
  document.querySelectorAll('.room-tab').forEach((b) => b.classList.toggle('active', b.dataset.room === id));
  const room = ((DATA && DATA.chat && DATA.chat.rooms) || []).find((r) => r.id === id);
  const box = $('#chatMessages');
  box.innerHTML = ((room && room.messages) || []).map((m) => bubbleHTML(m.name, m.text, m.time, false)).join('');
  box.scrollTop = box.scrollHeight;
}

/* ---------------- 下载 ---------------- */

function renderDownload(dl) {
  $('#downloadEyebrow').textContent = dl.eyebrow || '';
  $('#downloadTitle').textContent = dl.title || '';
  $('#downloadSubtitle').textContent = dl.subtitle || '';
  $('#downloadMeta').innerHTML = '版本 <b>' + esc(dl.version || '') + '</b> · 体积 <b>' + esc(dl.size || '') + '</b> · 更新于 <b>' + esc(dl.updated || '') + '</b>';
  $('#downloadPlatforms').innerHTML = (dl.platforms || []).map((p) => `
    <div class="platform">
      <div class="p-name">${esc(p.name)}</div>
      <div class="p-note">${esc(p.note)}</div>
      <a class="btn ${p.primary ? 'btn-primary' : 'btn-ghost'}" href="#" onclick="return false">下载</a>
    </div>`).join('');
  $('#downloadNote').textContent = dl.note || '';
}

/* ---------------- 启动 ---------------- */

const burger = $('#navBurger');
if (burger) burger.addEventListener('click', () => $('#navLinks').classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach((a) => a.addEventListener('click', () => $('#navLinks').classList.remove('open')));

fetch('/api/content')
  .then((r) => (r.ok ? r.json() : Promise.reject(new Error('bad status'))))
  .then((data) => render(data))
  .catch(() => { if (FALLBACK) render(FALLBACK); });
