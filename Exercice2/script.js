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

// EXO3

// - Créer une variable contenant un prix HT d’exemple

let prixht= 100;

// - Créer une variable contenant le taux de TVA
//   (par exemple 0.2 pour 20%)
const tauxtva= 0.2;

// - Calculer le prix TTC à partir du prix HT et de la TVA
//   (indice : utiliser une addition et une multiplication)
let ttc= prixht + (prixht * tauxtva);

console.log(ttc);


// - Afficher le prix HT et le prix TTC dans la console
console.log(prixht,ttc);

// - Créer une variable pour compter le nombre de ventes
//   (commencer à 0)
let vente= 0;

// - Simuler une nouvelle vente en augmentant ce compteur
//   (indice : utiliser l’opérateur pour ajouter 1)
vente++

// - Afficher la nouvelle valeur du compteur dans la console
console.log(vente);





