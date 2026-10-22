/* ============================================================
   锈蚀死域社区 · 前台脚本
   - 正常访问：纯展示
   - ?edit=1 ：由控制台 iframe 加载，元素带编辑锚点
   ============================================================ */

const EDIT_MODE = /(?:^|[?&])edit=1(?:&|$)/.test(location.search);

const ICONS = {
  pulse:
    '<path d="M3 12h4l2.5-6 4 12 2.5-6h5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  storm:
    '<path d="M7 15a4 4 0 0 1 .6-7.95A5.5 5.5 0 0 1 18 8.2 3.8 3.8 0 0 1 17.6 15" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12v9m0 0l-3-3m3 3l3-3" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  build:
    '<path d="M4 20h16M6 20V9l6-4 6 4v11M10 20v-5h4v5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  users:
    '<circle cx="9" cy="8" r="3.2" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M16 5.4a3 3 0 0 1 0 5.2M17.5 19a5.5 5.5 0 0 0-2-4.3" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',
  shield:
    '<path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  devices:
    '<rect x="2.5" y="5" width="13" height="10" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.9"/><rect x="16.5" y="9" width="5" height="10" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M6 19h5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',
  windows:
    '<path d="M4 5.6l7-1v7H4v-6zM12 4.4l8-1.1v8.3h-8V4.4zM4 12.8h7v7l-7-1v-6zM12 12.8h8v8.3l-8-1.1v-7.2z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  android:
    '<path d="M6 10.5v6a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-6H6z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M6 10.5a6 6 0 0 1 12 0M8.5 5.2L7.4 3.6M15.5 5.2l1.1-1.6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="9.8" cy="8" r=".9" fill="currentColor"/><circle cx="14.2" cy="8" r=".9" fill="currentColor"/>',
  apple:
    '<path d="M15.6 12.4c0-2 1.6-3 1.7-3.1-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2.1 2.5 2 1-.1 1.4-.6 2.6-.6s1.5.6 2.6.6c1.1 0 1.8-1 2.4-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.1-3z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M13.6 6.2c.5-.7.9-1.6.8-2.6-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.5.9.1 1.8-.5 2.3-1.1z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  download:
    '<path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  arrow: '<path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
};

/* 断网 / 直接打开文件时的兜底内容 */
const FALLBACK = {"about":{"eyebrow":"ABOUT US","paragraphs":["锈蚀死域是一个围绕《铁锈战争》模组文化的玩家社区。我们做这款社区软件的初衷很简单：让模组作者有个体面的地方发布作品，让新玩家遇到问题时能第一时间找到人问。","社区长期维护模组索引、图文教程与答疑频道，所有内容由成员共建。软件与网站均由社区自维护，非商业运营。"],"points":[{"desc":"模组与地图作品有专门的展示与版本管理，不再淹没在聊天记录里。","title":"作品优先"},{"desc":"AI 助手先答一遍，答不了的转帖子，让每个问题都留下可搜索的答案。","title":"问答沉淀"},{"desc":"频道分区、值班答疑、组队黑名单——热闹但不吵闹。","title":"氛围友好"}],"title":"关于锈蚀死域社区"},"download":{"eyebrow":"DOWNLOAD","hash":"见社区公告帖","mirrors":[{"name":"官方线路（高速）","url":"#"},{"name":"备用线路","url":"#"}],"note":"当前为展示页，下载按钮为占位；正式安装包请在社区公告帖获取。","platforms":[{"icon":"windows","name":"Windows 客户端","note":"Win 10 / 11 64-bit","primary":true,"url":"#"},{"icon":"android","name":"Android 客户端","note":"Android 9.0+","primary":false,"url":"#"},{"icon":"devices","name":"网页版","note":"免安装，浏览器直接用","primary":false,"url":"#"}],"size":"38 MB","subtitle":"登录社区账号，发帖、AI 助手、聊天频道全部解锁。","title":"获取社区软件","updated":"2026-10-12","version":"v2.4.0"},"features":{"eyebrow":"APP FEATURES","items":[{"desc":"模组发布、图文教程、问题求助、版本公告——发帖、回帖、收藏，作品不再沉底。","icon":"users","title":"帖子广场"},{"desc":"「锈锈助手」随时在线：ini 参数怎么写、报错怎么查、地图怎么做，先问它再翻帖。","icon":"pulse","title":"AI 聊天助手"},{"desc":"时间戳转换、颜色代码、字数统计、进制转换——做模组和日常都会用到的小家伙们。","icon":"build","title":"日常小工具"},{"desc":"大厅闲聊、模组答疑、开黑组队，多个频道随便串门，喊人不用再跨三个群。","icon":"devices","title":"社区聊天"},{"desc":"社区维护的模组与地图索引，按版本分类、附作者说明，找作品不用全网翻聊天记录。","icon":"storm","title":"模组资源库"},{"desc":"从 ini 入门到进阶单位制作，图文教程成套摆好，新人照着走就能做出第一个单位。","icon":"shield","title":"教程与答疑"}],"subtitle":"帖子、AI 聊天、小工具、实时聊天——模组玩家日常要用的，都装在这一个软件里。","title":"一个软件，装下整个社区"},"footer":{"copyright":"© 2019-2026 锈蚀死域社区 · Rusty Deadzone Community","icp":"本站为社区非商业性站点 · 请勿用于商业用途","links":[{"href":"#features","label":"功能"},{"href":"#gallery","label":"界面"},{"href":"#download","label":"下载"},{"href":"#about","label":"关于"}]},"gallery":{"eyebrow":"APP PREVIEW","items":[{"caption":"帖子广场 · 发帖、回帖与收藏","src":""},{"caption":"AI 助手 · 模组问题随时问","src":""},{"caption":"聊天频道 · 组队开黑喊人","src":""},{"caption":"小工具 · 时间戳、颜色、字数随手用","src":""}],"subtitle":"帖子、AI 助手、聊天、小工具——四个主界面抢先看，实际界面以软件内为准。","title":"软件界面一览"},"hero":{"badge":"社区软件 v2.4 现已发布","cardImage":"","primary":{"href":"#download","label":"下载社区软件"},"secondary":{"href":"#features","label":"看看功能"},"stats":[{"label":"注册成员","value":"8,642"},{"label":"模组作品","value":"1,307"},{"label":"社区帖子","value":"26,915"},{"label":"当前在线","value":"312"}],"subtitle":"为《铁锈战争》模组玩家与作者打造的社区软件：发帖分享作品、向 AI 助手请教模组制作、用小工具处理日常杂活，再到聊天大厅里喊上一队人开黑。","terminal":{"lines":["$ xiushi-app feed --channel 社区动态","阿盐 发布了教程《units.ini 入门指南》","Modder小北 更新了模组《钢铁洪流》v1.7","聊天大厅组队中：今晚 20:00 六人对战","AI 助手今日已回答 486 个模组问题","新成员「西瓜霜」发布了第一张自制地图"],"title":"xiushi-app --feed"},"titleBottom":"模组社区","titleTop":"锈蚀死域"},"meta":{"accent":"#38bdf8","accent2":"#6366f1","description":"锈蚀死域社区 —— 《铁锈战争》模组社区软件：发帖交流、AI 助手、实用小工具与实时聊天，和模组作者与玩家一起玩转模组。","favicon":"","logoImage":"","logoText":"锈蚀死域","title":"锈蚀死域社区"},"nav":[{"href":"#home","label":"首页"},{"href":"#features","label":"功能"},{"href":"#gallery","label":"界面"},{"href":"#download","label":"下载"},{"href":"#about","label":"关于"}],"navCta":{"href":"#download","label":"下载软件"}};

const $ = (id) => document.getElementById(id);

function icon(name, size) {
  const s = size || 22;
  return `<svg viewBox="0 0 24 24" width="${s}" height="${s}" aria-hidden="true">${ICONS[name] || ICONS.arrow}</svg>`;
}

/* ---------------- 编辑锚点 ---------------- */

/** 纯文字：点击后就地编辑 */
const A_TEXT = (p, label) => `data-path="${p}" data-type="text" data-label="${label}"`;
/** 链接/对象：点击后弹出属性面板（文字 + 链接等） */
const A_LINK = (p, label) => `data-path="${p}" data-type="link" data-label="${label}"`;
/** 图片：点击后打开图片面板 */
const A_IMG = (p, label) => `data-path="${p}" data-type="image" data-label="${label}"`;
/** 对象属性：点击后弹出属性面板（用于含图标的卡片等） */
const A_OBJ = (p, label) => `data-path="${p}" data-type="object" data-label="${label}"`;
/** 列表容器 */
const A_LIST = (p) => `data-list="${p}"`;
/** 列表项 */
const A_ITEM = (p, label) => `data-list-item="${p}" data-item-label="${label}"`;

/* ---------------- 主题 ---------------- */

function applyTheme(meta) {
  if (!meta) return;
  document.title = meta.title || '锈蚀死域社区';
  const root = document.documentElement.style;
  if (meta.accent) root.setProperty('--accent', meta.accent);
  if (meta.accent2) root.setProperty('--accent-2', meta.accent2);
  if (meta.description) {
    const m = $('metaDescription');
    if (m) m.setAttribute('content', meta.description);
  }
  if (meta.favicon) {
    const f = $('faviconLink');
    if (f) f.setAttribute('href', meta.favicon);
  }
}

/* ---------------- 渲染 ---------------- */

function render(c) {
  applyTheme(c.meta);

  // 品牌
  const logoImg = $('brandImg');
  if (c.meta.logoImage) {
    logoImg.src = c.meta.logoImage;
    logoImg.hidden = false;
    $('brandMark').style.display = 'none';
  } else {
    logoImg.hidden = true;
    $('brandMark').style.display = '';
  }
  $('brandText').textContent = c.meta.logoText || c.meta.title || '';
  $('brandText').setAttribute('data-path', 'meta.logoText');
  $('brandText').setAttribute('data-type', 'text');
  $('brandText').setAttribute('data-label', 'Logo 文字');

  // 导航
  const nav = $('navLinks');
  nav.innerHTML = (c.nav || [])
    .map(
      (n, i) =>
        `<a href="${esc(n.href)}" ${A_LINK('nav.' + i, '导航项')} ${A_ITEM('nav.' + i, '导航项')}>${esc(n.label)}</a>`
    )
    .join('');
  nav.setAttribute('data-list', 'nav');

  if (c.navCta) {
    const cta = $('navCta');
    cta.textContent = c.navCta.label;
    cta.setAttribute('href', c.navCta.href || '#download');
    cta.setAttribute('data-path', 'navCta');
    cta.setAttribute('data-type', 'link');
    cta.setAttribute('data-label', '导航按钮');
  }

  // Hero
  const h = c.hero || {};
  const badge = $('heroBadge');
  badge.innerHTML = `<span class="badge-dot"></span><span ${A_TEXT('hero.badge', '顶部标签')}>${esc(h.badge || '')}</span>`;

  $('heroTitleTop').textContent = h.titleTop || '';
  $('heroTitleTop').setAttribute('data-path', 'hero.titleTop');
  $('heroTitleTop').setAttribute('data-label', '主标题前半段');
  $('heroTitleBottom').textContent = h.titleBottom || '';
  $('heroTitleBottom').setAttribute('data-path', 'hero.titleBottom');
  $('heroTitleBottom').setAttribute('data-label', '主标题渐变段');

  $('heroSub').textContent = h.subtitle || '';
  $('heroSub').setAttribute('data-path', 'hero.subtitle');
  $('heroSub').setAttribute('data-label', '副标题');

  if (h.primary) {
    const p = $('heroPrimary');
    p.setAttribute('href', h.primary.href || '#download');
    p.setAttribute('data-path', 'hero.primary');
    p.setAttribute('data-type', 'link');
    p.setAttribute('data-label', '主按钮');
    p.querySelector('span').textContent = h.primary.label;
  }
  if (h.secondary) {
    const s = $('heroSecondary');
    s.setAttribute('href', h.secondary.href || '#');
    s.setAttribute('data-path', 'hero.secondary');
    s.setAttribute('data-type', 'link');
    s.setAttribute('data-label', '次按钮');
    s.querySelector('span').textContent = h.secondary.label;
  }

  const stats = $('heroStats');
  stats.innerHTML = (h.stats || [])
    .map(
      (s, i) => `
      <div class="stat reveal" ${A_ITEM('hero.stats.' + i, '数据指标')}>
        <div class="stat-value" ${A_TEXT('hero.stats.' + i + '.value', '指标数值')}>${esc(s.value)}</div>
        <div class="stat-label" ${A_TEXT('hero.stats.' + i + '.label', '指标说明')}>${esc(s.label)}</div>
      </div>`
    )
    .join('');
  stats.setAttribute('data-list', 'hero.stats');

  // 主视觉卡片
  const card = $('heroCard');
  card.setAttribute('data-path', 'hero.cardImage');
  card.setAttribute('data-type', 'image');
  card.setAttribute('data-label', '主视觉图片');
  if (h.cardImage) {
    $('heroCardImg').src = h.cardImage;
    $('heroCardImg').hidden = false;
    $('heroCardFallback').style.display = 'none';
  } else {
    $('heroCardImg').hidden = true;
    $('heroCardFallback').style.display = '';
  }

  // 终端
  $('terminalTitle').textContent = (h.terminal && h.terminal.title) || 'xsdz-launcher';
  $('terminalTitle').setAttribute('data-path', 'hero.terminal.title');
  $('terminalTitle').setAttribute('data-label', '终端窗口标题');
  const tb = $('terminalBody');
  if (EDIT_MODE) {
    tb.setAttribute('data-list', 'hero.terminal.lines');
    tb.innerHTML = ((h.terminal && h.terminal.lines) || [])
      .map((l, i) => `<div class="t-line" ${A_TEXT('hero.terminal.lines.' + i, '终端输出行')} ${A_ITEM('hero.terminal.lines.' + i, '终端输出行')}>${esc(l)}</div>`)
      .join('');
  } else {
    typeTerminal((h.terminal && h.terminal.lines) || []);
  }

  // 特性
  const f = c.features || {};
  setText('featuresEyebrow', f.eyebrow, 'features.eyebrow', '英文小标题');
  setText('featuresTitle', f.title, 'features.title', '板块标题');
  setText('featuresSub', f.subtitle, 'features.subtitle', '板块描述');
  const fg = $('featureGrid');
  fg.innerHTML = (f.items || [])
    .map(
      (it, i) => `
      <article class="feature-card reveal" data-spot ${A_ITEM('features.items.' + i, '特性卡片')}>
        <span class="feature-index">${String(i + 1).padStart(2, '0')}</span>
        <div class="feature-icon" ${A_OBJ('features.items.' + i, '特性图标（点此换图标）')}>${icon(it.icon)}</div>
        <h3 ${A_TEXT('features.items.' + i + '.title', '特性标题')}>${esc(it.title)}</h3>
        <p ${A_TEXT('features.items.' + i + '.desc', '特性描述')}>${esc(it.desc)}</p>
      </article>`
    )
    .join('');
  fg.setAttribute('data-list', 'features.items');

  // 图集
  const g = c.gallery || {};
  setText('galleryEyebrow', g.eyebrow, 'gallery.eyebrow', '英文小标题');
  setText('galleryTitle', g.title, 'gallery.title', '板块标题');
  setText('gallerySub', g.subtitle, 'gallery.subtitle', '板块描述');
  const gg = $('galleryGrid');
  gg.innerHTML = (g.items || [])
    .map(
      (it, i) => `
      <figure class="gallery-item reveal" ${A_ITEM('gallery.items.' + i, '图集项')}>
        ${
          it.src
            ? `<img src="${esc(it.src)}" alt="" loading="lazy" ${A_IMG('gallery.items.' + i + '.src', '图集图片')} />`
            : `<div class="gallery-ph" ${A_IMG('gallery.items.' + i + '.src', '图集图片')}>
                 <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
                   <rect x="3" y="4.5" width="18" height="15" rx="2.6" fill="none" stroke="currentColor" stroke-width="1.5"/>
                   <circle cx="8.6" cy="9.6" r="1.6" fill="currentColor"/>
                   <path d="M4 17l5-4.6 4.2 3.6L16.4 13l3.6 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                 <span class="ph-title">实机截图位 ${String(i + 1).padStart(2, '0')}</span>
                 <em class="ph-hint">点击上传替换</em>
               </div>`
        }
        ${it.caption ? `<figcaption class="gallery-cap" ${A_TEXT('gallery.items.' + i + '.caption', '图片说明')}>${esc(it.caption)}</figcaption>` : ''}
      </figure>`
    )
    .join('');
  gg.setAttribute('data-list', 'gallery.items');

  // 下载
  const d = c.download || {};
  setText('downloadEyebrow', d.eyebrow, 'download.eyebrow', '英文小标题');
  setText('downloadTitle', d.title, 'download.title', '板块标题');
  setText('downloadSub', d.subtitle, 'download.subtitle', '板块描述');
  setText('dlVersion', d.version, 'download.version', '最新版本');
  setText('dlSize', d.size, 'download.size', '安装包大小');
  setText('dlUpdated', d.updated, 'download.updated', '更新时间');
  setText('dlHash', d.hash, 'download.hash', '校验信息');

  const pg = $('platformGrid');
  pg.innerHTML = (d.platforms || [])
    .map(
      (p, i) => `
      <a class="platform-card reveal ${p.primary ? 'primary' : ''}" href="${esc(p.url || '#')}" target="_blank" rel="noopener"
         ${A_LINK('download.platforms.' + i, '下载平台')} ${A_ITEM('download.platforms.' + i, '下载平台')}>
        <span class="platform-icon">${icon(p.icon, 24)}</span>
        <span class="platform-info">
          <span class="platform-name">${esc(p.name)}</span>
          <span class="platform-note">${esc(p.note || '')}</span>
        </span>
        <span class="platform-arrow">${icon('download', 20)}</span>
      </a>`
    )
    .join('');
  pg.setAttribute('data-list', 'download.platforms');

  const ml = $('mirrorList');
  ml.innerHTML = (d.mirrors || [])
    .map(
      (m, i) =>
        `<a class="mirror-chip" href="${esc(m.url || '#')}" target="_blank" rel="noopener" ${A_LINK('download.mirrors.' + i, '镜像线路')} ${A_ITEM('download.mirrors.' + i, '镜像线路')}>${esc(m.name)}</a>`
    )
    .join('');
  ml.setAttribute('data-list', 'download.mirrors');
  setText('downloadNote', d.note, 'download.note', '底部提示');

  // 关于
  const a = c.about || {};
  setText('aboutEyebrow', a.eyebrow, 'about.eyebrow', '英文小标题');
  setText('aboutTitle', a.title, 'about.title', '板块标题');
  const ap = $('aboutParagraphs');
  ap.innerHTML = (a.paragraphs || [])
    .map((p, i) => `<p class="reveal" ${A_TEXT('about.paragraphs.' + i, '正文段落')} ${A_ITEM('about.paragraphs.' + i, '正文段落')}>${esc(p)}</p>`)
    .join('');
  ap.setAttribute('data-list', 'about.paragraphs');
  const apo = $('aboutPoints');
  apo.innerHTML = (a.points || [])
    .map(
      (p, i) => `
      <div class="about-point reveal" ${A_ITEM('about.points.' + i, '关于要点')}>
        <h4 ${A_TEXT('about.points.' + i + '.title', '要点标题')}>${esc(p.title)}</h4>
        <p ${A_TEXT('about.points.' + i + '.desc', '要点说明')}>${esc(p.desc)}</p>
      </div>`
    )
    .join('');
  apo.setAttribute('data-list', 'about.points');

  // 页脚
  const ft = c.footer || {};
  const fl = $('footerLinks');
  fl.innerHTML = (ft.links || [])
    .map(
      (l, i) =>
        `<a href="${esc(l.href || '#')}" ${A_LINK('footer.links.' + i, '页脚链接')} ${A_ITEM('footer.links.' + i, '页脚链接')}>${esc(l.label)}</a>`
    )
    .join('');
  fl.setAttribute('data-list', 'footer.links');
  setText('footerCopy', ft.copyright, 'footer.copyright', '版权信息');
  setText('footerIcp', ft.icp, 'footer.icp', '备案声明');

  // 跑马灯（派生内容，不可编辑）
  const mq = []
    .concat((h.stats || []).map((s) => `${s.label} · ${s.value}`))
    .concat(['RUSTGUARD v2', 'SEASON 12 · 赤潮', '200 PLAYERS PER SERVER', 'CROSS-PLATFORM', 'SINCE 2019']);
  const html = mq.map((t) => `<span>${esc(t)}</span>`).join('');
  $('marqueeTrack').innerHTML = html + html;

  observeReveal();
  bindSpotlight();

  document.dispatchEvent(new CustomEvent('xsdz:rendered'));
}

function setText(id, value, path, label) {
  const el = $(id);
  if (!el) return;
  el.textContent = value || '';
  el.setAttribute('data-path', path);
  el.setAttribute('data-type', 'text');
  el.setAttribute('data-label', label);
}

/* ---------------- 终端打字 ---------------- */

let typeTimer = null;
let terminalPlayed = false;

function typeTerminal(lines) {
  const box = $('terminalBody');
  if (!box) return;
  if (terminalPlayed || EDIT_MODE) {
    box.innerHTML = lines.map((l) => `<div class="t-line">${esc(l)}</div>`).join('');
    return;
  }
  terminalPlayed = true;
  box.innerHTML = '';
  if (typeTimer) clearInterval(typeTimer);
  let li = 0;
  let ci = 0;
  let current = null;

  function step() {
    if (li >= lines.length) {
      if (current) current.classList.remove('typing');
      const caret = document.createElement('div');
      caret.innerHTML = '<span class="t-caret"></span>';
      box.appendChild(caret);
      clearInterval(typeTimer);
      typeTimer = null;
      return;
    }
    if (!current) {
      current = document.createElement('div');
      current.className = 't-line ' + (lines[li].startsWith('$') ? 'cmd' : /OK|就绪/.test(lines[li]) ? 'ok' : '');
      box.appendChild(current);
      ci = 0;
    }
    current.textContent = lines[li].slice(0, ++ci);
    if (ci >= lines[li].length) {
      current = null;
      li += 1;
    }
  }
  typeTimer = setInterval(step, 22);
}

/* ---------------- 交互 ---------------- */

function observeReveal() {
  const els = document.querySelectorAll('.reveal');
  if (EDIT_MODE) {
    els.forEach((e) => e.classList.add('in'));
    return;
  }
  if (!('IntersectionObserver' in window)) {
    els.forEach((e) => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((e) => io.observe(e));
}

function bindSpotlight() {
  document.querySelectorAll('[data-spot]').forEach((card) => {
    if (card.dataset.spotBound) return;
    card.dataset.spotBound = '1';
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', e.clientX - r.left + 'px');
      card.style.setProperty('--my', e.clientY - r.top + 'px');
    });
  });
}

function initChrome() {
  const nav = $('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const burger = $('navBurger');
  const links = $('navLinks');
  burger.addEventListener('click', () => links.classList.toggle('open'));
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && !EDIT_MODE) links.classList.remove('open');
  });

  if (!EDIT_MODE) {
    const spot = document.querySelector('.cursor-spot');
    window.addEventListener('mousemove', (e) => {
      spot.style.opacity = '1';
      spot.style.left = e.clientX + 'px';
      spot.style.top = e.clientY + 'px';
    });
    window.addEventListener('mouseleave', () => (spot.style.opacity = '0'));
  } else {
    const spot = document.querySelector('.cursor-spot');
    if (spot) spot.remove();
    document.documentElement.classList.add('xsdz-editing');
  }
}

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[m]));
}

/* ---------------- 启动 ---------------- */

initChrome();

// 供控制台 iframe 就地重渲染使用
window.__xsdz_render = render;
window.__xsdz_editMode = EDIT_MODE;

const API_ORIGIN = 'https://api.wjl.qd.je';

// 后台上传的图片存的是相对路径（/uploads/xxx），主站跨域显示时补成后台绝对地址
function fixImagePaths(node) {
  if (Array.isArray(node)) return node.forEach(fixImagePaths);
  if (node && typeof node === 'object') {
    for (const k of Object.keys(node)) {
      const v = node[k];
      if (typeof v === 'string' && v.indexOf('/uploads/') === 0) node[k] = API_ORIGIN + v;
      else fixImagePaths(v);
    }
  }
}

function fetchJSON(url, timeoutMs) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  return fetch(url, { signal: ctrl.signal })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error('bad status'))))
    .finally(() => clearTimeout(t));
}

// 优先从实时后台取数；后台休眠/不可达时回落同源静态副本，再不行用内置兜底
fetchJSON(API_ORIGIN + '/api/content', 8000)
  .catch(() => fetchJSON('api/content', 4000))
  .then((data) => { fixImagePaths(data); render(data); })
  .catch(() => render(FALLBACK));
