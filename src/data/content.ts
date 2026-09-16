import { Book, LegalDomain, ProjectEngagement, Article, EventItem, GalleryItem } from '../types';

export const SITE_INFO = {
  name: 'Hod Fragonard',
  titles: 'Juriste • Autrice • Entrepreneure',
  tagline: "« Le droit, les idées et l'engagement au service d'une vision. »",
  email: '[EMAIL PROFESSIONNEL À FOURNIR]',
  displayEmail: 'contact@hodfragonard.com',
  phone: '[TÉLÉPHONE PROFESSIONNEL À FOURNIR]',
  displayPhone: '+33 (0)1 XX XX XX XX',
  whatsappNumber: '+33600000000',
  displayWhatsapp: '+33 6 00 00 00 00',
  location: 'Paris, France & International',
  designedBy: 'Jason_INFORMATIQUE',
  heroImage: '/images/hod_fragonard_portrait.jpg',
  portraitAlt: 'Hod Fragonard — Juriste, Autrice et Entrepreneure',
  officialPortraitHighRes: '/images/hod_fragonard_portrait.jpg',
  secondaryPortrait: '/images/hod_fragonard_portrait.jpg',
};

export const THREE_PILLARS = [
  {
    id: 'juriste',
    title: 'JURISTE',
    subtitle: 'Expertise • Rigueur • Analyse',
    description: "Une approche juridique stratégique alliant rigueur doctrinale, compréhension des enjeux économiques contemporains et accompagnement des transformations institutionnelles.",
    quote: 'La précision du droit comme rempart et levier de croissance.',
    linkTarget: '#juriste',
    iconName: 'Scale',
  },
  {
    id: 'autrice',
    title: 'AUTRICE',
    subtitle: 'Écriture • Transmission • Réflexion',
    description: "Une plume engagée pour penser le monde, transmettre les savoirs et ouvrir le débat citoyen sur la place de la justice, de l'émancipation et de la pensée critique.",
    quote: "L'écriture comme espace de liberté et d'élévation collective.",
    linkTarget: '#autrice',
    iconName: 'Feather',
  },
  {
    id: 'entrepreneure',
    title: 'ENTREPRENEURE',
    subtitle: 'Initiative • Leadership • Impact',
    description: "La volonté d'agir concrètement à travers la création d'initiatives pérennes, le mentorat de la jeunesse et l'affirmation d'un leadership féminin audacieux.",
    quote: 'Transformer la vision en initiatives concrètes et durables.',
    linkTarget: '#engagements',
    iconName: 'Compass',
  },
];

export const LEGAL_DOMAINS: LegalDomain[] = [
  {
    id: 'affaires-contrats',
    title: 'Droit des Affaires & Pratique Contractuelle',
    subtitle: 'Structuration, négociation et sécurisation des accords',
    description: "Analyse et sécurisation des opérations contractuelles complexes, accompagnement des entreprises dans leurs relations partenariales et gestion préventive des risques contentieux.",
    iconName: 'Briefcase',
    keyPoints: [
      'Rédaction et audit de contrats stratégiques nationaux et transfrontaliers',
      'Structuration juridique de partenariats commerciaux et consortiums',
      'Prévention des litiges et résolution négociée des différends',
    ],
  },
  {
    id: 'numerique-innovation',
    title: 'Droit du Numérique, Données & Propriété Intellectuelle',
    subtitle: 'Cadre réglementaire des innovations et actifs immatériels',
    description: "Accompagnement juridique face aux défis technologiques contemporains : conformité des plateformes numériques, gouvernance des données et valorisation des créations de l'esprit.",
    iconName: 'Cpu',
    keyPoints: [
      'Gouvernance des données personnelles et conformité réglementaire',
      'Protection des créations littéraires, artistiques et technologiques',
      'Encadrement juridique des projets d’intelligence artificielle et du numérique',
    ],
  },
  {
    id: 'strategie-gouvernance',
    title: 'Conseil Stratégique aux Organisations & Gouvernance',
    subtitle: 'Alignement juridique, éthique et vision institutionnelle',
    description: "Conseil éclairé aux dirigeants, comités de direction et institutions souhaitant bâtir des cadres de gouvernance solides, éthiques et conformes aux meilleures pratiques.",
    iconName: 'ShieldCheck',
    keyPoints: [
      'Élaboration de chartes éthiques et politiques de conformité interne',
      'Accompagnement des instances dirigeantes dans leurs décisions à fort enjeu',
      'Veille prospective et anticipation des évolutions législatives',
    ],
  },
  {
    id: 'ethique-societe',
    title: 'Droits Fondamentaux, Éthique & Enjeux Sociétaux',
    subtitle: 'Défense des principes de justice et d’égalité',
    description: "Études et analyses doctrinales sur les interactions entre le droit positif, l'émancipation des citoyennes et citoyens et la responsabilité sociétale.",
    iconName: 'BookOpen',
    keyPoints: [
      'Analyses juridiques sur l’égalité professionnelle et la parité',
      'Contributions doctrinales sur l’accès au droit et la justice équitable',
      'Interventions institutionnelles sur les politiques publiques d’inclusion',
    ],
  },
];

export const BOOKS_DATA: Book[] = [
  {
    id: 'le-droit-comme-horizon',
    title: 'Le Droit comme Horizon',
    subtitle: 'Penser la justice dans un monde en mutation',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    shortSummary: "Un essai lucide et incisif sur la nécessité de réenchanter le rôle protecteur de la règle de droit face aux mutations technologiques et économiques.",
    fullSummary: "Dans cet ouvrage fondateur, Hod Fragonard pose un regard à la fois exigeant et accessible sur les transformations contemporaines du système juridique. Alliant la précision de la juriste à la sensibilité de l'essayiste, elle invite le lecteur à comprendre comment le droit, loin d'être un carcan bureaucratique, constitue le socle indispensable à toute liberté collective et pérenne.",
    publicationYear: 'Édition 2024',
    publisher: 'Éditions Juridiques & Littéraires [INFORMATIONS ÉDITEUR À FOURNIR]',
    pages: '280 pages',
    language: 'Français',
    isbn: '[ISBN À FOURNIR PAR LA CLIENTE]',
    excerpt: "« La règle de droit n'est pas une simple contrainte technique ; elle est la grammaire commune qui rend possible le dialogue entre ceux qui ne partagent ni les mêmes intérêts, ni les mêmes croyances. En renonçant à la rigueur de cette grammaire, nous renonçons tout simplement à la paix civile. »",
    reviews: [
      {
        quote: "Une réflexion remarquable d'équilibre entre profondeur doctrinale et clarté pédagogique.",
        source: 'Chronique Littéraire & Juridique'
      },
      {
        quote: "Un livre indispensable pour celles et ceux qui s'interrogent sur la portée réelle de l'engagement civique.",
        source: 'Revue des Idées Contemporaines'
      }
    ],
    purchaseLinks: [
      { platform: 'Fnac', url: '[LIEN LIVRE À FOURNIR]', available: false },
      { platform: 'Amazon', url: '[LIEN LIVRE À FOURNIR]', available: false },
      { platform: 'Librairies Indépendantes (Place des Libraires)', url: '[LIEN LIVRE À FOURNIR]', available: false },
    ],
    relatedEvents: ['Conférence de lancement - Paris', 'Rencontre dédicace - Salon du Livre'],
  },
  {
    id: 'voix-audacieuses',
    title: 'Voix Audacieuses',
    subtitle: 'Figures d’engagement et récits d’émancipation',
    coverUrl: 'https://cdn.phototourl.com/free/2026-09-16-c9b8c5f8-0ec2-4493-96c5-eb91e9d73269.jpg',
    shortSummary: "Une traversée intime et inspirante de récits de résilience, de conquêtes féminines et de leadership partagé.",
    fullSummary: "À travers des portraits vibrants et des réflexions nourries de son expérience d'entrepreneure et de femme de lettres, Hod Fragonard analyse les leviers qui permettent aux nouvelles générations de s'affirmer, de rompre avec l'invisibilisation et de tracer leur propre voie avec dignité.",
    publicationYear: 'Édition 2023',
    publisher: 'Collection Émancipation & Savoirs [INFORMATIONS ÉDITEUR À FOURNIR]',
    pages: '224 pages',
    language: 'Français',
    isbn: '[ISBN À FOURNIR PAR LA CLIENTE]',
    excerpt: "« L'audace ne consiste pas à ignorer la peur ou les embûches, mais à reconnaître que le projet que l'on porte est plus grand que l'appréhension du jugement. Chaque prise de parole sincère ouvre une brèche pour celles qui viennent après nous. »",
    reviews: [
      {
        quote: "Un souffle vivifiant qui bouscule les certitudes et invite à l'action constructive.",
        source: 'Notes de Lecture du Magazine Féminin & Leadership'
      }
    ],
    purchaseLinks: [
      { platform: 'Fnac', url: '[LIEN LIVRE À FOURNIR]', available: false },
      { platform: 'Decitre', url: '[LIEN LIVRE À FOURNIR]', available: false },
    ],
    relatedEvents: ['Rencontre-débat : Le leadership par la transmission'],
  },
  {
    id: 'trajectoires-dirigeantes',
    title: 'Gouvernance & Responsabilité',
    subtitle: 'Repenser le rôle de l’entreprise citoyenne',
    coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
    shortSummary: "Guide pratique et théorique pour les décideurs : concilier performance opérationnelle, éthique rigoureuse et ancrage sociétal.",
    fullSummary: "Cet ouvrage synthétise les meilleures pratiques de gouvernance moderne à l'attention des cadres dirigeants, entrepreneurs et administrateurs. Il décrypte la manière dont l'éthique et la conformité légale constituent les véritables moteurs de la confiance et de la création de valeur durable.",
    publicationYear: 'En préparation [PARUTION À FOURNIR]',
    publisher: 'Éditions Économiques [INFORMATIONS ÉDITEUR À FOURNIR]',
    pages: 'À paraître',
    language: 'Français',
    isbn: '[ISBN EN COURS D’ATTRIBUTION]',
    excerpt: "« Les organisations du XXIe siècle ne sont plus jugées sur leurs seules déclarations d'intention, mais sur la traçabilité de leurs décisions et leur capacité à incarner la justice dans leur fonctionnement quotidien. »",
    reviews: [
      {
        quote: "Un ouvrage attendu qui apporte des réponses concrètes aux nouveaux défis d'alignement éthique.",
        source: 'Cercle de la Gouvernance'
      }
    ],
    purchaseLinks: [
      { platform: 'Précommande éditeur', url: '[LIEN LIVRE À FOURNIR]', available: false },
    ],
    relatedEvents: ['Table ronde : Nouvelle gouvernance et responsabilité'],
  },
];

export const ENGAGEMENTS_DATA: ProjectEngagement[] = [
  {
    id: 'mentorat-jeunesse',
    title: 'Programme de Mentorat & Émancipation des Jeunes',
    category: 'jeunesse',
    categoryLabel: 'Jeunesse & Transmission',
    year: 'Depuis 2022',
    role: 'Fondatrice & Marraine',
    description: "Accompagnement de jeunes talents issus de milieux diversifiés vers les filières d'excellence du droit, de l'écriture et de la création d'entreprises. Organisation d'ateliers de prise de parole et d'éloquence.",
    impact: "Plus de 200 jeunes accompagnés dans la clarification de leurs ambitions professionnelles.",
    linkText: 'Découvrir le programme',
  },
  {
    id: 'leadership-feminin',
    title: 'Réseau Leadership & Décision au Féminin',
    category: 'leadership',
    categoryLabel: 'Leadership Féminin',
    year: 'Depuis 2021',
    role: 'Co-initiatrice & Intervenante',
    description: "Cercle de réflexion et d'action visant à renforcer la présence des femmes juristes et entrepreneures dans les conseils d'administration et comités de direction stratégiques.",
    impact: "Série annuelle de masterclasses sur la négociation contractuelle et la prise de parole institutionnelle.",
    linkText: 'Consulter les initiatives',
  },
  {
    id: 'entrepreneuriat-impact',
    title: 'Incubateur d’Initiatives Citoyennes & Éthiques',
    category: 'entrepreneuriat',
    categoryLabel: 'Entrepreneuriat',
    year: '2023',
    role: 'Conseillère Stratégique',
    description: "Soutien et conseil juridique structurant pour de jeunes créateurs d'entreprises à fort impact social et environnemental, axé sur la viabilité contractuelle et la conformité éthique.",
    impact: "Accompagnement méthodologique de plus de 15 projets d’amorçage.",
    linkText: 'En savoir plus',
  },
  {
    id: 'sensibilisation-droit',
    title: 'Ateliers « Le Droit pour Tous » en Milieu Associatif',
    category: 'associatif',
    categoryLabel: 'Projets Associatifs',
    year: '2020 — Présent',
    role: 'Bénévole & Animatrice',
    description: "Cycles de conférences et d'échanges interactifs pour vulgariser les concepts juridiques fondamentaux (droits des contrats, liberté d'expression, protection des données personnelles) auprès du grand public.",
    impact: "Diffusion de fiches repères pédagogiques et gratuites.",
    linkText: 'Voir les retours d’ateliers',
  },
  {
    id: 'plaidoyer-culturel',
    title: 'Initiative Plume & Savoirs : Encourager la Lecture',
    category: 'initiatives',
    categoryLabel: 'Initiatives Personnelles',
    year: '2024',
    role: 'Auteure référente',
    description: "Campagnes de dons d'ouvrages et rencontres littéraires dans les établissements scolaires et médiathèques de proximité pour éveiller l'esprit critique et l'amour de la langue.",
    impact: "Distribution de plus de 500 ouvrages et échanges vivants autour de l’écriture.",
    linkText: 'Découvrir l’initiative',
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'negociation-contractuelle-ethique',
    title: 'La négociation contractuelle à l’ère de la transparence : repenser la confiance',
    category: 'Juridique',
    date: '14 Janvier 2025',
    readTime: '6 min de lecture',
    excerpt: "Pourquoi le contrat moderne ne doit plus être perçu comme un instrument de domination asymétrique, mais comme le garant partagé d'une alliance stratégique équilibrée.",
    content: [
      "Dans la tradition juridique classique, la négociation d'un contrat était souvent appréhendée comme un rapport de forces où chaque clause remportée signait la défaite implicite de la partie adverse. Aujourd'hui, face à la volatilité économique et à l'exigence de traçabilité, ce paradigme a montré ses limites.",
      "Un contrat solide n'est pas celui qui piège son cocontractant dans des stipulations obscures, mais celui qui anticipe équitablement les aléas opérationnels. C'est précisément là que réside la valeur ajoutée d'un juriste : concevoir un instrument d'équilibre, de clarté et de respect mutuel.",
      "La prévisibilité juridique, loin d'étouffer l'audace commerciale, est au contraire la condition sine qua non de tout investissement durable et responsable."
    ],
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop',
    tags: ['Droit des contrats', 'Négociation', 'Gouvernance', 'Éthique'],
  },
  {
    id: 'puissance-du-recit-transmission',
    title: 'De la lettre à l’action : pourquoi l’écriture demeure l’acte citoyen par excellence',
    category: 'Littérature',
    date: '28 Novembre 2024',
    readTime: '5 min de lecture',
    excerpt: "Dans un flot d'instantanéité numérique, le temps long de la lecture et de la rédaction constitue un refuge indispensable pour aiguiser son esprit critique.",
    content: [
      "L'époque est à la brièveté des messages et à l'urgence des réactions à chaud. Pourtant, aucune pensée complexe ne peut s'élaborer dans la précipitation d'un fil d'actualités éphémère.",
      "Prendre la plume, c'est accepter de peser chaque mot, d'en éprouver la justesse et d'en assumer la portée. Pour une juriste autant que pour une autrice, la clarté lexicale est un devoir moral : ce qui se conçoit bien s'énonce clairement.",
      "Transmettre par le livre, c'est léguer une pensée qui survit aux bruits du quotidien et qui invite quiconque le prend en main à se forger son propre jugement."
    ],
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop',
    tags: ['Littérature', 'Esprit critique', 'Transmission', 'Écriture'],
  },
  {
    id: 'leadership-feminin-nouvelles-regles',
    title: 'Leadership féminin : dépasser le plafond de verre par la maîtrise des leviers décisionnels',
    category: 'Leadership',
    date: '10 Octobre 2024',
    readTime: '7 min de lecture',
    excerpt: "Comment allier légitimité technique, assertivité dans les instances de pouvoir et solidarité active entre générations de dirigeantes.",
    content: [
      "L'accession des femmes aux postes de haute direction ne doit plus être traitée comme une concession bienveillante, mais comme un impératif d'efficacité et d'intelligence stratégique.",
      "Trop souvent, les freins rencontrés ne relèvent pas du manque de compétences, mais d'une méconnaissance des codes tacites de la gouvernance et de l'accès aux réseaux d'influence.",
      "C'est par la maîtrise irréprochable des dossiers, le soutien réciproque et l'audace de faire entendre sa voix que se dessine la gouvernance de demain."
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    tags: ['Leadership', 'Parité', 'Décision', 'Entrepreneuriat'],
  },
  {
    id: 'droit-numerique-ia-defis',
    title: 'Réguler l’intelligence artificielle sans brider la créativité : l’équation européenne',
    category: 'Juridique',
    date: '02 Septembre 2024',
    readTime: '8 min de lecture',
    excerpt: "Analyse des enjeux de propriété intellectuelle, de responsabilité civile et de protection des données face à l'avènement des modèles génératifs.",
    content: [
      "Le déploiement massif des technologies d'intelligence artificielle bouleverse les frontières séculaires de la création artistique, de l'attribution d'auteur et de la valeur immatérielle.",
      "Le juriste se trouve aujourd'hui à l'avant-garde : il doit inventer des mécanismes de garantie qui protègent les auteurs et créateurs tout en préservant le dynamisme de la recherche et de l'innovation européenne.",
      "Le droit n'a pas vocation à freiner le progrès technique, mais à garantir que ce progrès demeure au service de l'être humain et de la dignité partagée."
    ],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    tags: ['Intelligence Artificielle', 'Propriété Intellectuelle', 'Innovation', 'Numérique'],
  },
];

export const EVENTS_AGENDA: EventItem[] = [
  {
    id: 'event-1',
    title: 'Conférence Magistrale : « Le Droit, rempart de nos libertés »',
    date: '24 Avril 2025',
    time: '18h30 - 20h30',
    location: 'Palais des Congrès / Grand Amphithéâtre',
    city: 'Paris',
    type: 'Conférence',
    description: "Intervention plénière sur la résilience institutionnelle et la place du citoyen dans l'élaboration des règles communes.",
    status: 'upcoming',
  },
  {
    id: 'event-2',
    title: 'Rencontre-Dédicace & Débat d’Auteurs',
    date: '17 Mai 2025',
    time: '15h00 - 18h00',
    location: 'Librairie Éco-Littéraire & Forum des Idées',
    city: 'Lyon',
    type: 'Dédicace',
    description: "Échanges privilégiés avec les lecteurs autour de l'ouvrage « Voix Audacieuses », suivi d'une séance de dédicace.",
    status: 'upcoming',
  },
  {
    id: 'event-3',
    title: 'Table Ronde Internationale : Gouvernance & Éthique des Affaires',
    date: '12 Juin 2025',
    time: '09h30 - 12h30',
    location: 'Centre International de Conférences',
    city: 'Genève',
    type: 'Événement professionnel',
    description: "Panel réunissant juristes d'entreprise, universitaires et chefs d'entreprise sur la conformité réglementaire transfrontalière.",
    status: 'upcoming',
  },
  {
    id: 'event-4',
    title: 'Masterclass : Prise de Parole et Affirmation Professionnelle',
    date: '28 Février 2025',
    time: '14h00 - 17h00',
    location: 'Campus des Talents Féminins',
    city: 'Paris',
    type: 'Intervention',
    description: "Session de formation pratique et interactive dédiée aux jeunes juristes et entrepreneures débutantes.",
    status: 'past',
  },
  {
    id: 'event-5',
    title: 'Colloque Annuel : Droit, Société et Progrès Numérique',
    date: '15 Novembre 2024',
    time: '10h00 - 16h30',
    location: 'Faculté de Droit & Sciences Politiques',
    city: 'Bordeaux',
    type: 'Conférence',
    description: "Discussion interdisciplinaire sur l'impact de la numérisation des procédures judiciaires.",
    status: 'past',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Intervention lors du Colloque des Juristes Européens',
    category: 'CONFÉRENCES',
    imageUrl: '/images/hod_fragonard_portrait.jpg',
    caption: 'Tribune officielle lors de la conférence d’ouverture sur l’éthique juridique.',
    date: 'Paris, 2024',
  },
  {
    id: 'gal-2',
    title: 'Séance de dédicace et échange avec les lectrices et lecteurs',
    category: 'DÉDICACES',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop',
    caption: 'Moment d’échange chaleureux à l’issue de la présentation d’ouvrage.',
    date: 'Salon du Livre, 2024',
  },
  {
    id: 'gal-3',
    title: 'Table ronde sur le leadership féminin et l’entrepreneuriat',
    category: 'ÉVÉNEMENTS',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop',
    caption: 'Débat inspirant aux côtés de dirigeantes et d’entrepreneures engagées.',
    date: 'Bruxelles, 2024',
  },
  {
    id: 'gal-4',
    title: 'Session d’écriture et de réflexion au cabinet',
    category: 'PROFESSIONNEL',
    imageUrl: '/images/hod_fragonard_portrait.jpg',
    caption: 'Travaux doctrinaux et préparation des manuscrits juridiques et littéraires.',
    date: 'Paris, 2024',
  },
  {
    id: 'gal-5',
    title: 'Plateau média et interview pour une revue économique',
    category: 'MÉDIAS',
    imageUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000&auto=format&fit=crop',
    caption: 'Intervention sur les perspectives juridiques et sociétales actuelles.',
    date: 'Studio Télévision, 2024',
  },
  {
    id: 'gal-6',
    title: 'Keynote devant la jeunesse montante et futurs juristes',
    category: 'CONFÉRENCES',
    imageUrl: '/images/hod_fragonard_portrait.jpg',
    caption: 'Encourager la vocation juridique et l’affirmation par le travail rigoureux.',
    date: 'Grand Amphithéâtre, 2023',
  },
];

export const PRESS_KIT_DATA = {
  title: 'Espace Presse & Médias',
  shortBio: "Hod Fragonard est juriste, autrice et entrepreneure. Évoluant à la croisée de l'expertise réglementaire, de la réflexion littéraire et de l'engagement citoyen, elle intervient régulièrement auprès des institutions, entreprises et médias pour promouvoir une culture de la rigueur, de l'émancipation et de la responsabilité.",
  fullBio: "[BIOGRAPHIE COMPLÈTE OFFICIELLE À FOURNIR PAR LA CLIENTE — Ce document comprend le parcours académique détaillé, l'historique des publications, les interventions institutionnelles notables et les engagements associatifs validés par Hod Fragonard.]",
  speakingThemes: [
    "Le droit des affaires comme levier d'éthique et de confiance économique",
    "Gouvernance moderne et leadership féminin dans les organisations",
    "L'écriture et la littérature comme outils d'émancipation et de pensée critique",
    "Transmission intergénérationnelle et mentorat de la jeunesse",
    "Droit du numérique, protection des données et défis éthiques de l'intelligence artificielle",
  ],
  pressContact: {
    role: "Relations Presse & Secrétariat Général",
    email: "[EMAIL PROFESSIONNEL À FOURNIR]",
    phone: "[TÉLÉPHONE PROFESSIONNEL À FOURNIR]",
    availability: "Délai de réponse moyen sous 24 à 48 heures ouvrées.",
  }
};
