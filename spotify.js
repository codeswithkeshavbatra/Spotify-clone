//Audio functon is use to add audio
let Gabroo=new Audio("https://raag.fm/files/mp3/128/Punjabi-Singles/2562503/Gabbroo%20-%20(Raag.Fm).mp3");
let Oye=new Audio("https://mp3fix.in/files/download/id/3086")
let SurmaKala=new Audio("https://cdnsongs.com/music/data/Single_Track/201904/Surma_Kaala/128/Surma_Kaala_1.mp3")
let Nakhere=new Audio("https://cdnsongs.com/music/data/Punjabi/201702/Jump_2_Bhangraaa/128/Nakhre.mp3");
let GitarSikhda=new Audio("https://cdnsongs.com/music/data/Single_Track/201712/Guitar_Sikhda/128/Guitar_Sikhda_1.mp3");
let NikleCurrent=new Audio("https://djpunjab.com.se/upload_file/414/415/580/Nikle_Currant_Jassi_Gill_Neha_Kakkar.mp3")
let laden=new Audio("https://cdnsongs.com/music/data/Punjabi/201409/Replay_Return_of_Melody/128/Laden.mp3");
let dilTutda=new Audio("https://cdnsongs.com/music/data/Single_Track/201706/Dill_Tutda/128/Dill_Tutda_1.mp3");
let dilTutdaplay=document.getElementById("dilTutda");
let Nakhereplay=document.getElementById("Nakhere");
let oyeplay=document.getElementById("Oye");
let NikleCurrentplay=document.getElementById("Current");
let gabbrooplay=document.getElementById("Gabbroo");
let SurmaKalaplay=document.getElementById("SurmaKala");
let GitarSikhdaplay=document.getElementById("Gitar");
let ladenplay=document.getElementById("Laden");
let play=document.getElementById("play");
let progress=document.getElementById("progress");
//GAbroo
gabbrooplay.addEventListener('click',function(){
        songPlayer(Gabroo,gabbrooplay);
})
    
//Oye Hoye Hoye
oyeplay.addEventListener('click',function(){
    songPlayer(Oye,oyeplay);
})
//SurmaKala
SurmaKalaplay.addEventListener('click',function(){
    songPlayer(SurmaKala,SurmaKalaplay);     
})
//Nakhre
Nakhereplay.addEventListener('click',function(){
    songPlayer(Nakhere,Nakhereplay);
})
//Gitar Sikhda
GitarSikhdaplay.addEventListener('click',function(){
        songPlayer(GitarSikhda,GitarSikhdaplay);
})
//Nikle Current
NikleCurrentplay.addEventListener('click',function(){
        songPlayer(NikleCurrent,NikleCurrentplay);
})
//Laden
ladenplay.addEventListener('click',function(){
    songPlayer(laden,ladenplay);
    })
//Dil Tutda
dilTutdaplay.addEventListener('click',function(){
    songPlayer(dilTutda,dilTutdaplay);
    })
function songPlayer(songAudio,songplay){
    document.getElementById("progress").value="0";
    if(songAudio.paused || songAudio.currentTime<=0)
            {
                songAudio.play();
                play.classList.remove("fa-circle-play");
                play.classList.add("fa-circle-pause");
                songplay.classList.remove("fa-circle-play");
                songplay.classList.add("fa-circle-pause");
                //moving range
                setInterval(
                    function(){
                        let percentage=(songAudio.currentTime/songAudio.duration)*100;
                        progress.value=percentage;
                    },1000)

                progress.addEventListener("click",function(){
                    songAudio.currentTime=(progress.value*songAudio.duration)/100
                })
            }
            else{
                songAudio.pause();
                play.classList.remove("fa-circle-pause");
                play.classList.add("fa-circle-play");
                songplay.classList.add("fa-circle-play");
                songplay.classList.remove("fa-circle-pause");
            }
        }
