"use strict"; // Поддерживает только новые форматы и делает строгим режимом;

const musicPrefers = {
    count: 0,
    genre: [],
    singer: {},
    reliz: [],
    privat: true,
    qwastion: function()
        {
        while (musicPrefers.Count == null || isNaN(musicPrefers.Count) || musicPrefers.Count == "")
            musicPrefers.Count = +prompt("Сколько песен прослушал?", "");
        },
    anketa: function()
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
    },
    levelMusic: function()
    {
        if(musicPrefers.Count <= 5)
        console.log("Слушай радио");
        else
        {
            console.log("Молодец");
        }
    },
    checked: function()
    {
        if(hidden == false)
            console.log(musicPrefers);
    },
    reversePrivate: function()
    {
        if (musicPrefers.privat == false)
            musicPrefers.privat = true;
        else
            musicPrefers.privat = false;
    },
    youLoveGenre: function()
    {
        for(let i = 1; i <= 3; i++)
        {
            let genre;
            genre = prompt(`Твой любимый жанр ${i}`,"");
            if(genre == null || genre == "")
                i--;
            else
                musicPrefers.genre[i - 1] = genre.toLowerCase();
        }
        // musicPrefers.genre.pop();
         musicPrefers.genre.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
         })
    }
};
// checked(musicPrefers.privat);


