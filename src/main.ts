// @ts-nocheck
const categories = [
  { id: 'chat', label: '对话' },
  { id: 'research', label: '研究' },
  { id: 'image', label: '绘画' },
  { id: 'video', label: '视频' },
  { id: 'audio', label: '音频' },
  { id: 'office', label: '办公' },
  { id: 'code', label: '编程' },
];

const tools = [
  {
    name: 'ChatGPT',
    category: 'chat',
    description: '全能型 AI 工作台，适合提问、写作、代码、学习和自动化方案设计。',
    accent: 'General Intelligence',
    metric: '对话 / 写作 / 编程',
    icon: 'chatgpt',
    tags: ['提问', '写作', '编程'],
    url: 'https://chatgpt.com',
    users: '2.1亿+',
    heat: 98,
  },
  {
    name: 'Perplexity',
    category: 'research',
    description: '答案搜索与研究助手，把检索、引用、总结和追问整合成高效研究流。',
    accent: 'Answer Engine',
    metric: '研究 / 检索 / 引用',
    icon: 'perplexity',
    tags: ['研究', '搜索', '办公'],
    url: 'https://www.perplexity.ai',
    users: '1500万+',
    heat: 92,
  },
  {
    name: 'Claude',
    category: 'chat',
    description: '擅长长文档理解、结构化分析和深度推理，适合搭建个人知识工作流。',
    accent: 'Long Context',
    metric: '文档 / 分析 / 研究',
    icon: 'claude',
    tags: ['长文档', '分析', '办公'],
    url: 'https://claude.ai',
    users: '3000万+',
    heat: 94,
  },
  {
    name: 'Cursor',
    category: 'code',
    description: 'AI 原生代码编辑器，把需求、代码理解、重构和调试放进同一个 IDE。',
    accent: 'AI Code Editor',
    metric: '编程 / 网站 / 自动化',
    icon: 'cursor',
    tags: ['编程', '网站', '效率'],
    url: 'https://www.cursor.com',
    users: '100万+',
    heat: 96,
  },
  {
    name: 'Devin',
    category: 'code',
    description: '面向软件工程任务的 AI Agent，适合拆解 issue、运行命令和交付代码变更。',
    accent: 'Software Agent',
    metric: '开发 / 任务 / Agent',
    icon: 'devin',
    tags: ['编程', 'Agent', '创业'],
    url: 'https://devin.ai',
    users: '团队级',
    heat: 88,
  },
  {
    name: 'Midjourney',
    category: 'image',
    description: '电影级图像生成工具，用自然语言快速构建品牌视觉、海报和概念图。',
    accent: 'Visual Engine',
    metric: '海报 / 品牌 / 概念',
    icon: 'midjourney',
    tags: ['绘画', '海报', '视觉'],
    url: 'https://www.midjourney.com',
    users: '2000万+',
    heat: 95,
  },
  {
    name: 'Leonardo AI',
    category: 'image',
    description: '适合游戏资产、产品视觉和风格一致性图像生产的 AI 创意平台。',
    accent: 'Creative Suite',
    metric: '绘画 / 资产 / 品牌',
    icon: 'leonardo',
    tags: ['绘画', '设计', '产品'],
    url: 'https://leonardo.ai',
    users: '1200万+',
    heat: 90,
  },
  {
    name: 'Runway',
    category: 'video',
    description: '面向创作者和品牌团队的视频生成套件，适合广告短片与动态分镜。',
    accent: 'Motion Studio',
    metric: '短片 / 广告 / 分镜',
    icon: 'runway',
    tags: ['视频', '广告', '剪辑'],
    url: 'https://runwayml.com',
    users: '千万级',
    heat: 93,
  },
  {
    name: 'Sora',
    category: 'video',
    description: 'OpenAI 视频生成工具，面向高质量镜头语言、产品展示和叙事型视频。',
    accent: 'World Simulator',
    metric: '镜头 / 叙事 / 产品',
    icon: 'sora',
    tags: ['视频', '产品宣传', '叙事'],
    url: 'https://sora.chatgpt.com',
    users: '创作者+',
    heat: 97,
  },
  {
    name: '可灵AI',
    category: 'video',
    description: '中文创作者友好的 AI 视频工具，适合图生视频、人物镜头和短视频内容。',
    accent: 'Creator Motion',
    metric: '图生视频 / 短视频',
    icon: 'kling',
    tags: ['视频', '中文', '短视频'],
    url: 'https://klingai.kuaishou.com',
    users: '中文创作者',
    heat: 91,
  },
  {
    name: 'ElevenLabs',
    category: 'audio',
    description: 'AI 声音生成与配音工具，适合短视频旁白、品牌声音和多语言内容生产。',
    accent: 'Voice AI',
    metric: '配音 / 克隆 / 多语言',
    icon: 'elevenlabs',
    tags: ['音频', '视频', '配音'],
    url: 'https://elevenlabs.io',
    users: '1000万+',
    heat: 89,
  },
  {
    name: 'Suno',
    category: 'audio',
    description: '用提示词生成歌曲和音乐 demo，适合品牌 BGM、短视频音乐和创意实验。',
    accent: 'Music AI',
    metric: '音乐 / BGM / 创作',
    icon: 'suno',
    tags: ['音频', '音乐', '短视频'],
    url: 'https://suno.com',
    users: '千万级',
    heat: 91,
  },
];

const roadmap = [
  { phase: '第一阶段', title: '学会 ChatGPT', description: '掌握角色、目标、约束、样例和输出格式，把 AI 变成随身顾问。', icon: 'chatgpt' },
  { phase: '第二阶段', title: 'AI 内容创作', description: '用 AI 完成选题、脚本、图文、封面、复盘，让输出频率翻倍。', icon: 'sparkles' },
  { phase: '第三阶段', title: 'AI 视频', description: '学习分镜、镜头语言、配音和剪辑，把文字创意变成可发布视频。', icon: 'play' },
  { phase: '第四阶段', title: '搭建网站', description: '用 AI 写页面、设计信息架构、上线产品官网与个人主页。', icon: 'grid' },
  { phase: '第五阶段', title: '打造个人品牌', description: '沉淀内容资产、工具清单和案例，形成用户信任与商业入口。', icon: 'route' },
  { phase: '第六阶段', title: 'AI 创业', description: '把经验封装成模板、课程、服务或 SaaS，验证付费并持续迭代。', icon: 'rocket' },
];

const videoShowcase = [
  { title: 'AI广告', type: 'Brand Film', description: '30 秒新品发布片，自动生成脚本、镜头、配音与视觉方向。', gradient: 'linear-gradient(135deg, #101010, #343434 44%, #080808)' },
  { title: 'AI短视频', type: 'Shorts System', description: '从热点选题到三段式脚本，一键进入批量内容生产。', gradient: 'linear-gradient(135deg, #050505, #242424 52%, #111)' },
  { title: 'AI动漫', type: 'Anime Pilot', description: '角色设定、场景氛围和动态镜头，用 AI 快速测试故事 IP。', gradient: 'linear-gradient(135deg, #111, #2f2f38 48%, #050505)' },
  { title: 'AI产品宣传片', type: 'Product Demo', description: '把产品卖点转化为可演示的视觉流程和转化型旁白。', gradient: 'linear-gradient(135deg, #070707, #3a3a3a 44%, #0d0d0d)' },
];

const stats = [
  ['AI工具数量', 128, '+'],
  ['每日更新', 24, 'h'],
  ['视频生成量', 8600, '+'],
  ['Prompt 数量', 4200, '+'],
  ['活跃用户', 38000, '+'],
];

let activeCategory = 'all';
let query = '';
let menuOpen = false;
let pointerX = 50;
let pointerY = 28;
let ticking = false;
let observersReady = false;

const app = document.querySelector('#app');

if (!app) {
  throw new Error('App root not found');
}

const icon = (name) => {
  const paths = {
    chatgpt: '<path d="M10.2 3.1a4.3 4.3 0 0 1 6.7 3.6 4.3 4.3 0 0 1 2.1 7.5 4.3 4.3 0 0 1-6.2 5.8 4.3 4.3 0 0 1-7-3.4 4.3 4.3 0 0 1-1.9-7.7 4.3 4.3 0 0 1 6.3-5.8Z"/><path d="M8 9.2 12 7l4 2.2v4.6L12 16l-4-2.2Z"/><path d="M12 7v9"/><path d="m8 13.8 8-4.6"/>',
    claude: '<path d="M12 3 4.8 7.2v9.6L12 21l7.2-4.2V7.2Z"/><path d="M4.8 7.2 12 11.4l7.2-4.2"/><path d="M8.4 14.5h7.2"/>',
    perplexity: '<path d="M5 4h14v16H5z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="m8 16 4-4 4 4"/>',
    cursor: '<path d="m5 3 14 9-6.5 1.4L9 21Z"/><path d="m13 13 5 5"/>',
    devin: '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 9h8"/><path d="M8 13h5"/><path d="m15 13 2 2-2 2"/>',
    elevenlabs: '<path d="M7 5v14"/><path d="M12 3v18"/><path d="M17 7v10"/><path d="M3 10v4"/><path d="M21 10v4"/>',
    suno: '<path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',
    leonardo: '<path d="M4 20 14 4l6 16"/><path d="M8 14h8"/><path d="M10 20 14 4"/>',
    midjourney: '<path d="M3 16c2.5-5.7 5.5-8.6 9-8.6s6.5 2.9 9 8.6"/><path d="M6.5 15.8c1.6-3.1 3.4-4.7 5.5-4.7s3.9 1.6 5.5 4.7"/><path d="M4 18h16"/><path d="M12 5V3"/>',
    runway: '<path d="M4 5h16v14H4z"/><path d="m10 9 5 3-5 3Z"/><path d="M8 5v14"/><path d="M16 5v14"/>',
    kling: '<path d="M5 4v16"/><path d="M19 4 9 12l10 8"/><path d="M9 4v16"/>',
    sora: '<path d="M4 12c0-4.4 3.6-8 8-8 2.6 0 5 1.3 6.4 3.2"/><path d="M20 12c0 4.4-3.6 8-8 8-2.6 0-5-1.3-6.4-3.2"/><path d="M15 7h3.6V3.4"/><path d="M9 17H5.4v3.6"/><circle cx="12" cy="12" r="2.6"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    sparkles: '<path d="m12 3-1.9 5.8L4 11l6.1 2.2L12 19l1.9-5.8L20 11l-6.1-2.2Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/>',
    arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    menu: '<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    play: '<path d="m8 5 11 7-11 7Z"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    route: '<path d="M4 6h7a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h11"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="22" r="2"/>',
    rocket: '<path d="M4.5 16.5c-1.3 1.1-1.8 3.4-1.4 4 .6.4 2.9-.1 4-1.4"/><path d="M9 15 6 18"/><path d="M15 9l-6 6"/><path d="M14 4h6v6c0 5-4 9-9 9H8v-3c0-5 4-9 9-9"/><circle cx="16" cy="8" r="1.5"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.5-1-3.5.3-1.1.3-2.3 0-3.5 0 0-1 0-3 1.5a10.4 10.4 0 0 0-5 0C9 2 8 2 8 2c-.3 1.2-.3 2.4 0 3.5A5.4 5.4 0 0 0 7 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1.2-.8 2-1 .5-3.5 1-5-1.5 0 0-1-2-3-2 0 0-2 0 0 1.3 0 0 1 .5 1.8 2.7 0 0 1 1 3.2 1.8"/>',
    x: '<path d="M4 4l16 16"/><path d="M20 4 4 20"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  };

  return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] ?? paths.sparkles}</svg>`;
};

const escapeAttribute = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const particleTemplate = () =>
  Array.from({ length: 78 }, (_, index) => {
    const size = 1 + (index % 4);
    const style = `--x:${(index * 37) % 100}%;--y:${(index * 61) % 100}%;--s:${size}px;--d:${12 + (index % 10)}s;--delay:${(index % 16) * -0.7}s;`;
    return `<span style="${style}"></span>`;
  }).join('');

const filteredTools = () =>
  tools.filter((tool) => {
    const searchText = `${tool.name} ${tool.description} ${tool.tags.join(' ')} ${tool.metric}`.toLowerCase();
    return searchText.includes(query.trim().toLowerCase()) && (activeCategory === 'all' || tool.category === activeCategory);
  });

const renderTools = () => {
  const grid = document.querySelector('#tool-grid');
  const empty = document.querySelector('#empty-state');
  if (!grid || !empty) return;

  const matches = filteredTools();
  grid.innerHTML = matches
    .map(
      (tool, index) => `
        <a class="tool-card reveal-card" href="${tool.url}" target="_blank" rel="noreferrer" style="--delay:${index * 62}ms" aria-label="打开 ${tool.name} 官网">
          <div class="card-glow"></div>
          <div class="card-topline">
            <div class="icon-orb brand-icon brand-icon-${tool.icon}">${icon(tool.icon)}</div>
            <span>${tool.accent}</span>
          </div>
          <h3>${tool.name}</h3>
          <p>${tool.description}</p>
          <div class="tag-row">${tool.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
          <div class="tool-data-row">
            <span><b>${tool.users}</b> 使用人数</span>
            <span><b>${tool.heat}</b> 热度值</span>
          </div>
          <div class="heat-meter" aria-hidden="true"><i style="width:${tool.heat}%"></i></div>
          <div class="card-footer">
            <strong>${tool.metric}</strong>
            <span class="experience-link">访问官网 ${icon('arrow')}</span>
          </div>
        </a>
      `,
    )
    .join('');
  empty.hidden = matches.length > 0;
  observeRevealTargets();
};

const animateCounters = () => {
  document.querySelectorAll('[data-count]').forEach((element) => {
    if (element.dataset.done === 'true') return;
    element.dataset.done = 'true';
    const target = Number(element.dataset.count ?? 0);
    const suffix = element.dataset.suffix ?? '';
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.floor(target * eased).toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
};

let revealObserver = null;
let statsObserver = null;

const observeRevealTargets = () => {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-card').forEach((element) => element.classList.add('visible'));
    animateCounters();
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    );
  }

  document.querySelectorAll('.reveal, .reveal-card').forEach((element) => revealObserver?.observe(element));

  if (!statsObserver) {
    statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver?.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
  }

  const statsPanel = document.querySelector('.data-panel');
  if (statsPanel) statsObserver.observe(statsPanel);
};

const renderApp = () => {
  app.className = 'app dark';
  app.style.setProperty('--pointer-x', `${pointerX}%`);
  app.style.setProperty('--pointer-y', `${pointerY}%`);
  app.innerHTML = `
    <div class="ambient-grid" aria-hidden="true"></div>
    <div class="star-wash" aria-hidden="true"></div>
    <div class="cursor-aura" aria-hidden="true"></div>
    <div class="light-ribbons" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="particle-field" aria-hidden="true">${particleTemplate()}</div>

    <header class="site-header" id="site-header">
      <a class="brand" href="#top" aria-label="航均AI实验室 首页">
        <span class="brand-mark">航</span>
        <span>航均AI实验室</span>
      </a>
      <button class="menu-toggle" type="button" aria-label="切换导航菜单">${menuOpen ? icon('close') : icon('menu')}</button>
      <nav class="nav-panel ${menuOpen ? 'open' : ''}" aria-label="主导航">
        <a href="#top">首页</a>
        <a href="#tools">AI工具</a>
        <a href="#video">AI视频</a>
        <a href="#roadmap">AI路线图</a>
        <a href="#about">关于航均</a>
        <a href="#contact">联系方式</a>
      </nav>
      <a class="nav-cta" href="#contact">Join Lab</a>
    </header>

    <main>
      <section class="hero parallax-layer" id="top" data-speed="-0.055">
        <div class="hero-copy reveal">
          <div class="eyebrow">${icon('sparkles')} AI Startup OS for Solo Builders</div>
          <h1><span>航均AI</span><span>实验室</span></h1>
          <p>把 AI 工具、视频生成、提示词工作流和个人品牌增长路线，做成普通人也能执行的 AI 创业操作系统。</p>
          <div class="hero-actions">
            <a class="primary-action" href="#tools">探索 AI 工具体系 ${icon('arrow')}</a>
            <a class="secondary-action" href="#video">观看视频作品集</a>
          </div>
          <div class="trust-strip" aria-label="产品定位">
            <span>Tool Intelligence</span>
            <span>Prompt Ops</span>
            <span>Video Studio</span>
            <span>Growth System</span>
          </div>
        </div>
        <div class="ai-console reveal" aria-label="AI 控制台模拟界面">
          <div class="console-chrome"><i></i><i></i><i></i><span>hangjun.ai / console</span></div>
          <div class="prompt-box">
            <small>Prompt</small>
            <p>为一个普通人 AI 实验室生成商业化官网首屏、工具生态和视频作品集。</p>
          </div>
          <div class="output-box">
            <div class="typing-line"><span></span> AI 正在生成增长系统...</div>
            <p>已完成：品牌定位、工具矩阵、视频脚本、路线图与转化组件。</p>
          </div>
          <div class="progress-panel">
            <div><span>AI 视频生成</span><b>76%</b></div>
            <i><em></em></i>
          </div>
          <div class="terminal-box">
            <code>$ npm run launch-lab</code>
            <code>✓ prompts compiled</code>
            <code>✓ video pipeline online</code>
            <code class="live-dot">● runtime: active</code>
          </div>
          <div class="console-status">
            <span><i></i> Model Online</span>
            <span>Latency 42ms</span>
          </div>
        </div>
      </section>

      <section class="data-panel section-block reveal" aria-label="航均AI实验室数据面板">
        ${stats.map(([label, value, suffix]) => `
          <article>
            <strong data-count="${value}" data-suffix="${suffix}">0${suffix}</strong>
            <span>${label}</span>
          </article>
        `).join('')}
      </section>

      <section class="tools-section section-block" id="tools">
        <div class="section-heading reveal">
          <div>
            <span>${icon('grid')} AI Tool Ecosystem</span>
            <h2>像产品矩阵一样管理你的 AI 工具。</h2>
          </div>
          <div class="search-shell" role="search">
            ${icon('search')}
            <input id="search-input" aria-label="搜索 AI 工具" placeholder="搜索：视频、绘画、办公、编程..." value="${escapeAttribute(query)}" />
          </div>
        </div>
        <div class="category-section reveal" id="categories" aria-label="工具分类">
          <button class="category-chip ${activeCategory === 'all' ? 'active' : ''}" data-category="all">全部</button>
          ${categories.map((category) => `<button class="category-chip ${activeCategory === category.id ? 'active' : ''}" data-category="${category.id}">${category.label}</button>`).join('')}
        </div>
        <div class="tool-grid" id="tool-grid"></div>
        <p class="empty-state" id="empty-state" hidden>暂未找到匹配工具，请尝试其他关键词。</p>
      </section>

      <section class="video-section section-block" id="video">
        <div class="section-heading centered reveal">
          <span>${icon('play')} AI Video Portfolio</span>
          <h2>AI生成视频展示区</h2>
          <p>用作品集方式展示 AI 广告、短视频、动漫和产品宣传片，让访客停留、理解并产生合作欲望。</p>
        </div>
        <div class="showcase-grid">
          ${videoShowcase.map((item, index) => `
            <article class="showcase-card reveal-card" style="--delay:${index * 80}ms;--thumb:${item.gradient}">
              <div class="video-thumb">
                <button aria-label="播放 ${item.title}">${icon('play')}</button>
                <span>${item.type}</span>
              </div>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="roadmap-section section-block" id="roadmap">
        <div class="section-heading reveal">
          <div>
            <span>${icon('route')} Growth Timeline</span>
            <h2>普通人的 AI 成长路线。</h2>
          </div>
          <p>从会用工具，到能持续创作，再到构建个人品牌与 AI 创业资产。</p>
        </div>
        <div class="timeline">
          ${roadmap.map((item, index) => `
            <article class="timeline-item reveal-card" style="--delay:${index * 75}ms">
              <div class="timeline-icon">${icon(item.icon)}</div>
              <div>
                <small>${item.phase}</small>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="about-section section-block reveal" id="about">
        <div class="about-layout glass-panel">
          <div>
            <span class="section-kicker">About Hangjun</span>
            <h2>不是课程包装，而是持续公开迭代的 AI 实验室。</h2>
            <p>航均AI实验室聚焦普通人的 AI 应用落地：选工具、写提示词、做视频、搭网站、沉淀品牌，最终把技能产品化。</p>
          </div>
          <div class="about-proof">
            <span>Learn</span>
            <span>Create</span>
            <span>Ship</span>
            <span>Productize</span>
          </div>
        </div>
      </section>

      <section class="bottom-cta glass-panel section-block reveal" id="contact">
        <span>${icon('sparkles')} Start Creating</span>
        <h2>从今天开始，别只刷 AI，要用 AI 建立自己的产品感。</h2>
        <p>获取工具清单、Prompt 模板、AI 视频流程与个人品牌增长实验。</p>
        <a class="primary-action" href="mailto:hello@hangjun.ai">联系航均AI实验室 ${icon('arrow')}</a>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-brand">
        <a class="brand" href="#top"><span class="brand-mark">航</span><span>航均AI实验室</span></a>
        <p>让普通人用 AI 学习、创造、搭建产品，把注意力变成可复利的数字资产。</p>
      </div>
      <div class="footer-links">
        <a href="https://github.com" target="_blank" rel="noreferrer">${icon('github')} GitHub</a>
        <a href="https://www.douyin.com" target="_blank" rel="noreferrer">抖音</a>
        <a href="https://x.com" target="_blank" rel="noreferrer">${icon('x')} X/Twitter</a>
        <a href="mailto:hello@hangjun.ai">${icon('mail')} hello@hangjun.ai</a>
      </div>
      <div class="footer-bottom"><span>© 2026 航均AI实验室</span><span>Powered by AI</span></div>
    </footer>
  `;

  document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    menuOpen = !menuOpen;
    renderApp();
  });

  document.querySelectorAll('.nav-panel a, .hero-actions a, .bottom-cta a').forEach((link) => {
    link.addEventListener('click', () => {
      menuOpen = false;
      document.querySelector('.nav-panel')?.classList.remove('open');
    });
  });

  document.querySelector('#search-input')?.addEventListener('input', (event) => {
    query = event.currentTarget.value;
    renderTools();
  });

  document.querySelectorAll('[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = (button.dataset.category ?? 'all');
      document.querySelectorAll('.category-chip').forEach((chip) => chip.classList.remove('active'));
      button.classList.add('active');
      renderTools();
    });
  });

  renderTools();
  if (!observersReady) observersReady = true;
  observeRevealTargets();
};

const updateParallax = () => {
  const scrollY = window.scrollY;
  app.classList.toggle('scrolled', scrollY > 18);
  document.querySelectorAll('.parallax-layer, .section-block').forEach((element, index) => {
    const speed = Number(element.dataset.speed ?? 0.018 + index * 0.003);
    element.style.setProperty('--parallax-y', `${scrollY * speed}px`);
  });
};

window.addEventListener('pointermove', (event) => {
  pointerX = (event.clientX / window.innerWidth) * 100;
  pointerY = (event.clientY / window.innerHeight) * 100;
  app.style.setProperty('--pointer-x', `${pointerX}%`);
  app.style.setProperty('--pointer-y', `${pointerY}%`);
});

window.addEventListener(
  'scroll',
  () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateParallax();
      ticking = false;
    });
  },
  { passive: true },
);

renderApp();
updateParallax();
