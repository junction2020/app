import { stickers as stickerJson, brands, stickers } from "./data";

export function loadStickers() {
  let stickers = localStorage.getItem("stickers");
  if (stickers) {
    return JSON.parse(stickers);
  } else {
    localStorage.setItem("stickers", JSON.stringify([]));
    return [];
  }
}

function saveSticker(sticker) {
  let stickers = loadStickers();
  if (!stickers) {
    stickers = [];
  }
  stickers.push(sticker);
  localStorage.setItem("stickers", JSON.stringify(stickers));
}

function selectRandomBrand(id) {
  return brands[id];
}

export function generateNewSticker(id) {
  let new_id = Math.floor(Math.random() * 3);
  const newSticker = {
    id: new_id,
    brand: selectRandomBrand(new_id),
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
