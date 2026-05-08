type CategoryId = 'chat' | 'image' | 'video' | 'office';

type Tool = {
  name: string;
  category: CategoryId;
  description: string;
  accent: string;
  metric: string;
  icon: 'bot' | 'image' | 'video' | 'office';
  tags: string[];
};

const categories: Array<{ id: CategoryId; label: string }> = [
  { id: 'chat', label: 'AI聊天' },
  { id: 'image', label: 'AI绘图' },
  { id: 'video', label: 'AI视频' },
  { id: 'office', label: 'AI办公' },
];

const tools: Tool[] = [
  {
    name: 'ChatGPT',
    category: 'chat',
    description: '面向创意、研究与编程的全能型智能对话工作台。',
    accent: 'Platinum Core',
    metric: '98% 推荐',
    icon: 'bot',
    tags: ['对话', '写作', '代码'],
  },
  {
    name: 'Claude',
    category: 'chat',
    description: '适合长文档理解、严谨推理和企业知识协作。',
    accent: 'Reason Layer',
    metric: '200K Context',
    icon: 'bot',
    tags: ['长上下文', '分析', '协作'],
  },
  {
    name: 'Midjourney',
    category: 'image',
    description: '电影级视觉风格生成，用自然语言构建高质感画面。',
    accent: 'Visual Engine',
    metric: '4K Ready',
    icon: 'image',
    tags: ['视觉', '海报', '概念'],
  },
  {
    name: 'Stable Diffusion',
    category: 'image',
    description: '开源图像生成生态，支持本地部署与深度工作流定制。',
    accent: 'Open Studio',
    metric: 'Local First',
    icon: 'image',
    tags: ['开源', '模型', '控制'],
  },
  {
    name: 'Runway',
    category: 'video',
    description: '为品牌短片、动态分镜和视觉实验打造的 AI 视频套件。',
    accent: 'Motion Lab',
    metric: 'Gen Video',
    icon: 'video',
    tags: ['视频', '动效', '剪辑'],
  },
  {
    name: 'Pika',
    category: 'video',
    description: '快速把文本、图片转成可分享的动态视频资产。',
    accent: 'Scene Forge',
    metric: 'Fast Render',
    icon: 'video',
    tags: ['图生视频', '创意', '社媒'],
  },
  {
    name: 'Notion AI',
    category: 'office',
    description: '将文档、数据库、会议纪要和团队知识库串联起来。',
    accent: 'Workspace OS',
    metric: 'Team Sync',
    icon: 'office',
    tags: ['知识库', '文档', '团队'],
  },
  {
    name: 'Gamma',
    category: 'office',
    description: '几分钟生成提案、课程与品牌演示的 AI Presentation 工具。',
    accent: 'Deck Designer',
    metric: 'One Prompt',
    icon: 'office',
    tags: ['PPT', '提案', '演示'],
  },
];

let activeCategory: CategoryId | 'all' = 'all';
let query = '';
let isDark = true;
let menuOpen = false;

const app = document.querySelector<HTMLElement>('#app');

if (!app) {
  throw new Error('App root not found');
}

const icon = (name: Tool['icon'] | 'search' | 'sparkles' | 'arrow' | 'sun' | 'moon' | 'menu' | 'close') => {
  const paths = {
    bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="3"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M9 13v2"/><path d="M15 13v2"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    video: '<path d="m16 13 5.2 3.4A.5.5 0 0 0 22 16V8a.5.5 0 0 0-.8-.4L16 11"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    office: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    sparkles: '<path d="m12 3-1.9 5.8L4 11l6.1 2.2L12 19l1.9-5.8L20 11l-6.1-2.2Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/>',
    arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    menu: '<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  }[name];

  return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
};


const escapeAttribute = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const particleTemplate = () =>
  Array.from({ length: 72 }, (_, index) => {
    const style = `left:${(index * 37) % 100}%;top:${(index * 61) % 100}%;width:${2 + (index % 4)}px;height:${2 + (index % 4)}px;animation-delay:${(index % 12) * -0.45}s;animation-duration:${8 + (index % 10)}s`;
    return `<span style="${style}"></span>`;
  }).join('');

const filteredTools = () =>
  tools.filter((tool) => {
    const searchText = `${tool.name} ${tool.description} ${tool.tags.join(' ')}`.toLowerCase();
    return searchText.includes(query.trim().toLowerCase()) && (activeCategory === 'all' || tool.category === activeCategory);
  });

const renderTools = () => {
  const grid = document.querySelector<HTMLDivElement>('#tool-grid');
  const empty = document.querySelector<HTMLParagraphElement>('#empty-state');
  if (!grid || !empty) return;

  const matches = filteredTools();
  grid.innerHTML = matches
    .map(
      (tool, index) => `
        <article class="tool-card" style="animation-delay:${index * 70}ms">
          <div class="card-topline">
            <div class="icon-orb">${icon(tool.icon)}</div>
            <span>${tool.accent}</span>
          </div>
          <h3>${tool.name}</h3>
          <p>${tool.description}</p>
          <div class="tag-row">${tool.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
          <div class="card-footer">
            <strong>${tool.metric}</strong>
            <button type="button" aria-label="查看 ${tool.name}">${icon('arrow')}</button>
          </div>
        </article>
      `,
    )
    .join('');
  empty.hidden = matches.length > 0;
};

const renderApp = () => {
  app.className = isDark ? 'app dark' : 'app light';
  app.innerHTML = `
    <div class="particle-field" aria-hidden="true">${particleTemplate()}</div>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="SiliconOracle AI 首页">
        <span class="brand-mark">SO</span>
        <span>SiliconOracle AI</span>
      </a>
      <button class="menu-toggle" type="button" aria-label="切换导航菜单">${menuOpen ? icon('close') : icon('menu')}</button>
      <nav class="nav-panel ${menuOpen ? 'open' : ''}" aria-label="主导航">
        <a href="#tools">工具库</a>
        <a href="#categories">分类</a>
        <a href="#curation">精选标准</a>
      </nav>
      <button class="theme-toggle" type="button">${isDark ? icon('sun') : icon('moon')}<span>${isDark ? 'Light' : 'Dark'}</span></button>
    </header>

    <section class="hero" id="top">
      <div class="eyebrow">${icon('sparkles')}AI Navigator / Curated for builders</div>
      <h1>像苹果官网一样克制，像未来实验室一样锋利。</h1>
      <p>SiliconOracle AI 汇聚高质量 AI 聊天、绘图、视频与办公工具，用黑白科技美学重构你的智能工作流入口。</p>
      <div class="search-shell" role="search">
        ${icon('search')}
        <input id="search-input" aria-label="搜索 AI 工具" placeholder="搜索工具、场景或标签，例如：视频、PPT、代码..." value="${escapeAttribute(query)}" />
      </div>
      <div class="hero-actions">
        <a class="primary-action" href="#tools">探索工具库 ${icon('arrow')}</a>
        <span class="hero-note">72ms 级动效 · 响应式布局 · 暗黑模式</span>
      </div>
    </section>

    <section class="category-section" id="categories" aria-label="工具分类">
      <button class="category-chip ${activeCategory === 'all' ? 'active' : ''}" data-category="all">全部</button>
      ${categories.map((category) => `<button class="category-chip ${activeCategory === category.id ? 'active' : ''}" data-category="${category.id}">${category.label}</button>`).join('')}
    </section>

    <section class="tools-section" id="tools">
      <div class="section-heading">
        <span>Featured Stack</span>
        <h2>高级 AI 工具导航</h2>
      </div>
      <div class="tool-grid" id="tool-grid"></div>
      <p class="empty-state" id="empty-state" hidden>暂未找到匹配工具，请尝试其他关键词。</p>
    </section>

    <section class="curation-panel" id="curation">
      <div>
        <span>Oracle Standard</span>
        <h2>只保留值得打开的 AI 工具。</h2>
      </div>
      <p>我们以产品成熟度、视觉质感、上手速度、工作流扩展性四个维度筛选，让导航页既像产品橱窗，也像你的个人智能操作系统。</p>
    </section>
  `;

  document.querySelector<HTMLButtonElement>('.menu-toggle')?.addEventListener('click', () => {
    menuOpen = !menuOpen;
    renderApp();
  });

  document.querySelector<HTMLButtonElement>('.theme-toggle')?.addEventListener('click', () => {
    isDark = !isDark;
    renderApp();
  });

  document.querySelector<HTMLInputElement>('#search-input')?.addEventListener('input', (event) => {
    query = (event.target as HTMLInputElement).value;
    renderTools();
  });

  document.querySelectorAll<HTMLButtonElement>('[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category as CategoryId | 'all';
      document.querySelectorAll('.category-chip').forEach((chip) => chip.classList.remove('active'));
      button.classList.add('active');
      renderTools();
    });
  });

  renderTools();
};

renderApp();
