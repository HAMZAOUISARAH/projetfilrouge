// // // - Créer une variable pour le nom de la boutique
// // const shopname="kissea";
// // // - Créer une variable pour la ville
// // const city="lyon";
// // // - Créer une variable booléenne pour savoir si la boutique est ouverte
// // let isopen= true; 
// // // - Créer une variable pour le nombre de produits
// // let productcount = 50;
// // // - Créer une variable pour le slogan
// // let slogan= " la vie est belle";

// // // - Afficher un message de bienvenue dans la console
// // console.log("bienvenu la team");



// // // - Afficher le slogan dans la console
// // console.log(slogan);

// // // - Selon la variable qui indique si la boutique est ouverte :
// // //   - afficher dans la console un message “ouverte”
// // console.log("c'est ouvert");
// // //   - ou un message “fermée”

// // // NOUVEAU EXO 2

// // // - Partir du slogan déjà créé à l’exercice 1

// // // - Créer un premier message de bienvenue en collant du texte et des variables
// // //   (indice : utiliser l’opérateur pour concaténer des chaînes)
// // let message = "bienvenue chez";
// // let mess = message + shopname; 
// // console.log(mess);

// // // - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
// // //   qui permet d’injecter des variables dans une chaîne
// // //   (indice : pensez au gabarit de chaîne avec ${...})

// // // - Calculer la longueur du slogan
// // let tailleslogan = slogan.length;
// // // - Créer une version en majuscules du slogan
// // let majusculeslogan = slogan.toUpperCase();

// // // - Créer une version du slogan où un mot est remplacé par un autre
// // let modif = slogan.replace("belle", "moche");
// // //   (indice : il existe une méthode pour remplacer une partie d’un texte)

// // // - Afficher les deux messages, la longueur, la version majuscule
// // //   et la version modifiée dans la console

// // console.log(message,mess,majusculeslogan,modif,tailleslogan);




// // /*************************************************
// //  * EXERCICE 3 - Nombres, calculs & TVA
// //  * Notions : opérations mathématiques, incrémentation
// //  *************************************************/

// // /* --- Correction Exercice 1 & 2 --- */

// // const shopName = "Ma Boutique JS";
// // const city = "Lyon";
// // let isOpen = true;
// // let productCount = 3;
// // let slogan = "Des goodies pour développeurs passionnés !";

// // const taglineElement = document.querySelector(".site-tagline");
// // if (taglineElement) {
// //   taglineElement.textContent =
// //     "Bienvenue dans " + shopName + " à " + city + " 👋";
// // }

// // const yearSpan = document.getElementById("year");
// // if (yearSpan) {
// //   yearSpan.textContent = new Date().getFullYear();
// // }

// // let welcomeMessage =
// //   "Bienvenue dans " + shopName + " située à " + city + " !";
// // let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
// // let sloganLength = slogan.length;
// // let sloganUppercase = slogan.toUpperCase();
// // let sloganModified = slogan.replace("goodies", "trésors");

// // /* --- Nouveautés Exercice 3 --- */

// // // Prix d'exemple et TVA


// // let examplePriceHT = 20;
// // const TVA = 0.2;

// // let examplePriceTTC = examplePriceHT + (examplePriceHT * TVA);

// // console.log("Prix HT exemple :", examplePriceHT);
// // console.log("Prix TTC exemple :", examplePriceTTC);

// // // Compteur de ventes
// // let salesCount = 0;
// // salesCount++;
// // salesCount++;

// // console.log("Nombre de ventes :", salesCount);


// // /* --- Rendu visuel Exo 3 --- */

// // const cartTotalHeader = document.getElementById("cart-total");
// // const cartTotalAside = document.getElementById("cart-total-aside");

// // if (cartTotalHeader) {
// //   cartTotalHeader.textContent = examplePriceTTC.toFixed(2) + " €";
// // }
// // if (cartTotalAside) {
// //   cartTotalAside.textContent = examplePriceTTC.toFixed(2) + " €";
// // }

// // const cartMessageElement = document.getElementById("cart-message");
// // if (cartMessageElement) {
// //   cartMessageElement.textContent =
// //     "Exemple de prix TTC affiché dans le panier (exercice 3).";
// // }

// // console.log("Exercice 3 chargé ✅");

// // EX4
// // - Définir une fonction (calculatePriceTTC(priceHT)) qui :
// //     • reçoit un prix HT en paramètre
// //     • calcule le prix TTC (en réutilisant la formule de l’exercice 3)
// //     • renvoie le prix TTC

// function calculatepricettc (prixht){


// console.log("Prix HT exemple :",exprixht);

// let prixttc = exprixht + (exprixht * TVA);
// return prixttc;

// }
// let exprixht= 100;
// const TVA = 0.2;
// let TTC= exprixht + exprixht * TVA

// console.log(exprixht);
// console.log(TVA);
// console.log(TTC);




// // - Définir une autre fonction (formatPrice(price)) qui :
// //     • reçoit un prix ( type :nombre)
// //     • arrondit ce prix à 2 décimales
// //     • ajoute le symbole de la monnaie
// //     • renvoie le résultat sous forme de texte
// //       (indice : il existe une méthode pour formater un nombre avec un certain nombre de décimales)
// function formatPrix (prix){
   
//  let rounded = prix.toFixed(2);
//  let formatted= rounded.replace (".",",")+ "$";
//  return formatted;

// }
// let prix = 19.99;

// // - Tester ces fonctions :
// //     • appeler la fonction de calcul du TTC avec différents prix HT
// //     • passer le résultat dans la fonction de formatage
// //     • afficher le résultat final dans la console








// // Tests simples
// const testPrice1 = calculatePriceTTC(10);
// const testPrice2 = calculatePriceTTC(19.99);

// console.log("Test 1 TTC formaté :", formatPrice(testPrice1));
// console.log("Test 2 TTC formaté :", formatPrice(testPrice2));







let productNames=["table","chaise","cuisine"]

let productPriceHT=[100,150,200]

productNames.length;
productPriceHT.length

let productNames = ["table","chaise","cuisine"];
productNames.forEach(element => {
    console.log("dans le tableau il y a" + element);
    
    
});

function productNames() {
    
}

productNames.forEach((element,index) => {
    console.log(element+ " est en position:" +index);
    
});
