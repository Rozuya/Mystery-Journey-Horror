"use strict";

window.STORY=window.STORY||{};

Object.assign(window.STORY,{

c5_start:{
chapter:"CHAPITRE 5 — LE DERNIER CHOIX",
location:"SOUS-SOL",
time:"02:35",
text:"Tu descends une dernière fois. Cette fois, le couloir semble vivant. Les murs respirent lentement.",
choices:[
{text:"🔦 Continuer",next:"c5_door"},
{text:"🏃 Remonter",next:"c5_exit"}
]},

c5_door:{
chapter:"CHAPITRE 5",
location:"PORTE MÉTALLIQUE",
time:"02:38",
text:"La porte porte une inscription : « UNE PERSONNE ENTRE. UNE PERSONNE SORT. »",
choices:[
{text:"🚪 Ouvrir",next:"c5_room"},
{text:"🔎 Chercher ailleurs",next:"c5_secret"}
]},

c5_room:{
chapter:"CHAPITRE 5",
location:"SALLE FINALE",
time:"02:42",
text:"Au centre se trouve une chaise. Derrière une immense vitre, quelqu'un t'attend.",
choices:[
{text:"👁️ T'approcher",next:"c5_double"},
{text:"🚪 Chercher la sortie",next:"c5_exit"}
]},

c5_double:{
chapter:"CHAPITRE 5",
location:"SALLE FINALE",
time:"02:45",
text:"La personne derrière la vitre lève la tête. C'est toi. Elle pose sa main contre la vitre.",
choices:[
{text:"🖐️ Toucher la vitre",next:"c5_truth"},
{text:"🏃 Reculer",next:"c5_exit"}
]},

c5_truth:{
chapter:"CHAPITRE 5",
location:"SALLE FINALE",
time:"02:48",
text:"Tout revient d'un coup. Tu étais déjà venu ici. Plusieurs fois. Chaque fois, tu avais oublié.",
choices:[
{text:"🧠 Accepter",next:"final_good"},
{text:"❌ Refuser",next:"final_bad"}
]},

c5_secret:{
chapter:"CHAPITRE 5",
location:"PASSAGE CACHÉ",
time:"02:50",
text:"Tu trouves une salle remplie de dossiers. Tous les noms des disparus sont ici.",
choices:[
{text:"📁 Chercher le premier dossier",next:"c5_first"},
{text:"🔥 Détruire les dossiers",next:"final_destroy"}
]},

c5_first:{
chapter:"CHAPITRE 5",
location:"ARCHIVES",
time:"02:54",
text:"Le premier dossier est vieux de plusieurs siècles. Le nom inscrit dessus est BLACKWOOD.",
choices:[
{text:"📖 Lire",next:"c5_origin"},
{text:"🔥 Détruire",next:"final_destroy"}
]},

c5_origin:{
chapter:"CHAPITRE 5",
location:"ARCHIVES",
time:"02:58",
text:"Blackwood n'est pas une personne. C'est un lieu construit pour enfermer quelque chose. Chaque vingt-huit ans, quelqu'un doit prendre la place du gardien.",
choices:[
{text:"🔐 Devenir le gardien",next:"final_guard"},
{text:"🔥 Détruire le lieu",next:"final_destroy"}
]},

c5_exit:{
chapter:"CHAPITRE 5",
location:"ESCALIER",
time:"03:01",
text:"La porte d'entrée est enfin ouverte. Dehors, le soleil commence à se lever.",
choices:[
{text:"🚪 Sortir",next:"final_escape"},
{text:"👁️ Regarder derrière toi",next:"final_look"}
]},

final_good:{
chapter:"FINAL",
location:"SALLE FINALE",
time:"03:05",
text:"Tu comprends le piège. La maison ne peut contrôler que ceux qui refusent de se souvenir. Tu prononces ton véritable nom.",
choices:[
{text:"🚪 Ouvrir la porte",end:"good"}
]},

final_bad:{
chapter:"FINAL",
location:"SALLE FINALE",
time:"03:05",
text:"Tu refuses. Ton double sourit. La vitre disparaît. Tu te retrouves devant la maison numéro 17.",
choices:[
{text:"🏚️ Entrer",end:"loop"}
]},

final_destroy:{
chapter:"FINAL",
location:"ARCHIVES",
time:"03:08",
text:"Tu mets le feu aux dossiers. Les murs tremblent. Toutes les lumières de Blackwood s'éteignent.",
choices:[
{text:"🔥 Continuer",end:"destroy"}
]},

final_guard:{
chapter:"FINAL",
location:"SALLE FINALE",
time:"03:10",
text:"Tu comprends le prix. Quelqu'un doit rester. La porte se ferme derrière toi.",
choices:[
{text:"🔒 Accepter",end:"guardian"}
]},

final_escape:{
chapter:"FINAL",
location:"BLACKWOOD",
time:"03:15",
text:"Tu quittes enfin Blackwood. Tu marches jusqu'à la route principale.",
choices:[
{text:"🚶 Continuer",end:"escape"}
]},

final_look:{
chapter:"FINAL",
location:"BLACKWOOD",
time:"03:16",
text:"Tu regardes derrière toi. Toutes les fenêtres sont éclairées. Derrière chacune se tient une silhouette.",
choices:[
{text:"🏃 Courir",end:"watched"}
]}

});
