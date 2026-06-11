import type { Language, Theme } from "../types/ui";

interface LocalizedFinding {
  wcagCriterion?: string;
  description: string;
  impact: string;
  suggestedFix: string;
  beforeCode?: string;
  suggestedCode?: string;
}

interface LocalizedInsight {
  title: string;
  detail: string;
}

interface TranslationSchema {
  controls: {
    language: string;
    theme: string;
    themeDark: string;
    themeLight: string;
  };
  hero: {
    chip: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    footnote: string;
  };
  trustSignals: string[];
  story: {
    title: string;
    description: string;
    steps: Array<{ title: string; description: string }>;
  };
  repository: {
    title: string;
    description: string;
    tabRepository: string;
    tabSnippet: string;
    inputLabel: string;
    placeholder: string;
    snippetLabel: string;
    snippetPlaceholder: string;
    useDemoRepository: string;
    useSampleCode: string;
    quickDemoLabel: string;
    quickExcellent: string;
    quickAverage: string;
    quickPoor: string;
    buttonAnalyze: string;
    buttonAnalyzeSnippet: string;
    buttonAnalyzing: string;
  };
  app: {
    invalidUrl: string;
    invalidSnippet: string;
    readyTitle: string;
    readyDescription: string;
    readyDescriptionSnippet: string;
  };
  pipeline: {
    title: string;
    statusCompleted: string;
    statusRunning: string;
    summaryCompleted: string;
    summaryRunning: string;
    progress: string;
    steps: string[];
  };
  dashboard: {
    title: string;
    metricBadge: string;
    scoreLabel: string;
    criticalIssues: string;
    mediumIssues: string;
    lowIssues: string;
    filesAnalyzed: string;
  };
  findings: {
    title: string;
    impact: string;
    suggestedFix: string;
    beforeCode: string;
    suggestedCode: string;
    critical: string;
    medium: string;
    low: string;
    findingById: Record<string, LocalizedFinding>;
  };
  insights: {
    title: string;
    description: string;
    priorityLabel: string;
    priority: Record<"High" | "Medium" | "Low", string>;
    insightById: Record<string, LocalizedInsight>;
  };
  businessImpact: {
    title: string;
    description: string;
    bullets: string[];
  };
}

export const languageOptions: Array<{ value: Language; label: string }> = [
  { value: "en", label: "English" },
  { value: "pt", label: "Português" },
  { value: "es", label: "Español" }
];

export const translations: Record<Language, TranslationSchema> = {
  en: {
    controls: {
      language: "Language",
      theme: "Theme",
      themeDark: "Dark",
      themeLight: "Light"
    },
    hero: {
      chip: "Shift-Left Accessibility",
      titleLine1: "Shift Accessibility Left.",
      titleLine2: "Fix accessibility issues before production.",
      subtitle: "Find accessibility issues before your users do.",
      footnote: "Built for fast integration with real-time AI workflows"
    },
    trustSignals: [
      "WCAG 2.2",
      "AI-Powered Analysis",
      "Shift-Left Accessibility",
      "Repository Scanning"
    ],
    story: {
      title: "How it works",
      description:
        "A clear shift-left accessibility pipeline from repository input to remediation guidance.",
      steps: [
        {
          title: "Repository",
          description: "Connect a GitHub repository URL."
        },
        {
          title: "Accessibility Agent",
          description: "An AI agent scans code and UI signals."
        },
        {
          title: "WCAG Findings",
          description: "Issues are mapped against WCAG criteria."
        },
        {
          title: "Actionable Fixes",
          description: "Teams receive prioritized fixes to ship."
        }
      ]
    },
    repository: {
      title: "Analyze Accessibility",
      description:
        "Enter a GitHub repository URL to start the automated accessibility scan.",
      tabRepository: "Repository URL",
      tabSnippet: "Code Snippet",
      inputLabel: "GitHub repository URL",
      placeholder: "https://github.com/company/repository",
      snippetLabel: "Code snippet",
      snippetPlaceholder: "Paste your JSX, HTML, or CSS snippet here...",
      useDemoRepository: "Use Demo Repository",
      useSampleCode: "Use sample code",
      quickDemoLabel: "Quick Demo Scenarios",
      quickExcellent: "Excellent",
      quickAverage: "Average",
      quickPoor: "Poor",
      buttonAnalyze: "Analyze Repository",
      buttonAnalyzeSnippet: "Analyze Code Snippet",
      buttonAnalyzing: "Analyzing..."
    },
    app: {
      invalidUrl: "Enter a valid GitHub repository URL to start the analysis.",
      invalidSnippet:
        "Paste at least one code block to run the Code Snippet Analysis.",
      readyTitle: "Ready to scan",
      readyDescription:
        "Click Analyze Repository to run the simulated flow and open the full dashboard with findings and AI insights.",
      readyDescriptionSnippet:
        "Paste code and click Analyze Repository to run Code Snippet Analysis with accessibility findings and suggested fixes."
    },
    pipeline: {
      title: "Live analysis pipeline",
      statusCompleted: "Completed",
      statusRunning: "In Progress",
      summaryCompleted:
        "Repository scan finished. Accessibility report generated.",
      summaryRunning: "Executing repository scan and accessibility checks...",
      progress: "Progress",
      steps: [
        "Reading repository structure...",
        "Detecting React components...",
        "Checking semantic HTML...",
        "Evaluating keyboard navigation...",
        "Validating color contrast...",
        "Analyzing ARIA attributes...",
        "Generating remediation guidance..."
      ]
    },
    dashboard: {
      title: "Executive dashboard",
      metricBadge: "Executive metric",
      scoreLabel: "Accessibility Score",
      criticalIssues: "Critical Issues",
      mediumIssues: "Medium Issues",
      lowIssues: "Low Issues",
      filesAnalyzed: "Files Analyzed"
    },
    findings: {
      title: "Findings",
      impact: "Impact:",
      suggestedFix: "Suggested fix:",
      beforeCode: "Before",
      suggestedCode: "Suggested Fix",
      critical: "CRITICAL",
      medium: "MEDIUM",
      low: "LOW",
      findingById: {}
    },
    insights: {
      title: "AI Accessibility Agent Insights",
      description:
        "Natural-language recommendations that highlight risk, user impact, and the highest-priority actions for your team.",
      priorityLabel: "Priority",
      priority: { High: "High", Medium: "Medium", Low: "Low" },
      insightById: {}
    },
    businessImpact: {
      title: "Why this matters",
      description: "Accessibility issues found before production.",
      bullets: [
        "Reduced remediation costs",
        "Better user experience",
        "WCAG compliance",
        "Inclusive software delivery"
      ]
    }
  },
  pt: {
    controls: {
      language: "Idioma",
      theme: "Tema",
      themeDark: "Escuro",
      themeLight: "Claro"
    },
    hero: {
      chip: "Acessibilidade Shift-Left",
      titleLine1: "Antecipe a acessibilidade no desenvolvimento.",
      titleLine2: "Corrija problemas antes de produção.",
      subtitle: "Encontre problemas de acessibilidade antes dos seus usuários.",
      footnote: "Pronto para integração rápida com fluxos de IA em tempo real"
    },
    trustSignals: [
      "WCAG 2.2",
      "Análise com IA",
      "Shift-Left Accessibility",
      "Escaneamento de Repositório"
    ],
    story: {
      title: "Como funciona",
      description:
        "Um pipeline claro de shift-left accessibility, da entrada do repositório à recomendação de correções.",
      steps: [
        {
          title: "Repositório",
          description: "Conecte a URL de um repositório no GitHub."
        },
        {
          title: "Agente de Acessibilidade",
          description: "Um agente de IA escaneia código e sinais de UI."
        },
        {
          title: "Achados WCAG",
          description: "Os problemas são mapeados aos critérios WCAG."
        },
        {
          title: "Correções Acionáveis",
          description: "A equipe recebe correções priorizadas para entregar."
        }
      ]
    },
    repository: {
      title: "Analisar Acessibilidade",
      description:
        "Informe a URL de um repositório no GitHub para iniciar o escaneamento automático de acessibilidade.",
      tabRepository: "URL do Repositório",
      tabSnippet: "Trecho de Código",
      inputLabel: "URL do repositório no GitHub",
      placeholder: "https://github.com/empresa/repositorio",
      snippetLabel: "Trecho de código",
      snippetPlaceholder: "Cole aqui um trecho de JSX, HTML ou CSS...",
      useDemoRepository: "Usar repositório demo",
      useSampleCode: "Usar código de exemplo",
      quickDemoLabel: "Cenários rápidos de demo",
      quickExcellent: "Excelente",
      quickAverage: "Médio",
      quickPoor: "Ruim",
      buttonAnalyze: "Analisar Repositório",
      buttonAnalyzeSnippet: "Analisar Trecho de Código",
      buttonAnalyzing: "Analisando..."
    },
    app: {
      invalidUrl:
        "Informe uma URL válida de repositório no GitHub para iniciar a análise.",
      invalidSnippet:
        "Cole ao menos um bloco de código para executar a análise de trecho de código.",
      readyTitle: "Pronto para escanear",
      readyDescription:
        "Clique em Analisar Repositório para executar o fluxo simulado e abrir o dashboard completo com achados e insights de IA.",
      readyDescriptionSnippet:
        "Cole o código e clique em Analisar Repositório para executar a Code Snippet Analysis com achados de acessibilidade e correções sugeridas."
    },
    pipeline: {
      title: "Pipeline de análise em tempo real",
      statusCompleted: "Concluído",
      statusRunning: "Em andamento",
      summaryCompleted:
        "Escaneamento do repositório finalizado. Relatório de acessibilidade gerado.",
      summaryRunning:
        "Executando escaneamento do repositório e verificações de acessibilidade...",
      progress: "Progresso",
      steps: [
        "Lendo estrutura do repositório...",
        "Detectando componentes React...",
        "Verificando HTML semântico...",
        "Avaliando navegação por teclado...",
        "Validando contraste de cores...",
        "Analisando atributos ARIA...",
        "Gerando orientação de remediação..."
      ]
    },
    dashboard: {
      title: "Dashboard executivo",
      metricBadge: "Métrica executiva",
      scoreLabel: "Accessibility Score",
      criticalIssues: "Problemas críticos",
      mediumIssues: "Problemas médios",
      lowIssues: "Problemas baixos",
      filesAnalyzed: "Arquivos analisados"
    },
    findings: {
      title: "Achados",
      impact: "Impacto:",
      suggestedFix: "Correção sugerida:",
      beforeCode: "Antes",
      suggestedCode: "Correção sugerida",
      critical: "CRÍTICO",
      medium: "MÉDIO",
      low: "BAIXO",
      findingById: {
        "F-000": {
          wcagCriterion: "WCAG 2.1.1 Teclado",
          description:
            "O menu interativo não pode ser acessado pela navegação por teclado.",
          impact:
            "Usuários que não conseguem usar mouse ficam bloqueados no acesso à navegação principal.",
          suggestedFix:
            "Ative suporte completo ao teclado em todas as interações do menu e mantenha foco visível em cada etapa."
        },
        "F-001": {
          description: "Imagem sem texto alternativo.",
          impact:
            "Usuários de leitores de tela não conseguem compreender imagens de produto.",
          suggestedFix:
            "Adicione atributo alt com contexto significativo para cada imagem de produto."
        },
        "F-002": {
          description: "Indicador visual de foco ausente.",
          impact: "Usuários de teclado não conseguem navegar pela interface.",
          suggestedFix:
            "Aplique um foco visível, claro e com alto contraste em todos os elementos interativos."
        },
        "F-003": {
          description: "Contraste de cor insuficiente.",
          impact:
            "Usuários com baixa visão podem não conseguir ler o conteúdo.",
          suggestedFix:
            "Ajuste as cores para manter ao menos 4.5:1 de contraste em textos normais."
        },
        "F-004": {
          description: "Campo de formulário sem orientação clara.",
          impact: "Aumenta erros de preenchimento e abandono durante envios.",
          suggestedFix:
            "Inclua texto de apoio e associe um rótulo descritivo ao campo."
        },
        "F-005": {
          description: "Texto de link genérico sem contexto.",
          impact:
            "Leitores de tela anunciam links ambíguos, reduzindo clareza e velocidade de navegação.",
          suggestedFix:
            'Substitua textos como "clique aqui" por links descritivos.'
        },
        "CS-001": {
          description: "Imagem encontrada sem texto alternativo significativo.",
          impact:
            "Usuários de leitores de tela não conseguem compreender o conteúdo representado na imagem.",
          suggestedFix:
            "Adicione um atributo alt descritivo para imagens informativas.",
          beforeCode: "![](/banner.png)",
          suggestedCode: "![Banner principal](/banner.png)"
        },
        "CS-002": {
          description: "Botão somente com ícone sem nome acessível.",
          impact:
            "Tecnologias assistivas podem anunciar esse controle como botão sem nome.",
          suggestedFix:
            "Adicione aria-label ou texto visível que descreva claramente a ação."
        },
        "CS-003": {
          wcagCriterion: "WCAG 1.3.1",
          description:
            "Campo de formulário sem rótulo associado programaticamente.",
          impact:
            "Usuários de leitor de tela podem ouvir um campo sem nome e perder contexto do formulário.",
          suggestedFix: "Associe um rótulo visível ao input usando htmlFor/id."
        },
        "CS-004": {
          description: "Texto de link genérico como clique aqui foi detectado.",
          impact:
            "Usuários que navegam por lista de links perdem contexto de destino.",
          suggestedFix:
            "Troque o texto genérico por um rótulo descritivo do destino."
        },
        "CS-005": {
          description:
            "Combinação de cores com possível baixo contraste detectada no CSS.",
          impact:
            "Pessoas com baixa visão podem ter dificuldade para ler o conteúdo em primeiro plano.",
          suggestedFix:
            "Eleve a razão de contraste entre texto e fundo para no mínimo 4.5:1."
        },
        "CS-006": {
          description:
            "Nenhum padrão de alto risco foi detectado neste trecho de código.",
          impact:
            "O código parece mais saudável, mas uma revisão manual ainda é necessária para cobertura completa.",
          suggestedFix:
            "Mantenha HTML semântico e execute verificações automatizadas antes do merge."
        }
      }
    },
    insights: {
      title: "Insights do AI Accessibility Agent",
      description:
        "Recomendações em linguagem natural que destacam risco, impacto para usuários e ações prioritárias para a equipe.",
      priorityLabel: "Prioridade",
      priority: { High: "Alta", Medium: "Média", Low: "Baixa" },
      insightById: {
        "I-001": {
          title: "Risco imediato para navegação por teclado",
          detail:
            "A ausência de foco visível em componentes críticos pode bloquear fluxos como login e checkout para usuários sem mouse."
        },
        "I-002": {
          title: "Conteúdo visual sem equivalente textual",
          detail:
            "Imagens sem alt removem contexto e podem esconder informações essenciais para tomada de decisão do usuário."
        },
        "I-003": {
          title: "Ação de maior impacto para o próximo sprint",
          detail:
            "Padronize um checklist automatizado de acessibilidade no CI para evitar regressões e reduzir retrabalho antes da release."
        },
        "CS-I-001": {
          title: "Falhas semânticas críticas em elementos interativos",
          detail:
            "O trecho contém controles que não são totalmente perceptíveis ou operáveis com tecnologias assistivas, exigindo correções imediatas."
        },
        "CS-I-002": {
          title: "Ganhos rápidos com baixo risco de implementação",
          detail:
            "A maior parte dos problemas pode ser corrigida com atributos semânticos e substituição de padrões não semânticos por HTML acessível."
        },
        "CS-I-003": {
          title: "Próxima ação recomendada",
          detail:
            "Adicione um checklist de acessibilidade para snippets no code review para evitar recorrência de problemas de teclado e rotulagem."
        }
      }
    },
    businessImpact: {
      title: "Por que isso importa",
      description: "Problemas de acessibilidade encontrados antes da produção.",
      bullets: [
        "Redução de custos de remediação",
        "Melhor experiência do usuário",
        "Conformidade com WCAG",
        "Entrega de software inclusivo"
      ]
    }
  },
  es: {
    controls: {
      language: "Idioma",
      theme: "Tema",
      themeDark: "Oscuro",
      themeLight: "Claro"
    },
    hero: {
      chip: "Accesibilidad Shift-Left",
      titleLine1: "Lleva la accesibilidad al inicio del desarrollo.",
      titleLine2: "Corrige problemas antes de producción.",
      subtitle: "Encuentra problemas de accesibilidad antes que tus usuarios.",
      footnote:
        "Diseñado para integración rápida con flujos de IA en tiempo real"
    },
    trustSignals: [
      "WCAG 2.2",
      "Análisis impulsado por IA",
      "Shift-Left Accessibility",
      "Escaneo de Repositorios"
    ],
    story: {
      title: "Cómo funciona",
      description:
        "Un pipeline claro de shift-left accessibility, desde el repositorio hasta la guía de remediación.",
      steps: [
        {
          title: "Repositorio",
          description: "Conecta la URL de un repositorio de GitHub."
        },
        {
          title: "Agente de Accesibilidad",
          description: "Un agente de IA escanea código y señales de UI."
        },
        {
          title: "Hallazgos WCAG",
          description: "Los problemas se mapean contra criterios WCAG."
        },
        {
          title: "Correcciones Accionables",
          description:
            "El equipo recibe correcciones priorizadas para entregar."
        }
      ]
    },
    repository: {
      title: "Analizar Accesibilidad",
      description:
        "Ingresa una URL de repositorio de GitHub para iniciar el escaneo automático de accesibilidad.",
      tabRepository: "URL del Repositorio",
      tabSnippet: "Fragmento de Código",
      inputLabel: "URL del repositorio de GitHub",
      placeholder: "https://github.com/empresa/repositorio",
      snippetLabel: "Fragmento de código",
      snippetPlaceholder: "Pega aquí un fragmento de JSX, HTML o CSS...",
      useDemoRepository: "Usar repositorio demo",
      useSampleCode: "Usar código de ejemplo",
      quickDemoLabel: "Escenarios rápidos de demo",
      quickExcellent: "Excelente",
      quickAverage: "Medio",
      quickPoor: "Crítico",
      buttonAnalyze: "Analizar Repositorio",
      buttonAnalyzeSnippet: "Analizar Fragmento de Código",
      buttonAnalyzing: "Analizando..."
    },
    app: {
      invalidUrl:
        "Ingresa una URL válida de repositorio de GitHub para iniciar el análisis.",
      invalidSnippet:
        "Pega al menos un bloque de código para ejecutar el análisis de fragmento.",
      readyTitle: "Listo para escanear",
      readyDescription:
        "Haz clic en Analizar Repositorio para ejecutar el flujo simulado y abrir el dashboard completo con hallazgos e insights de IA.",
      readyDescriptionSnippet:
        "Pega el código y haz clic en Analizar Repositorio para ejecutar Code Snippet Analysis con hallazgos de accesibilidad y correcciones sugeridas."
    },
    pipeline: {
      title: "Pipeline de análisis en vivo",
      statusCompleted: "Completado",
      statusRunning: "En progreso",
      summaryCompleted:
        "Escaneo del repositorio finalizado. Informe de accesibilidad generado.",
      summaryRunning:
        "Ejecutando escaneo del repositorio y verificaciones de accesibilidad...",
      progress: "Progreso",
      steps: [
        "Leyendo estructura del repositorio...",
        "Detectando componentes React...",
        "Verificando HTML semántico...",
        "Evaluando navegación por teclado...",
        "Validando contraste de color...",
        "Analizando atributos ARIA...",
        "Generando guía de remediación..."
      ]
    },
    dashboard: {
      title: "Dashboard ejecutivo",
      metricBadge: "Métrica ejecutiva",
      scoreLabel: "Accessibility Score",
      criticalIssues: "Problemas críticos",
      mediumIssues: "Problemas medios",
      lowIssues: "Problemas bajos",
      filesAnalyzed: "Archivos analizados"
    },
    findings: {
      title: "Hallazgos",
      impact: "Impacto:",
      suggestedFix: "Corrección sugerida:",
      beforeCode: "Antes",
      suggestedCode: "Corrección sugerida",
      critical: "CRÍTICO",
      medium: "MEDIO",
      low: "BAJO",
      findingById: {
        "F-000": {
          wcagCriterion: "WCAG 2.1.1 Teclado",
          description:
            "El menú interactivo no puede accederse mediante navegación por teclado.",
          impact:
            "Los usuarios que no pueden usar mouse quedan bloqueados para acceder a la navegación principal.",
          suggestedFix:
            "Habilita soporte completo de teclado en todas las interacciones del menú y conserva foco visible en cada paso."
        },
        "F-001": {
          description: "Imagen sin texto alternativo.",
          impact:
            "Usuarios de lectores de pantalla no pueden comprender imágenes de producto.",
          suggestedFix:
            "Agrega atributo alt con contexto significativo para cada imagen de producto."
        },
        "F-002": {
          description: "Indicador visible de foco ausente.",
          impact: "Usuarios de teclado no pueden navegar la interfaz.",
          suggestedFix:
            "Aplica un foco visible, claro y de alto contraste en todos los elementos interactivos."
        },
        "F-003": {
          description: "Contraste de color insuficiente.",
          impact: "Usuarios con baja visión pueden no leer el contenido.",
          suggestedFix:
            "Ajusta colores para mantener al menos 4.5:1 de contraste en texto normal."
        },
        "F-004": {
          description: "Campo de formulario sin guía clara.",
          impact: "Incrementa errores de entrada y abandono durante envíos.",
          suggestedFix:
            "Incluye texto de ayuda y asocia una etiqueta descriptiva al campo."
        },
        "F-005": {
          description: "Texto de enlace genérico sin contexto.",
          impact:
            "Los lectores de pantalla anuncian enlaces ambiguos, reduciendo claridad y velocidad de navegación.",
          suggestedFix:
            'Sustituye textos como "haz clic aquí" por enlaces descriptivos.'
        },
        "CS-001": {
          description:
            "Se detectó una imagen sin texto alternativo significativo.",
          impact:
            "Las personas usuarias de lector de pantalla no pueden comprender lo que representa la imagen.",
          suggestedFix:
            "Incluye un atributo alt descriptivo para imágenes informativas.",
          beforeCode: "![](/banner.png)",
          suggestedCode: "![Banner principal](/banner.png)"
        },
        "CS-002": {
          description: "Botón sin nombre accesible.",
          impact:
            "Las tecnologías asistivas pueden anunciar el control como botón sin nombre.",
          suggestedFix:
            "Agrega aria-label o texto visible que describa claramente la acción.",
          beforeCode: "<button>Enviar</button>",
          suggestedCode:
            '<button aria-label="Enviar formulario">Enviar</button>'
        },
        "CS-003": {
          wcagCriterion: "WCAG 1.3.1",
          description:
            "Campo de formulario sin etiqueta asociada programáticamente.",
          impact:
            "Las personas usuarias de lector de pantalla pueden escuchar un campo sin nombre y perder contexto del formulario.",
          suggestedFix:
            "Asocia una etiqueta visible al input usando htmlFor/id.",
          beforeCode: '<input id="nome" />',
          suggestedCode:
            '<label htmlFor="nome">Nombre</label>\n<input id="nome" />'
        },
        "CS-004": {
          description:
            "Se detectó texto de enlace genérico como haz clic aquí.",
          impact:
            "Las personas que navegan por listas de enlaces pierden contexto de destino.",
          suggestedFix:
            "Sustituye el texto genérico por un enlace descriptivo del destino.",
          beforeCode: '<a href="/checkout">click here</a>',
          suggestedCode: '<a href="/checkout">Ver detalles del checkout</a>'
        },
        "CS-005": {
          description:
            "Se detectó combinación de colores con posible bajo contraste en CSS.",
          impact:
            "Las personas con baja visión pueden tener dificultades para leer el contenido en primer plano.",
          suggestedFix:
            "Aumenta la relación de contraste entre texto y fondo al menos a 4.5:1."
        },
        "CS-006": {
          description:
            "No se detectó un patrón de alto riesgo en este fragmento.",
          impact:
            "El código parece más saludable, pero una revisión manual sigue siendo necesaria para cobertura completa.",
          suggestedFix:
            "Mantén HTML semántico y ejecuta verificaciones automatizadas antes del merge."
        }
      }
    },
    insights: {
      title: "Insights de AI Accessibility Agent",
      description:
        "Recomendaciones en lenguaje natural que destacan riesgos, impacto en usuarios y acciones prioritarias para el equipo.",
      priorityLabel: "Prioridad",
      priority: { High: "Alta", Medium: "Media", Low: "Baja" },
      insightById: {
        "I-001": {
          title: "Riesgo inmediato para la navegación por teclado",
          detail:
            "La falta de foco visible en componentes críticos puede bloquear flujos como login y checkout para usuarios sin mouse."
        },
        "I-002": {
          title: "Contenido visual sin equivalente textual",
          detail:
            "Imágenes sin alt eliminan contexto y pueden ocultar información esencial para decisiones del usuario."
        },
        "I-003": {
          title: "Acción de mayor impacto para el próximo sprint",
          detail:
            "Estandariza una checklist automatizada de accesibilidad en CI para prevenir regresiones y reducir retrabajo antes del release."
        },
        "CS-I-001": {
          title: "Brechas semánticas críticas en UI interactiva",
          detail:
            "El fragmento contiene controles que no son totalmente perceptibles u operables con tecnologías asistivas y requieren correcciones inmediatas."
        },
        "CS-I-002": {
          title: "Mejoras rápidas con bajo riesgo de implementación",
          detail:
            "La mayoría de los problemas puede resolverse con atributos semánticos y reemplazo de patrones no semánticos por HTML accesible."
        },
        "CS-I-003": {
          title: "Siguiente paso recomendado",
          detail:
            "Agrega una checklist de accesibilidad para fragmentos en code review para evitar recurrencia de problemas de teclado y etiquetado."
        }
      }
    },
    businessImpact: {
      title: "Por qué esto importa",
      description: "Problemas de accesibilidad detectados antes de producción.",
      bullets: [
        "Reducción de costos de remediación",
        "Mejor experiencia de usuario",
        "Cumplimiento WCAG",
        "Entrega de software inclusivo"
      ]
    }
  }
};

export function getTranslations(language: Language) {
  return translations[language];
}

export function getThemeToggleLabel(
  theme: Theme,
  t: TranslationSchema["controls"]
) {
  return theme === "dark" ? t.themeLight : t.themeDark;
}
