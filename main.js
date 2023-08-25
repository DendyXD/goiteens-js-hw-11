// Завдання 1

const names = ["Mango", "Poly", "Ajax"];

function logItems(array) {
    for (let i = 0; i < array.length; i += 1) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

logItems(names);

// Завдання 2

function calculateEngravingPrice(message, pricePerWord) {
    const engravingWords = message.split(" ");

    return engravingWords.length * pricePerWord;
}

console.log("Enrgaving price :>>>", calculateEngravingPrice("Hello World", 3));

// Завдання 3

let longestWord = "";

function findLongestWord(string) {
    const wordsArr = string.split(" ");

    longestWord = wordsArr[0];

    for (const word of wordsArr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log("Longest word :>>>", findLongestWord("apple coffee mouse gap"));

// Завдання 4

function formatString(string) {
    if (string.length > 40) {

        const modifiedString = string.split("");
        modifiedString.splice(40, modifiedString.length - 41);

        while (modifiedString[modifiedString.length - 1] === " " || modifiedString[modifiedString.length - 1] === "," || modifiedString[modifiedString.length - 1] === ".") {
            modifiedString.pop();
        }

        modifiedString.push("...");
        string = modifiedString.join("");

        return string;

    } else {
        return string;
    }
}

console.log("Formatted String :>>>", formatString("Коли ми говоримо про програмування, перше, що спадає на думку - це набір інструкцій у файлі."));

// Завдання 5

function checkForSpam(message) {

    if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
        return true;
    } else {
        return false;
    }
}

console.log(checkForSpam("SPAM sale"));


// Завдання 6

let input;
 
const numbers = [];
 
let total = 0;

do {
    input = prompt("Введіть число");
    if (Number.parseFloat(input) !== NaN) {
        numbers.push(Number(input));
    }
} while (input !== null);

if (numbers.length <= 0) {
    total = numbers.length;
}

console.log("Total numbers :>>>", total);
