const music = new Audio('audio/1.mp3');
// const songs =[
//     {
//         id: 1,
//         songname:`MY Heart Will Go On <br>
//         <div class="subtitle"> Celine Dion</div>`,
//         poster:"img/heart.png",
//     }, 
//     {
//         id: 2,
//         songname:`People You Know<br>
//         <div class="subtitle">Selena Gomez</div>`,
//         poster:"img/people.png",
//     },
//     {
//         id: 3,
//         songname:`Aap Jaisa Koi<br>
//         <div class="subtitle">Altamash Faridi</div>`,
//         poster:"img/jheda.png",
//     }

// ]

// Array.from(document.getElementsByClassName('song_item')).forEach((e,i)=>{
   
//     e.getElementsByTagName('img')[0].src =songs[i].poster;
//     e.getElementsByTagName('h5')[0].innerHTML =songs[i].songname;
    

// });
// let masterPlay = document.getElementById('masterPlay');
// masterPlay.addEventListener('click',()=>{
//     if(music.paused || music.currentTime <= 0){
//         music.play();
//     }
//     else{

//     }
// }


// )
let index = 0;
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src =`audio/${index}.mp3`;
        music.play();
     

    })
    
    
})
