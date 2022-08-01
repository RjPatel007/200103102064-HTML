const music = new Audio('happy-i.mp3');


const songs = [
    {
        id:'1',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images 1.jpg"
    },
    {
        id:'2',
        songName:`Alan walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"Alan faded_Menu.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element,i)=>{
    element.getElementsByTagName('img').src = songs[i].poster;
    element.getElementsByTagName('h5').innerHTML = songs[i].songName;
})

