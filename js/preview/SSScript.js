let btns = document.querySelectorAll("button");

let deleteElem = (e) => {
    console.log(e.target);
}

btns.forEach(item => {
    item.addEventListener('click', deleteElem, {once:true})
});
    

let link = document.querySelector('a');

link.addEventListener('click',function(e){
    e.preventDefault();
    alert('Может не надо?');

})