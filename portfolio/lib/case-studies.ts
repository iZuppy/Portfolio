export type LocalizedString = { en: string; es: string };
export type LocalizedStringArray = { en: string[]; es: string[] };

export interface CaseStudyInsight {
  title: LocalizedString;
  body: LocalizedString;
}

export interface CaseStudy {
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  tag: LocalizedString;
  year: string;
  duration: LocalizedString;
  role: LocalizedString;
  status: "featured" | "standard";
  coverGradient: string;
  overview: LocalizedString;
  context: LocalizedString;
  problem: LocalizedString;
  insights: CaseStudyInsight[];
  designDecisions: LocalizedStringArray;
  outcome: LocalizedString;
  reflection: LocalizedString;
  metrics: { label: LocalizedString; value: string }[];
  tools: string[];
  tags: LocalizedString[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bpd-onboarding-redesign",
    title: {
      en: "Reducing Drop-off in Digital Onboarding",
      es: "Reducción del Abandono en la Incorporación Digital",
    },
    subtitle: {
      en: "A redesign proposal for Banco Popular's digital client onboarding — a 24-step process losing customers before their first transaction.",
      es: "Una propuesta de rediseño para la incorporación digital de clientes en Banco Popular — un proceso de 24 pasos que perdía clientes antes de su primera transacción.",
    },
    tag: { en: "UX Research · Product Design", es: "Investigación UX · Diseño de Producto" },
    year: "2025",
    duration: { en: "10 weeks", es: "10 semanas" },
    role: { en: "Project Lead & UX Designer", es: "Líder de Proyecto y Diseñador UX" },
    status: "featured",
    coverGradient: "from-[#0d0f1a] via-[#0f1220] to-[#0c1028]",
    overview: {
      en: "As Project Leader in Systems Development at Banco Popular Dominicano, I have a front-row view of where digital products break down. This case study documents a self-directed redesign proposal I developed to address the friction points I observed in our digital onboarding system — a process that was losing clients before they ever made a deposit.",
      es: "Como Líder de Proyectos en Desarrollo de Sistemas en Banco Popular Dominicano, tengo una vista privilegiada de dónde fallan los productos digitales. Este caso de estudio documenta una propuesta de rediseño que desarrollé de forma autónoma para abordar los puntos de fricción que observé en nuestro sistema de incorporación digital — un proceso que perdía clientes antes de que realizaran su primer depósito.",
    },
    context: {
      en: "Banco Popular Dominicano is the largest commercial bank in the Dominican Republic, serving over 2 million customers. The digital onboarding flow had been digitized from a paper-based process without restructuring for the digital context — front-loading compliance disclosures and identity requirements before establishing any product value for the new client.",
      es: "Banco Popular Dominicano es el banco comercial más grande de la República Dominicana, con más de 2 millones de clientes. El flujo de incorporación digital había sido digitalizado desde un proceso en papel sin reestructurarlo para el contexto digital — cargando cumplimiento normativo y requerimientos de identidad antes de establecer ningún valor del producto para el nuevo cliente.",
    },
    problem: {
      en: "The system was designed for the bank's operational needs — compliance coverage, data capture — not for the human making a decision about whether to trust this bank with their money. Asking for a national ID and employment details on step 3 of 24, before the client had seen what they were signing up for, was not a technical decision. It was a design failure framed as a compliance requirement.",
      es: "El sistema estaba diseñado para las necesidades operativas del banco — cobertura normativa, captura de datos — no para la persona que decidía si confiar su dinero a este banco. Pedir cédula y datos de empleo en el paso 3 de 24, antes de que el cliente viera lo que estaba contratando, no era una decisión técnica. Era un fallo de diseño enmarcado como requisito de cumplimiento.",
    },
    insights: [
      {
        title: { en: "Trust is not assumed at a digital touchpoint", es: "La confianza no se asume en un punto de contacto digital" },
        body: {
          en: "Through 12 structured interviews with Banco Popular clients, I found that the most common abandonment point was the identity verification screen — not because it was technically broken, but because clients hadn't seen enough of the product to feel it was worth their personal data. 'I didn't know what I was getting yet' was a recurring phrase.",
          es: "A través de 12 entrevistas estructuradas con clientes de Banco Popular, identifiqué que el punto de abandono más común era la pantalla de verificación de identidad — no porque estuviera rota técnicamente, sino porque los clientes no habían visto suficiente del producto para sentir que valía la pena entregar sus datos personales. 'No sabía qué iba a obtener todavía' era una frase recurrente.",
        },
      },
      {
        title: { en: "Compliance and UX are not in conflict — they are poorly sequenced", es: "Cumplimiento normativo y UX no están en conflicto — están mal secuenciados" },
        body: {
          en: "After working with our legal and compliance team, it became clear that many of the front-loaded requirements had no regulatory mandate for their position in the flow. They were there because that's where they had always been. Contextual disclosure — surfacing requirements at the moment they're relevant — was legally acceptable and dramatically less friction-producing.",
          es: "Tras trabajar con nuestro equipo legal y de cumplimiento, quedó claro que muchos de los requisitos iniciales no tenían mandato regulatorio para su posición en el flujo. Estaban ahí porque siempre habían estado ahí. La divulgación contextual — mostrando requisitos en el momento en que son relevantes — era legalmente aceptable y generaba mucha menos fricción.",
        },
      },
      {
        title: { en: "Progress framing changes perceived effort", es: "El encuadre del progreso cambia el esfuerzo percibido" },
        body: {
          en: "The existing progress bar showed 'Step 3 of 24' — which anchored users to an 88% remaining effort before they had even started. Restructuring the flow into three named phases ('Your account → Your identity → Confirmation') changed the perceived weight of the process without removing a single required field.",
          es: "La barra de progreso existente mostraba 'Paso 3 de 24' — lo que anclaba a los usuarios a un 88% de esfuerzo restante antes de haber comenzado. Reestructurar el flujo en tres fases nombradas ('Tu cuenta → Tu identidad → Confirmación') cambió el peso percibido del proceso sin eliminar ningún campo obligatorio.",
        },
      },
    ],
    designDecisions: {
      en: [
        "Reordered the flow to show product value — account features, rates, benefits — before requesting any sensitive personal data.",
        "Compressed 24 steps into 12 by merging redundant fields and removing 5 steps that were artifacts of the paper-based predecessor with no digital equivalent.",
        "Replaced block disclosures with contextual inline micro-disclosures — each under 45 words — reviewed and approved by the compliance team.",
        "Introduced a phase-based progress model (3 phases, not 24 steps) reducing perceived effort without changing actual completion requirements.",
        "Added real-time inline validation with specific, human-readable error messages replacing generic system error codes.",
      ],
      es: [
        "Reordené el flujo para mostrar el valor del producto — características de la cuenta, tasas, beneficios — antes de solicitar cualquier dato personal sensible.",
        "Comprimí 24 pasos en 12 fusionando campos redundantes y eliminando 5 pasos que eran artefactos del proceso en papel sin equivalente digital.",
        "Reemplacé bloques de divulgación con micro-divulgaciones contextuales en línea — cada una de menos de 45 palabras — revisadas y aprobadas por el equipo de cumplimiento.",
        "Introduje un modelo de progreso por fases (3 fases, no 24 pasos) reduciendo el esfuerzo percibido sin cambiar los requisitos de completitud.",
        "Añadí validación en tiempo real con mensajes de error específicos y legibles que reemplazan códigos de error genéricos del sistema.",
      ],
    },
    outcome: {
      en: "The proposal was presented to the Systems Development team and product stakeholders at Banco Popular. The phased progress model and contextual disclosure approach were validated as feasible by the compliance team. A full implementation roadmap was drafted, with the redesigned flow projected to reduce drop-off by an estimated 55–65% based on comparable banking redesigns, and completion time from an estimated 22 minutes to under 10.",
      es: "La propuesta fue presentada al equipo de Desarrollo de Sistemas y stakeholders de producto en Banco Popular. El modelo de progreso por fases y el enfoque de divulgación contextual fueron validados como viables por el equipo de cumplimiento. Se elaboró un mapa de implementación completo, con el flujo rediseñado proyectado para reducir el abandono en un 55-65% estimado, basado en rediseños bancarios comparables, y el tiempo de completitud de un estimado de 22 minutos a menos de 10.",
    },
    reflection: {
      en: "The most useful skill I brought to this project wasn't design — it was knowing how to have the compliance conversation. Having spent over a year working alongside legal and compliance at Banco Popular, I understood what was regulatory mandate and what was organizational habit. That distinction is what made the redesign possible.",
      es: "La habilidad más útil que aporté a este proyecto no fue el diseño — fue saber cómo tener la conversación con cumplimiento normativo. Haber trabajado más de un año junto al equipo legal y de cumplimiento en Banco Popular me permitió entender qué era mandato regulatorio y qué era hábito organizacional. Esa distinción fue lo que hizo posible el rediseño.",
    },
    metrics: [
      { label: { en: "Projected drop-off reduction", es: "Reducción proyectada de abandono" }, value: "−60%" },
      { label: { en: "Steps eliminated", es: "Pasos eliminados" }, value: "12" },
      { label: { en: "Est. completion time", es: "Tiempo estimado de completitud" }, value: "<10 min" },
      { label: { en: "Stakeholders aligned", es: "Stakeholders alineados" }, value: "6" },
    ],
    tools: ["Figma", "FigJam", "Maze", "Notion"],
    tags: [
      { en: "Banking", es: "Banca" },
      { en: "UX Research", es: "Investigación UX" },
      { en: "Prototyping", es: "Prototipado" },
    ],
  },

  {
    slug: "dev-team-dashboard",
    title: {
      en: "A Dashboard Built Around a Single Question",
      es: "Un Dashboard Construido Alrededor de una Sola Pregunta",
    },
    subtitle: {
      en: "Systems development teams at Banco Popular were context-switching across 4 tools to track a single project. The problem wasn't data — it was too much of it.",
      es: "Los equipos de desarrollo de sistemas en Banco Popular cambiaban entre 4 herramientas para hacer seguimiento a un solo proyecto. El problema no era falta de datos — era exceso de ellos.",
    },
    tag: { en: "Systems Design · UI Design", es: "Diseño de Sistemas · Diseño UI" },
    year: "2025",
    duration: { en: "6 weeks", es: "6 semanas" },
    role: { en: "Project Lead & Designer", es: "Líder de Proyecto y Diseñador" },
    status: "featured",
    coverGradient: "from-[#0a1210] via-[#0b1512] to-[#0c1814]",
    overview: {
      en: "In my role as Project Leader in Systems Development at Banco Popular, I manage multiple concurrent projects across engineering, QA, and operations teams. What I kept observing was the same pattern: before any meaningful conversation could happen, someone needed to spend 20–30 minutes pulling context from four different tools. This is the design project I built to solve that for myself — and my team.",
      es: "En mi rol como Líder de Proyectos en Desarrollo de Sistemas en Banco Popular, gestiono múltiples proyectos simultáneos con equipos de ingeniería, QA y operaciones. Lo que seguía observando era el mismo patrón: antes de cualquier conversación significativa, alguien necesitaba pasar 20-30 minutos compilando contexto de cuatro herramientas diferentes. Este es el proyecto de diseño que construí para resolver eso — para mí y para mi equipo.",
    },
    context: {
      en: "Our systems development workflow was distributed across Jira (task tracking), Confluence (documentation), a legacy incident system, and a shared Excel tracker that 'someone set up years ago and now everyone depends on.' No single view existed that could answer 'what's the current status of Project X?' without manual aggregation.",
      es: "Nuestro flujo de desarrollo de sistemas estaba distribuido entre Jira (seguimiento de tareas), Confluence (documentación), un sistema de incidentes heredado y un tracker en Excel compartido que 'alguien configuró hace años y ahora todos dependen de él.' No existía ninguna vista única que pudiera responder '¿cuál es el estado actual del Proyecto X?' sin agregación manual.",
    },
    problem: {
      en: "The four tools weren't failing individually — each did its job. The failure was in the space between them: the cognitive overhead of translating context across systems, re-assembling a project picture in your head before every standup, every stakeholder update, every escalation call. This was not a data problem. It was an information architecture problem.",
      es: "Las cuatro herramientas no fallaban individualmente — cada una hacía su trabajo. El fallo estaba en el espacio entre ellas: la carga cognitiva de traducir contexto entre sistemas, reensamblar una imagen del proyecto en tu mente antes de cada standup, cada actualización de stakeholders, cada llamada de escalación. Este no era un problema de datos. Era un problema de arquitectura de información.",
    },
    insights: [
      {
        title: { en: "The 'good enough' question", es: "La pregunta del 'suficientemente bueno'" },
        body: {
          en: "I ran a two-week diary study with 5 team members, asking them to log every time they switched tools to find project information. The average was 11 tool-switches per person per day. When I asked what they were ultimately trying to answer, 80% of the answers were variations of one question: 'Is this project on track?'",
          es: "Realicé un estudio de diario de dos semanas con 5 miembros del equipo, pidiéndoles que registraran cada vez que cambiaban de herramienta para buscar información de proyecto. El promedio fue 11 cambios de herramienta por persona por día. Cuando pregunté qué estaban intentando responder en última instancia, el 80% de las respuestas eran variaciones de una sola pregunta: '¿Está este proyecto encaminado?'",
        },
      },
      {
        title: { en: "Status and context are different things", es: "El estado y el contexto son cosas diferentes" },
        body: {
          en: "Status ('Sprint 3 is 60% done') is data. Context ('Sprint 3 is 60% done and the three remaining tasks are all blocked on the same API approval') is information. Every tool showed status. None showed context. The dashboard needed to prioritize context — the narrative layer on top of the numbers.",
          es: "El estado ('Sprint 3 está 60% completo') es dato. El contexto ('Sprint 3 está 60% completo y las tres tareas restantes están bloqueadas por la misma aprobación de API') es información. Cada herramienta mostraba el estado. Ninguna mostraba el contexto. El dashboard necesitaba priorizar el contexto — la capa narrativa encima de los números.",
        },
      },
    ],
    designDecisions: {
      en: [
        "Built the dashboard as a read-only aggregation layer over existing tools — no new data infrastructure required, meaning zero engineering dependencies on data migration.",
        "Defined a 'status card' as the core unit: project name, phase, RAG status (Red/Amber/Green), top blocker, and next milestone — answering the one key question in under 5 seconds.",
        "Added a 'context strip' below each status card for the narrative layer — a 2-sentence summary written by the project lead, updated weekly.",
        "Designed for three distinct roles: Project Leader (write access to context strip), Stakeholder (read-only dashboard), and Executive (summarized one-pager view).",
        "Built the entire prototype in Figma with interactive filters and RAG status toggles to demonstrate the experience before any engineering investment.",
      ],
      es: [
        "Construí el dashboard como una capa de agregación de solo lectura sobre las herramientas existentes — sin nueva infraestructura de datos requerida, lo que significa cero dependencias de ingeniería en migración de datos.",
        "Definí una 'tarjeta de estado' como la unidad central: nombre del proyecto, fase, estado RAG (Rojo/Ámbar/Verde), principal bloqueo y próximo hito — respondiendo la pregunta clave en menos de 5 segundos.",
        "Añadí una 'franja de contexto' debajo de cada tarjeta de estado para la capa narrativa — un resumen de 2 oraciones escrito por el líder de proyecto, actualizado semanalmente.",
        "Diseñé para tres roles distintos: Líder de Proyecto (acceso de escritura a la franja de contexto), Stakeholder (dashboard de solo lectura) y Ejecutivo (vista resumida de una página).",
        "Construí el prototipo completo en Figma con filtros interactivos y toggles de estado RAG para demostrar la experiencia antes de cualquier inversión de ingeniería.",
      ],
    },
    outcome: {
      en: "The prototype was presented to the Systems Development leadership team and received approval to move into scoping for implementation. In the interim, I implemented a simplified version using Confluence macros and a structured status template that reduced team tool-switching from 11 per day to an estimated 4. The Figma prototype is used in onboarding new project leads to show expected reporting standards.",
      es: "El prototipo fue presentado al equipo de liderazgo de Desarrollo de Sistemas y recibió aprobación para avanzar en la definición del alcance de implementación. Mientras tanto, implementé una versión simplificada usando macros de Confluence y una plantilla de estado estructurada que redujo el cambio de herramientas del equipo de 11 por día a un estimado de 4. El prototipo de Figma se usa en la incorporación de nuevos líderes de proyecto para mostrar los estándares de reporte esperados.",
    },
    reflection: {
      en: "Designing for your own team as the primary user is a double-edged situation. The proximity gives you deep insight — I knew exactly what I was trying to solve. But it also creates blind spots around what other users need. The diary study was essential precisely because it forced me to see the problem through five other people's eyes, not just mine.",
      es: "Diseñar para tu propio equipo como usuario principal es una situación de doble filo. La proximidad te da una perspectiva profunda — sabía exactamente lo que estaba tratando de resolver. Pero también crea puntos ciegos sobre lo que otros usuarios necesitan. El estudio de diario fue esencial precisamente porque me obligó a ver el problema a través de los ojos de otras cinco personas, no solo los míos.",
    },
    metrics: [
      { label: { en: "Tool-switches reduced", es: "Cambios de herramienta reducidos" }, value: "−64%" },
      { label: { en: "Tools consolidated", es: "Herramientas consolidadas" }, value: "4 → 1" },
      { label: { en: "Roles designed for", es: "Roles diseñados" }, value: "3" },
      { label: { en: "Prototype screens", es: "Pantallas del prototipo" }, value: "18" },
    ],
    tools: ["Figma", "FigJam", "Confluence", "Notion"],
    tags: [
      { en: "Systems Design", es: "Diseño de Sistemas" },
      { en: "Internal Tools", es: "Herramientas Internas" },
      { en: "Information Architecture", es: "Arquitectura de Información" },
    ],
  },

  {
    slug: "design-system-banking",
    title: {
      en: "Building a Design System Nobody Asked For",
      es: "Construyendo un Sistema de Diseño que Nadie Pidió",
    },
    subtitle: {
      en: "A self-directed project to design a component library and visual language for banking applications — built to practice design systems while solving a real problem I observed at work.",
      es: "Un proyecto autodidacta para diseñar una librería de componentes y lenguaje visual para aplicaciones bancarias — construido para practicar sistemas de diseño mientras resolvo un problema real que observé en el trabajo.",
    },
    tag: { en: "Design Systems · Self-directed", es: "Sistemas de Diseño · Proyecto Personal" },
    year: "2024",
    duration: { en: "8 weeks", es: "8 semanas" },
    role: { en: "Designer (Self-directed)", es: "Diseñador (Proyecto Personal)" },
    status: "standard",
    coverGradient: "from-[#131008] via-[#16120a] to-[#18140b]",
    overview: {
      en: "As someone learning UX Design while working in banking technology, I noticed that most publicly available design systems are built for consumer apps — not for the dense, data-heavy, trust-critical interfaces of financial services. This is a self-directed project to build one that actually fits that context.",
      es: "Como alguien que aprende Diseño UX mientras trabaja en tecnología bancaria, noté que la mayoría de los sistemas de diseño disponibles públicamente están construidos para aplicaciones de consumo — no para las interfaces densas, con muchos datos y críticas para la confianza de los servicios financieros. Este es un proyecto personal para construir uno que realmente se adapte a ese contexto.",
    },
    context: {
      en: "Banking interfaces have specific design constraints that consumer app systems don't account for: dense data tables, complex form flows with conditional logic, regulatory disclosure patterns, error handling with legal implications, and accessibility requirements for a broad demographic including elderly users. Applying a general-purpose design system to a banking context produces interfaces that look modern but feel wrong.",
      es: "Las interfaces bancarias tienen restricciones de diseño específicas que los sistemas de aplicaciones de consumo no contemplan: tablas de datos densas, flujos de formularios complejos con lógica condicional, patrones de divulgación regulatoria, manejo de errores con implicaciones legales y requisitos de accesibilidad para una demografía amplia que incluye usuarios mayores. Aplicar un sistema de diseño de propósito general a un contexto bancario produce interfaces que se ven modernas pero se sienten incorrectas.",
    },
    problem: {
      en: "The problem isn't a lack of design systems — it's a lack of design systems that encode the specific decisions a banking UI must make. What does 'error' mean when the error is a failed transaction vs. a form validation? How do you handle a disclosure that is legally required to be fully read? How do you design a data table that works for 5 columns and for 25? These decisions don't exist in Ant Design or Material UI.",
      es: "El problema no es la falta de sistemas de diseño — es la falta de sistemas de diseño que codifiquen las decisiones específicas que debe tomar una UI bancaria. ¿Qué significa 'error' cuando el error es una transacción fallida versus una validación de formulario? ¿Cómo manejas una divulgación que legalmente debe leerse completa? ¿Cómo diseñas una tabla de datos que funcione para 5 columnas y para 25? Estas decisiones no existen en Ant Design o Material UI.",
    },
    insights: [
      {
        title: { en: "Banking has 4 distinct error severities", es: "La banca tiene 4 niveles distintos de gravedad de error" },
        body: {
          en: "Through an audit of 6 banking apps and 3 internal Banco Popular interfaces, I identified 4 distinct error types that require different design treatment: validation errors (fixable by user), system errors (retry), transaction errors (irreversible, legal context), and compliance holds (requires human intervention). General design systems treat all of these as one 'error state.'",
          es: "A través de una auditoría de 6 apps bancarias y 3 interfaces internas de Banco Popular, identifiqué 4 tipos de errores distintos que requieren tratamiento de diseño diferente: errores de validación (corregibles por el usuario), errores del sistema (reintentar), errores de transacción (irreversibles, contexto legal) y bloqueos de cumplimiento (requieren intervención humana). Los sistemas de diseño generales los tratan todos como un único 'estado de error.'",
        },
      },
      {
        title: { en: "Accessibility in banking is not optional — and not just visual", es: "La accesibilidad en banca no es opcional — y no es solo visual" },
        body: {
          en: "Banking serves the full demographic range. Elderly users represent a disproportionate share of banking traffic. This means not just color contrast and font size — it means touch target sizes, timeout behaviors, error recovery flows, and session management patterns that are not found in consumer-app component libraries.",
          es: "La banca sirve a toda la gama demográfica. Los usuarios mayores representan una proporción desproporcionada del tráfico bancario. Esto significa no solo contraste de color y tamaño de fuente — significa tamaños de objetivos táctiles, comportamientos de tiempo de espera, flujos de recuperación de errores y patrones de gestión de sesiones que no se encuentran en las librerías de componentes de aplicaciones de consumo.",
        },
      },
    ],
    designDecisions: {
      en: [
        "Built a token-first architecture covering color, spacing, typography, radius, shadow, and motion — all with dark and light mode from day one.",
        "Defined 4 feedback patterns (validation, system, transaction, compliance) with distinct visual treatment, iconography, and copy guidelines for each.",
        "Built a data table component that handles 5–30 columns with fixed headers, sticky columns, expandable rows, and inline editing — tested against real banking data structures.",
        "Wrote accessibility guidelines for each component covering contrast ratios, touch targets (minimum 44×44px), keyboard navigation, and ARIA labeling.",
        "Documented every component with a 'Banking-specific notes' section addressing the regulatory and operational context that general design systems ignore.",
      ],
      es: [
        "Construí una arquitectura basada en tokens que cubre color, espaciado, tipografía, radio, sombra y movimiento — todo con modo claro y oscuro desde el primer día.",
        "Definí 4 patrones de retroalimentación (validación, sistema, transacción, cumplimiento) con tratamiento visual, iconografía y guías de copy distintas para cada uno.",
        "Construí un componente de tabla de datos que maneja 5-30 columnas con encabezados fijos, columnas pegajosas, filas expandibles y edición en línea — probado con estructuras de datos bancarias reales.",
        "Escribí guías de accesibilidad para cada componente cubriendo ratios de contraste, objetivos táctiles (mínimo 44×44px), navegación por teclado y etiquetado ARIA.",
        "Documenté cada componente con una sección 'Notas específicas de banca' que aborda el contexto regulatorio y operativo que los sistemas de diseño generales ignoran.",
      ],
    },
    outcome: {
      en: "The system launched with 38 production-ready components specifically designed for financial services contexts. The error pattern framework was presented at an internal tech show-and-tell at Banco Popular and is being evaluated for adoption in our internal design standards. The Figma library is publicly available.",
      es: "El sistema se lanzó con 38 componentes listos para producción diseñados específicamente para contextos de servicios financieros. El marco de patrones de error fue presentado en un evento interno de tech show-and-tell en Banco Popular y está siendo evaluado para su adopción en nuestros estándares de diseño internos. La librería de Figma está disponible públicamente.",
    },
    reflection: {
      en: "Self-directed projects are harder than they look, because no one is waiting for you. The discipline of treating it like a real engagement — with defined scope, a timeline, stakeholder check-ins (in this case, colleagues I recruited as reviewers) — is what made it useful rather than just a collection of components that looked nice.",
      es: "Los proyectos autodidactas son más difíciles de lo que parecen, porque nadie te espera. La disciplina de tratarlo como un compromiso real — con alcance definido, un cronograma, revisiones de stakeholders (en este caso, colegas que reclutó como revisores) — es lo que lo hizo útil en lugar de solo una colección de componentes que se veían bien.",
    },
    metrics: [
      { label: { en: "Components built", es: "Componentes construidos" }, value: "38" },
      { label: { en: "Error patterns defined", es: "Patrones de error definidos" }, value: "4" },
      { label: { en: "Accessibility checks", es: "Verificaciones de accesibilidad" }, value: "WCAG 2.1" },
      { label: { en: "Banking apps audited", es: "Apps bancarias auditadas" }, value: "6" },
    ],
    tools: ["Figma", "Tokens Studio", "Storybook", "Notion"],
    tags: [
      { en: "Design Systems", es: "Sistemas de Diseño" },
      { en: "Accessibility", es: "Accesibilidad" },
      { en: "Banking", es: "Banca" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
