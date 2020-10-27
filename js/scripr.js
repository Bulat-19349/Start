"use strict"; // Поддерживает только новые форматы и делает строгим режимом;
const musicTrec = prompt("Какой жанр предпочитаешь?", "");
let a = prompt("Твой любимый исполнитель", "");
let b = prompt("Его лучшая песня", "");
let d = prompt("Твой любимый исполнитель", "");
let c = prompt("Его лучшая песня", "");
let k = +prompt("Год написания", "");

const musicPrefers = {
    genre: musicTrec,
    singer: {},
    reliz: []
};
musicPrefers.singer[a] = b;
musicPrefers.singer[d] = c;
musicPrefers.reliz = k;
console.log(musicPrefers);

