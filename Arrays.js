// Création d'un tableau
// Il existe plusieurs façons de créer un tableau en JavaScript :

// let fruits = ["Pomme", "Banane", "Orange"]; // Tableau de chaînes
// let nombres = [1, 2, 3, 4, 5]; // Tableau de nombres
// let mixte = [1, "Texte", true, { nom: "JS" }]; // Tableau mixte
// let vide = new Array(); // Création avec le constructeur Array

// 🔹 Accès aux éléments et modification
// On accède aux éléments d'un tableau via leur index (commence à 0).

// console.log(fruits[0]); // "Pomme"
// fruits[1] = "Mangue"; // Modifier un élément
// console.log(fruits.length); // 3 → Nombre d'éléments dans le tableau
//!-----------------------------------------------------------------
// 🔄 Itération sur un Tableau en JavaScript
// L'itération consiste à parcourir un tableau élément
// par élément pour exécuter une action sur chaque valeur.

// 🔹 1. Boucles classiques
// 🔸 Boucle for (classique)
// Array.prototype.extra = "Ne devrait pas être ici !";
// let fruits = ["Pomme", "Banane", "Orange"];
// console.log("boucle for");
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]); // Affiche : Pomme, Banane, Orange
// }

// 🔸 Boucle while
// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// 🔹 2. Méthodes d’itération modernes
// 🔸 forEach()
// Exécute une fonction pour chaque élément du tableau.
// fruits.forEach((fruit) => console.log(index + ": " + fruit));

// 🔸 for...of (ES6)
// Permet de parcourir directement les valeurs d'un tableau.
// est simple et lisible.
// for (let fruit of fruits) {
//   console.log(fruit);
// }
// 🔸 for...in (⚠️ à utiliser avec prudence)
// Parcourt les index du tableau (et non les valeurs).

// for (let index in fruits) {
//   //   console.log(typeof index);
//   console.log(index + ": " + fruits[index]);
// }

// ⚠️ Attention : for...in peut récupérer des propriétés
//  non désirées si le tableau
//  est étendu avec des propriétés personnalisées.

// ⚠️ Problèmes avec for...in sur un tableau en JavaScript
// La boucle for...in est utilisée pour parcourir les propriétés
// d'un objet, mais elle peut poser des problèmes lorsqu'on
//  l'utilise avec un tableau.

// 🔹 Problème 1 : for...in récupère les index sous forme de chaînes
// Contrairement à for...of ou forEach(),
// for...in ne donne pas directement les valeurs du
// tableau mais les index sous forme de chaînes.

// let fruits = ["Pomme", "Banane", "Orange"];

// for (let index in fruits) {
//   console.log(typeof index); // "string", alors qu'on s'attend à un nombre
//   console.log(index, fruits[index]); // Index sous forme de texte
// }

// 🔹 Problème 2 : for...in peut inclure des propriétés
// ajoutées au prototype Si des propriétés personnalisées
// sont ajoutées à Array.prototype,elles seront aussi parcourues,
// ce qui peut causer des erreurs.

// Array.prototype.extra = "Ne devrait pas être ici !";

// let fruits = ["Pomme", "Banane", "Orange"];

// Affiche aussi : extra "Ne devrait pas être ici !" 😱
// ❌ for...in est déconseillé pour les tableaux en raison des problèmes
// d'index sous forme de chaînes et des propriétés héritées du prototype.
// ✅ Utiliser plutôt for...of, forEach(), ou une boucle for classique
// pour éviter les erreurs.
//!------------------------------------------------
//? Méthodes principales des tableaux
//? fonctions de manipulation des tableaux (Arrays)

// 🔹 Conclusion
// Les tableaux sont indispensables en JavaScript pour stocker
// et manipuler des données. Grâce à leurs nombreuses méthodes,
// ils permettent de trier, filtrer,
// transformer et parcourir facilement des ensembles d'éléments.

let arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5 → Retourne la longueur du tableau
console.log("before push");
console.log(arr);
console.log("after push");
console.log(arr.push(6));
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.unshift(10));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.slice(2, 4));
console.log(arr.concat([7, 10]));
console.log(arr);
console.log(arr.splice(1, 1));
console.log(arr);
console.log(arr.splice(3, 1, 4.5));
console.log(arr);
console.log(arr.splice(1, 2, 1.5));
console.log(arr);
console.log(arr.splice(1, 2, 1.5));
console.log(arr);
arr = [1, 2, 3, 4, 5];
// console.log(arr.splice());
console.log(arr.splice(2, 2, [1, 3, 5]));
console.log(arr); //
arr = [-1, 2, 3, 4.1, 4, 2, 2, 5];
console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(2));

console.log(arr.find((x) => x > 3));
console.log(arr.findIndex((x) => x > 3));
console.log(arr.every((x) => x > 0));
let names = ["saad", "khalid", "farah", "oussama", "ahmed"];
// console.log(arr.sort());
console.log(names.reverse());
console.log(names.join("#"));

//+++++++++ all about arrays in js +++++++++++

//=====================  arrays => tableaux ============================================
// Qu'est-ce qu'un tableau en JavaScript ?
// Un tableau (Array) en JavaScript est une structure de
// données qui permet de stocker plusieurs valeurs dans une seule variable.
// Il peut contenir des nombres, des chaînes de caractères,
// des objets, voire d'autres tableaux (tableaux imbriqués).

// Création d'un tableau
// Il existe plusieurs façons de créer un tableau en JavaScript :

// let fruits = ["Pomme", "Banane", "Orange"]; // Tableau de chaînes
// let nombres = [1, 2, 3, 4, 5]; // Tableau de nombres
// let mixte = [1, "Texte", true, { nom: "JS" }]; // Tableau mixte
// let vide = new Array(); // Création avec le constructeur Array

// // 🔹 Accès aux éléments et modification
// // On accède aux éléments d'un tableau via leur index (commence à 0).

// console.log(fruits[0]); // "Pomme"
// fruits[1] = "Mangue"; // Modifier un élément
// console.log(fruits.length); // 3 → Nombre d'éléments dans le tableau
// //!-----------------------------------------------------------------
// // 🔄 Itération sur un Tableau en JavaScript
// // L'itération consiste à parcourir un tableau élément
// // par élément pour exécuter une action sur chaque valeur.

// // 🔹 1. Boucles classiques
// // 🔸 Boucle for (classique)

// let fruits = ["Pomme", "Banane", "Orange"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]); // Affiche : Pomme, Banane, Orange
// }

// // 🔸 Boucle while
// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// // 🔹 2. Méthodes d’itération modernes
// // 🔸 forEach()
// // Exécute une fonction pour chaque élément du tableau.
// fruits.forEach(function (fruit, index) {
//   console.log(index + ": " + fruit);
// });

// // 🔸 for...of (ES6)
// // Permet de parcourir directement les valeurs d'un tableau.
// // est simple et lisible.
// for (let fruit of fruits) {
//   console.log(fruit);
// }
// // 🔸 for...in (⚠️ à utiliser avec prudence)
// // Parcourt les index du tableau (et non les valeurs).
// for (let index in fruits) {
//   console.log(index + ": " + fruits[index]);
// }

// // ⚠️ Attention : for...in peut récupérer des propriétés
// //  non désirées si le tableau
// //  est étendu avec des propriétés personnalisées.

// // ⚠️ Problèmes avec for...in sur un tableau en JavaScript
// // La boucle for...in est utilisée pour parcourir les propriétés
// // d'un objet, mais elle peut poser des problèmes lorsqu'on
// //  l'utilise avec un tableau.

// // 🔹 Problème 1 : for...in récupère les index sous forme de chaînes
// // Contrairement à for...of ou forEach(),
// // for...in ne donne pas directement les valeurs du
// // tableau mais les index sous forme de chaînes.

// let fruits = ["Pomme", "Banane", "Orange"];

// for (let index in fruits) {
//   console.log(typeof index); // "string", alors qu'on s'attend à un nombre
//   console.log(index, fruits[index]); // Index sous forme de texte
// }

// // 🔹 Problème 2 : for...in peut inclure des propriétés
// // ajoutées au prototype Si des propriétés personnalisées
// // sont ajoutées à Array.prototype,elles seront aussi parcourues,
// // ce qui peut causer des erreurs.

// Array.prototype.extra = "Ne devrait pas être ici !";

// let fruits = ["Pomme", "Banane", "Orange"];

// for (let index in fruits) {
//   console.log(index, fruits[index]);
// }
// // Affiche aussi : extra "Ne devrait pas être ici !" 😱
// // ❌ for...in est déconseillé pour les tableaux en raison des problèmes
// // d'index sous forme de chaînes et des propriétés héritées du prototype.
// // ✅ Utiliser plutôt for...of, forEach(), ou une boucle for classique
// // pour éviter les erreurs.

// // 🔹 Création et accès aux éléments
// let arr = [1, 2, 3, 4, 5];

// console.log(arr.length);        // 5 → Retourne la longueur du tableau
// console.log(arr[0]);            // 1 → Accède au premier élément
// console.log(arr.at(-1));        // 5 → Accède au dernier élément (ES2022)
// console.log(Array.isArray(arr)); // true → Vérifie si c'est un tableau

// // 🔹 Ajout et suppression d'éléments
// arr.push(6);  // Ajoute à la fin → [1, 2, 3, 4, 5, 6]
// arr.pop();    // Supprime le dernier élément → [1, 2, 3, 4, 5]
// arr.unshift(0); // Ajoute au début → [0, 1, 2, 3, 4, 5]
// arr.shift();  // Supprime le premier élément → [1, 2, 3, 4, 5]

// // 🔹 Extraction et copie
// console.log(arr.slice(1, 4));  // [2, 3, 4] → Extrait une partie du tableau
// console.log(arr.concat([6, 7])); // [1, 2, 3, 4, 5, 6, 7] → Concatène des tableaux
// console.log([...arr, 6, 7]);  // [1, 2, 3, 4, 5, 6, 7] → Même chose avec le spread operator

// // 🔹 Suppression, remplacement et insertion
// arr.splice(2, 1);  // Supprime 1 élément à l'index 2 → [1, 2, 4, 5]
// arr.splice(2, 0, 3); // Insère 3 à l'index 2 → [1, 2, 3, 4, 5]
// arr.splice(1, 2, 8, 9); // Remplace deux éléments → [1, 8, 9, 4, 5]

// // 🔹 Recherche d'éléments
// console.log(arr.indexOf(4));  // 3 → Index de 4
// console.log(arr.lastIndexOf(4)); // 3 → Dernière occurrence de 4
// console.log(arr.includes(9));  // true → Vérifie si 9 est présent
// console.log(arr.find(x => x > 3)); // 4 → Premier élément > 3
// console.log(arr.findIndex(x => x > 3)); // 3 → Index du premier > 3
// console.log(arr.some(x => x > 10)); // false → Vérifie si au moins un élément > 10
// console.log(arr.every(x => x > 0)); // true → Vérifie si tous les éléments > 0

// // 🔹 Itération et transformation
// arr.forEach(x => console.log(x)); // Affiche chaque élément
// console.log(arr.map(x => x * 2)); // [2, 16, 18, 8, 10] → Double chaque élément
// console.log(arr.filter(x => x % 2 === 0)); // [8, 4] → Garde les pairs
// console.log(arr.reduce((sum, x) => sum + x, 0)); // 27 → Somme des éléments
// console.log(arr.reduceRight((acc, x) => acc + x, 0)); // 27 → Idem mais de droite à gauche

// // 🔹 Tri et inversion
// console.log(arr.sort());  // Trie par ordre alphabétique (attention avec les nombres !)
// console.log(arr.sort((a, b) => a - b));  // Tri croissant
// console.log(arr.sort((a, b) => b - a));  // Tri décroissant
// console.log(arr.reverse());  // Inverse l'ordre

// // 🔹 Transformation en chaîne de caractères
// console.log(arr.join("-"));  // "9-8-5-4-1" → Joint les éléments avec un séparateur
// console.log(arr.toString()); // "9,8,5,4,1" → Convertit en chaîne

// // 🔹 Remplissage et copie
// arr.fill(0, 1, 3); // Remplit avec 0 de l'index 1 à 3 → [9, 0, 0, 4, 1]
// console.log(arr.copyWithin(2, 0, 2)); // Copie une partie du tableau → [9, 0, 9, 0, 1]

// // 🔹 Nouveautés ES6+
// console.log(arr.flat()); // Aplati les tableaux imbriqués ([1, [2, 3], [4, 5]] → [1, 2, 3, 4, 5])
// console.log(arr.flatMap(x => [x, x * 2])); // Applique map() puis flat()
// console.log(Array.from("Hello")); // ['H', 'e', 'l', 'l', 'o'] → Convertit une chaîne en tableau
// console.log(Array.of(10, 20, 30)); // [10, 20, 30] → Crée un tableau à partir des arguments

// 🔹 Nouveautés ES2023+
// console.log(arr.toSorted()); // Trie sans modifier l'original
// console.log(arr.toReversed()); // Inverse sans modifier l'original
// console.log(arr.toSpliced(1, 2, 99)); // Remplace sans modifier l'original
// console.log(arr.with(2, 42)); // Remplace l'élément à l'index 2 sans modifier l'original
