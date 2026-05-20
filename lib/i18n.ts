export type Lang = "en" | "pt";

export type Copy = {
  nav: { about: string; stack: string; work: string; contact: string };
  hero: {
    eyebrow: string;
    name: [string, string];
    tagline: string;
    taglineAccent: string;
    meta: { k: string; v: string }[];
    scroll: string;
  };
  about: {
    label: string;
    heading: string;
    italicToken: string;
    body: [string, string];
    facts: [string, string][];
  };
  stack: {
    label: string;
    heading: string;
    groups: { title: string; items: string[] }[];
  };
  work: {
    label: string;
    heading: string;
    items: { year: string; title: string; desc: string; tags: string[] }[];
  };
  contact: {
    label: string;
    heading: [string, string, string];
    body: string;
    email: string;
    copyHint: string;
    copied: string;
  };
  footer: { left: string };
};

export const COPY: Record<Lang, Copy> = {
  en: {
    nav: { about: "About", stack: "Stack", work: "Work", contact: "Contact" },
    hero: {
      eyebrow: "BACKEND ENGINEER · BASED IN BRAZIL",
      name: ["Matheus", "Evangelista"],
      tagline: "Backend .NET developer for critical, regulated systems —",
      taglineAccent: "private pension, public sector, legacy modernization.",
      meta: [
        { k: "ROLE", v: "Backend .NET Developer" },
        { k: "EXP", v: "3+ years" },
        { k: "STACK", v: ".NET · C# · SQL" },
        { k: "STATUS", v: "Open to opportunities" },
      ],
      scroll: "SCROLL TO EXPLORE",
    },
    about: {
      label: "01 — ABOUT",
      heading: "I write software that doesn't wake people up at 3am.",
      italicToken: "3am",
      body: [
        "Backend .NET developer with 3+ years building critical, regulated systems — private pension funds (SINQIA) and public-sector audit (São Paulo State Audit Court — TCESP) — plus legacy modernization at Pekus. APIs, integrations, SQL performance and long-term sustainability of corporate applications. I work where regulatory compliance, high availability and operational continuity aren't negotiable.",
        "Day to day: APIs and integrations, stored procedures and functions in SQL Server in systems where business logic lives inside the database, and processing of high data volumes in regulated environments. Currently going deeper into AWS, messaging, observability and event-driven architecture. Clean Code, SOLID, DDD. GitHub Copilot and generative AI in the flow to ship faster without cutting corners.",
      ],
      facts: [
        ["YEARS", "3+"],
        ["LANGUAGES", "PT · EN"],
        ["FOCUS", ".NET · APIs · SQL"],
        ["LOCATION", "São Paulo · Remote · Open to relocate"],
      ],
    },
    stack: {
      label: "02 — STACK",
      heading: "Tools I reach for.",
      groups: [
        {
          title: "Proficient",
          items: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "Blazor", "SQL Server", "T-SQL", "RESTful APIs"],
        },
        {
          title: "Familiar",
          items: ["Go", "TypeScript", "PostgreSQL", "MySQL", "MongoDB", "AWS", "Azure", "Messaging"],
        },
        {
          title: "Practices & Architecture",
          items: [
            "Microservices",
            "Event-driven architecture",
            "High availability",
            "Resilience",
            "Observability",
            "DDD",
            "SOLID",
            "Clean Code",
            "Scrum / TDD",
            "CI/CD",
          ],
        },
      ],
    },
    work: {
      label: "03 — SELECTED WORK",
      heading: "Recent ground I've covered.",
      items: [
        {
          year: "Oct 2024 —",
          title: "Private pension platform · SINQIA / OSBR",
          desc: "5 critical private pension systems with high data volume — regulatory compliance, high availability and operational continuity for pension funds. RESTful API integrations between legacy services with focus on resilience and maintainability. Stored procedures and functions in SQL Server in systems where business logic lives inside the database. GitHub Copilot supporting the daily flow.",
          tags: [".NET", "REST APIs", "SQL Server"],
        },
        {
          year: "Mar — Oct 2024",
          title: "TCESP accountability system · RedMaxx",
          desc: "Critical features in the São Paulo State Audit Court's electronic accountability system, used by state Direct Administration bodies to submit accounting and fiscal data. Tuned complex SQL queries and stored procedures for reporting, significantly reducing government financial data processing time.",
          tags: [".NET", "SQL Server", "Stored Procs"],
        },
        {
          year: "Sep 2023 — Mar 2024",
          title: "Legacy modernization · Pekus",
          desc: "Migration of multiple legacy ASP.NET Web Forms apps to ASP.NET Core, yielding performance gains and easier maintenance. Built new features for web and desktop systems using Blazor and Windows Forms.",
          tags: ["ASP.NET Core", "Blazor", "WinForms"],
        },
        {
          year: "Dec 2022 — Sep 2023",
          title: "Real-time food-service platform · Pekus",
          desc: "Full-stack solution for the food-service sector with real-time features using SignalR, serving 30+ venues in production. Built during my development internship.",
          tags: [".NET", "SignalR", "Full-stack"],
        },
      ],
    },
    contact: {
      label: "04 — CONTACT",
      heading: ["Let's", "build", "something."],
      body: "Open to backend roles, integrations work, and regulated-industry projects. Brazil-based, remote-friendly.",
      email: "matheus.evangelista7@protonmail.com",
      copyHint: "CLICK TO COPY",
      copied: "COPIED",
    },
    footer: {
      left: "© 2026 — MATHEUS EVANGELISTA",
    },
  },
  pt: {
    nav: { about: "Sobre", stack: "Stack", work: "Projetos", contact: "Contato" },
    hero: {
      eyebrow: "DEV BACKEND .NET PLENO · BASEADO EM SÃO PAULO",
      name: ["Matheus", "Evangelista"],
      tagline: "Dev Backend .NET para sistemas críticos e regulados —",
      taglineAccent: "previdência privada, gestão pública, modernização de legados.",
      meta: [
        { k: "CARGO", v: "Dev Backend .NET Pleno" },
        { k: "EXP", v: "3+ anos" },
        { k: "STACK", v: ".NET · C# · SQL" },
        { k: "STATUS", v: "Aberto a oportunidades" },
      ],
      scroll: "ROLE PARA EXPLORAR",
    },
    about: {
      label: "01 — SOBRE",
      heading: "Escrevo software que não acorda ninguém às 3h da manhã.",
      italicToken: "3h da manhã",
      body: [
        "Dev Backend .NET Pleno com mais de 3 anos construindo sistemas críticos e regulados — previdência privada (SINQIA) e gestão pública (Tribunal de Contas de SP — TCESP) — além de modernização de legados na Pekus. APIs, integrações, performance SQL e sustentação de aplicações corporativas. Atuo onde conformidade regulatória, alta disponibilidade e continuidade operacional não são opcionais.",
        "No dia a dia: APIs e integrações, stored procedures e funções em SQL Server em sistemas com lógica de negócio centralizada no banco, e processamento de grandes volumes de dados em ambiente regulado. Em aprofundamento contínuo em AWS, mensageria, observabilidade e arquitetura orientada a eventos. Clean Code, SOLID, DDD. GitHub Copilot e IA generativa no fluxo para entregar mais rápido sem abrir mão da qualidade.",
      ],
      facts: [
        ["ANOS", "3+"],
        ["IDIOMAS", "PT · EN"],
        ["FOCO", ".NET · APIs · SQL"],
        ["LOCAL", "São Paulo · Remoto · Aberto a mudança"],
      ],
    },
    stack: {
      label: "02 — STACK",
      heading: "Ferramentas do dia a dia.",
      groups: [
        {
          title: "Proficiente",
          items: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "Blazor", "SQL Server", "T-SQL", "RESTful APIs"],
        },
        {
          title: "Conhecimento",
          items: ["Go", "TypeScript", "PostgreSQL", "MySQL", "MongoDB", "AWS", "Azure", "Mensageria"],
        },
        {
          title: "Práticas & Arquitetura",
          items: [
            "Microsserviços",
            "Arquitetura orientada a eventos",
            "Alta disponibilidade",
            "Resiliência",
            "Observabilidade",
            "DDD",
            "SOLID",
            "Clean Code",
            "Scrum / TDD",
            "CI/CD",
          ],
        },
      ],
    },
    work: {
      label: "03 — PROJETOS SELECIONADOS",
      heading: "Terreno coberto recentemente.",
      items: [
        {
          year: "Out 2024 —",
          title: "Plataforma de Previdência Privada · SINQIA / OSBR",
          desc: "5 sistemas críticos de previdência privada com alta volumetria de dados — conformidade regulatória, alta disponibilidade e continuidade operacional para fundos de pensão. Integrações RESTful entre sistemas legados com foco em resiliência e manutenibilidade. Stored procedures e funções em SQL Server em sistemas com lógica de negócio centralizada no banco. GitHub Copilot apoiando o fluxo diário.",
          tags: [".NET", "REST APIs", "SQL Server"],
        },
        {
          year: "Mar — Out 2024",
          title: "Sistema de Prestação de Contas · TCESP / RedMaxx",
          desc: "Funcionalidades críticas no sistema de prestação de contas eletrônica do Tribunal de Contas do Estado de SP, utilizado por órgãos da Administração Direta estadual para envio de dados contábeis e fiscais. Otimização de consultas SQL complexas e stored procedures voltadas a relatórios, reduzindo significativamente o tempo de processamento de dados financeiros governamentais.",
          tags: [".NET", "SQL Server", "Stored Procs"],
        },
        {
          year: "Set 2023 — Mar 2024",
          title: "Modernização de legados · Pekus",
          desc: "Modernização de múltiplas aplicações legadas de ASP.NET Web Forms para ASP.NET Core, com ganhos de performance e maior facilidade de manutenção. Novas funcionalidades para sistemas web e desktop em Blazor e Windows Forms.",
          tags: ["ASP.NET Core", "Blazor", "WinForms"],
        },
        {
          year: "Dez 2022 — Set 2023",
          title: "Plataforma em tempo real para alimentação · Pekus",
          desc: "Solução full-stack para o setor de alimentação com funcionalidades em tempo real via SignalR, atendendo mais de 30 estabelecimentos em produção. Construída durante o estágio em desenvolvimento.",
          tags: [".NET", "SignalR", "Full-stack"],
        },
      ],
    },
    contact: {
      label: "04 — CONTATO",
      heading: ["Vamos", "construir", "algo."],
      body: "Aberto a vagas de backend, trabalho de integração e projetos em setores regulados. Baseado no Brasil, remoto.",
      email: "matheus.evangelista7@protonmail.com",
      copyHint: "CLIQUE P/ COPIAR",
      copied: "COPIADO",
    },
    footer: {
      left: "© 2026 — MATHEUS EVANGELISTA",
    },
  },
};