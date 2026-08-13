"use strict";

window.STORY=window.STORY||{};

Object.assign(window.STORY,{

start:{
chapter:"PROLOGUE",
location:"ROUTE 47",
time:"23:17",
text:"La pluie tombe depuis presque une heure. Tu conduis seul sur une route déserte lorsque tu aperçois une voiture arrêtée sur le bas-côté. Ses phares sont allumés. Le moteur tourne.",
choices:[
{text:"🔎 Examiner la voiture",next:"p1"},
{text:"📱 Appeler la police",next:"p2"},
{text:"🚗 Continuer",next:"p3"}
]},

p1:{
chapter:"PROLOGUE",
location:"ROUTE 47",
time:"23:21",
text:"La portière est ouverte. Personne à l'intérieur. Sur le siège passager, un téléphone couvert de pluie s'allume soudain.",
choices:[
{text:"📱 Regarder le téléphone",next:"p4",effect:g=>g.clues.push("telephone")},
{text:"🔦 Fouiller la voiture",next:"p5",effect:g=>g.items.push("cle17")}
]},

p2:{
chapter:"PROLOGUE",
location:"ROUTE 47",
time:"23:20",
speaker:"OPÉRATEUR",
text:"Une voix répond. Tu expliques la situation. L'opérateur te demande ton emplacement. Avant que tu répondes, un bruit traverse la ligne. Puis plus rien.",
choices:[
{text:"🔎 Aller voir la voiture",next:"p1"},
{text:"🏠 Rentrer",next:"p6"}
]},

p3:{
chapter:"PROLOGUE",
location:"ROUTE 47",
time:"23:25",
text:"Tu accélères. Trois minutes plus tard, ton téléphone vibre. Un message provenant d'un numéro inconnu apparaît : « Tu aurais dû t'arrêter. »",
choices:[
{text:"📱 Répondre",next:"p7"},
{text:"🚗 Ignorer",next:"p6"}
]},

p4:{
chapter:"PROLOGUE",
location:"ROUTE 47",
time:"23:22",
text:"Un message est affiché : « NE VA PAS À BLACKWOOD. » Quelques secondes plus tard, un deuxième apparaît : « Ils ne sont pas morts. »",
choices:[
{text:"📍 Suivre l'adresse",next:"p8"},
{text:"🏠 Rentrer",next:"p6"}
]},

p5:{
chapter:"PROLOGUE",
location:"ROUTE 47",
time:"23:23",
text:"Dans la boîte à gants, tu trouves une vieille clé. Une étiquette métallique porte le numéro 17.",
choices:[
{text:"🏚️ Chercher Blackwood",next:"p8"},
{text:"🚗 Partir",next:"p6"}
]},

p6:{
chapter:"PROLOGUE",
location:"ROUTE 47",
time:"23:40",
text:"Tu décides de rentrer. Pourtant, après plusieurs kilomètres, tu retrouves la même voiture devant toi. Ses phares sont toujours allumés.",
choices:[
{text:"🛑 T'arrêter",next:"p1"},
{text:"🚗 Continuer",next:"p8"}
]},

p7:{
chapter:"PROLOGUE",
location:"ROUTE 47",
time:"23:27",
text:"Tu écris : « Qui êtes-vous ? » La réponse arrive immédiatement : « Quelqu'un qui essaie de te garder en vie. Maison 17. Maintenant. »",
choices:[
{text:"🏚️ Aller à Blackwood",next:"p8"},
{text:"🏠 Rentrer",next:"p6"}
]},

p8:{
chapter:"PROLOGUE",
location:"BLACKWOOD",
time:"23:51",
text:"Une vieille pancarte indique BLACKWOOD. Le village semble complètement abandonné. Au loin, une seule maison possède encore une lumière.",
choices:[
{text:"🏚️ Aller vers la maison",next:"p9"},
{text:"🚗 Faire demi-tour",next:"p6"}
]},

p9:{
chapter:"PROLOGUE",
location:"MAISON 17",
time:"00:02",
text:"La maison numéro 17 est devant toi. La porte est entrouverte. Une lumière clignote à l'étage. Puis tu entends trois coups venant de l'intérieur.",
choices:[
{text:"🚪 Entrer",next:"c1_start"},
{text:"🏃 Partir",end:"prologue_escape"}
]}

});
