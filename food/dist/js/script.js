document.addEventListener("DOMContentLoaded", () => {
    let tabs = document.querySelectorAll(".tabheader__item");
    let content = document.querySelectorAll(".tabcontent");
    let parentTabs = document.querySelector(".tabheader__items");
    console.log(1);
    function hideContent(){
        content.forEach(item => {
            item.style.display = "none";
        })
        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active")
        })
    }
    function showContent(i = 0){
        content[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active");
    }

    parentTabs.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains("tabheader__item")){
            tabs.forEach((item,i) => {
                if (e.target == item){
                    hideContent();
                    showContent(i);
                }
            })
        }
    })

//Timer

let deadline = '2020-12-1';

function getTime(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date());
    let days = Math.floor (t /(1000 * 60 * 60 * 24));
    let hours = Math.floor((t / (1000 * 60 *60)  % 24));
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let second = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'second': second
    };
}

function getZero(num){
    if (num >= 0 && num <= 9)
        return `0${num}`;
    else
        return num;
    
}

    function setClock(selector, endtime){
        let timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            second = timer.querySelector('#second'),
            timeInterval = setInterval(upDateClock, 1000);

            upDateClock();

            function upDateClock(){
                let t = getTime(endtime);
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.second);

                if (t.total <= 0){
                    clearInterval(timeInterval);
                }
            }

    } 
    setClock('.timer', deadline);

    // modal 
    let modalTrigger = document.querySelectorAll('[data-modal]');
        modal = document.querySelector('.modal');
        modalCloseBtn = document.querySelector('[data-close]');

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
            })
        })

        function closeModal(){
            modal.style.display = 'none';
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        modalCloseBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal)
                closeModal();
        })

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show'))
                closeModal();
        });






    hideContent();
    showContent();
})