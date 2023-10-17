
// popular song scroll btn
var songLeft=document.querySelector("#popular_song_left");
var songRight=document.querySelector("#popular_song_right");
var popSong=document.querySelector(".pop_song");
var helo_play=document.querySelector("#hello_play");
var artistLeft=document.querySelector("#popular_artits_left");
var artistRight=document.querySelector("#popular_artits_right");
var artits_item_img=document.querySelector(".item");
var wave = document.querySelector("#wave");
master_play = document.querySelector("#master_play");



var music = new Audio('audio/1.mp3');

helo_play.addEventListener("click",function(){
    if(music.paused || music.currentTime <=0)
    {
        music.play();
        wave.classList.add("active1");
        helo_play.classList.remove("bi-play-fill");
        helo_play.classList.add("bi-pause-fill");
    }
    else
    {
        music.pause();
        wave.classList.remove("active1");
        helo_play.classList.add("bi-play-fill");
        helo_play.classList.remove("bi-pause-fill");
    }
});


let index = 0;
let master_play_img = document.querySelector("#master_play_img");
let title = document.querySelector("#title");
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        master_play_img.src = `Image/${index}.jpg`;
        music.play();
        wave.classList.add("active1");
        helo_play.classList.remove("bi-play-fill");
        helo_play.classList.add("bi-pause-fill");

        let songTitle =songs.filter((e)=>e.id == index)[0].songName;
        title.innerHTML = songTitle;

        
    })
})

songLeft.addEventListener("click",function(){
    popSong.scrollLeft-=300;
});
songRight.addEventListener("click",function(){
    popSong.scrollLeft+=300;
});

// Artits scroll botton
artistLeft.addEventListener("click",function(){
    artits_item_img.scrollLeft-=300;
});
artistRight.addEventListener("click",function(){
    artits_item_img.scrollLeft+=300;
});

// music.play();

// Music List

const songs  = [{
    id:"1" ,
    songName: `On My Way <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "Image/1.jpg"
    },
    {
    id: '2',
    songName: `Alan Walker-Fade <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "Image/2.jpg"
    },
    {
    id: "3",
    songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
    poster: "Image/3.jpg"
    },
    {
    id: "4",
    songName: `Warriyo Mortals <br><div class="subtitle">Mortals</div>`,
    poster: "Image/4.jpg"
    },
    {
    id: "5",
    songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
    poster: "Image/5.jpg"
    },
    {
    id: "6",
    songName: `Electronic Music <br><div class="subtitle">Electro</div>`, 
    poster: "Image/6.jpg"
    },
    {
    id: "7",
    songName: `Alan Walker - Spectre <br><div class="subtitle">Alan Walker</div>`,
    poster: "Image/7.jpg"
    },
    {
    id: "8",
    songName: `Alan Walker - Alone <br><div class="subtitle">Alan Walker</div>`,
    poster: "Image/8.jpg"
    },
    {
    id: "9",
    songName: `Alan Walker - Alone <br><div class="subtitle">Alan Walker</div>`,
    poster: "Image/9.jpg"
    },
    {
    id: "10",
    songName: `Alan Walker - Alone <br><div class="subtitle">Alan Walker</div>`,
    poster: "Image/10.jpg"
    },
    {
    id: "11",
    songName: `Alan Walker - Alone <br><div class="subtitle">Alan Walker</div>`,
    poster: "Image/11.jpg"
    },
    {
    id: "12",
    songName: `Alan Walker - Alone <br><div class="subtitle">Alan Walkediv>`,
    poster: "Image/12.jpg"
    },
    {
    id: "13",
    songName: `Alan Walker - Alone <br><div class="subtitle">AlWalker</div>`,
    poster: "Image/13.jpg"
    },
    {
    id: "14",
    songName: `Alan Walker - Alone <br><div class="subtitle">AlWalker</div>`,
    poster: "Image/14.jpg"
    },
    {
    id: "9",
    songName: `Alan Walker - Alone <br><dclass="subtitle">Alan Walkerdiv>`,
    poster: "Image/9.jpg"
    },
    {
    id: "15",
    songName: `Alan Walker - Alone <br><dclass="subtitle">Alan Walkediv>`,
    poster: "Image/15.jpg"
    },
    {
    id: "16",
    songName: `Alan Walker - Alone <br><dclass="subtitle">AWalker</div>`,
    poster: "Image/16.jpg"
    },
    {
    id: "17",
    songName: `Alan Walker - Alone <br><dclass="subtitle">AWalker</div>`,
    poster: "Image/17.jpg"
    },
    {
    id: "18",
    songName: `Alan Walker - Alone <br><dclass="subtitle">AWalker</div>`,
    poster: "Image/18.jpg"
    },
    {
    id: "19",
    songName: `Alan Walker - Alone <br><dclass="subtitle">AWalker</div>`,
    poster: "Image/19.jpg"
    },
    {
    id: "20",
    songName: `Alan Walker - Alone <br><dclass="subtitle">AWalker</div>`,
    poster: "Image/20.jpg"
    },
]
Array.from(document.querySelectorAll('.songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})