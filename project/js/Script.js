'use strict';
document.addEventListener("DOMContentLoaded", () => {

    const movieDB = {
        movies: [
            "Яга",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };



let advertising = document.querySelectorAll(".promo__adv img");
let genre = document.querySelectorAll(".promo__genre");
let poster = document.querySelector(".promo__bg");
let list = document.querySelector(".promo__interactive-list");
let btn = document.querySelector("button");
let input = document.querySelector(".adding__input");
let addForm = document.querySelector("form.add");
let chek = document.querySelector('[type = "checkbox"]');
const basket = document.querySelectorAll('.delete');



addForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    let newFilm;
    newFilm = input.value;
    let cheked = chek.checked;
    if (newFilm){
        if (newFilm.length > 21)
            newFilm = `${newFilm.slice(0, 21)}...`;
        if (cheked === true)
            console.log("Ваш любимый фильм");
        
        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
        sortFilm(movieDB.movies, list);
        addForm.reset();
    }});


let deleteAdv = (add) => {
    add.forEach(function(i){
        i.remove();
    });
}

function change(){
    genre[0].textContent = "Драма";
    poster.style.backgroundImage = "url('img/bg.jpg')";
}




function sortFilm(film, parent){
   
    parent.innerHTML = "";
    
    film.forEach(function(item, i){
        parent.innerHTML = parent.innerHTML + ` 
            <li class="promo__interactive-item">${i + 1} ${item}
                <div class="delete"></div>
            </li>
        `; 
    });
    
    document.querySelectorAll('.delete').forEach(function(item, i){
        item.addEventListener('click', () => {
            item.parentElement.remove();
            movieDB.movies.splice(i, 1);
            sortFilm(film, parent);
        })
        
    })
};




















deleteAdv(advertising);
change();
sortFilm(movieDB.movies, list);
});
