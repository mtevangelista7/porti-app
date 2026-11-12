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
        { k: "ROLE", v: "Mid-Level .NET Developer" },
        { k: "EXP", v: "~4 years" },
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
        "Backend .NET developer with nearly 4 years building critical applications in regulated domains — private pensions (Evertec) and the public sector (São Paulo State Court of Audit — TCE-SP) — where stability, compliance and complex business rules are non-negotiable. REST APIs, JWT authentication, integrating legacy systems with modern services, application modernization and SQL Server performance tuning. Postgraduate specialization in .NET systems architecture on Azure.",
        "Day to day: REST endpoints with JWT and Swagger/OpenAPI, moving business rules out of legacy systems and shared stored procedures into the application layer (ADO.NET, parameterized queries, Repository Pattern), and tuning SQL on high-volume databases. Currently going deeper into AWS, Docker, RabbitMQ, observability and event-driven architecture. Clean Code, SOLID, DDD. AI tooling integrated into the development lifecycle to ship faster without cutting corners.",
      ],
      facts: [
        ["YEARS", "~4"],
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
          items: [
            "C#",
            ".NET",
            "ASP.NET Core",
            "Entity Framework",
            "ADO.NET",
            "Blazor",
            "SQL Server",
            "T-SQL",
            "RESTful APIs",
            "JWT",
            "Swagger/OpenAPI",
            "Git",
            "Azure DevOps",
          ],
        },
        {
          title: "Familiar",
          items: ["Go", "TypeScript", "PostgreSQL", "MySQL", "MongoDB", "AWS", "Azure", "Docker", "RabbitMQ"],
        },
        {
          title: "Practices & Architecture",
          items: [
            "Microservices",
            "Event-driven architecture",
            "High availability",
            "Observability (App Insights)",
            "DDD",
            "SOLID",
            "Clean Code",
            "Scrum / TDD",
            "CI/CD",
            "SonarQube",
          ],
        },
      ],
    },
    work: {
      label: "03 — SELECTED WORK",
      heading: "Recent ground I've covered.",
      items: [
        {
          year: "Nov 2024 —",
          title: "White-label private pension API · Optimus / Evertec",
          desc: "Evolved the private pension integration layer from an internal component into a white-label REST API, letting plan sponsors build their own portals on top of the platform and unlocking a new type of contract. Built and refactored ~60 of the API's 150+ endpoints, with JWT authentication (helped build v2), Swagger/OpenAPI and SonarQube. Moved queries out of stored procedures shared across teams into the application layer (ADO.NET, Repository Pattern), removing a recurring source of production bugs.",
          tags: [".NET", "REST APIs", "JWT"],
        },
        {
          year: "Apr — Oct 2024",
          title: "TCE-SP accountability system (SISCOE) · RedMaxx",
          desc: "Features for SISCOE, the public accountability reporting system of the São Paulo State Court of Audit, which oversees 644 municipalities and demands strict integrity of public financial data. Prototyped improvements to the core document-filling engine through proofs of concept, and optimized complex SQL queries and stored procedures on high-volume databases for critical audit routines.",
          tags: [".NET", "SQL Server", "Stored Procs"],
        },
        {
          year: "Sep 2023 — Apr 2024",
          title: "Legacy modernization · Pekus",
          desc: "Modernized legacy applications from ASP.NET Web Forms to ASP.NET Core and Blazor, improving response times and lowering maintenance costs. Built new features for web (Blazor) and desktop (Windows Forms) systems, owning client requests end to end.",
          tags: ["ASP.NET Core", "Blazor", "WinForms"],
        },
        {
          year: "Dec 2022 — Sep 2023",
          title: "Real-time food-service platform · Pekus",
          desc: "Full-stack solution for the food-service and delivery industry with real-time updates via SignalR, running in production at 30+ venues. Built during my internship; promoted to Junior Developer within 9 months.",
          tags: [".NET", "SignalR", "Full-stack"],
        },
      ],
    },
    contact: {
      label: "04 — CONTACT",
      heading: ["Let's", "build", "something."],
      body: "Open to backend roles, integrations work, and regulated-industry projects. Brazil-based, remote-friendly.",
      email: "matheus.evangelista.santos.dev@gmail.com",
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
        { k: "EXP", v: "~4 anos" },
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
        "Dev Backend .NET com 4 anos de experiência em aplicações críticas de domínios regulados — previdência privada (Evertec) e setor público (Tribunal de Contas do Estado de SP — TCE-SP) — onde estabilidade, conformidade e regras de negócio complexas não são opcionais. APIs REST, autenticação JWT, integração entre sistemas legados e serviços modernos, modernização de aplicações e performance em SQL Server. Pós-graduado em arquitetura de sistemas .NET com Azure.",
        "No dia a dia: endpoints REST com JWT e Swagger/OpenAPI, tirando regras de negócio de sistemas legados e de stored procedures compartilhadas para a camada de aplicação (ADO.NET, consultas parametrizadas, Repository Pattern), e otimização de SQL em bases de grande volume. Em aprofundamento contínuo em AWS, Docker, RabbitMQ, observabilidade e arquitetura orientada a eventos. Clean Code, SOLID, DDD. IA integrada ao ciclo de desenvolvimento para entregar mais rápido sem abrir mão da qualidade.",
      ],
      facts: [
        ["ANOS", "~4"],
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
          items: [
            "C#",
            ".NET",
            "ASP.NET Core",
            "Entity Framework",
            "ADO.NET",
            "Blazor",
            "SQL Server",
            "T-SQL",
            "RESTful APIs",
            "JWT",
            "Swagger/OpenAPI",
            "Git",
            "Azure DevOps",
          ],
        },
        {
          title: "Conhecimento",
          items: ["Go", "TypeScript", "PostgreSQL", "MySQL", "MongoDB", "AWS", "Azure", "Docker", "RabbitMQ"],
        },
        {
          title: "Práticas & Arquitetura",
          items: [
            "Microsserviços",
            "Arquitetura orientada a eventos",
            "Alta disponibilidade",
            "Observabilidade (App Insights)",
            "DDD",
            "SOLID",
            "Clean Code",
            "Scrum / TDD",
            "CI/CD",
            "SonarQube",
          ],
        },
      ],
    },
    work: {
      label: "03 — PROJETOS SELECIONADOS",
      heading: "Terreno coberto recentemente.",
      items: [
        {
          year: "Nov 2024 —",
          title: "API white-label de previdência privada · Optimus / Evertec",
          desc: "Evolução do barramento de integração de previdência de componente interno para uma API REST white-label, permitindo que patrocinadoras construam portais próprios sobre a lógica de negócio da plataforma e destravando um perfil de contrato antes inviável. Desenvolvimento e refatoração de cerca de 60 dos mais de 150 endpoints da API, com autenticação JWT (participação na v2), Swagger/OpenAPI e SonarQube. Migração de consultas de stored procedures compartilhadas entre times para a camada de aplicação (ADO.NET, Repository Pattern), eliminando fonte recorrente de bugs em produção.",
          tags: [".NET", "REST APIs", "JWT"],
        },
        {
          year: "Abr — Out 2024",
          title: "Sistema de Prestação de Contas (SISCOE) · TCE-SP / RedMaxx",
          desc: "Funcionalidades do SISCOE, sistema de prestação de contas do TCE-SP, órgão que fiscaliza os 644 municípios paulistas, com alta exigência de integridade sobre dados financeiros públicos. Prototipação de melhorias no core de preenchimento de documentos via provas de conceito e otimização de consultas SQL complexas e stored procedures em bases de grande volume para rotinas críticas de fiscalização.",
          tags: [".NET", "SQL Server", "Stored Procs"],
        },
        {
          year: "Set 2023 — Abr 2024",
          title: "Modernização de legados · Pekus",
          desc: "Modernização de aplicações legadas de ASP.NET Web Forms para ASP.NET Core e Blazor, melhorando tempo de resposta e reduzindo o custo de manutenção. Novas funcionalidades para sistemas web (Blazor) e desktop (Windows Forms), atuando de ponta a ponta em demandas de clientes.",
          tags: ["ASP.NET Core", "Blazor", "WinForms"],
        },
        {
          year: "Dez 2022 — Set 2023",
          title: "Plataforma em tempo real para alimentação · Pekus",
          desc: "Solução full-stack para o setor de alimentação/delivery com atualizações em tempo real via SignalR, em produção em mais de 30 estabelecimentos. Construída durante o estágio em desenvolvimento; efetivado em 9 meses.",
          tags: [".NET", "SignalR", "Full-stack"],
        },
      ],
    },
    contact: {
      label: "04 — CONTATO",
      heading: ["Vamos", "construir", "algo."],
      body: "Aberto a vagas de backend, trabalho de integração e projetos em setores regulados. Baseado no Brasil, remoto.",
      email: "matheus.evangelista.santos.dev@gmail.com",
      copyHint: "CLIQUE P/ COPIAR",
      copied: "COPIADO",
    },
    footer: {
      left: "© 2026 — MATHEUS EVANGELISTA",
    },
  },
};
