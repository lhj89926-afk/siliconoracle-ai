const categories = [
  { id: 'chat', label: 'AI对话' },
  { id: 'image', label: 'AI图像' },
  { id: 'video', label: 'AI视频' },
  { id: 'office', label: 'AI办公' },
];

const tools = [
  {
    name: 'ChatGPT',
    category: 'chat',
    description: '全能型 AI 工作台，适合提问、写作、代码、学习和自动化方案设计。',
    accent: 'General Intelligence',
    metric: '对话 / 写作 / 编程',
    icon: 'chatgpt',
    tags: ['提问', '写作', '代码'],
    url: 'https://chatgpt.com',
  },
  {
    name: 'Claude',
    category: 'chat',
    description: '擅长长文档理解、结构化分析和深度推理，适合搭建个人知识工作流。',
    accent: 'Long Context',
    metric: '文档 / 分析 / 研究',
    icon: 'claude',
    tags: ['长文档', '分析', '知识库'],
    url: 'https://claude.ai',
  },
  {
    name: 'Gemini',
    category: 'chat',
    description: '连接 Google 生态的多模态助手，适合检索、办公、图片理解和创意探索。',
    accent: 'Multimodal Native',
    metric: '搜索 / 多模态 / 办公',
    icon: 'gemini',
    tags: ['多模态', '搜索', '办公'],
    url: 'https://gemini.google.com',
  },
  {
    name: 'Midjourney',
    category: 'image',
    description: '电影级图像生成工具，用自然语言快速构建品牌视觉、海报和概念图。',
    accent: 'Visual Engine',
    metric: '海报 / 品牌 / 概念',
    icon: 'midjourney',
    tags: ['绘图', '海报', '视觉'],
    url: 'https://www.midjourney.com',
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
  },
  {
    name: '可灵AI',
    category: 'video',
    description: '中文创作者友好的 AI 视频工具，适合图生视频、人物镜头和短视频内容。',
    accent: 'Creator Motion',
    metric: '图生视频 / 短视频',
    icon: 'kling',
    tags: ['中文', '短视频', '图生视频'],
    url: 'https://klingai.kuaishou.com',
  },
  {
    name: 'Sora',
    category: 'video',
    description: 'OpenAI 视频生成工具，面向高质量镜头语言、产品展示和叙事型视频。',
    accent: 'World Simulator',
    metric: '镜头 / 叙事 / 产品',
    icon: 'sora',
    tags: ['视频生成', '产品展示', '叙事'],
    url: 'https://sora.chatgpt.com',
  },
];

const videoTools = [
  {
    name: 'Sora',
    description: '把创意脚本转成具有镜头语言的高质量视频，适合产品展示与品牌叙事。',
    icon: 'sora',
    useCases: ['商业广告', '产品展示'],
  },
  {
    name: 'Runway',
    description: '从图像、文字到动态镜头，快速完成短视频分镜、包装和创意测试。',
    icon: 'runway',
    useCases: ['短视频', '广告样片'],
  },
  {
    name: '可灵AI',
    description: '中文语境友好，适合图生视频、人物演绎、社媒内容和 AI 漫剧试制。',
    icon: 'kling',
    useCases: ['AI漫剧', '社媒内容'],
  },
  {
    name: 'Veo',
    description: 'Google 视频模型方向的代表，适合探索高一致性画面与多模态视频流程。',
    icon: 'veo',
    useCases: ['创意验证', '品牌镜头'],
  },
];

const roadmap = [
  ['第一步', '学会提问', '把模糊想法拆成角色、目标、约束和输出格式。'],
  ['第二步', '用AI做内容', '用 AI 生成选题、脚本、图文、短视频和复盘清单。'],
  ['第三步', '用AI做网站', '把个人品牌、工具导航和产品落地页快速上线。'],
  ['第四步', '把流量沉淀到私域', '用表单、社群、邮件和自动化承接每一次关注。'],
  ['第五步', '做自己的产品', '把经验封装成模板、课程、工具或服务，形成可复利资产。'],
];

let activeCategory = 'all';
let query = '';
let isDark = true;
let menuOpen = false;
let pointerX = 50;
let pointerY = 28;
let ticking = false;

const app = document.querySelector('#app');

if (!app) {
  throw new Error('App root not found');
}

const icon = (name) => {
  const paths = {
    chatgpt: '<path d="M10.2 3.1a4.3 4.3 0 0 1 6.7 3.6 4.3 4.3 0 0 1 2.1 7.5 4.3 4.3 0 0 1-6.2 5.8 4.3 4.3 0 0 1-7-3.4 4.3 4.3 0 0 1-1.9-7.7 4.3 4.3 0 0 1 6.3-5.8Z"/><path d="M8 9.2 12 7l4 2.2v4.6L12 16l-4-2.2Z"/><path d="M12 7v9"/><path d="m8 13.8 8-4.6"/>',
    claude: '<path d="M12 3 4.8 7.2v9.6L12 21l7.2-4.2V7.2Z"/><path d="M12 7.2 8.3 9.4v5.2L12 16.8l3.7-2.2V9.4Z"/><path d="M4.8 7.2 12 11.4l7.2-4.2"/>',
    gemini: '<path d="M12 2c.8 5.2 3.8 8.2 9 9-5.2.8-8.2 3.8-9 9-.8-5.2-3.8-8.2-9-9 5.2-.8 8.2-3.8 9-9Z"/><path d="M19 3c.2 1.6 1.2 2.6 2.8 2.8-1.6.2-2.6 1.2-2.8 2.8-.2-1.6-1.2-2.6-2.8-2.8C17.8 5.6 18.8 4.6 19 3Z"/>',
    midjourney: '<path d="M3 16c2.5-5.7 5.5-8.6 9-8.6s6.5 2.9 9 8.6"/><path d="M6.5 15.8c1.6-3.1 3.4-4.7 5.5-4.7s3.9 1.6 5.5 4.7"/><path d="M4 18h16"/><path d="M12 5V3"/>',
    runway: '<path d="M4 5h16v14H4z"/><path d="m10 9 5 3-5 3Z"/><path d="M8 5v14"/><path d="M16 5v14"/>',
    kling: '<path d="M5 4v16"/><path d="M19 4 9 12l10 8"/><path d="M9 4v16"/>',
    sora: '<path d="M4 12c0-4.4 3.6-8 8-8 2.6 0 5 1.3 6.4 3.2"/><path d="M20 12c0 4.4-3.6 8-8 8-2.6 0-5-1.3-6.4-3.2"/><path d="M15 7h3.6V3.4"/><path d="M9 17H5.4v3.6"/><circle cx="12" cy="12" r="2.6"/>',
    veo: '<path d="m4 6 8 14 8-14"/><path d="M8.5 6 12 13l3.5-7"/><path d="M4 6h16"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    sparkles: '<path d="m12 3-1.9 5.8L4 11l6.1 2.2L12 19l1.9-5.8L20 11l-6.1-2.2Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/>',
    arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    menu: '<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    play: '<path d="m8 5 11 7-11 7Z"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    route: '<path d="M4 6h7a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h11"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="22" r="2"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1"/>',
  };

  return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

const escapeAttribute = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const particleTemplate = () =>
  Array.from({ length: 48 }, (_, index) => {
    const style = `left:${(index * 41) % 100}%;top:${(index * 67) % 100}%;animation-delay:${(index % 12) * -0.5}s;animation-duration:${10 + (index % 9)}s`;
    return `<span style="${style}"></span>`;
  }).join('');

const filteredTools = () =>
  tools.filter((tool) => {
    const searchText = `${tool.name} ${tool.description} ${tool.tags.join(' ')}`.toLowerCase();
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
        <article class="tool-card reveal-card" style="animation-delay:${index * 70}ms">
          <div class="card-glow"></div>
          <div class="card-topline">
            <div class="icon-orb brand-icon brand-icon-${tool.icon}">${icon(tool.icon)}</div>
            <span>${tool.accent}</span>
          </div>
          <h3>${tool.name}</h3>
          <p>${tool.description}</p>
          <div class="tag-row">${tool.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
          <div class="card-footer">
            <strong>${tool.metric}</strong>
            <a class="experience-link" href="${tool.url}" target="_blank" rel="noreferrer" aria-label="立即体验 ${tool.name}">立即体验 ${icon('arrow')}</a>
          </div>
        </article>
      `,
    )
    .join('');
  empty.hidden = matches.length > 0;
};

const renderApp = () => {
  app.className = isDark ? 'app dark' : 'app light';
  app.style.setProperty('--pointer-x', `${pointerX}%`);
  app.style.setProperty('--pointer-y', `${pointerY}%`);
  app.innerHTML = `
    <div class="ambient-grid" aria-hidden="true"></div>
    <div class="cursor-aura" aria-hidden="true"></div>
    <div class="light-ribbons" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="particle-field" aria-hidden="true">${particleTemplate()}</div>

    <header class="site-header">
      <a class="brand" href="#top" aria-label="航均AI实验室 首页">
        <span class="brand-mark">航</span>
        <span>航均AI实验室</span>
      </a>
      <button class="menu-toggle" type="button" aria-label="切换导航菜单">${menuOpen ? icon('close') : icon('menu')}</button>
      <nav class="nav-panel ${menuOpen ? 'open' : ''}" aria-label="主导航">
        <a href="#about">关于我们</a>
        <a href="#tools">AI工具</a>
        <a href="#video">AI视频</a>
        <a href="#roadmap">路线图</a>
        <a href="#contact">联系我们</a>
      </nav>
      <button class="theme-toggle" type="button" aria-label="切换明暗主题">${isDark ? icon('sun') : icon('moon')}<span>${isDark ? 'Light' : 'Dark'}</span></button>
    </header>

    <section class="hero parallax-layer" id="top" data-speed="-0.08">
      <div class="hero-shell glass-panel">
        <div class="eyebrow">${icon('sparkles')} AI Lab for ordinary builders</div>
        <h1>航均AI实验室</h1>
        <p>普通人也能用AI重构人生与工作流</p>
        <div class="hero-actions">
          <a class="primary-action" href="#tools">进入工具库 ${icon('arrow')}</a>
          <a class="secondary-action" href="#about">了解航均</a>
        </div>
        <div class="hero-metrics" aria-label="网站能力概览">
          <span><strong>7+</strong> 核心 AI 工具</span>
          <span><strong>5步</strong> 普通人路线图</span>
          <span><strong>4类</strong> 创作工作流</span>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="device-frame">
          <div class="device-toolbar"><i></i><i></i><i></i></div>
          <div class="command-line"><span>Ask</span><b>如何用 AI 做一个产品官网？</b></div>
          <div class="flow-grid">
            <span>Prompt</span><span>Content</span><span>Website</span><span>Private Domain</span><span>Product</span><span>Revenue</span>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section section-block" id="about">
      <div class="section-kicker">About Hangjun</div>
      <div class="about-layout glass-panel">
        <div>
          <h2>关于航均</h2>
          <p>一个普通人正在用AI学习、创造、搭建产品，把复杂技术变成普通人也能用的工具。</p>
        </div>
        <div class="about-proof">
          <span>Learn</span>
          <span>Create</span>
          <span>Build</span>
          <span>Productize</span>
        </div>
      </div>
    </section>

    <section class="tools-section section-block" id="tools">
      <div class="section-heading">
        <div>
          <span>${icon('grid')} AI Tool Library</span>
          <h2>把热门 AI 工具变成你的生产系统。</h2>
        </div>
        <div class="search-shell" role="search">
          ${icon('search')}
          <input id="search-input" aria-label="搜索 AI 工具" placeholder="搜索工具、场景或标签，例如：视频、网站、提问..." value="${escapeAttribute(query)}" />
        </div>
      </div>
      <div class="category-section" id="categories" aria-label="工具分类">
        <button class="category-chip ${activeCategory === 'all' ? 'active' : ''}" data-category="all">全部</button>
        ${categories.map((category) => `<button class="category-chip ${activeCategory === category.id ? 'active' : ''}" data-category="${category.id}">${category.label}</button>`).join('')}
      </div>
      <div class="tool-grid" id="tool-grid"></div>
      <p class="empty-state" id="empty-state" hidden>暂未找到匹配工具，请尝试其他关键词。</p>
    </section>

    <section class="video-section section-block" id="video">
      <div class="section-heading centered">
        <span>${icon('play')} AI Video Creation</span>
        <h2>AI视频创作专区</h2>
        <p>围绕短视频、商业广告、AI漫剧、产品展示，快速把想法变成可发布的动态内容。</p>
      </div>
      <div class="video-grid">
        ${videoTools.map((tool) => `
          <article class="video-card glass-panel">
            <div class="icon-orb brand-icon brand-icon-${tool.icon}">${icon(tool.icon)}</div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tag-row">${tool.useCases.map((item) => `<span>${item}</span>`).join('')}</div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="roadmap-section section-block" id="roadmap">
      <div class="section-heading">
        <div>
          <span>${icon('route')} Roadmap</span>
          <h2>普通人AI翻身路线图</h2>
        </div>
        <p>不是追热点，而是把 AI 变成能持续积累的个人杠杆。</p>
      </div>
      <div class="roadmap-list">
        ${roadmap.map(([step, title, description], index) => `
          <article class="roadmap-item glass-panel" style="--step:${index + 1}">
            <span class="step-index">0${index + 1}</span>
            <div>
              <small>${step}</small>
              <h3>${title}</h3>
              <p>${description}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="bottom-cta glass-panel" id="contact">
      <span>${icon('sparkles')} Start Creating</span>
      <h2>从今天开始，别只刷AI，要开始用AI创造</h2>
      <a class="primary-action" href="#tools">进入工具库 ${icon('arrow')}</a>
    </section>

    <footer class="site-footer">
      <a href="https://www.douyin.com" target="_blank" rel="noreferrer">我的抖音</a>
      <a href="https://x.com" target="_blank" rel="noreferrer">我的X主页</a>
      <a href="mailto:hello@hangjun.ai">联系方式</a>
      <span>© 2026 航均AI实验室</span>
    </footer>
  `;

  document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    menuOpen = !menuOpen;
    renderApp();
  });

  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    isDark = !isDark;
    renderApp();
  });

  document.querySelectorAll('.nav-panel a, .hero-actions a, .bottom-cta a').forEach((link) => {
    link.addEventListener('click', () => {
      menuOpen = false;
    });
  });

  document.querySelector('#search-input')?.addEventListener('input', (event) => {
    query = event.target.value;
    renderTools();
  });

  document.querySelectorAll('[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      document.querySelectorAll('.category-chip').forEach((chip) => chip.classList.remove('active'));
      button.classList.add('active');
      renderTools();
    });
  });

  renderTools();
};

const updateParallax = () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('.parallax-layer, .section-block').forEach((element, index) => {
    const speed = Number(element.dataset.speed ?? 0.035 + index * 0.006);
    element.style.setProperty('--parallax-y', `${scrollY * speed}px`);
  });
};

window.addEventListener('pointermove', (event) => {
  pointerX = (event.clientX / window.innerWidth) * 100;
  pointerY = (event.clientY / window.innerHeight) * 100;
  app.style.setProperty('--pointer-x', `${pointerX}%`);
  app.style.setProperty('--pointer-y', `${pointerY}%`);
});

window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    updateParallax();
    ticking = false;
  });
}, { passive: true });

renderApp();
updateParallax();
