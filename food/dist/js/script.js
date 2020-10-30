document.addEventListener("DOMContentLoaded", () =>{
    let tabs = document.querySelectorAll(".tabheader__item");
    let content = document.querySelectorAll(".tabcontent");
    let tabsParent = document.querySelector(".tabheader__items");
    console.log(tabsParent);
    function hideTabContetnt(){
        content.forEach(item =>{
            item.style.display = "none"
        });
        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabsContent(i = 0){
        content[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active");
    }

    tabsParent.addEventListener('click', (e) =>{
        if (e.target && e.target.classList.contains("tabheader__item")){
            tabs.forEach((item, i) => {
                if (e.target == item)
                {
                    hideTabContetnt();
                    showTabsContent(i);
                }
            })
        }
    })



    hideTabContetnt();
    showTabsContent();


})