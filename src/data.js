import windmillJpg from "./assets/real_windmills.jpg";

export const brands = [
    { name: "Kariniemen" },
    { name: "HK" },
    { name: "Viamaailma" },
]

export const goals = [
    {
        title: "New Windmill",
        brand: brands[0],
        description: "We have a lot of wind and want to catch it, so we want to build a big windmill in our backyard.",
        progress: 0.11,
        img_url: windmillJpg
    },
    {
        title: "Chicken-tended Wheatfield",
        brand: brands[1],
        description: "We don't have much homegrown food ready. We suggest creating a wheatfield that is targeted towards and maintained by our own chicken population.",
        progress: 0.48,
        img_url: windmillJpg
    },
    {
        title: "Chicken Sauna",
        brand: brands[2],
        description: "The chickens here in Finland do not have many places to just put their legs up and relax. We would like to change this. This is why we want to build a brand new Chicken coop with a sauna theme, that provides ideal 90 degree sauna heating.",
        progress: 0.79,
        img_url: windmillJpg
    },
    {
        title: "Newer Windmill",
        brand: brands[0],
        description: "We have a lot of wind and want to catch it, so we want to build a big windmill in our backyard.",
        progress: 0.13,
        img_url: windmillJpg
    },
    {
        title: "Chickens",
        brand: brands[1],
        description: "There's an empty lot we are only paying the rent on. Help us populate this today!",
        progress: 0.34,
        img_url: windmillJpg
    },
]

export const cards = [
    {
        completed: true,
    },
    {
        completed: false,
    }
]

export const stickers = [
    { sticker_image: "https://sticker.place/stickers/monchotheunicorn/sticker_01.png", brand: brands[0] },
    { sticker_image: "https://sticker.place/stickers/monchotheunicorn/sticker_02.png", brand: brands[1] },
    { sticker_image: "https://sticker.place/stickers/monchotheunicorn/sticker_01.png", brand: brands[2] },
];
