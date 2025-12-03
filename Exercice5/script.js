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

// // }
// // let exprixht= 100;
// // const TVA = 0.2;
// // let TTC= exprixht + exprixht * TVA

// // console.log(exprixht);
// // console.log(TVA);
// // console.log(TTC);




// // // - Définir une autre fonction (formatPrice(price)) qui :
// // //     • reçoit un prix ( type :nombre)
// // //     • arrondit ce prix à 2 décimales
// // //     • ajoute le symbole de la monnaie
// // //     • renvoie le résultat sous forme de texte
// // //       (indice : il existe une méthode pour formater un nombre avec un certain nombre de décimales)
// // function formatPrix (prix){
   
// //  let rounded = prix.toFixed(2);
// //  let formatted= rounded.replace (".",",")+ "$";
// //  return formatted;

// // }
// // let prix = 19.99;

// // // - Tester ces fonctions :
// // //     • appeler la fonction de calcul du TTC avec différents prix HT
// // //     • passer le résultat dans la fonction de formatage
// // //     • afficher le résultat final dans la console








// // // Tests simples
// // const testPrice1 = calculatePriceTTC(10);
// // const testPrice2 = calculatePriceTTC(19.99);

// // console.log("Test 1 TTC formaté :", formatPrice(testPrice1));
// // console.log("Test 2 TTC formaté :", formatPrice(testPrice2));

// /*************************************************
//  * EXERCICE 4 - Fonctions de prix
//  * Notions : function, paramètres, return, toFixed
//  *************************************************/

// /* --- Correction Exercice 1, 2 & 3 --- */

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

// // const TVA = 0.2;
// // let examplePriceHT = 20;
// // let examplePriceTTC = examplePriceHT + examplePriceHT * TVA;
// // let salesCount = 2;

// // /* --- Nouveautés Exercice 4 --- */

// // // Fonction qui calcule un prix TTC à partir d'un prix HT
// // function calculatePriceTTC(priceHT) {
// //   return priceHT + priceHT * TVA;
// // }

// // // Fonction qui formate un prix en "xx,xx €"
// // function formatPrice(price) {
// //   return price.toFixed(2).replace(".", ",") + " €";
// // }

// // // Tests dans la console
// // console.log("Prix TTC pour 10€ HT :", formatPrice(calculatePriceTTC(10)));
// // console.log(
// //   "Prix TTC pour 19,99€ HT :",
// //   formatPrice(calculatePriceTTC(19.99))
// // );

// // /* --- Rendu visuel Exo 4 --- */

// // const cartMessageElement = document.getElementById("cart-message");
// // if (cartMessageElement) {
// //   cartMessageElement.textContent =
// //     "Les fonctions de calcul et de formatage des prix sont prêtes ✅";
// // }

// // console.log("Exercice 4 chargé ✅");

// // EXERCICE-5

// // - Créer des variables pour :
// //   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)
// let featuredProductName = KISSEA;
// let featuredProductPriceHT = 50;
// let featuredProductDescription= "une tshirt pas cher en coton youpi";
// let featuredProductImage = "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";
// // - Récupérer la section HTML où afficher le produit
// //   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)
// const productList=document.getElementById("product-list")

// // - Définir une fonction (createFeaturedProductCard()) qui :
// //     • crée un conteneur pour la carte  

// function createFeaturedProductCard() {
//     let cardcontainer=document.createElement("cardcontainer")
//     let article =document.createElement("article");

// }
// //       (indice : il existe une méthode du DOM pour créer un élément HTML)
// //     • crée une image :
// let img = document.createElement("img"); 
// img.src = featuredProductImage;
// img.alt=featuredProductName;
// img.classList.add("product-image")
// //         - lui donner la source de l'image
// //       (indice : pensez aux propriétés des balises <img>)
// //     • crée un titre et lui mettre le nom du produit  
// const title= document.createElement("h3");
// title.textContent=featuredProductName;
// title.classList.add("product-title");

// //       (indice : une propriété permet d’écrire du texte dans un élément)
// //     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent

// function calculatepricettc (prixht){

// let prixttc = prixht + (prixht * TVA);


// }
// //       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
// //     • formate ce prix TTC avec la fonction prévue pour ça
// formatPrice(calculatePriceTTC)
// //     • crée un paragraphe pour afficher le prix TTC
// let p = document.createElement("prix ttc");
// p.textContent = prixttc;
// //     • crée un autre paragraphe pour la description
// let p = document.createElement("description");
// //     • assemble tous les éléments dans le conteneur
// //       (indice : pensez à une méthode qui ajoute un enfant dans un élément)
// cardcontainer.appendChild(h1,p);

// //     • retourne ce conteneur
// return cardcontainer;
// // - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
// //   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)
// product-list.innerHTML = "";
// // - Appeler la fonction pour créer la carte
// createFeaturedProductCard();
// // - Ajouter le résultat dans la section prévue
// //   (indice : même méthode que pour assembler les éléments dans la carte)

/* --- Nouveautés Exercice 5 --- */
/* Afficher un produit vedette dans la page (sans objets) */

// 1) Variables du produit vedette
let featuredProductName = "kissea ";
let featuredProductPriceHT = 19.99;
let featuredProductDescription = "salut terr";
let featuredProductImage = "https://images.unsplash.com/photo-1561347981-969c80cf4463?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// 2) Récupération de la section qui accueillera le produit
const productList = document.getElementById("product-list");

// 3) Fonction de création de la carte produit
function createFeaturedProductCard() {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = featuredProductImage;
  img.alt = featuredProductName;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = featuredProductName;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(featuredProductPriceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = featuredProductDescription;
  desc.classList.add("product-description");

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

// 4) Affichage du produit vedette dans la page
  productList.innerHTML = "";
  const card = createFeaturedProductCard();
  productList.appendChild(card);

console.log("Exercice 5 chargé ✅");