// Accès aux caractères
let chTest = "hello";
let chTest1 = "hello";
let chTest2 = `hello`;
let name = "ahmed";
let age = 13;
let city = "sale";
console.log("helle " + name + " your age is " + age + " your city is " + city);
console.log(`hello ${name} your age is ${age} and your city is ${city}`);
let var1 = "hello javascript";
console.log(var1.length);
console.log(var1.charAt(var1.length - 1));
console.log(var1.at(-1));
// console.log("Hello".charAt(1)); // "e"  → Retourne le caractère à l'index donné
// console.log("Hello".at(-1)); // "o"  → Retourne le dernier caractère
// console.log("Hello".length); // 5    → Retourne la longueur de la chaîne

// // Modification du texte
console.log("edit String");
console.log("hello".toUpperCase()); // "HELLO"  → Convertit en majuscules
console.log("HELLO".toLowerCase()); // "hello"  → Convertit en minuscules
console.log("  hello  "); // "hello"  → Supprime les espaces
console.log("  hello  ".trim()); // "hello"  → Supprime les espaces
console.log("  hello".trimStart()); // "hello"  → Supprime les espaces au début
console.log("hello  ".trimEnd()); // "hello"  → Supprime les espaces à la fin
console.log("Hello javascript"); // "Hello JS" → Remplace la première occurrence
console.log("Hello javascript javascript".replace("javascript", "JS")); // "Hello JS" → Remplace la première occurrence
console.log("Hello javascript javascript".replaceAll("javascript", "JS")); // "Hello JS JS" → Remplace toutes les occurrences

// // Recherche dans une chaîne
console.log("JavaScript".indexOf("Script")); // 4   → Retourne l'index de la première occurrence
console.log("JavaScriptScript".lastIndexOf("Script")); // 10 → Retourne l'index de la dernière occurrence
console.log("test@gmail.com".includes("@")); // true → Vérifie si la chaîne contient "H"
console.log("Hello".startsWith("h")); // true → Vérifie si la chaîne commence par "H"
console.log("Hello".endsWith("com")); // true → Vérifie si la chaîne se termine par "o"
// ========= example one   =============
// let email = "testgmail.com";
// const isContains = email.includes("@");
// if (isContains && !email.startsWith(1)) {
//   console.log("email valid");
// } else {
//   console.error("email no valid");
// }
/// Extraction de sous-chaînes
let sStirng = "hello java".slice(0, 5);
console.log(sStirng);
console.log("JavaScript".slice(3, 5)); // "Java"  → Extrait une portion de la chaîne
console.log("JavaScript".substring(0, 4)); // "Java" → Similaire à slice()
console.log("JavaScript".substr(4, 6)); // "Script" → (Obsolète)

let email = "@gmailTEST.com";
let finding = "test";
let firstIndex = email.indexOf(finding); // 0
console.log(firstIndex);
let lastIndex = finding.length; // 4
// let varSlicing = email.slice(firstIndex, lastIndex);
let varSlicing = email.substr(firstIndex, lastIndex);
let newEmail = email.replace("gmail", "hotmail");
console.log("slicing" + varSlicing.toUpperCase());
console.log(`new email : ${newEmail}`);

// // Division et fusion de chaînes
// console.log("a,b,c".split(",")); // ["a", "b", "c"] → Divise la chaîne en tableau
// console.log(["a", "b", "c"].join("-")); // "a-b-c" → Joint les éléments du tableau en une chaîne

// // Répétition et Padding
// console.log("Hi".repeat(3)); // "HiHiHi" → Répète la chaîne 3 fois
// console.log("42".padStart(5, "0")); // "00042" → Ajoute des zéros au début
// console.log("42".padEnd(5, "0")); // "42000" → Ajoute des zéros à la fin

// // Conversion et encodage
// console.log(new String("Hello").toString()); // "Hello" → Convertit un objet String en chaîne
// console.log(new String("Hello").valueOf()); // "Hello" → Retourne la valeur primitive
// console.log("é".normalize("NFC")); // "é" → Normalise une chaîne Unicode

// // Expressions régulières (RegExp)
// console.log("hello".match(/l/g)); // ["l", "l"] → Retourne un tableau des correspondances
// console.log(Array.from("hello".matchAll(/l/g))); // [Array(1), Array(1)] → Retourne un itérateur
// console.log("hello".search(/l/)); // 2 → Retourne l’index de la première correspondance
// console.log("hello".replace(/l/, "L")); // "heLlo" → Remplace la première correspondance
// console.log("hello".replaceAll(/l/g, "L")); // "heLLo" → Remplace toutes les correspondances

// // Autres méthodes
// console.log("a".localeCompare("b")); // -1 → Compare deux chaînes selon la locale
// console.log("Hello".concat(" ", "World")); // "Hello World" → Concatène plusieurs chaînes

// // Nouveautés ES2023+
// console.log("Hello".isWellFormed()); // true → Vérifie si la chaîne est bien formée en UTF-16
// console.log("Hello".toWellFormed()); // "Hello" → Convertit en version bien formée
