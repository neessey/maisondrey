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
    price: 6000,
    description: 'Brioche dorée maison au sésame, bœuf Black Angus, cheddar affiné, compotée d\'oignons caramélisés et notre sauce secrète à la truffe noire.',
    highlight: 'L\'incontournable street food réinventé sous un angle d\'une rare élégance culinaire.'
  },
  {
    id: 'pizza',
    title: 'Mini Pizza',
    frenchTitle: 'Pizzettas Artisanales',
    category: 'Salé',
    image: '/assets/mini-pizza.jpg',
    price: 3500,
    description: 'Mini pizzas généreusement garnies et cuites sur une pâte légère et croustillante.',
    highlight: 'Un classique revisité pour ravir tous les invités.'
  },
  {
    id: 'quiches',
    title: 'Quiches',
    frenchTitle: 'Quichettes aux Herbes',
    category: 'Salé',
    image: '/assets/quiches.jpg',
    price: 5000,
    description: 'Pâte brisée croustillante et garniture fondante aux herbes fines.',
    highlight: 'Une bouchée gourmande au goût authentique.'
  },
  {
    id: 'hotdogs',
    title: 'Mini Hot Dogs',
    frenchTitle: 'Le Hot-Dog Chic',
    category: 'Salé',
    image: '/assets/hot-dog.jpg',
    price: 6000,
    description: 'Pain brioché, saucisse artisanale et garniture savoureuse.',
    highlight: 'La gourmandise dans un format miniature.'
  },
  {
    id: 'pastels',
    title: 'Pastels',
    frenchTitle: 'Pastels Poisson ou Viande',
    category: 'Salé',
    image: '/assets/pastels.jpg',
    price: 2000,
    description: 'Pastels croustillants garnis selon votre choix.',
    highlight: 'Un incontournable des réceptions.'
  },
  {
    id: 'ailerons',
    title: 'Ailerons de Poulet',
    frenchTitle: 'Ailerons Marinés',
    category: 'Salé',
    image: '/assets/ailerons-poulet.jpg',
    price: 4000,
    description: 'Ailerons marinés puis rôtis jusqu\'à obtenir une peau croustillante.',
    highlight: 'Parfaits pour les amateurs de saveurs généreuses.'
  },
  {
    id: 'wrap-poulet',
    title: 'Wraps au Poulet Pané',
    frenchTitle: 'Wraps Gourmands',
    category: 'Salé',
    image: '/assets/wrap-poulet.jpg',
    price: 8500,
    description: 'Wraps garnis de poulet pané croustillant et de légumes frais.',
    highlight: 'Une alliance parfaite entre fraîcheur et gourmandise.'
  },
  {
    id: 'wrap-jambon',
    title: 'Roulés de Wraps au Jambon',
    frenchTitle: 'Wraps Roulés',
    category: 'Salé',
    image: '/assets/wrap-jambon.png',
    price: 5000,
    description: 'Délicats roulés au jambon et fromage frais.',
    highlight: 'Élégants et faciles à déguster.'
  },
  {
    id: 'feuillete-saucisse',
    title: 'Roulés de Saucisses Feuilletées',
    frenchTitle: 'Feuilletés Dorés',
    category: 'Salé',
    image: '/assets/feuillete-saucisse.jpg',
    price: 5000,
    description: 'Pâte feuilletée pur beurre garnie de saucisses.',
    highlight: 'Le plaisir du croustillant à chaque bouchée.'
  },
  {
    id: 'mini-tacos-viande',
    title: 'Mini Tacos Viande',
    frenchTitle: 'Mini Tacos',
    category: 'Salé',
    image: '/assets/mini-tacos-viande.jpg',
    price: 7500,
    description: 'Mini tacos garnis de viande tendre et de sauce maison.',
    highlight: 'Un format idéal pour les événements.'
  },
  {
    id: 'mini-tacos-poulet',
    title: 'Mini Tacos Poulet',
    frenchTitle: 'Mini Tacos',
    category: 'Salé',
    image: '/assets/mini-tacos-poulet.jpg',
    price: 10000,
    description: 'Mini tacos au poulet savoureux et généreusement garnis.',
    highlight: 'Une création gourmande qui fait l\'unanimité.'
  },
  {
    id: 'nems',
    title: 'Nems',
    frenchTitle: 'Nems Croustillants',
    category: 'Salé',
    image: '/assets/nems.jpg',
    price: 4000,
    description: 'Nems dorés et croustillants accompagnés de leur sauce.',
    highlight: 'Une touche asiatique pour vos buffets.'
  },
  {
    id: 'brochette-poulet',
    title: 'Brochettes de Poulet',
    frenchTitle: 'Poulet Mariné',
    category: 'Salé',
    image: '/assets/brochette-poulet.jpg',
    price: 6000,
    description: 'Brochettes de poulet marinées et grillées.',
    highlight: 'Une valeur sûre pour toutes les occasions.'
  },
  {
    id: 'brochette-viande',
    title: 'Brochettes de Viande',
    frenchTitle: 'Viande Grillée',
    category: 'Salé',
    image: '/assets/brochette-viande.jpg',
    price: 6000,
    description: 'Brochettes de viande tendres et parfumées.',
    highlight: 'Une cuisson maîtrisée pour une saveur incomparable.'
  },
  {
    id: 'tacos-mexicain-viande',
    title: 'Tacos Mexicain Viande',
    frenchTitle: 'Saveurs Mexicaines',
    category: 'Salé',
    image: '/assets/tacos-mexicain-viande.jpg',
    price: 5000,
    description: 'Tacos garnis de viande assaisonnée aux épices mexicaines.',
    highlight: 'Une explosion de saveurs.'
  },
  {
    id: 'tacos-mexicain-poulet',
    title: 'Tacos Mexicain Poulet',
    frenchTitle: 'Saveurs Mexicaines',
    category: 'Salé',
    image: '/assets/tacos-mexicain-poulet.jpg',
    price: 6000,
    description: 'Tacos garnis de poulet mariné aux épices.',
    highlight: 'Une spécialité qui séduit à chaque dégustation.'
  },
    {
    id: 'navette-thon',
    title: 'Navette au Thon',
    frenchTitle: 'Navettes Garnies',
    category: 'Salé',
    image: '/assets/navette-thon.png',
    price: 5000,
    description: 'Petits pains moelleux garnis d\'une préparation onctueuse au thon.',
    highlight: 'Idéal pour les cocktails et buffets.'
  },
   {
    id: 'cake-nature-mini',
    title: 'Mini Cake Nature',
    frenchTitle: 'Mini Cake Maison',
    category: 'Sucré',
    image: '/assets/cake-nature-mini.jpg',
    price: 2500,
    description: 'Mini cakes moelleux préparés selon une recette artisanale.',
    highlight: 'Une douceur simple et authentique.'
  },
  {
    id: 'cake-marbre-mini',
    title: 'Mini Cake Marbré',
    frenchTitle: 'Mini Cake Marbré',
    category: 'Sucré',
    image: '/assets/cake-marbré-mini.jpg',
    price: 3000,
    description: 'Mini cakes marbrés au chocolat et à la vanille.',
    highlight: 'L\'équilibre parfait entre douceur et gourmandise.'
  },
  {
    id: 'cake-nature',
    title: 'Barre de Cake Nature',
    frenchTitle: 'Cake Maison',
    category: 'Sucré',
    image: '/assets/cake-nature.jpg',
    price: 2500,
    description: 'Cake nature généreux et moelleux.',
    highlight: 'Parfait pour accompagner vos boissons chaudes.'
  },
  {
    id: 'cake-marbre',
    title: 'Barre de Cake Marbré',
    frenchTitle: 'Cake Marbré',
    category: 'Sucré',
    image: '/assets/cake-marbré.jpg',
    price: 3000,
    description: 'Cake marbré au chocolat et à la vanille.',
    highlight: 'Une recette intemporelle appréciée de tous.'
  },
  {
    id: 'crepes-nutella',
    title: 'Crêpes Nutella',
    frenchTitle: 'Les Crêpes Gourmandes',
    category: 'Sucré',
    image: '/assets/crepe-nutella.jpeg',
    price: 4000,
    description: 'Crêpes fines garnies de Nutella.',
    highlight: 'Le plaisir des petits comme des grands.'
  },
  {
    id: 'crepes-nature',
    title: 'Crêpes Nature',
    frenchTitle: 'Les Crêpes Maison',
    category: 'Sucré',
    image: '/assets/crepes-nature.jpg',
    price: 2000,
    description: 'Crêpes maison légères et moelleuses.',
    highlight: 'À savourer selon vos envies.'
  },
  {
    id: 'sushi-crepe',
    title: 'Sushi Crêpe',
    frenchTitle: 'Création Originale',
    category: 'Sucré',
    image: '/assets/sushi-crepe.jpeg',
    price: 10000,
    description: 'Crêpes roulées et découpées façon sushi avec différentes garnitures.',
    highlight: 'Une présentation élégante et surprenante.'
  },
  {
    id: 'brownies',
    title: 'Brownies (12 pièces)',
    frenchTitle: 'Brownies Fondants',
    category: 'Sucré',
    image: '/assets/brownies.jpg',
    price: 5000,
    description: 'Brownies intensément chocolatés, moelleux à cœur.',
    highlight: 'Un incontournable pour les amateurs de chocolat.'
  },
  {
    id: 'verrine-oreo-mini',
    title: 'Mini Verrine Oreo',
    frenchTitle: 'Crème Oreo',
    category: 'Sucré',
    image: '/assets/verrine-oreo-mini.png',
    price: 5000,
    description: 'Crème onctueuse et biscuits Oreo émiettés.',
    highlight: 'Une douceur irrésistible.'
  },
  {
    id: 'verrine-nutella-mini',
    title: 'Mini Verrine Nutella',
    frenchTitle: 'Crème Nutella',
    category: 'Sucré',
    image: '/assets/verrine-nutella-mini.jpg',
    price: 5000,
    description: 'Crème légère au Nutella.',
    highlight: 'Une gourmandise chocolatée.'
  },
  {
    id: 'verrine-speculos-mini',
    title: 'Mini Verrine Spéculos',
    frenchTitle: 'Crème Spéculos',
    category: 'Sucré',
    image: '/assets/verrine-speculos-mini.png',
    price: 6000,
    description: 'Crème légère et biscuits spéculos.',
    highlight: 'Une saveur délicatement épicée.'
  },
  {
    id: 'verrine-tropical-mini',
    title: 'Mini Verrine Tropicale',
    frenchTitle: 'Fruits de Saison',
    category: 'Sucré',
    image: '/assets/verrine-tropicale-mini.jpg',
    price: 5000,
    description: 'Mélange de fruits frais de saison et crème légère.',
    highlight: 'Une note fruitée et rafraîchissante.'
  },
  {
    id: 'verrine-oreo',
    title: 'Grande Verrine Oreo',
    frenchTitle: 'Crème Oreo',
    category: 'Sucré',
    image: '/assets/verrine-oreo.png',
    price: 10000,
    description: 'Version généreuse de notre verrine Oreo.',
    highlight: 'Encore plus de gourmandise.'
  },
  {
    id: 'verrine-nutella',
    title: 'Grande Verrine Nutella',
    frenchTitle: 'Crème Nutella',
    category: 'Sucré',
    image: '/assets/verrine-nutella.jpg',
    price: 10000,
    description: 'Une grande verrine riche en saveurs chocolatées.',
    highlight: 'Pour les amateurs de Nutella.'
  },
  {
    id: 'verrine-speculos',
    title: 'Grande Verrine Spéculos',
    frenchTitle: 'Crème Spéculos',
    category: 'Sucré',
    image: '/assets/verrine-speculos.png',
    price: 12000,
    description: 'Grande verrine aux biscuits spéculos.',
    highlight: 'Une finition élégante pour vos réceptions.'
  },
  {
    id: 'verrine-tropicale',
    title: 'Grande Verrine Tropicale',
    frenchTitle: 'Fruits de Saison',
    category: 'Sucré',
    image: '/assets/verrine-tropicale.jpg',
    price: 5000,
    description: 'Grande verrine garnie de fruits frais de saison.',
    highlight: 'Fraîcheur et légèreté.'
  },
{
  id: 'bora-bora-mocktail',
  title: 'Bora Bora',
  frenchTitle: 'Bora Bora Sans Alcool',
  category: 'Boisson',
  image: '/assets/bora-bora.jpg',
  price: 2000,
  description: 'Un cocktail sans alcool aux saveurs fruitées et rafraîchissantes.',
  highlight: 'Une explosion de fraîcheur tropicale.'
},
{
  id: 'mojito-mocktail',
  title: 'Mojito',
  frenchTitle: 'Mojito Sans Alcool',
  category: 'Boisson',
  image: '/assets/mojito.jpg',
  price: 2000,
  description: 'Une version sans alcool du célèbre mojito, fraîche et légère.',
  highlight: 'Le goût du mojito sans alcool.'
},
{
  id: 'pina-colada-mocktail',
  title: 'Piña Colada',
  frenchTitle: 'Piña Colada Sans Alcool',
  category: 'Boisson',
  image: '/assets/pina-colada.png',
  price: 2000,
  description: 'Un mélange onctueux de fruits tropicaux sans alcool.',
  highlight: 'Une douceur exotique et crémeuse.'
},
{
  id: 'cocktail-by-dreyy-mocktail',
  title: 'Cocktail by Dreyy',
  frenchTitle: 'Création Signature Sans Alcool',
  category: 'Boisson',
  image: '/assets/cocktail-by-dreyy.png',
  price: 2000,
  description: 'Une création originale sans alcool imaginée par Dreyy.',
  highlight: 'Une signature unique et raffinée.'
},

{
  id: 'bora-bora-alcoolise',
  title: 'Bora Bora',
  frenchTitle: 'Bora Bora Signature',
  category: 'Alcoolisé',
  image: '/assets/bora-bora.jpg',
  price: 3000,
  description: 'Un cocktail tropical avec alcool aux notes fruitées.',
  highlight: 'Un équilibre parfait entre douceur et caractère.'
},
{
  id: 'mojito-alcoolise',
  title: 'Mojito',
  frenchTitle: 'Mojito Traditionnel',
  category: 'Alcoolisé',
  image: '/assets/mojito.jpg',
  price: 3000,
  description: 'Un mojito classique préparé avec des ingrédients frais.',
  highlight: 'Fraîcheur, menthe et élégance.'
},
{
  id: 'pina-colada-alcoolise',
  title: 'Piña Colada',
  frenchTitle: 'Piña Colada Signature',
  category: 'Alcoolisé',
  image: '/assets/pina-colada.png',
  price: 3000,
  description: 'Un cocktail tropical onctueux avec alcool.',
  highlight: 'Une invitation au voyage.'
},
{
  id: 'cocktail-by-dreyy-alcoolise',
  title: 'Cocktail by Dreyy',
  frenchTitle: 'Création Signature Dreyy',
  category: 'Alcoolisé',
  image: '/assets/cocktail-by-dreyy.png',
  price: 3000,
  description: 'Une création exclusive avec alcool signée Dreyy.',
  highlight: 'L’originalité d’une recette unique.'
},
  {
    id: 'jus-bissap',
    title: 'Jus De Bissap',
    frenchTitle: 'Jus Naturels',
    category: 'Boisson',
    image: '/assets/bissap.jpg',
    price: 500,
    description: 'Bissap floral et légèrement acidulé, préparé avec soin pour un goût authentique.',
    highlight: 'Une explosion de saveurs rouges et rafraîchissantes.'
  },
  {
    id: 'jus-tomy',
    title: 'Jus De Tomy',
    frenchTitle: 'Jus Naturels',
    category: 'Boisson',
    image: '/assets/tomy.jpg',
    price: 500,
    description: 'Un jus tropical et sucré qui rappelle les saveurs exotiques des îles.',
    highlight: 'Un voyage ensoleillé dans chaque gorgée.'
  },
  {
    id: 'jus-gingembre',
    title: 'Jus De Gingembre',
    frenchTitle: 'Jus Naturels',
    category: 'Boisson',
    image: '/assets/gingembre.jpg',
    price: 500,
    description: 'Gingembre frais mélangé à des fruits pour un équilibre piquant et tonique.',
    highlight: 'Un coup de fouet épicé pour réveiller les sens.'
  },
  {
    id: 'jus-citron',
    title: 'Jus De Citron',
    frenchTitle: 'Jus Naturels',
    category: 'Boisson',
    image: '/assets/citron.png',
    price: 500,
    description: 'Citron pressé à la perfection, doux et acidulé pour une grande fraîcheur.',
    highlight: 'Une sensation pétillante et acidulée.'
  },
  {
    id: 'breakfast',
    title: 'Petit Déjeuner',
    frenchTitle: 'Brunch Signature',
    category: 'Brunch',
    image: '/assets/petit-dejeuner.jpg',
    price: 3500,
    description: 'Assortiment de viennoiseries, boissons chaudes et gourmandises.',
    highlight: 'Commencez la journée avec élégance.'
  },
  {
    id: 'boxes',
    title: 'Food Boxes',
    frenchTitle: 'Les Écrins de la Maison',
    category: 'Forfait',
    image: '/assets/boxes.jpeg',
    price: 3500,
    description: 'Sélection de créations salées et sucrées présentées dans un coffret raffiné.',
    highlight: 'Le meilleur de La Maison Dreyy dans un seul coffret.'
  },
  {
  id: 'forfait-essentiel',
  title: 'Forfait Essentiel',
  frenchTitle: 'Buffet Signature • 30 Personnes',
  category: 'Forfait',
  image: '/assets/forfait-essentiel.jpg',
  price: 300000,
  description:
    'Un buffet complet pour 30 personnes comprenant 6 pièces apéritives salées au choix, 2 cocktails (alcoolisés ou non), 1 plat principal au choix, 2 accompagnements, le dressage complet du buffet ainsi que le matériel de présentation.',
  highlight:
    '30 personnes • 10 000 FCFA par personne'
},
{
  id: 'forfait-prestige',
  title: 'Forfait Prestige',
  frenchTitle: 'Buffet Signature • 50 Personnes',
  category: 'Forfait',
  image: '/assets/forfait-prestige.jpg',
  price: 475000,
  description:
    'Un buffet raffiné pour 50 personnes comprenant 7 pièces apéritives salées au choix, 2 cocktails (alcoolisés ou non), 1 plat principal au choix, 2 accompagnements, le dressage complet du buffet ainsi que le matériel de présentation.',
  highlight:
    '50 personnes • 9 500 FCFA par personne'
},
{
  id: 'forfait-signature',
  title: 'Forfait Signature',
  frenchTitle: 'Buffet Signature • 100 Personnes',
  category: 'Forfait',
  image: '/assets/forfait-signature.jpg',
  price: 900000,
  description:
    'Notre formule la plus complète pour 100 personnes comprenant 8 pièces apéritives salées au choix, 3 cocktails (alcoolisés ou non), 1 plat principal au choix, 2 accompagnements, le dressage complet du buffet ainsi que le matériel de présentation.',
  highlight:
    '100 personnes et plus • 9 000 FCFA par personne'
},
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
    role: 'Mariage',
    text: '« Faire appel à la Maison dreyy fut la meilleure décision de notre mariage. Tout a été d\'un raffinement inouï et d\'une finesse incomparable. Nos invités en parlent encore comme d\'une expérience hors du temps. »',
    rating: 5,
    image: '/assets/review1.jpg'
  },
  {
    id: 'rev-2',
    author: 'Keran Youssouf',
    role: 'Anniversaire',
    text: '« Un événement mémorable et une cuisine exceptionnelle. La Maison dreyy a su transformer la journée d\'anniversaire de notre fils en un véritable moment de bonheur. »',
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
