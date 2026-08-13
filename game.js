"use strict";

const music=document.getElementById("music");
const text=document.getElementById("text");
const next=document.getElementById("next");
const choices=document.getElementById("choices");
const speaker=document.getElementById("speaker");

const VOLUME_KEY="mjh_volume";
const TIME_KEY="mjh_music_time";
const SAVE_KEY="mjh_save";

let scene=null;
let typing=false;
let timer=null;
let game={
  scene:"start",
  clues:[],
  items:[],
  endings:[]
};

function volume(){
  let v=Number(localStorage.getItem(VOLUME_KEY));
  return v>=1&&v<=100?v:70;
}

function startMusic(){
  if(!music)return;

  music.volume=volume()/100;

  let t=Number(localStorage.getItem(TIME_KEY))||0;

  if(t>0){
    try{music.currentTime=t}catch(e){}
  }

  music.play().catch(()=>{});
}

function saveMusic(){
  if(!music)return;

  try{
    localStorage.setItem(
      TIME_KEY,
      music.currentTime
    );
  }catch(e){}
}

window.addEventListener("load",startMusic);

["click","touchstart","keydown"].forEach(type=>{
  document.addEventListener(type,startMusic,{once:true});
});

setInterval(saveMusic,2000);

window.addEventListener("beforeunload",saveMusic);

function saveGame(){
  try{
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify(game)
    );
  }catch(e){}
}

function loadGame(){
  try{
    const data=localStorage.getItem(SAVE_KEY);
    if(data)game=JSON.parse(data);
  }catch(e){}
}

function type(textContent,done){
  clearInterval(timer);

  text.textContent="";
  typing=true;

  let i=0;

  timer=setInterval(()=>{
    text.textContent+=textContent[i];
    i++;

    if(i>=textContent.length){
      clearInterval(timer);
      typing=false;

      if(done)done();
    }
  },28);
}

function skipText(){
  if(!typing||!scene)return;

  clearInterval(timer);
  text.textContent=scene.text;
  typing=false;

  showChoices();
}

function showChoices(){

  choices.innerHTML="";
  next.hidden=true;

  if(!scene.choices){
    next.hidden=false;
    return;
  }

  scene.choices.forEach(choice=>{

    const button=document.createElement("button");

    button.className="choice";
    button.textContent=choice.text;

    button.onclick=()=>{

      if(choice.effect)
        choice.effect(game);

      saveGame();

      if(choice.end){
        game.endings.push(choice.end);
        saveGame();
        location.href="endings.html";
        return;
      }

      if(choice.next)
        showScene(choice.next);
    };

    choices.appendChild(button);
  });
}

function showScene(id){

  if(!window.STORY){
    text.textContent=
      "Chargement de l'histoire...";
    return;
  }

  scene=STORY[id];

  if(!scene){
    text.textContent=
      "Erreur : scène introuvable.";
    return;
  }

  game.scene=id;

  document.getElementById("chapter").textContent=
    scene.chapter||"PROLOGUE";

  document.getElementById("location").textContent=
    scene.location||"UNKNOWN";

  document.getElementById("scene").textContent=
    scene.time||"";

  speaker.textContent=
    scene.speaker||"";

  choices.innerHTML="";
  next.hidden=true;

  type(scene.text,showChoices);

  updateStatus();
  saveGame();
}

function updateStatus(){

  document.getElementById("clues").textContent=
    game.clues.length;

  document.getElementById("items").textContent=
    game.items.length;
}

next.onclick=()=>{

  if(typing){
    skipText();
    return;
  }

  if(scene&&scene.next)
    showScene(scene.next);
};

document.getElementById("menuBtn").onclick=()=>{
  saveMusic();
  location.href="index.html";
};

document.getElementById("saveBtn").onclick=()=>{
  saveGame();
  saveMusic();

  const n=document.getElementById("notification");

  if(n){
    n.textContent="💾 Partie sauvegardée";
    n.classList.add("show");

    setTimeout(()=>{
      n.classList.remove("show");
    },1800);
  }
};

document.addEventListener("keydown",e=>{

  if(e.code==="Space"&&typing){
    e.preventDefault();
    skipText();
  }
});

loadGame();

if(window.STORY)
  showScene(game.scene);
else
  text.textContent="Chargement...";
