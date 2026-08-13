"use strict";

window.STORY=window.STORY||{};

Object.assign(window.STORY,{

c4_start:{
chapter:"CHAPITRE 4 — LA VÉRITÉ",
location:"PIÈCE BLANCHE",
time:"02:01",
text:"La porte s'ouvre sur une pièce totalement blanche. Au centre, une table. Sur la table, ton téléphone.",
choices:[
{text:"📱 Prendre le téléphone",next:"c4_phone"},
{text:"🔎 Examiner la pièce",next:"c4_room"}
]},

c4_phone:{
chapter:"CHAPITRE 4",
location:"PIÈCE BLANCHE",
time:"02:04",
text:"Le téléphone contient une vidéo enregistrée demain. Tu appuies sur lecture. C'est toi qui parles à la caméra.",
choices:[
{text:"▶️ Regarder",next:"c4_video"},
{text:"📱 Arrêter",next:"c4_room"}
]},

c4_video:{
chapter:"CHAPITRE 4",
location:"PIÈCE BLANCHE",
time:"02:07",
speaker:"TOI",
text:"« Si tu regardes cette vidéo, c'est que tout recommence. Ne fais confiance à personne qui te dira qu'elle peut te faire sortir. »",
choices:[
{text:"🔎 Chercher cette personne",next:"c4_person"},
{text:"🚪 Sortir",next:"c4_corridor"}
]},

c4_room:{
chapter:"CHAPITRE 4",
location:"PIÈCE BLANCHE",
time:"02:10",
text:"Sur le mur : « Une vérité coûte toujours quelque chose. » Trois boutons apparaissent.",
choices:[
{text:"🔴 Rouge",next:"c4_red"},
{text:"⚪ Blanc",next:"c4_white"},
{text:"⚫ Noir",next:"c4_black"}
]},

c4_red:{
chapter:"CHAPITRE 4",
location:"PIÈCE ROUGE",
time:"02:13",
text:"La pièce devient rouge. Une voix te demande de choisir entre rester et oublier.",
choices:[
{text:"🧠 Oublier",end:"memory_end"},
{text:"🚪 Rester",next:"c4_corridor"}
]},

c4_white:{
chapter:"CHAPITRE 4",
location:"PIÈCE BLANCHE",
time:"02:15",
text:"Rien ne se passe. Puis une porte apparaît derrière toi.",
choices:[
{text:"🚪 Entrer",next:"c4_corridor"}
]},

c4_black:{
chapter:"CHAPITRE 4",
location:"PIÈCE NOIRE",
time:"02:17",
text:"Tu ne vois plus rien. Une voix murmure ton nom : « Qui es-tu vraiment ? »",
choices:[
{text:"🗣️ Répondre",next:"c4_answer"},
{text:"🤐 Silence",next:"c4_corridor"}
]},

c4_answer:{
chapter:"CHAPITRE 4",
location:"PIÈCE NOIRE",
time:"02:19",
text:"« Mauvaise réponse. » La lumière revient. Tu es de nouveau dans le salon.",
choices:[
{text:"🔎 Examiner",next:"c4_corridor"},
{text:"🚪 Sortir",end:"loop_end"}
]},

c4_person:{
chapter:"CHAPITRE 4",
location:"COULOIR",
time:"02:22",
text:"Une personne apparaît au bout du couloir. Elle ressemble exactement à la silhouette de la fenêtre.",
choices:[
{text:"🗣️ Lui parler",next:"c4_stranger"},
{text:"🏃 Fuir",next:"c4_corridor"}
]},

c4_stranger:{
chapter:"CHAPITRE 4",
location:"COULOIR",
time:"02:25",
speaker:"INCONNU",
text:"« Je peux te faire sortir. Mais tu dois me donner quelque chose en échange. »",
choices:[
{text:"🤝 Accepter",next:"c4_deal"},
{text:"❌ Refuser",next:"c4_corridor"}
]},

c4_deal:{
chapter:"CHAPITRE 4",
location:"COULOIR",
time:"02:28",
text:"Il tend la main. Lorsque tu la prends, tu oublies soudain pourquoi tu es venu.",
choices:[
{text:"🧠 Continuer",next:"c5_start"},
{text:"🏃 Retirer ta main",next:"c4_corridor"}
]},

c4_corridor:{
chapter:"CHAPITRE 4",
location:"MAISON 17",
time:"02:31",
text:"Toutes les portes ont disparu sauf une : celle du sous-sol.",
choices:[
{text:"⬇️ Descendre",next:"c5_start"},
{text:"🚪 Quitter",end:"house_end"}
]}

});
