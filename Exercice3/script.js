// - Créer une variable pour le nom de la boutique
const shopname="kissea";
// - Créer une variable pour la ville
const city="lyon";
// - Créer une variable booléenne pour savoir si la boutique est ouverte
let isopen= true; 
// - Créer une variable pour le nombre de produits
let productcount = 50;
// - Créer une variable pour le slogan
let slogan= " la vie est belle";

// - Afficher un message de bienvenue dans la console
console.log("bienvenu la team");



// - Afficher le slogan dans la console
console.log(slogan);

// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
console.log("c'est ouvert");
//   - ou un message “fermée”

// NOUVEAU EXO 2

// - Partir du slogan déjà créé à l’exercice 1

// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
let message = "bienvenue chez";
let mess = message + shopname; 
console.log(mess);

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})

// - Calculer la longueur du slogan
let tailleslogan = slogan.length;
// - Créer une version en majuscules du slogan
let majusculeslogan = slogan.toUpperCase();

// - Créer une version du slogan où un mot est remplacé par un autre
let modif = slogan.replace("belle", "moche");
//   (indice : il existe une méthode pour remplacer une partie d’un texte)

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console

console.log(message,mess,majusculeslogan,modif,tailleslogan);




