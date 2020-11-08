import { stickers as stickerJson, brands, stickers } from "./data";

export function loadStickers() {
    let stickers = localStorage.getItem("stickers");
    if (stickers) {
        return JSON.parse(stickers);
    } else {
        localStorage.setItem("stickers", JSON.stringify([]));
        return []
    }
}

function saveSticker(sticker) {
    let stickers = loadStickers();
    if (!stickers) {
        stickers = []
    }
    stickers.push(sticker);
    localStorage.setItem("stickers", JSON.stringify(stickers));
}

function selectRandomBrand(id) {
    return brands.slice(0, 4)[id];
}

function selectRandomImageUrl() {
    return stickerJson.slice(0, 4)[Math.floor(Math.random() * 4)].sticker_image;
}

export function generateNewSticker(id) {
    console.log("Creating new sticker for id:", id);
    let new_id = Math.floor(Math.random() * 4);
    const newSticker = {
        id: new_id,
        img_url: selectRandomImageUrl(),
        brand: selectRandomBrand(new_id)
    };
    saveSticker(newSticker);
}

export function getAmountOfPages() {
    let amountOfStickers = loadStickers().length;
    return Math.ceil(amountOfStickers / 15);
}

export function getStickersByPage(pageIndex) {
    let stickers = loadStickers();
    let begin = pageIndex * 15; 
    let end = begin + 15;
    return stickers.slice(begin, end);
}