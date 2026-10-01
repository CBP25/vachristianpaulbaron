/* -------------------------------------------------------------
   Christian Paul Baron Portfolio — Interactive Script
-------------------------------------------------------------- */

// 1. Projects Data
const projects = [
  {
    id: "eng-restoration",
    title: "ENG Restoration",
    category: "Web",
    summary: "A complete website designed and built for a Florida structural restoration and engineering coordination company.",
    client: "ENG Restoration LLC",
    year: "Live website",
    tools: ["WordPress", "Web design", "Responsive build"],
    image: "https://baron-portfolio-showcase.lovable.app/__l5e/assets-v1/ec9a4206-4fba-4b26-99e9-7863de7695fa/eng-restoration-laptop.jpg",
    href: "https://engrestoration.com",
    challenge: "Present complex inspection, recertification and restoration services clearly to condominium associations and multifamily property owners.",
    approach: [
      "Designed and built the full responsive website",
      "Organised regulatory services into clear customer paths",
      "Created focused consultation and phone contact actions"
    ],
    results: [
      "Live business website",
      "Clear service and project presentation across devices"
    ]
  },
  {
    id: "florida-homes-fix",
    title: "Florida Homes Fix",
    category: "Web",
    summary: "A home repair and remodeling lead-generation website designed and built for the Florida market.",
    client: "Florida Homes Fix",
    year: "Live website",
    tools: ["WordPress", "Web design", "Responsive build"],
    image: "https://baron-portfolio-showcase.lovable.app/__l5e/assets-v1/af4c92bd-a377-48fa-9ff9-bd17d5013acd/florida-homes-fix-laptop.jpg",
    href: "https://floridahomesfix.com",
    challenge: "Make a broad range of repair, remodeling and property services easy to discover and request.",
    approach: [
      "Designed and built the site from the ground up",
      "Created service-specific pages and quote paths",
      "Structured the content for local search and mobile visitors"
    ],
    results: [
      "Live multi-service business website",
      "Direct quote and consultation journey"
    ]
  },
  {
    id: "glow-and-lens",
    title: "Glow & Lens",
    category: "Web",
    summary: "A visual portfolio website designed and built for a South Florida makeup artist and photographer.",
    client: "Glow & Lens",
    year: "Live website",
    tools: ["WordPress", "Web design", "Image-led layout"],
    image: "https://baron-portfolio-showcase.lovable.app/__l5e/assets-v1/36186215-7e5d-4936-a743-995e086c0a9f/glow-and-lens-laptop.jpg",
    href: "https://glowandlens.com",
    challenge: "Let the imagery lead while still communicating services and making the portfolio easy to browse.",
    approach: [
      "Designed and built the complete website",
      "Developed an image-led visual direction",
      "Created clear service, portfolio and contact sections"
    ],
    results: [
      "Live creative-business portfolio",
      "Responsive presentation from Miami to Palm Beach"
    ]
  },
  {
    id: "sahar-website",
    title: "Sahar Pharma Website & E-commerce",
    category: "Web",
    summary: "A full redesign of Sahar Pharma's company website, including its e-commerce product catalogue.",
    client: "Sahar International Trading Inc.",
    year: "Live website",
    tools: ["WordPress", "WooCommerce", "Web redesign"],
    image: "https://baron-portfolio-showcase.lovable.app/__l5e/assets-v1/7f2a6c51-965c-4e6b-b370-897a4fe2ed90/sahar-ph-laptop.jpg",
    href: "https://sahar.ph",
    challenge: "Turn a large pharmaceutical catalogue into a clear, trustworthy site for hospitals, drugstores and wholesale buyers.",
    approach: [
      "Redesigned the complete website and navigation",
      "Built the e-commerce catalogue and product pages",
      "Structured technical product details and wholesale enquiries"
    ],
    results: [
      "Live redesigned website",
      "Searchable e-commerce catalogue with detailed product information"
    ]
  },
  {
    id: "my-houzzz-management",
    title: "My Houzzz Management",
    category: "Web Management",
    summary: "Ongoing property listing and website content updates for a bilingual vacation-rental and property-management business.",
    client: "My Houzzz Management",
    year: "Ongoing management",
    tools: ["WordPress", "Content updates", "Property listings"],
    image: "https://baron-portfolio-showcase.lovable.app/__l5e/assets-v1/536cc089-c816-4f7c-948f-ece718d83260/my-houzzz-management-laptop.jpg",
    href: "https://www.myhouzzzmanagement.com",
    challenge: "Keep a changing portfolio of properties accurate and current across a bilingual management website.",
    approach: [
      "Managed property listing updates",
      "Updated images, details and availability content",
      "Maintained consistent presentation across English and French pages"
    ],
    results: [
      "Current, accurate property content",
      "Ongoing website management rather than original site creation"
    ]
  },
  {
    id: "sahar-packaging",
    title: "Packaging Design — Sahar Pharma",
    category: "Packaging",
    summary: "A pharmaceutical packaging system created across the Sahar product range.",
    client: "Sahar International Trading Inc.",
    year: "2023 — 2025",
    tools: ["Illustrator", "InDesign", "Print production"],
    image: "https://baron-portfolio-showcase.lovable.app/__l5e/assets-v1/05d3c6b7-89b8-42ea-bcac-3bb3552548a8/sahar-packaging.png",
    href: "https://www.behance.net/gallery/186568739/Packaging-design-(Sahar-Pharma)",
    challenge: "Give many products a consistent Sahar identity while keeping each medicine easy to distinguish.",
    approach: [
      "Created adaptable carton layouts",
      "Built colour and information systems for product families",
      "Prepared production-ready artwork"
    ],
    results: [
      "A coherent packaging range",
      "Reusable system for future products"
    ]
  },
  {
    id: "zopan-ds",
    title: "Zopan DS Product Packaging",
    category: "Packaging",
    summary: "Pharmaceutical packaging that balances regulatory information with clear shelf presence.",
    client: "Sahar International Trading Inc.",
    year: "2025",
    tools: ["Illustrator", "Photoshop", "Print production"],
    image: "https://baron-portfolio-showcase.lovable.app/__l5e/assets-v1/8fe88ceb-8fef-4488-921b-5857175231c3/zopan-ds.jpg",
    href: "https://www.behance.net/gallery/223361397/Zopan-DS-Product-Packaging",
    challenge: "Fit dense medical and dosage information on a small carton while keeping it immediately readable.",
    approach: [
      "Built a clear information hierarchy",
      "Created a restrained variant colour system",
      "Prepared dielines and print-ready files"
    ],
    results: [
      "Production-ready packaging",
      "Consistent visual language for the product line"
    ]
  },
  {
    id: "propofol",
    title: "PROPOFOL — SITI-PRO",
    category: "Packaging",
    summary: "Carton and label design for an injectable anaesthetic product.",
    client: "Sahar International Trading Inc.",
    year: "2024",
    tools: ["Illustrator", "InDesign"],
    image: "https://baron-portfolio-showcase.lovable.app/__l5e/assets-v1/b6007de0-097c-4d41-a7b2-d37985a5503e/propofol.png",
    href: "https://www.behance.net/gallery/209106579/PROPOFOL-SITI-PRO",
    challenge: "Support quick, unambiguous product identification in a clinical setting.",
    approach: [
      "Prioritised strength and volume typography",
      "Applied clear SKU colour coding",
      "Checked every detail at actual print size"
    ],
    results: [
      "Clear at-a-glance identification",
      "Print-ready artwork delivered"
    ]
  },
  {
    id: "cefuvil",
    title: "CEFUVIL — Product Design Project",
    category: "Packaging",
    summary: "Complete pharmaceutical product design developed from visual direction through production-ready packaging.",
    client: "Sahar International Trading Inc.",
    year: "2024",
    tools: ["Illustrator", "Photoshop", "Packaging mockups"],
    image: "https://baron-portfolio-showcase.lovable.app/__l5e/assets-v1/64926e52-20c1-4c55-9ce6-130a222383be/cefuvil.jpg",
    href: "https://www.behance.net/gallery/209097345/CEFUVIL-Product-Design-Project",
    challenge: "Create a trustworthy modern product identity while keeping essential medical information clear.",
    approach: [
      "Explored product identity and colour directions",
      "Developed the chosen design across the carton and supporting materials",
      "Produced presentation mockups and print-ready artwork"
    ],
    results: [
      "Complete product design system",
      "Production-ready packaging presentation"
    ]
  },
  {
    id: "cafe-tribu",
    title: "Cafe Tribu Brand Creation",
    category: "Branding",
    summary: "Brand identity and collateral design for Cafe Tribu.",
    client: "Cafe Tribu",
    year: "2021",
    tools: ["Photoshop", "Brand collateral"],
    image: "https://baron-portfolio-showcase.lovable.app/__l5e/assets-v1/051cc95f-91a1-4061-a57f-50d52ef37396/cafe-tribu.webp",
    href: "https://www.behance.net/gallery/118100755/Cafe-Tribu",
    challenge: "Create a recognisable café identity that carries naturally across customer touchpoints.",
    approach: [
      "Established the core visual direction",
      "Designed branded marketing collateral",
      "Applied the identity consistently across formats"
    ],
    results: [
      "Cohesive café brand presentation",
      "Flexible collateral system"
    ]
  },
  {
    id: "go-gizzip",
    title: "GO Gizzip Brand Creation",
    category: "Branding",
    summary: "Brand creation and visual identity project for GO Gizzip.",
    client: "GO Gizzip",
    year: "2020",
    tools: ["Photoshop", "Illustrator", "Brand identity"],
    image: "https://baron-portfolio-showcase.lovable.app/__l5e/assets-v1/90807f53-897a-48f8-a7b5-d44bbf06b51f/go-gizzip.webp",
    href: "https://www.behance.net/gallery/104034253/GO-Gizzip-Project",
    challenge: "Build a distinctive, adaptable brand identity with a strong visual personality.",
    approach: [
      "Developed the brand concept and visual direction",
      "Created the identity artwork and applications",
      "Prepared a consistent presentation system"
    ],
    results: [
      "Complete brand concept",
      "Identity demonstrated across real-world applications"
    ]
  }
];

// 2. Skills Data
const skills = [
  { name: "Adobe Illustrator", level: 95 },
  { name: "Adobe Photoshop", level: 92 },
  { name: "Packaging & Print Production", level: 90 },
  { name: "WordPress / Duda", level: 88 },
  { name: "Figma & UI Design", level: 84 },
  { name: "Adobe InDesign", level: 80 },
  { name: "Illustration & Digital Art", level: 88 },
  { name: "Canva & Social Graphics", level: 86 }
];

// 3. Services Data
const services = [
  {
    title: "Packaging Design",
    desc: "Product boxes, labels and cartons — including regulated pharmaceutical packaging built to print spec."
  },
  {
    title: "Brand Identity",
    desc: "Logos, colour systems, type choices and simple guidelines so a brand stays consistent everywhere."
  },
  {
    title: "Web Design",
    desc: "Landing pages and full sites designed and built on WordPress, Duda and modern page builders."
  },
  {
    title: "UI / Mobile Design",
    desc: "App and dashboard screens with clean hierarchy, real states and developer-ready handoff."
  },
  {
    title: "Illustration & Apparel",
    desc: "Original illustration, character work and t-shirt graphics for merch and campaign collections."
  },
  {
    title: "Marketing Collateral",
    desc: "Social graphics, brochures, posters and sales material produced fast and on brand."
  },
  {
    title: "Admin & VA Support",
    desc: "Inbox and calendar management, data entry, content moderation and day-to-day operations support."
  }
];

// 4. Experience Data
const experience = [
  {
    period: "2025 — Present",
    role: "Content Moderator (TikTok)",
    org: "Teleperformance",
    detail: "Reviewed and moderated TikTok content to ensure compliance with community guidelines and platform policies while maintaining accuracy, quality and productivity standards."
  },
  {
    period: "2023 — 2025",
    role: "Graphic Designer",
    org: "Sahar International Trade Inc.",
    detail: "Designed product packaging and marketing materials for the pharmaceutical industry, making medical information engaging and accessible."
  },
  {
    period: "2021 — 2022",
    role: "Account Verifier",
    org: "Treasurebowl Fintech Inc.",
    detail: "Verified loan applications in the finance industry, ensuring accuracy, integrity and financial compliance."
  },
  {
    period: "2015 — 2021",
    role: "Web Designer",
    org: "Personiv",
    detail: "Built and managed websites on CRM platforms such as Duda and WordPress, improving user experience and online presence for BPO clients."
  }
];

// Initialize DOM
document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleIcon = themeToggle.querySelector(".theme-toggle-icon");

  function updateThemeToggle() {
    const isDark = document.documentElement.dataset.theme === "dark";
    themeToggleIcon.textContent = isDark ? "☀" : "☾";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  updateThemeToggle();

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = isDark ? "light" : "dark";
    try {
      localStorage.setItem("cpb-theme", isDark ? "light" : "dark");
    } catch (error) {}
    updateThemeToggle();
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu toggle
  const toggleBtn = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  // Render Skills
  const skillsContainer = document.getElementById("skills-list");
  skills.forEach(s => {
    const row = document.createElement("div");
    row.className = "skill-row";
    row.innerHTML = `
      <div class="skill-info">
        <span>${s.name}</span>
        <span>${s.level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" style="width: ${s.level}%;"></div>
      </div>
    `;
    skillsContainer.appendChild(row);
  });

  // Render Services
  const servicesGrid = document.getElementById("services-grid");
  services.forEach(srv => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <h3 class="service-title">${srv.title}</h3>
      <p class="service-desc">${srv.desc}</p>
    `;
    servicesGrid.appendChild(card);
  });

  // Render Experience Timeline
  const expTimeline = document.getElementById("experience-timeline");
  experience.forEach(exp => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-period">${exp.period}</div>
      <h3 class="timeline-role">${exp.role}</h3>
      <div class="timeline-org">${exp.org}</div>
      <p class="timeline-detail">${exp.detail}</p>
    `;
    expTimeline.appendChild(item);
  });

  // Render Projects & Filter Logic
  const projectsGrid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function renderProjects(category = "all") {
    projectsGrid.innerHTML = "";
    const filtered = category === "all" 
      ? projects 
      : projects.filter(p => p.category.toLowerCase() === category.toLowerCase());

    filtered.forEach(p => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.dataset.id = p.id;
      card.innerHTML = `
        <div class="card-image-wrap">
          <img src="${p.image}" alt="${p.title}" class="card-img" loading="lazy" />
        </div>
        <div class="card-content">
          <div class="card-top">
            <span class="card-category">${p.category}</span>
            <span class="card-year">${p.year}</span>
          </div>
          <h3 class="card-title">${p.title}</h3>
          <p class="card-summary">${p.summary}</p>
          <div class="card-tools">
            ${p.tools.map(t => `<span class="tool-tag">${t}</span>`).join("")}
          </div>
        </div>
      `;
      card.addEventListener("click", () => openModal(p));
      projectsGrid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });

  // Initial render of all projects
  renderProjects("all");

  // Modal logic
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  const modalBody = document.getElementById("modal-body");

  function openModal(project) {
    modalBody.innerHTML = `
      <div class="modal-header-tag">${project.category} &bull; ${project.year}</div>
      <h2 class="modal-title">${project.title}</h2>
      <div class="modal-meta">
        <span><strong>Client:</strong> ${project.client}</span>
        <span><strong>Tools:</strong> ${project.tools.join(", ")}</span>
      </div>
      <img src="${project.image}" alt="${project.title}" class="modal-img" />
      
      <h3 class="modal-section-title">The Challenge</h3>
      <p class="modal-desc" style="color: var(--text-muted); margin-bottom: 1rem;">${project.challenge}</p>

      <h3 class="modal-section-title">Approach</h3>
      <ul class="modal-list">
        ${project.approach.map(a => `<li>${a}</li>`).join("")}
      </ul>

      <h3 class="modal-section-title">Outcome &amp; Results</h3>
      <ul class="modal-list">
        ${project.results.map(r => `<li>${r}</li>`).join("")}
      </ul>

      <div style="margin-top: 2rem;">
        <a href="${project.href}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          ${project.href.startsWith("http") && !project.href.includes("behance.net") ? "Visit Live Website ↗" : "View on Behance ↗"}
        </a>
      </div>
    `;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
});
