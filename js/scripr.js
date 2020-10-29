// "use strict"; // Поддерживает только новые форматы и делает строгим режимом;

// const musicPrefers = {
//     count: 0,
//     genre: [],
//     singer: {},
//     reliz: [],
//     privat: true,
//     qwastion: function()
//         {
//         while (musicPrefers.Count == null || isNaN(musicPrefers.Count) || musicPrefers.Count == "")
//             musicPrefers.Count = +prompt("Сколько песен прослушал?", "");
//         },
//     anketa: function()
//     {
//         for (let i = 0; i < 2; i++)
//         {
//             let a = prompt("Твой любимый исполнитель", "");
//             let b = prompt("Его лучшая песня", "");
//             if (a != null && b != null && a !='' && b != '' && a.length < 50 && b.length < 50)
//             {
//                 musicPrefers.singer[a] = b;
//                 console.log("ok");
//             }   
//             else
//             {
//                 i--;
//                 console.log("error");
//             }
//         }
//     },
//     levelMusic: function()
//     {
//         if(musicPrefers.Count <= 5)
//         console.log("Слушай радио");
//         else
//         {
//             console.log("Молодец");
//         }
//     },
//     checked: function()
//     {
//         if(hidden == false)
//             console.log(musicPrefers);
//     },
//     reversePrivate: function()
//     {
//         if (musicPrefers.privat == false)
//             musicPrefers.privat = true;
//         else
//             musicPrefers.privat = false;
//     },
//     youLoveGenre: function()
//     {
//         for(let i = 1; i <= 3; i++)
//         {
//             let genre;
//             genre = prompt(`Твой любимый жанр ${i}`,"");
//             if(genre == null || genre == "")
//                 i--;
//             else
//                 musicPrefers.genre[i - 1] = genre.toLowerCase();
//         }
//         // musicPrefers.genre.pop();
//          musicPrefers.genre.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//          })
//     }
// };
// // checked(musicPrefers.privat);

// let box = document.getElementById("box");
// console.log(box);

// let hearts = document.querySelectorAll('.heart');

// // hearts.forEach(item =>{
// //     console.log(item);
// // });
// hearts.forEach(function(item){
//     console.log(item);
// })
let box = document.getElementById("box");
let btns = document.getElementsByTagName("button");
let hearts = document.querySelectorAll(".heart");
let wrapper = document.querySelector(".wrapper");

let div = document.createElement('div');
div.classList.add('black');
//hearts[0].remove();
wrapper.prepend(div);
div.innerHTML = "<h1>Hello</h1>";
