"use strict"; // Поддерживает только новые форматы и делает строгим режимом;
let musicTrec;

musicTrec = +prompt("Сколько песен прослушал?", "");

const musicPrefers = {
    genre: [],
    singer: {},
    reliz: [],
    privat: true
};

function qwastion()
{
    while (musicTrec == null || isNaN(musicTrec) || musicTrec == "")
        musicTrec = +prompt("Сколько песен прослушал?", "");
}

function anketa()
{
    for (let i = 0; i < 2; i++)
    {
        let a = prompt("Твой любимый исполнитель", "");
        let b = prompt("Его лучшая песня", "");
        if (a != null && b != null && a !='' && b != '' && a.length < 50 && b.length < 50)
        {
            musicPrefers.singer[a] = b;
            console.log("ok");
        }   
        else
        {
            i--;
            console.log("error");
        }
    }
}

function levelMusic()
{
    if(musicTrec <= 5)
    console.log("Слушай радио");
    else
    {
        console.log("Молодец");
    }
}

function checked(hidden)
{
    if(hidden == false)
        console.log(musicPrefers);
}


// qwastion();
// anketa();
levelMusic();
checked(musicPrefers.privat);