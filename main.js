let burger = document.getElementById("burger");
let navbarList = document.getElementById("navbarList");
console.log(burger);
console.log(navbarList);

burger.addEventListener("click", function(){
    burger.classList.toggle('active');
    navbarList.classList.toggle('navbar__list--active');
});

let audio = document.getElementById("audio");
let playPauseBtn = document.getElementById("playPauseBtn");
let count = 0;
console.log(audio);
console.log(playPauseBtn);
console.log(count);

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playPauseBtn.innerHTML = "<i class='bx bx-volume-full'></i>";
    } else {
        count = 0;
        audio.pause();
        playPauseBtn.innerHTML = "<i class='bx bx-volume-mute'></i>";
    };
};