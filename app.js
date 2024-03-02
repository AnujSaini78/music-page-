const music = new Audio('Audios/1.mp3');
// music.play();
const songs = [
    {
        id: 1,
        songName: `IK TERA <br>
        <div class="subtitle">Maninder Buttar </div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 2,
        songName: `ISHQ DE FANNYAR <br>
        <div class="subtitle">alan walker</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 3,
        songName: `TUM MILE <br>
        <div class="subtitle">alan walker</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 4,
        songName: `ZALIMA<br>
        <div class="subtitle">alan walker</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 5,
        songName: `MAI HU SAATH TERE <br>
        <div class="subtitle">alan walker</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 6,
        songName: `MALANG SAJNA <br>
        <div class="subtitle">alan walker</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 7,
        songName: `MERA PYAAR TERA PYAAR <br>
        <div class="subtitle">alan walker</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 8,
        songName: `AQSHIKI<br>
        <div class="subtitle">alan walker</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 9,
        songName: `on my way <br>
        <div class="subtitle">alan walker</div>`,
        poster: "img/musicimage.jpg"
    }, {
        id: 10,
        songName: `on my way <br>
        <div class="subtitle">alan walker</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 11,
        songName: `on my way <br>
        <div class="subtitle">alan walker</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 12,
        songName: `on my way <br>
        <div class="subtitle">alan walker</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 13,
        songName: `SAWAN AAYA HAI <br>
        <div class="subtitimg/musicimage.jpgr</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 14,
        songName: `Duniyaa <br><div class="subtitle">aewee3444</div>`,
        poster: "img/musicimage.jpg",
    },
    {
        id: 15,
        songName: `CALIFORNIA LOVE <br><div class="subtitle">Cheema Y | Gur Sidhu | Punjabi Song 2023</div>`,
        poster: "img/musicimage.jpg",
    },

]



Array.from(document.getElementsByClassName('songitem')).forEach(element => {

}); (element => {

}); ((e, i) => {
    e.getElementsByTagName('img')[0].scr = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterplay = document.getElementById('plaay');
let wave = document.getElementById('wave');
masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
}

// const makeAllBackground = () => {
//     Array.from(document.getElementsByClassName('songitem')).forEach((el) => {
//         el.computedStyleMap.background = 'rgb(105, 105, 105, .0)';
//     });
// }

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let down = document.getElementById('down');
let title2 = document.getElementById('title2');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `Audios/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        down.href = `Audios/${index}.mp3`;

        let songTitle = songs.filter((els) => {
            return els.id == index;
        });
        songTitle.forEach(elss => {
            let { songName } = elss;
            title2.innerHTML = songName;
            down.setAttribute('downaold', songName);

        });
        // makeAllBackground();
        // Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";

        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});

let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);
    let min1 = Math.floor(music_dur / 60);
    let sec3 = Math.floor(music_dur % 60);
    // console.log(min1);
    if (sec3 < 10) {
        sec3 = `0${sec3}`;
    }
    currentend.innerText = `${min1}:${sec3}`;
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentstart.innerText = `${min2}:${sec2}`;
    let progbar = parseInt((music_curr / music_dur) * 100);
    seek.value = progbar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;

});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0)  {
        // vol_icon.classList.remove('bi bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        // vol_icon.classList.remove('bi bi-volume-up-fill');
         vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50 ){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a /100;
    // vol_dot = `${vol_a}%`;
})

let back = document.getElementById('back');
let next = document.getElementById('next');
index = Array.from(document.getElementsByClassName('songitem')).length;
console.log(index);

back.addEventListener('click', () => {
    index -= 1;
    if(index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `Audios/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitle = songs.filter((els) => {
            return els.id == index;
        });
        songTitle.forEach(elss => {
            let { songName } = elss;
            title2.innerHTML = songName;

        });
        // makeAllBackground();
        // Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";

        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})
next.addEventListener('click', () => {
    index ++;
    if(index > Array.from(document.getElementsByClassName('songitem')).length) {
        index = 1;
    }
    music.src = `Audios/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    let songTitle = songs.filter((els) => {
        return els.id == index;
    });
    songTitle.forEach(elss => {
        let { songName } = elss;
        title2.innerHTML = songName;

    });
    // makeAllBackground();
    // Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";

    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});