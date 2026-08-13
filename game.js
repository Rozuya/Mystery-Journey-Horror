"use strict";

document.addEventListener("DOMContentLoaded",()=>{

const $=id=>document.getElementById(id);

const scenes=window.STORY||{};

let game={
 scene:"start",
 chapter:"PROLOGUE",
 clues:[],
 items:[],
 decisions:[],
 endings:[],
 started:Date.now()
};

let typing=false;
let timer=null;

function toast(text){

 const t=$("toast");
 if(!t)return;

 t.textContent=text;
 t.classList.add("show");

 clearTimeout(t.timer);

 t.timer=setTimeout(
   ()=>t.classList.remove("show"),
   2200
 );
}

function freshGame(){

 return{
   scene:"start",
   chapter:"PROLOGUE",
   clues:[],
   items:[],
   decisions:[],
   endings:[],
   started:Date.now()
 };

}

function save(){

 if(window.SaveSystem.save(game))
   toast("💾 Partie sauvegardée");

}

function load(){

 const data=window.SaveSystem.load();

 if(!data)return false;

 game=data;

 if(!game.clues)game.clues=[];
 if(!game.items)game.items=[];
 if(!game.decisions)game.decisions=[];
 if(!game.endings)game.endings=[];

 return true;

}

function music(){

 const audio=$("music");
 if(!audio)return;

 const v=window.SaveSystem.volume();

 audio.volume=v;

 $("volume").value=Math.round(v*100);
 $("volumeValue").textContent=Math.round(v*100)+"%";

 audio.play().catch(()=>{

   document.addEventListener(
     "click",
     ()=>{
       audio.play().catch(()=>{});
     },
     {once:true}
   );

 });

}

function setVolume(){

 const value=Number($("volume").value);

 $("volumeValue").textContent=value+"%";

 const audio=$("music");

 if(audio)
   audio.volume=value/100;

 window.SaveSystem.setVolume(value/100);

}

function updateStats(){

 $("clueCount").textContent=game.clues.length;
 $("itemCount").textContent=game.items.length;

 const total=Object.keys(scenes).length;
 const used=game.decisions.length;

 const percent=Math.min(
   99,
   Math.round(
     (used/Math.max(total,1))*100
   )
 );

 $("progress").textContent=percent+"%";

}

function typeText(text,done){

 clearInterval(timer);

 typing=true;

 $("storyText").textContent="";

 let i=0;

 timer=setInterval(()=>{

   $("storyText").textContent+=text[i]||"";
   i++;

   if(i>=text.length){

     clearInterval(timer);
     typing=false;

     if(done)done();

   }

 },18);

}

function showScene(id){

 const scene=scenes[id];

 if(!scene){

   endGame(
     "Fin inconnue",
     "Cette histoire semble avoir perdu sa trace."
   );

   return;
 }

 game.scene=id;

 if(scene.chapter)
   game.chapter=scene.chapter;

 $("chapter").textContent=
   scene.chapter||"MYSTERY JOURNEY";

 $("location").textContent=
   scene.location||"UNKNOWN";

 $("time").textContent=
   scene.time||"";

 $("speaker").textContent=
   scene.speaker||"";

 $("choices").innerHTML="";

 updateStats();

 typeText(
   scene.text||"",
   ()=>{
     renderChoices(scene);
   }
 );

 saveSilent();

}

function renderChoices(scene){

 const box=$("choices");

 box.innerHTML="";

 scene.choices.forEach((choice,index)=>{

   const button=document.createElement("button");

   button.className="choice";
   button.textContent=choice.text;

   button.onclick=()=>{

     if(typing){

       clearInterval(timer);
       typing=false;

       $("storyText").textContent=
         scene.text;

       renderChoices(scene);

       return;
     }

     choose(scene,choice,index);

   };

   box.appendChild(button);

 });

}

function choose(scene,choice,index){

 game.decisions.push({
   scene:game.scene,
   choice:index,
   time:Date.now()
 });

 if(choice.effect){

   try{
     choice.effect(game);
   }catch(e){
     console.error(e);
   }

 }

 if(choice.clue){

   if(!game.clues.includes(choice.clue))
     game.clues.push(choice.clue);

 }

 if(choice.item){

   if(!game.items.includes(choice.item))
     game.items.push(choice.item);

 }

 updateStats();

 if(choice.end){

   endGame(
     choice.end,
     endingData[choice.end]
   );

   return;

 }

 if(choice.next){

   showScene(choice.next);

   return;

 }

}

function saveSilent(){

 window.SaveSystem.save(game);

}

const endingData={

 good:{
   title:"LA VÉRITÉ",
   icon:"🌅",
   text:"Tu as compris le fonctionnement de Blackwood. Pour la première fois depuis des décennies, le cycle est brisé. Au lever du soleil, la maison disparaît."
 },

 loop:{
   title:"LE CYCLE",
   icon:"🔄",
   text:"Tu pensais être sorti. Pourtant, la route devant toi mène encore à la maison numéro 17. Blackwood recommence."
 },

 destroy:{
   title:"LE FEU",
   icon:"🔥",
   text:"Les archives brûlent. Les voix se taisent. Blackwood disparaît dans les flammes. Mais personne ne saura jamais combien de personnes y ont réellement disparu."
 },

 guardian:{
   title:"LE GARDIEN",
   icon:"🔒",
   text:"Tu as pris la place du gardien. La maison est désormais silencieuse. Jusqu'au jour où quelqu'un d'autre viendra frapper à la porte."
 },

 escape:{
   title:"L'ÉCHAPPÉE",
   icon:"🚗",
   text:"Tu quittes Blackwood avant de comprendre toute la vérité. Pendant quelques kilomètres, tout semble normal. Puis ton téléphone sonne."
 },

 watched:{
   title:"ILS TE REGARDENT",
   icon:"👁️",
   text:"Tu cours sans t'arrêter. Mais quelque chose te suit depuis la maison. Tu comprends trop tard que tu n'as jamais vraiment quitté Blackwood."
 },

 mirror_end:{
   title:"LE REFLET",
   icon:"🪞",
   text:"Ton reflet ne t'appartient plus. Lorsque tu quittes la salle de bain, c'est lui qui reste dans ton corps."
 },

 memory_end:{
   title:"L'OUBLI",
   icon:"🧠",
   text:"Tu acceptes d'oublier. Tout devient calme. Tu ne te souviens plus de Blackwood. Ni de la raison pour laquelle tu as peur chaque fois que tu vois le nombre 17."
 },

 house_end:{
   title:"LA PORTE",
   icon:"🚪",
   text:"Tu quittes la maison. Derrière toi, la porte se referme doucement. Tu ne te retournes pas."
 },

 chapter1_escape:{
   title:"TROP TÔT",
   icon:"🏃",
   text:"Tu quittes Blackwood avant de découvrir ce qu'elle cache. Mais certaines histoires ne restent jamais derrière nous."
 },

 basement_end:{
   title:"LE SOUS-SOL",
   icon:"⬇️",
   text:"Tu refuses d'avancer. Les portes se ferment autour de toi. La dernière chose que tu entends est ta propre voix qui murmure ton prénom."
 },

 secret_escape:{
   title:"LE SECRET",
   icon:"🔑",
   text:"Tu refuses d'ouvrir la porte. Peut-être était-ce la meilleure décision de toute ta vie."
 },

 upper_end:{
   title:"LA SILHOUETTE",
   icon:"👤",
   text:"Tu décides de ne pas la suivre. Pourtant, lorsque tu descends l'escalier, elle est déjà derrière toi."
 },

 survivor_end:{
   title:"LE SURVIVANT",
   icon:"🕯️",
   text:"Tu laisses l'inconnu derrière toi. Tu ne sauras jamais s'il disait la vérité."
 },

 house_escape:{
   title:"LA FUITE",
   icon:"🏚️",
   text:"Tu trouves une sortie. Blackwood reste derrière toi. Mais le nom de la ville n'existe sur aucune carte."
 },

 prologue_escape:{
   title:"LA FUITE",
   icon:"🚗",
   text:"Tu quittes la route 47. Tu ne sauras jamais ce qui se trouvait dans la maison."
 }

};

function endGame(id,data){

 game.endings.push(id);

 saveSilent();

 $("game").classList.add("hidden");
 $("ending").classList.remove("hidden");

 const info=data||{
   title:"FIN",
   icon:"❓",
   text:"L'histoire se termine ici."
 };

 $("endingIcon").textContent=info.icon;
 $("endingTitle").textContent=info.title;
 $("endingText").textContent=info.text;

}

function restart(){

 window.SaveSystem.clear();

 game=freshGame();

 $("ending").classList.add("hidden");
 $("game").classList.remove("hidden");

 showScene("start");

}

function again(){

 game=freshGame();

 $("ending").classList.add("hidden");
 $("game").classList.remove("hidden");

 showScene("start");

}

$("volume").addEventListener(
 "input",
 setVolume
);

$("saveBtn").onclick=save;

$("restartBtn").onclick=restart;

$("againBtn").onclick=again;

$("menuBtn").onclick=()=>{

 if(confirm(
   "Retourner au menu ? Ta partie est sauvegardée."
 ))
   location.href="index.html";

};

music();

if(load()){

 toast("📂 Partie chargée");

 showScene(game.scene);

}else{

 game=freshGame();

 showScene("start");

}

});
