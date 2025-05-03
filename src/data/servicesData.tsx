import {
  FaRobot,
  FaMagic,
  FaCompass,
  FaBrain,
  FaChartLine,
  FaLanguage,
  FaCode,
  FaDatabase,
  FaSearch,
} from "react-icons/fa"
export const servicesData = [
  {
    icon: <FaRobot className="text-3xl text-[#00e0ff]" />,
    title: "Automatisation intelligente (RPA)",
    text: "Libérez vos équipes des tâches manuelles. Nos robots logiciels automatisent vos processus répétitifs avec fiabilité.",
    link: "/services/rpa-automatisation",
  },
  {
    icon: <FaMagic className="text-3xl text-[#00e0ff]" />,
    title: "IA Générative & Création de contenu",
    text: "Générez des images, textes, scripts ou visuels marketing grâce à l’intelligence artificielle créative.",
    link: "/services/ia-generative",
  },
  {
    icon: <FaCompass className="text-3xl text-[#00e0ff]" />,
    title: "Exploration de données avancée",
    text: "Exploitez vos données métiers, géospatiales ou historiques pour révéler des insights et opportunités cachées.",
    link: "/services/ia-archeologie",
  },
  {
    icon: <FaBrain className="text-3xl text-[#00e0ff]" />,
    title: "Deep Learning & traitement complexe",
    text: "Analyse d’images, vidéos ou signaux via des réseaux de neurones profonds. Idéal pour la reconnaissance visuelle.",
    link: "/services/machine-learning-deep-learning",
  },
  {
    icon: <FaChartLine className="text-3xl text-[#00e0ff]" />,
    title: "Machine Learning prédictif",
    text: "Anticipez ventes, ruptures ou fraudes à partir de vos données. Nos modèles apprennent et s’adaptent à votre activité.",
    link: "/services/machine-learning-deep-learning",
  },
  {
    icon: <FaLanguage className="text-3xl text-[#00e0ff]" />,
    title: "Analyse sémantique & data intelligente",
    text: "Exploitez vos données textuelles, classez automatiquement vos contenus, détectez les signaux faibles et optimisez vos décisions grâce à l'IA.",
    link: "/services/analyse-semantique-nlp",
  },
  {
    icon: <FaChartLine className="text-3xl text-[#00e0ff]" />,
    title: "Business Intelligence augmentée",
    text: "Des dashboards intelligents avec des prédictions intégrées pour une prise de décision immédiate.",
    link: "/services/bi-ia",
  },
  {
    icon: <FaCode className="text-3xl text-[#00e0ff]" />,
    title: "Développement API performant",
    text: "Backends robustes et scalables avec FastAPI ou Django REST. Idéal pour vos apps métiers, SaaS ou automatisations.",
    link: "/services/developpement-api",
  },
  {
    icon: <FaDatabase className="text-3xl text-[#00e0ff]" />,
    title: "Data Engineering & Dashboards",
    text: "Nettoyez, structurez et exploitez vos données métiers. Pipelines automatisés et dashboards prêts pour l'IA.",
    link: "/services/data-engineering",
  },
  {
    icon: <FaSearch className="text-3xl text-[#00e0ff]" />,
    title: "Scraping intelligent (Rust + Selenium)",
    text: "Collecte de données rapide, fiable et légale. Extraction avancée sur sites dynamiques avec Rust & Selenium.",
    link: "/services/scraping-intelligent",
  }
]