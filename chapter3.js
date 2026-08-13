"use strict";

window.STORY=window.STORY||{};

Object.assign(window.STORY,{

c3_start:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"FORÊT",
time:"01:26",
text:"Tu débouches dans une forêt entourant Blackwood. Au loin, plusieurs lumières apparaissent entre les arbres.",
choices:[
{text:"🔦 Suivre les lumières",next:"c3_lights"},
{text:"🏚️ Retourner à la maison",next:"c3_house"}
]},

c3_lights:{
chapter:"CHAPITRE 3",
location:"FORÊT",
time:"01:30",
text:"Les lumières viennent de petites maisons. Elles semblent habitées, mais personne ne répond.",
choices:[
{text:"🚪 Entrer",next:"c3_cabin"},
{text:"🔎 Explorer",next:"c3_tracks"}
]},

c3_house:{
chapter:"CHAPITRE 3",
location:"MAISON 17",
time:"01:32",
text:"La maison semble t'attendre. Une nouvelle porte est apparue dans le salon.",
choices:[
{text:"🚪 Ouvrir",next:"c3_room"},
{text:"⬆️ Monter",next:"c3_upper"}
]},

c3_cabin:{
chapter:"CHAPITRE 3",
location:"CABANE",
time:"01:35",
text:"Une table est dressée pour plusieurs personnes. Les assiettes sont encore chaudes.",
choices:[
{text:"🔎 Examiner",next:"c3_table"},
{text:"🚪 Sortir",next:"c3_tracks"}
]},

c3_tracks:{
chapter:"CHAPITRE 3",
location:"FORÊT",
time:"01:38",
text:"Des traces de pas partent de la maison et disparaissent brusquement au milieu de la forêt.",
choices:[
{text:"👣 Suivre",next:"c3_cave"},
{text:"🏃 Revenir",next:"c3_lights"}
]},

c3_table:{
chapter:"CHAPITRE 3",
location:"CABANE",
time:"01:40",
text:"Une vieille photographie montre exactement cette table. Au dos : « Ils reviennent toujours. »",
choices:[
{text:"⬆️ Monter",next:"c3_upper"},
{text:"🚪 Partir",next:"c3_tracks"}
]},

c3_cave:{
chapter:"CHAPITRE 3",
location:"GROTTE",
time:"01:45",
text:"Les traces mènent à une entrée creusée dans la roche. À l'intérieur, tu entends quelqu'un respirer.",
choices:[
{text:"🔦 Entrer",next:"c3_survivor"},
{text:"🏃 Fuir",next:"c4_start"}
]},

c3_survivor:{
chapter:"CHAPITRE 3",
location:"GROTTE",
time:"01:50",
speaker:"INCONNU",
text:"Une personne est assise dans l'obscurité. « Tu n'es pas le premier. Mais tu peux être le dernier. »",
choices:[
{text:"🗣️ Lui parler",next:"c3_explain"},
{text:"🚪 Ouvrir la porte",next:"c4_start"}
]},

c3_explain:{
chapter:"CHAPITRE 3",
location:"GROTTE",
time:"01:53",
text:"« Blackwood ne tue personne. Elle remplace les gens. Ce que tu vois ici n'est jamais exactement ce que tu crois. »",
choices:[
{text:"🚪 Continuer",next:"c4_start"},
{text:"🏃 Partir",end:"survivor_end"}
]},

c3_room:{
chapter:"CHAPITRE 3",
location:"PIÈCE INCONNUE",
time:"01:55",
text:"La pièce contient des centaines de miroirs. Dans chaque reflet, tu vois une version différente de la maison.",
choices:[
{text:"🪞 Toucher un miroir",next:"c4_start"},
{text:"🚪 Sortir",next:"c3_house"}
]},

c3_upper:{
chapter:"CHAPITRE 3",
location:"ÉTAGE",
time:"01:57",
text:"Une silhouette traverse le couloir. Elle s'arrête devant une porte et disparaît.",
choices:[
{text:"🚪 Suivre",next:"c4_start"},
{text:"🏃 Ne pas suivre",end:"upper_end"}
]}

});
