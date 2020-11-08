import windmillJpg from "./assets/real_windmills.jpg";
import chickenjpg from "./assets/chicken-vector-illustration.png";
import wheatfield from "./assets/wheatfield.jpg";
import chickensauna from "./assets/sauna.jpg";
import parkinglot from "./assets/parkinglot.jpg";
import hkLogo from "./assets/hk-logo-small.png";
import kariniemenLogo from "./assets/kariniemen_logo_135px.png";
import viaLogo from "./assets/via-logo.png";
import manureJpg from "./assets/manure.jpeg";
import traceJpg from "./assets/livestock.jpg";
import solarbarn from "./assets/solarbarn.jpg";

export const brands = [
  { name: "Kariniemen", logo: kariniemenLogo, produce: ["chicken"] },
  { name: "HK", logo: hkLogo, produce: ["pork", "beef"] },
  { name: "Viamaailma", logo: viaLogo, produce: ["chicken", "pork", "beef"] },
];

export const goals = [
  {
    title: "New Windmill",
    brand: brands[1],
    description:
      "Wind energy is a sustainable  and scalable energy source that can deliver clean, reliable and secure electricity to the grid at reasonable costs. Our farms use more and more green energy, and by contributing to the construction of a new windmill in the Pylkönmäki  district we are hoping to accelerate this process.",
    progress: 0.11,
    img_url: windmillJpg,
  },
  {
    title: "Chicken-tended Wheatfield",
    brand: brands[0],
    description:
      "We don't have much homegrown food ready. We would like you to help us to create a wheatfield that is targeted towards and maintained by our own chicken population!",
    progress: 0.48,
    img_url: wheatfield,
  },
  {
    title: "Manure Management System",
    brand: brands[2],
    description:
      "The manure and waste produced by pigs and the way in which it is managed is a top environmental concern. Therefore, we strive to develop well-designed manure management system for our pigs, which utilizes vegetative windbreaks plant buffers or fan filters that minimize the movement of dust and odor.",
    progress: 0.79,
    img_url: manureJpg,
  },
  {
    title: "Improved Animal Tracebility",
    brand: brands[0],
    description:
      "We want our animals to be fully traceable from birth. Transparency in this aspect of animal background handling can make a difference in performing proper care for the farm animals, such as selecting the proper medication or treatment.",
    progress: 0.13,
    img_url: traceJpg,
  },
  {
    title: "Biosecurity on Our Farms",
    brand: brands[1],
    description:
      "Taking better preventative measures can minimise the risk of entry and spread of diseases on the farm. Our goal is to setup a regular check-up routine for our farms by certified animal virus and desease outbreak teams. Can we count on you to help us reach this goal?",
    progress: 0.34,
    img_url: parkinglot,
  },
  {
    title: "Solar-Powered Farms",
    brand: brands[2],
    description:
      "Solar-powered farms  are still seldomly seen, but the growing use of solar power for farming could soon give rise to a new type of farm –the one which could sustain itself for a much longer amount of time, and also contribute to the reduction of the fossil fuel usage!",
    progress: 0.54,
    img_url: solarbarn,
  },
];

export const cards = [
  {
    completed: true,
  },
  {
    completed: false,
  },
];

export const stickers = [
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[1],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[2],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
  {
    sticker_image: chickenjpg,
    brand: brands[0],
  },
];
