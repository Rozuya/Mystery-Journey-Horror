"use strict";

window.STORY=window.STORY||{};

Object.assign(window.STORY,{

c2_start:{
chapter:"CHAPITRE 2 — LE SOUS-SOL",
location:"ESCALIER",
time:"00:38",
text:"Une porte que tu n'avais pas vue auparavant mène vers le sous-sol. L'air devient glacial à mesure que tu descends.",
choices:[
{text:"⬇️ Descendre",next:"c2_corridor"},
{text:"🚪 Revenir",next:"c2_back"}
]},

c2_corridor:{
chapter:"CHAPITRE 2",
location:"SOUS-SOL",
time:"00:42",
text:"Un long couloir s'étend sous la maison. Plusieurs portes portent des dates.",
choices:[
{text:"🚪 1998",next:"c2_1998"},
{text:"🚪 2012",next:"c2_2012"},
{text:"🚪 2026",next:"c2_2026"}
]},

c2_1998:{
chapter:"CHAPITRE 2",
location:"SOUS-SOL",
time:"00:45",
text:"La pièce contient de vieux vêtements et une radio. Une voix passe dans les parasites : « La première personne est arrivée. »",
choices:[
{text:"📻 Écouter",next:"c2_radio"},
{text:"🚪 Sortir",next:"c2_corridor"}
]},

c2_2012:{
chapter:"CHAPITRE 2",
location:"ARCHIVES",
time:"00:48",
text:"Des photos montrent une famille entière. Tous les visages ont été rayés au marqueur.",
choices:[
{text:"🔎 Examiner",next:"c2_family"},
{text:"🚪 Sortir",next:"c2_corridor"}
]},

c2_2026:{
chapter:"CHAPITRE 2",
location:"SURVEILLANCE",
time:"00:51",
text:"Un écran affiche une caméra de surveillance. Tu vois la maison depuis l'extérieur. Tu te vois entrer.",
choices:[
{text:"📺 Observer",next:"c2_camera"},
{text:"🔌 Éteindre",next:"c2_power"}
]},

c2_radio:{
chapter:"CHAPITRE 2",
location:"SOUS-SOL",
time:"00:54",
text:"La radio annonce des événements qui ne se sont pas encore produits. Puis elle prononce ton prénom.",
choices:[
{text:"📻 Répondre",next:"c2_answer"},
{text:"🔌 Éteindre",next:"c2_corridor"}
]},

c2_family:{
chapter:"CHAPITRE 2",
location:"ARCHIVES",
time:"00:57",
text:"Au fond d'un tiroir, tu trouves une liste de noms. Chaque personne inscrite a disparu exactement vingt-huit ans après son arrivée.",
choices:[
{text:"🔎 Chercher ton nom",next:"c2_list"},
{text:"🚪 Quitter",next:"c2_corridor"}
]},

c2_camera:{
chapter:"CHAPITRE 2",
location:"SURVEILLANCE",
time:"01:00",
text:"Sur l'écran, quelque chose se tient derrière toi. Tu te retournes. Il n'y a rien.",
choices:[
{text:"📺 Regarder encore",next:"c2_camera2"},
{text:"🏃 Quitter",next:"c2_corridor"}
]},

c2_power:{
chapter:"CHAPITRE 2",
location:"SURVEILLANCE",
time:"01:02",
text:"L'écran s'éteint. Une seconde plus tard, toutes les portes du sous-sol se verrouillent.",
choices:[
{text:"🔑 Chercher une sortie",next:"c2_exit"},
{text:"📺 Rallumer",next:"c2_camera2"}
]},

c2_answer:{
chapter:"CHAPITRE 2",
location:"SOUS-SOL",
time:"01:05",
text:"La voix répond : « Si tu m'entends, ne fais confiance à personne dans la maison. Même pas à toi. »",
choices:[
{text:"🔎 Demander qui parle",next:"c2_truth"},
{text:"🏃 Partir",next:"c2_exit"}
]},

c2_list:{
chapter:"CHAPITRE 2",
location:"ARCHIVES",
time:"01:08",
text:"Ton nom est bien sur la liste. À côté, une date : demain.",
choices:[
{text:"📁 Chercher un dossier secret",next:"c2_secret"},
{text:"🏃 Partir",next:"c2_exit"}
]},

c2_camera2:{
chapter:"CHAPITRE 2",
location:"SURVEILLANCE",
time:"01:11",
text:"La caméra montre maintenant le sous-sol. Tu te vois devant l'écran. Mais sur l'image, une autre version de toi se tient derrière toi.",
choices:[
{text:"👁️ Te retourner",next:"c3_start"},
{text:"📺 Continuer",next:"c2_truth"}
]},

c2_truth:{
chapter:"CHAPITRE 2",
location:"SOUS-SOL",
time:"01:14",
text:"La voix révèle une seule chose : « La maison choisit toujours quelqu'un. » Une porte s'ouvre au bout du couloir.",
choices:[
{text:"🚪 Entrer",next:"c3_start"},
{text:"🏃 Refuser",end:"basement_end"}
]},

c2_secret:{
chapter:"CHAPITRE 2",
location:"ARCHIVES",
time:"01:17",
text:"Derrière une rangée de dossiers, tu trouves une porte cachée. Elle porte le même numéro que la clé trouvée dans la voiture.",
choices:[
{text:"🔑 Ouvrir",next:"c3_start"},
{text:"🚪 Ne pas entrer",end:"secret_escape"}
]},

c2_exit:{
chapter:"CHAPITRE 2",
location:"SOUS-SOL",
time:"01:20",
text:"Tu trouves un escalier qui remonte. Mais il ne mène pas vers la maison. Il mène vers une forêt.",
choices:[
{text:"🌲 Sortir",next:"c3_start"},
{text:"⬇️ Revenir",next:"c2_corridor"}
]},

c2_back:{
chapter:"CHAPITRE 2",
location:"REZ-DE-CHAUSSÉE",
time:"01:22",
text:"Tu remontes. La maison semble différente. Les murs sont plus vieux. Les photos ont changé.",
choices:[
{text:"🔎 Examiner",next:"c3_start"},
{text:"🚪 Sortir",end:"house_escape"}
]}

});
