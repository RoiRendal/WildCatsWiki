import tigerImg   from '../assets/cats/tiger.png';
import lionImg    from '../assets/cats/lion.png';
import jaguarIMG  from '../assets/cats/jaguar.png';
import leopardImg from '../assets/cats/leopard.png';

export const cats = [
  {
    id: "tiger",
    name: "Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    description: "The Bengal tiger is a population of the Panthera tigris tigris subspecies. It ranks among the biggest wild cats alive today.",
    image: tigerImg,
    stats: {
      lifespan: "10-15 years",
      speed: "56 km/h",
      weight: "230 kg",
      stripePattern: "Unique as fingerprints"
    },
    funFacts: [
        "Tigers love to swim and play in water.",
        "They are the largest cat species in the world."
    ]
  },
  {
    id: "lion",
    name: "African Lion",
    scientificName: "Panthera leo",
    description: "The lion is a large cat of the genus Panthera native to Africa and India. It uses a cooperative hunting strategy.",
    image: lionImg,
    stats: {
      lifespan: "10-14 years",
      speed: "74 km/h",
      weight: "206 kg",
      roarVolume: "114 decibels"
    },
    funFacts: [
        "A lion's roar can be heard from 5 miles away.",
        "Female lions do 90% of the hunting."
    ]
  },
  {
    id: "jaguar",
    name: "Jaguar",
    scientificName: "Panthera onca",
    description: "The jaguar is a large cat species and the only living member of the genus Panthera native to the Americas.",
    image: jaguarIMG,
    stats: {
      lifespan: "12-15 years",
      speed: "80 km/h",
      weight: "96 kg",
      biteForce: "1500 PSI"
    },
    funFacts: [
        "Jaguars hunt by biting directly through the skull.",
        "Unlike most cats, they love water."
    ]
  },
  {
    id: "leopard",
    name: "Leopard",
    scientificName: "Panthera pardus",
    description: "The leopard is one of the five extant species in the genus Panthera. It is known for its well-camouflaged fur and climbing ability.",
    image: leopardImg,
    stats: {
      lifespan: "12-17 years",
      speed: "58 km/h",
      weight: "51 kg",
      climbingAbility: "Excellent"
    }
  }
];
