// Accès aux caractères
console.log("Hello".charAt(1)); // "e"  → Retourne le caractère à l'index donné
console.log("ABC".charCodeAt(0)); // 65   → Retourne le code Unicode du caractère
console.log("Hello".at(-1)); // "o"  → Retourne le dernier caractère
console.log("Hello".length); // 5    → Retourne la longueur de la chaîne

// Modification du texte
console.log("hello".toUpperCase()); // "HELLO"  → Convertit en majuscules
console.log("HELLO".toLowerCase()); // "hello"  → Convertit en minuscules
console.log("  hello  ".trim()); // "hello"  → Supprime les espaces
console.log("  hello".trimStart()); // "hello"  → Supprime les espaces au début
console.log("hello  ".trimEnd()); // "hello"  → Supprime les espaces à la fin
console.log("Hello world".replace("world", "JS")); // "Hello JS" → Remplace la première occurrence
console.log("Hello world world".replaceAll("world", "JS")); // "Hello JS JS" → Remplace toutes les occurrences

// Recherche dans une chaîne
console.log("JavaScript".indexOf("Script")); // 4   → Retourne l'index de la première occurrence
console.log("JavaScriptScript".lastIndexOf("Script")); // 10 → Retourne l'index de la dernière occurrence
console.log("Hello".includes("H")); // true → Vérifie si la chaîne contient "H"
console.log("Hello".startsWith("H")); // true → Vérifie si la chaîne commence par "H"
console.log("Hello".endsWith("o")); // true → Vérifie si la chaîne se termine par "o"

// Extraction de sous-chaînes
console.log("JavaScript".slice(0, 4)); // "Java"  → Extrait une portion de la chaîne
console.log("JavaScript".substring(0, 4)); // "Java" → Similaire à slice()
console.log("JavaScript".substr(4, 6)); // "Script" → (Obsolète)

// Division et fusion de chaînes
console.log("a,b,c".split(",")); // ["a", "b", "c"] → Divise la chaîne en tableau
console.log(["a", "b", "c"].join("-")); // "a-b-c" → Joint les éléments du tableau en une chaîne

// Répétition et Padding
console.log("Hi".repeat(3)); // "HiHiHi" → Répète la chaîne 3 fois
console.log("42".padStart(5, "0")); // "00042" → Ajoute des zéros au début
console.log("42".padEnd(5, "0")); // "42000" → Ajoute des zéros à la fin

// Conversion et encodage
console.log(new String("Hello").toString()); // "Hello" → Convertit un objet String en chaîne
console.log(new String("Hello").valueOf()); // "Hello" → Retourne la valeur primitive
console.log("é".normalize("NFC")); // "é" → Normalise une chaîne Unicode

// Expressions régulières (RegExp)
console.log("hello".match(/l/g)); // ["l", "l"] → Retourne un tableau des correspondances
console.log(Array.from("hello".matchAll(/l/g))); // [Array(1), Array(1)] → Retourne un itérateur
console.log("hello".search(/l/)); // 2 → Retourne l’index de la première correspondance
console.log("hello".replace(/l/, "L")); // "heLlo" → Remplace la première correspondance
console.log("hello".replaceAll(/l/g, "L")); // "heLLo" → Remplace toutes les correspondances

// Autres méthodes
console.log("a".localeCompare("b")); // -1 → Compare deux chaînes selon la locale
console.log("Hello".concat(" ", "World")); // "Hello World" → Concatène plusieurs chaînes

// Nouveautés ES2023+
console.log("Hello".isWellFormed()); // true → Vérifie si la chaîne est bien formée en UTF-16
console.log("Hello".toWellFormed()); // "Hello" → Convertit en version bien formée
