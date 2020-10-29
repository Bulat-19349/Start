/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

let advertising = document.querySelectorAll(".promo__adv img");
let genre = document.querySelectorAll(".promo__genre");
let poster = document.querySelector(".promo__bg");
let list = document.querySelector(".promo__interactive-list");
advertising.forEach(function(i){
    i.remove();
});

genre[0].textContent = "Драма";

poster.style.backgroundImage = "url('img/bg.jpg')";

const movieDB = {
    movies: [
        "Яга",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// list.forEach(function(item){
//     item.remove();
// });
list.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach(function(item, i){
    list.innerHTML = list.innerHTML + ` 
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>
    `; 
});
