import { Prestation, SignatureFood, Review, ProcessStep, GalleryItem } from './types';

export const PRESTATIONS: Prestation[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    subtitle: 'L\'excellence du grand jour',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    tags: ['Mariages', 'Décoration', 'Cocktail', 'Buffet d\'Honneur', 'Service d\'Exception'],
    description: 'Une scénographie sur-mesure et une haute gastronomie pour célébrer votre union. De la vaisselle en porcelaine fine aux créations florales subtiles, chaque détail est orchestré pour graver des souvenirs impérissables dans le cœur de vos convives.',
    details: [
      'Orchestration complète et maître d\'hôtel dédié',
      'Art de la table haut de gamme et verrerie en cristal',
      'Ateliers culinaires éphémères devant les invités',
      'Scénographie florale et design sur-mesure'
    ],
    quote: '« Pour le plus beau jour de votre vie, nous ne laissons aucune place à l\'improvisation. Seule l\'excellence demeure. »'
  },
  {
    id: 'corporate',
    title: 'Corporate',
    subtitle: 'La signature de vos succès',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
    tags: ['Séminaires', 'Conférences', 'Lancement de Produit', 'Gala'],
    description: 'Affirmez l\'identité de votre marque à travers un univers gustatif et esthétique d\'exception. Nous concevons des réceptions hautement professionnelles qui incarnent vos valeurs et éblouissent vos partenaires et clients d\'affaires.',
    details: [
      'Buffets dinatoires graphiques et modernes',
      'Pauses café haut de gamme avec barista dédié',
      'Cocktails signature aux couleurs de votre marque',
      'Service discret et d\'une ponctualité rigoureuse'
    ],
    quote: '« Un lancement de produit ou un gala corporatif est le reflet de votre marque. Nous lui offrons un écrin gastronomique digne de vos ambitions. »'
  },
  {
    id: 'brunch',
    title: 'Brunchs',
    subtitle: 'La douceur des lendemains raffinés',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1600&auto=format&fit=crop',
    tags: ['Buffet Signature', 'Viennoiseries Maison', 'Mocktails Créatifs', 'Jus Frais Pressés'],
    description: 'Inspiré des plus grands palaces parisiens, nos brunchs réinventent le réveil dominical. Une abondance de douceurs dorées, d\'assiettes fraîches ciselées et de boissons d\'exception dans une atmosphère solaire et décontractée.',
    details: [
      'Corbeilles de viennoiseries pur beurre AOP',
      'Bar à jus pressés à froid minute et mocktails floraux',
      'Assiettes salées de saison aux herbes rares',
      'Kiosque à crêpes et gaufres gastronomiques en direct'
    ],
    quote: '« Un moment suspendu où le temps s\'arrête pour laisser place à la gourmandise la plus pure, entouré de ceux qui vous sont chers. »'
  },
  {
    id: 'anniversaires',
    title: 'Anniversaires & Célébrations',
    subtitle: 'L\'intimité des instants précieux',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1600&auto=format&fit=crop',
    tags: ['Événements Privés', 'Baby Showers', 'Baptêmes', 'Anniversaires d\'Exception'],
    description: 'Célébrez les étapes de la vie dans le raffinement absolu de votre demeure ou d\'un lieu privatisé. Une attention sur-mesure portée à vos envies pour transformer chaque anniversaire en un chapitre mémorable de votre histoire.',
    details: [
      'Gâteaux d\'anniversaire haute couture personnalisés',
      'Décorations thématiques élégantes et poétiques',
      'Cocktails et bouchées adaptés aux petits et grands',
      'Formules clé en main de l\'installation au débarrassage'
    ],
    quote: '« Les souvenirs de famille se construisent autour d\'une table généreuse. Laissez-nous magnifier ces moments d\'une finesse incomparable. »'
  }
];

export const SIGNATURE_FOODS: SignatureFood[] = [
  {
    id: 'burgers',
    title: 'Mini Burgers',
    frenchTitle: 'Mini Burgers Gastronomiques',
    category: 'Salé',
    image: '/assets/burger.jpg',
    price: 300,
    description: 'Brioche dorée maison au sésame, bœuf Black Angus, cheddar affiné, compotée d\'oignons caramélisés et notre sauce secrète à la truffe noire.',
    highlight: 'L\'incontournable street food réinventé sous un angle d\'une rare élégance culinaire.'
  },
  {
    id: 'crepes',
    title: 'Crêpes gourmandes',
    frenchTitle: 'Les Crêpes de la Maison',
    category: 'Sucré',
    image: '/assets/crepes.jpeg',
    price: 250,
    description: 'Crêpes d\'une finesse extrême aromatisées à la fleur d\'oranger, accompagnées de caramel au beurre salé maison et éclats de noisettes du Piémont.',
    highlight: 'Le secret de notre histoire, sublimé par des ingrédients de prestige.'
  },
  {
    id: 'mocktails',
    title: 'Mocktails',
    frenchTitle: 'Élixirs de Fleurs & Fruits',
    category: 'Boisson',
    image: '/assets/mocktails.jpg',
    price: 200,
    description: 'Infusion de rose et de baies sauvages, eau de concombre bio, nectar de litchi et feuille d\'or 24 carats scintillante.',
    highlight: 'Une expérience de mixologie sans alcool, aussi spectaculaire que raffinée.'
  },
  {
    id: 'jus',
    title: 'Jus frais',
    frenchTitle: 'Nectars Pressés à Froid',
    category: 'Boisson',
    image: '/assets/jus.jpg',
    price: 150,
    description: 'Combinaisons botaniques pures : pomme verte, céleri, gingembre bio et touche de citron vert pressé à froid pour préserver chaque nutriment.',
    highlight: 'Une explosion de vitalité naturelle présentée dans des flacons en verre élégants.'
  },
  {
    id: 'breakfast',
    title: 'Petit déjeuner',
    frenchTitle: 'Le Réveil Parisien',
    category: 'Brunch',
    image: '/assets/petit-dejeuner.jpg',
    price: 3500,
    description: 'Assortiment de viennoiseries miniatures croustillantes, beurre de baratte demi-sel et confitures artisanales cuites au chaudron.',
    highlight: 'La tradition des plus grands palaces français livrée directement chez vous.'
  },
  {
    id: 'quiches',
    title: 'Quiches',
    frenchTitle: 'Quichettes aux Herbes Fines',
    category: 'Salé',
    image: '/assets/quiches.jpg',
    price: 400,
    description: 'Pâte brisée croustillante pur beurre, appareil crémeux au parmesan de 24 mois d\'affinage, asperges sauvages de saison et jeunes pousses.',
    highlight: 'Une texture d\'une légèreté aérienne, cuite à la perfection dorée.'
  },
  {
    id: 'pastels',
    title: 'Pastels',
    frenchTitle: 'Pastels Dorés d\'Orient',
    category: 'Salé',
    image: '/assets/pastels.jpg',
    price: 200,
    description: 'Feuilleté ultra-croustillant garni d\'un effiloché de volaille aux épices douces d\'Orient et coriandre fraîche ciselée.',
    highlight: 'Une escale ensoleillée et croustillante qui éveille instantanément les sens.'
  },
  {
    id: 'hotdogs',
    title: 'Mini Hot Dogs',
    frenchTitle: 'Le Hot-Dog Chic',
    category: 'Salé',
    image: '/assets/hot-dog.jpg',
    price: 350,
    description: 'Brioche moelleuse aérienne, saucisse artisanale de veau, moutarde douce au miel de fleurs de lavande et oignons frits croquants.',
    highlight: 'La gourmandise régressive d\'une fête foraine réinterprétée avec chic.'
  },
  {
    id: 'pizza',
    title: 'Mini Pizza',
    frenchTitle: 'Pizzettas à la Truffe d\'Été',
    category: 'Salé',
    image: '/assets/mini-pizza.jpg',
    price: 350,
    description: 'Pâte artisanale maturée 72 heures, fine crème de truffe blanche d\'Alba, burrata crémeuse crémeuse et roquette sauvage fleurie.',
    highlight: 'Une fine bouchée d\'Italie, d\'une intensité gustative inoubliable.'
  },
  {
    id: 'verrines-salees',
    title: 'Verrines salées',
    frenchTitle: 'L\'Orfèvrerie Salée',
    category: 'Salé',
    image: '/assets/verrines-sales.jpg',
    price: 400,
    description: 'Superposition graphique d\'avocat crémeux, tartare de saumon sauvage fumé de Norvège au pamplemousse et perles d\'algues.',
    highlight: 'Un joyau de fraîcheur et de couleurs servi dans un verre à facettes d\'orfèvre.'
  },
  {
    id: 'verrines-sucrees',
    title: 'Verrines sucrées',
    frenchTitle: 'Les Trésors de Verre',
    category: 'Sucré',
    image: '/assets/verrines-sucrees.jpg',
    price: 400,
    description: 'Panna cotta onctueuse à la gousse de vanille Bourbon de Madagascar, coulis de framboises sauvages et brisures de meringues à l\'or.',
    highlight: 'Une douceur aérienne, touche finale de vos plus beaux banquets.'
  },
  {
    id: 'boxes',
    title: 'Food Boxes',
    frenchTitle: 'Les Écrins de la Maison',
    category: 'Prestige',
    image: '/assets/boxes.jpeg',
    price: 3500,
    description: 'Une sélection de 24 pièces salées et sucrées d\'exception présentées dans un coffret vert sauge et or, prêtes à être partagées.',
    highlight: 'L\'expérience gastronomique de la Maison Drey condensée dans un écrin de luxe.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    src: '/assets/gallery1.jpg',
    type: 'image',
    size: 'tall',
    caption: 'L\'art du détail floral lors d\'une union d\'exception.'
  },
  {
    id: 'gal-2',
    src: '/assets/gallery2.jpg',
    type: 'image',
    size: 'wide',
    caption: 'Notre table de desserts signature sous une pluie de lumières dorées.'
  },
  {
    id: 'gal-3',
    src: '/assets/gallery3.jpg',
    type: 'image',
    size: 'large',
    caption: 'L\'élégance des invités portant un toast à la Maison.'
  },
  {
    id: 'gal-4',
    src: '/assets/gallery4.jpg',
    type: 'image',
    size: 'small',
    caption: 'Service impeccable assuré par nos maîtres d\'hôtel.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Camara Mariam ',
    role: 'Mariage au Château d\'Angré',
    text: '« Faire appel à la Maison Drey fut la meilleure décision de notre mariage. Tout a été d\'un raffinement inouï et d\'une finesse incomparable. Nos invités en parlent encore comme d\'une expérience hors du temps. »',
    rating: 5,
    image: '/assets/review1.jpg'
  },
  {
    id: 'rev-2',
    author: 'Keran Youssouf',
    role: 'Anniversaire d\'enfant à Cocody',
    text: '« Un événement mémorable et une cuisine exceptionnelle. La Maison Drey a su transformer la journée d\'anniversaire de notre fils en un véritable moment de bonheur. »',
    rating: 5,
    image: '/assets/review2.jpg'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    num: '01',
    title: 'Réserver l\'instant',
    description: 'Prenez contact avec notre conseiller d\'exception pour nous confier la date et le lieu de votre événement.'
  },
  {
    id: 'step-2',
    num: '02',
    title: 'Concevoir le menu',
    description: 'Élaborons ensemble un parcours culinaire et une sélection de signatures adaptés à l\'esprit de votre réception.'
  },
  {
    id: 'step-3',
    num: '03',
    title: 'Validation & Devis',
    description: 'Signature de notre accord et détails techniques finalisés par notre bureau d\'études événementielles.'
  },
  {
    id: 'step-4',
    num: '04',
    title: 'Préparation d\'art',
    description: 'Sélection rigoureuse des produits frais le matin même et confection minutieuse par nos artisans de prestige.'
  },
  {
    id: 'step-5',
    num: '05',
    title: 'Livraison sécurisée',
    description: 'Transport en liaison froide régulée dans nos véhicules privatifs pour garantir une fraîcheur et une hygiène absolues.'
  },
  {
    id: 'step-6',
    num: '06',
    title: 'Mise en scène',
    description: 'Installation soignée de la table d\'honneur et mise en avant de notre vaisselle et art de table signature.'
  },
  {
    id: 'step-7',
    num: '07',
    title: 'Votre Événement',
    description: 'Profitez sereinement de l\'instant présent aux côtés de vos convives, sublimés par l\'art de recevoir à la française.'
  }
];
