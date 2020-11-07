import { stickers as stickerJson, brands } from "./data";

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

function selectRandomBrand() {
    return brands.slice(0, 4)[Math.floor(Math.random() * brands.length)];
}

function selectRandomImageUrl() {
    return stickerJson.slice(0, 4)[Math.floor(Math.random() * 4)].sticker_image;
}

export function generateNewSticker(id) {
    console.log("Creating new sticker for id:", id);
    const newSticker = {
        id,
        img_url: selectRandomImageUrl(),
        brand: selectRandomBrand()
    };
    saveSticker(newSticker);
}
