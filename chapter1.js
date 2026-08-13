"use strict";

window.STORY=window.STORY||{};

Object.assign(window.STORY,{

c1_start:{
chapter:"CHAPITRE 1 — BLACKWOOD",
location:"MAISON 17",
time:"00:05",
text:"L'intérieur sent l'humidité et la poussière. Des photographies couvrent presque tous les murs. Certaines semblent appartenir à une autre époque.",
choices:[
{text:"🔎 Examiner les photos",next:"c1_photos"},
{text:"⬆️ Monter",next:"c1_stairs"},
{text:"🚪 Ressortir",next:"c1_exit"}
]},

c1_photos:{
chapter:"CHAPITRE 1",
location:"SALON",
time:"00:08",
text:"Une photographie attire ton attention. Elle montre plusieurs habitants devant cette maison. Au dos : 1998.",
choices:[
{text:"🔎 Chercher d'autres photos",next:"c1_wall"},
{text:"⬆️ Monter",next:"c1_stairs"}
]},

c1_wall:{
chapter:"CHAPITRE 1",
location:"SALON",
time:"00:11",
text:"Tu découvres une série de photographies prises chaque année. Sur chacune, une personne différente manque à l'appel.",
choices:[
{text:"👤 Examiner la dernière photo",next:"c1_recent"},
{text:"⬆️ Monter",next:"c1_stairs"}
]},

c1_recent:{
chapter:"CHAPITRE 1",
location:"SALON",
time:"00:13",
text:"Le visage manquant est celui d'une personne que tu connais. Impossible. Tu n'as jamais vu cette maison auparavant.",
choices:[
{text:"🔎 Chercher son nom",next:"c1_name"},
{text:"⬆️ Monter",next:"c1_stairs"}
]},

c1_name:{
chapter:"CHAPITRE 1",
location:"SALON",
time:"00:15",
text:"Sous la photographie, une inscription : « PROCHAINEMENT ». Un bruit sourd vient de l'étage.",
choices:[
{text:"⬆️ Monter",next:"c1_stairs"},
{text:"🚪 Partir",next:"c1_exit"}
]},

c1_stairs:{
chapter:"CHAPITRE 1",
location:"ESCALIER",
time:"00:17",
text:"Chaque marche grince sous ton poids. Arrivé à l'étage, tu vois trois portes. Derrière la première, un téléphone sonne.",
choices:[
{text:"📱 Première porte",next:"c1_phone"},
{text:"🚪 Deuxième porte",next:"c1_room"},
{text:"🚪 Troisième porte",next:"c1_bath"}
]},

c1_phone:{
chapter:"CHAPITRE 1",
location:"CHAMBRE",
time:"00:19",
text:"Le téléphone est posé au milieu de la pièce. L'écran affiche ton propre numéro.",
choices:[
{text:"📱 Décrocher",next:"c1_call"},
{text:"🚪 Quitter",next:"c1_room"}
]},

c1_call:{
chapter:"CHAPITRE 1",
location:"CHAMBRE",
time:"00:20",
speaker:"TA VOIX",
text:"« Ne cherche pas la cave. » Tu reconnais immédiatement ta voix.",
choices:[
{text:"⬇️ Chercher la cave",next:"c2_start"},
{text:"📱 Demander qui parle",next:"c1_voice"}
]},

c1_voice:{
chapter:"CHAPITRE 1",
location:"CHAMBRE",
time:"00:21",
text:"« Tu as déjà oublié. » La communication se coupe. Une porte que tu n'avais pas remarquée vient de s'ouvrir.",
choices:[
{text:"🚪 Entrer",next:"c1_secret"},
{text:"🏃 Partir",next:"c1_exit"}
]},

c1_room:{
chapter:"CHAPITRE 1",
location:"BUREAU",
time:"00:23",
text:"Un vieux bureau est couvert de journaux. Tous parlent de disparitions à Blackwood.",
choices:[
{text:"📰 Lire l'article",next:"c1_article"},
{text:"🚪 Quitter",next:"c1_stairs"}
]},

c1_article:{
chapter:"CHAPITRE 1",
location:"BUREAU",
time:"00:25",
text:"Le titre te glace : « UNE NOUVELLE DISPARITION ». La victime porte ton nom.",
choices:[
{text:"⬇️ Chercher la cave",next:"c2_start"},
{text:"🏃 Quitter Blackwood",end:"chapter1_escape"}
]},

c1_bath:{
chapter:"CHAPITRE 1",
location:"SALLE DE BAIN",
time:"00:27",
text:"Le miroir est couvert de buée. Lentement, des mots apparaissent : « TU ES ENCORE À TEMPS. »",
choices:[
{text:"🪞 Toucher le miroir",next:"c1_mirror"},
{text:"🚪 Sortir",next:"c1_stairs"}
]},

c1_mirror:{
chapter:"CHAPITRE 1",
location:"SALLE DE BAIN",
time:"00:29",
text:"Ton reflet ne bouge pas. Il te regarde alors que tu as déjà baissé la main.",
choices:[
{text:"👁️ Regarder",next:"c2_start"},
{text:"🏃 Fuir",end:"mirror_end"}
]},

c1_secret:{
chapter:"CHAPITRE 1",
location:"PIÈCE SECRÈTE",
time:"00:31",
text:"La petite pièce contient des dizaines de dossiers. Sur chacun, un nom. Le dernier dossier est vide.",
choices:[
{text:"📁 Ouvrir le dossier",next:"c2_start"},
{text:"🚪 Refermer",next:"c2_start"}
]},

c1_exit:{
chapter:"CHAPITRE 1",
location:"MAISON 17",
time:"00:33",
text:"Tu atteins la porte d'entrée. Elle est verrouillée. Une clé apparaît soudain sur le sol derrière toi.",
choices:[
{text:"🔑 Prendre la clé",next:"c2_start"},
{text:"🚪 Forcer la porte",next:"c2_start"}
]}

});
