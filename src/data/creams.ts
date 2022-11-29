import { ICream } from "../models";

export const creams: ICream[] = [
  {
    id: 1,
    title: "LANCÔME",
    price: 164.00,
    description:
      "Powered by a unique blend of potent actives: millions of pre- & probiotic fractions, moisture barrier-strengthening triple ceramides and hyaluronic acid. A natural origin formula by Lancome: 94% natural origin and 92% renewable ingredients, concentrated in a light breathable yet enveloping texture that seals in actives & moisture.",
    category: "moisturisers",
    image: "https://www.davidjones.com/productimages/medium/1/2450768_21881141_8176534.jpg",
    rating: { rate: 4.9, count: 120 },
  },
  {
    id: 2,
    title: "Yves Saint Laurent",
    price: 510.00,
    description:
      "An ultra-sensorial journey experienced thanks to an exceptional transformative texture for visible youth reignition in just 4 hours. Infused with the extraordinary Saffron Pistil Extract, rich in millions of subcellular fractions, Or Rouge La Creme Essentielle visibly reignites the skin's appearance. From the first application, skin is immediately more radiant and smoother. In just four hours, skin's youth is visibly reignited, as it becomes firmer and tighter. Day after day, signs of age are reduced and skin feels more comfortable.",
    category: "moisturisers",
    image: "https://www.davidjones.com/productimages/medium/1/2473373_21983867_8344498.jpg",
    rating: { rate: 4.5, count: 103 },
  },
];
