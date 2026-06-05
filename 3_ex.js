// AULA 11 - Exercício 3: Lendo uma matriz 3x3 (5/6/2026)

// Mais uma vez, mesma base de código do exercício 1.
function Array2Matrix (someArray, howManyLines) {
    let elementCounter; 
    let daMatrix; 
    let howManyColumns; 
    let lineCounter; 
    let columnCounter; 
    
    howManyColumns = parseInt(someArray.length / howManyLines);
    elementCounter = 0;
    daMatrix = []; 

    for (lineCounter = 0; lineCounter < howManyLines; lineCounter++) {
        daMatrix[lineCounter] = [];
        for (columnCounter = 0; columnCounter < howManyColumns; columnCounter++) {
            daMatrix[lineCounter][columnCounter] = parseInt(someArray[elementCounter]);
            elementCounter++; 
        }
    }
    
    return daMatrix;
}

let inputThingy;
let arrayOfTheInput;
let lineAmount;
let outputMatrix;
let i; 
let j; 

inputThingy = prompt('Digite nove inteiros espaçados -->  '); // Entrada esperada: "1 2 3 4 5 6 7 8 9"
arrayOfTheInput = inputThingy.split(' ');

lineAmount = parseInt(prompt('Quantas linhas você deseja ter? -->  ')); // Entrada esperada: "3"

outputMatrix = Array2Matrix(arrayOfTheInput, lineAmount);

for (i = 0; i < outputMatrix.length; i++) {
    for (j = 0; j < outputMatrix[i].length; j++) {
        console.log(outputMatrix[i][j]);
    }
}
