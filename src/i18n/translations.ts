import type { Language, Theme } from "../types/ui";

interface LocalizedFinding {
  wcagCriterion?: string;
  description: string;
  impact: string;
  suggestedFix: string;
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
    inputLabel: string;
    placeholder: string;
    buttonAnalyze: string;
    buttonAnalyzing: string;
  };
  app: {
    invalidUrl: string;
    readyTitle: string;
    readyDescription: string;
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
      title: "Analyze Repository",
      description:
        "Enter a GitHub repository URL to start the automated accessibility scan.",
      inputLabel: "GitHub repository URL",
      placeholder: "https://github.com/company/repository",
      buttonAnalyze: "Analyze Repository",
      buttonAnalyzing: "Analyzing..."
    },
    app: {
      invalidUrl: "Enter a valid GitHub repository URL to start the analysis.",
      readyTitle: "Ready to scan",
      readyDescription:
        "Click Analyze Repository to run the simulated flow and open the full dashboard with findings and AI insights."
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
        "Cloning repository",
        "Scanning source code",
        "Running WCAG analysis",
        "Generating accessibility report"
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
      title: "Analisar Repositório",
      description:
        "Informe a URL de um repositório no GitHub para iniciar o escaneamento automático de acessibilidade.",
      inputLabel: "URL do repositório no GitHub",
      placeholder: "https://github.com/empresa/repositorio",
      buttonAnalyze: "Analisar Repositório",
      buttonAnalyzing: "Analisando..."
    },
    app: {
      invalidUrl:
        "Informe uma URL válida de repositório no GitHub para iniciar a análise.",
      readyTitle: "Pronto para escanear",
      readyDescription:
        "Clique em Analisar Repositório para executar o fluxo simulado e abrir o dashboard completo com achados e insights de IA."
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
        "Clonando repositório",
        "Escaneando código-fonte",
        "Executando análise WCAG",
        "Gerando relatório de acessibilidade"
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
        }
      }
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
      title: "Analizar Repositorio",
      description:
        "Ingresa una URL de repositorio de GitHub para iniciar el escaneo automático de accesibilidad.",
      inputLabel: "URL del repositorio de GitHub",
      placeholder: "https://github.com/empresa/repositorio",
      buttonAnalyze: "Analizar Repositorio",
      buttonAnalyzing: "Analizando..."
    },
    app: {
      invalidUrl:
        "Ingresa una URL válida de repositorio de GitHub para iniciar el análisis.",
      readyTitle: "Listo para escanear",
      readyDescription:
        "Haz clic en Analizar Repositorio para ejecutar el flujo simulado y abrir el dashboard completo con hallazgos e insights de IA."
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
        "Clonando repositorio",
        "Escaneando código fuente",
        "Ejecutando análisis WCAG",
        "Generando informe de accesibilidad"
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
        }
      }
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
