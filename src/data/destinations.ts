export type ItineraryStop = {
  day: string;
  title: string;
  description: string;
};

export type Destination = {
  slug: string;
  code: string; // 3-letter "airport code" style tag, part of the visual identity
  name: string;
  region: string;
  tagline: string;
  blurb: string;
  priceFrom: number;
  days: number;
  bestTime: string;
  tags: string[];
  image: string;
  gallery: string[];
  itinerary: ItineraryStop[];
  testimonial: {
    quote: string;
    author: string;
  };
};

export const destinations: Destination[] = [
  {
    slug: "kyoto-japan",
    code: "KYO",
    name: "Kyoto",
    region: "Japan",
    tagline: "Temples, tea houses, and quiet gardens",
    blurb:
      "Wooden machiya streets, moss gardens, and a thousand years of ceremony, all still very much in use.",
    priceFrom: 1450,
    days: 6,
    bestTime: "Late March or early November",
    tags: ["culture", "food", "walkable"],
    image: "https://picsum.photos/seed/kyoto-waypoint/1200/800",
    gallery: [
      "https://picsum.photos/seed/kyoto-waypoint-1/900/700",
      "https://picsum.photos/seed/kyoto-waypoint-2/900/700",
      "https://picsum.photos/seed/kyoto-waypoint-3/900/700",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive, settle into Gion",
        description:
          "Check into a machiya guesthouse and take an evening walk through the lantern-lit streets.",
      },
      {
        day: "Day 2",
        title: "Fushimi Inari at sunrise",
        description:
          "Beat the crowds up the vermilion torii gates, then spend the afternoon in Nishiki Market.",
      },
      {
        day: "Day 3",
        title: "Arashiyama bamboo grove",
        description:
          "Cycle out to the bamboo grove and Tenryu-ji temple gardens before the tour buses arrive.",
      },
    ],
    testimonial: {
      quote:
        "We planned three days and stayed for six. The city rewards slowing down.",
      author: "Priya M.",
    },
  },
  {
    slug: "lisbon-portugal",
    code: "LIS",
    name: "Lisbon",
    region: "Portugal",
    tagline: "Hills, tiles, and fado drifting from doorways",
    blurb:
      "A city built on seven hills, with pastel facades, yellow trams, and some of Europe's best seafood.",
    priceFrom: 890,
    days: 5,
    bestTime: "April to June",
    tags: ["coastal", "food", "budget-friendly"],
    image: "https://picsum.photos/seed/lisbon-waypoint/1200/800",
    gallery: [
      "https://picsum.photos/seed/lisbon-waypoint-1/900/700",
      "https://picsum.photos/seed/lisbon-waypoint-2/900/700",
      "https://picsum.photos/seed/lisbon-waypoint-3/900/700",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Alfama on foot",
        description:
          "Get lost in the oldest district's alleys, then catch a fado performance after dinner.",
      },
      {
        day: "Day 2",
        title: "Belem's monasteries",
        description:
          "Tour the Jeronimos Monastery and stop for pasteis de nata still warm from the oven.",
      },
      {
        day: "Day 3",
        title: "Day trip to Sintra",
        description:
          "Take the train out to the fairy-tale palaces perched above the coastline.",
      },
    ],
    testimonial: {
      quote: "Every meal was better than the last, and nothing felt rushed.",
      author: "Daniel O.",
    },
  },
  {
    slug: "cape-town-south-africa",
    code: "CPT",
    name: "Cape Town",
    region: "South Africa",
    tagline: "Table Mountain on one side, ocean on the other",
    blurb:
      "Vineyards, penguin colonies, and a mountain that changes color every hour you look at it.",
    priceFrom: 1290,
    days: 7,
    bestTime: "February to April",
    tags: ["nature", "adventure", "wine"],
    image: "https://picsum.photos/seed/capetown-waypoint/1200/800",
    gallery: [
      "https://picsum.photos/seed/capetown-waypoint-1/900/700",
      "https://picsum.photos/seed/capetown-waypoint-2/900/700",
      "https://picsum.photos/seed/capetown-waypoint-3/900/700",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Table Mountain cable car",
        description:
          "Ride up early for clear views, then wander the Company's Garden in the afternoon.",
      },
      {
        day: "Day 2",
        title: "Cape Peninsula drive",
        description:
          "Chapman's Peak, Boulders Beach penguins, and the Cape of Good Hope in one long, scenic day.",
      },
      {
        day: "Day 3",
        title: "Stellenbosch wine country",
        description:
          "Tastings at three family-run estates, with lunch on a vineyard terrace.",
      },
    ],
    testimonial: {
      quote: "The most dramatic scenery I've seen from a rental car window.",
      author: "Aisha K.",
    },
  },
  {
    slug: "oaxaca-mexico",
    code: "OAX",
    name: "Oaxaca",
    region: "Mexico",
    tagline: "Mezcal, mole, and markets that spill into the street",
    blurb:
      "Mexico's culinary capital, with colonial courtyards, seven kinds of mole, and weavers still using backstrap looms.",
    priceFrom: 780,
    days: 5,
    bestTime: "October to April",
    tags: ["food", "culture", "budget-friendly"],
    image: "https://picsum.photos/seed/oaxaca-waypoint/1200/800",
    gallery: [
      "https://picsum.photos/seed/oaxaca-waypoint-1/900/700",
      "https://picsum.photos/seed/oaxaca-waypoint-2/900/700",
      "https://picsum.photos/seed/oaxaca-waypoint-3/900/700",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Zocalo and market crawl",
        description:
          "Start at Mercado Benito Juarez, then work through tlayudas and mezcal tastings by evening.",
      },
      {
        day: "Day 2",
        title: "Monte Alban ruins",
        description:
          "Explore the Zapotec ruins on the hilltop before the midday heat sets in.",
      },
      {
        day: "Day 3",
        title: "Teotitlan del Valle weaving village",
        description:
          "Watch natural-dye textiles being made by hand, and pick up a rug straight from the loom.",
      },
    ],
    testimonial: {
      quote: "I've never eaten this well on a trip, anywhere, ever.",
      author: "Marcus T.",
    },
  },
  {
    slug: "queenstown-new-zealand",
    code: "ZQN",
    name: "Queenstown",
    region: "New Zealand",
    tagline: "Adrenaline by day, lake views by night",
    blurb:
      "The self-proclaimed adventure capital, ringed by the Remarkables and sitting on a glacial lake.",
    priceFrom: 1690,
    days: 8,
    bestTime: "December to February",
    tags: ["adventure", "nature", "hiking"],
    image: "https://picsum.photos/seed/queenstown-waypoint/1200/800",
    gallery: [
      "https://picsum.photos/seed/queenstown-waypoint-1/900/700",
      "https://picsum.photos/seed/queenstown-waypoint-2/900/700",
      "https://picsum.photos/seed/queenstown-waypoint-3/900/700",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Skyline Gondola and luge",
        description:
          "Get your bearings from above the lake, then a low-key first day before the big adventures start.",
      },
      {
        day: "Day 2",
        title: "Milford Sound day trip",
        description:
          "A long but unforgettable drive through Fiordland, ending with a boat cruise past waterfalls.",
      },
      {
        day: "Day 3",
        title: "Bungy, jet boat, or both",
        description:
          "Home of the original commercial bungy jump — go big, or hike the Ben Lomond track instead.",
      },
    ],
    testimonial: {
      quote: "Jumped off a bridge on day one and it only got better from there.",
      author: "Sam R.",
    },
  },
  {
    slug: "marrakech-morocco",
    code: "RAK",
    name: "Marrakech",
    region: "Morocco",
    tagline: "Souks, spice, and riads built around silence",
    blurb:
      "A city of contrasts — chaotic medina squares giving way to riad courtyards built entirely around quiet.",
    priceFrom: 720,
    days: 5,
    bestTime: "March to May",
    tags: ["culture", "budget-friendly", "food"],
    image: "https://picsum.photos/seed/marrakech-waypoint/1200/800",
    gallery: [
      "https://picsum.photos/seed/marrakech-waypoint-1/900/700",
      "https://picsum.photos/seed/marrakech-waypoint-2/900/700",
      "https://picsum.photos/seed/marrakech-waypoint-3/900/700",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Jemaa el-Fnaa by night",
        description:
          "Ease in with mint tea at a rooftop cafe overlooking the square as the food stalls light up.",
      },
      {
        day: "Day 2",
        title: "Medina souks",
        description:
          "Get lost on purpose among the leather, lantern, and spice stalls of the old city.",
      },
      {
        day: "Day 3",
        title: "Atlas Mountains day trip",
        description:
          "A short drive out to Berber villages and trailheads in the foothills.",
      },
    ],
    testimonial: {
      quote: "Our riad was the quietest place I've ever stayed in a city center.",
      author: "Elena V.",
    },
  },
    {
    slug: "jaipur-india",
    code: "JAI",
    name: "Jaipur",
    region: "India",
    tagline: "Pink sandstone forts and a city planned like a mandala",
    blurb:
      "India's Pink City, laid out in the 18th century with startling precision — palaces, stepwells, and bazaars still following the same grid, all in the same warm terracotta stone.",
    priceFrom: 590,
    days: 4,
    bestTime: "October to March",
    tags: ["culture", "budget-friendly", "walkable"],
    image: "https://picsum.photos/seed/jaipur-waypoint/1200/800",
    gallery: [
      "https://picsum.photos/seed/jaipur-waypoint-1/900/700",
      "https://picsum.photos/seed/jaipur-waypoint-2/900/700",
      "https://picsum.photos/seed/jaipur-waypoint-3/900/700",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Amber Fort at sunrise",
        description:
          "Beat the heat and the crowds at the hilltop fort, then explore the City Palace complex in the afternoon.",
      },
      {
        day: "Day 2",
        title: "Old city bazaars",
        description:
          "Wander Johari Bazaar and Bapu Bazaar for block-printed textiles and gemstones, pausing at Hawa Mahal along the way.",
      },
      {
        day: "Day 3",
        title: "Jantar Mantar and stepwells",
        description:
          "Tour the 18th-century astronomical observatory, then visit the geometric stepwell at Panna Meena ka Kund.",
      },
    ],
    testimonial: {
      quote:
        "Every wall in the old city is the same shade of pink — it stops feeling like a coincidence and starts feeling like a decision.",
      author: "Kabir S.",
    },
  },
  {
    slug: "pune-india",
    code: "PNQ",
    name: "Pune",
    region: "India",
    tagline: "Deccan hill forts and a college town that never quite grew up",
    blurb:
      "A Maratha capital turned university city — trekkable basalt forts on the outskirts, Peshwa-era wadas downtown, and a cafe culture built by students who stayed.",
    priceFrom: 540,
    days: 4,
    bestTime: "November to February",
    tags: ["culture", "budget-friendly", "hiking"],
    image: "https://picsum.photos/seed/pune-waypoint/1200/800",
    gallery: [
      "https://picsum.photos/seed/pune-waypoint-1/900/700",
      "https://picsum.photos/seed/pune-waypoint-2/900/700",
      "https://picsum.photos/seed/pune-waypoint-3/900/700",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Shaniwar Wada and the old peths",
        description:
          "Start at the Peshwa fortress ruins, then walk the lanes of Tulshibaug and Laxmi Road for brass, saris, and street food.",
      },
      {
        day: "Day 2",
        title: "Sinhagad Fort trek",
        description:
          "An early climb up the old stone steps for valley views, rewarded with pithla bhakri and jaggery tea at the top.",
      },
      {
        day: "Day 3",
        title: "Aga Khan Palace and Koregaon Park",
        description:
          "Tour the Italianate palace where Gandhi was interned, then spend the evening in the city's leafiest cafe district.",
      },
    ],
    testimonial: {
      quote:
        "You come for the forts and leave having spent most of your time in a cafe arguing about them.",
      author: "Nikhil D.",
    },
  },
  {
    slug: "delhi-india",
    code: "DEL",
    name: "Delhi",
    region: "India",
    tagline: "Mughal monuments and a street food scene that never sleeps",
    blurb:
      "Layers of empire stacked on top of each other — Mughal tombs, colonial boulevards, and a walled old city where the smell of frying parathas never quite fades.",
    priceFrom: 610,
    days: 4,
    bestTime: "October to March",
    tags: ["culture", "food", "walkable"],
    image: "https://picsum.photos/seed/delhi-waypoint/1200/800",
    gallery: [
      "https://picsum.photos/seed/delhi-waypoint-1/900/700",
      "https://picsum.photos/seed/delhi-waypoint-2/900/700",
      "https://picsum.photos/seed/delhi-waypoint-3/900/700",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Humayun's Tomb and Lodhi Gardens",
        description:
          "Start at the Mughal tomb that inspired the Taj Mahal, then wind down among the ruins scattered through Lodhi Gardens.",
      },
      {
        day: "Day 2",
        title: "Old Delhi on foot",
        description:
          "Explore Chandni Chowk's lanes, climb Jama Masjid's minaret, and eat your way through the paratha and kebab stalls nearby.",
      },
      {
        day: "Day 3",
        title: "Qutub Minar and Hauz Khas Village",
        description:
          "Tour the 12th-century minaret complex, then spend the evening among the boutiques and rooftop cafes of Hauz Khas.",
      },
    ],
    testimonial: {
      quote:
        "Every neighborhood feels like a different century — and somehow they're all a ten-minute drive apart.",
      author: "Meera J.",
    },
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
//Add Mumbai as a new destination
