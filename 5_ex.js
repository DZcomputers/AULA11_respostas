// AULA 11 - Exercício 5: Média geral da matriz (feito e resolvido 6/6/2026)

// Como uma parte se trata de uma soma, irei usar o mesmo código do exercício 4 - com algumas alterações para caber com o quesito do prof.
function NumericalMatrix (arrayOfNums, lines) {
    let elementAmount; 
    let columns; 
    let theActualMatrix; 
    let lineCount; 
    let columnCount; 
    
    columns = parseInt(arrayOfNums.length / lines);
    theActualMatrix = [];
    elementAmount = 0;
    
    for (lineCount = 0; lineCount < lines; lineCount++) {
        theActualMatrix[lineCount] = [];
        for (columnCount = 0; columnCount < columns; columnCount++) {
            theActualMatrix[lineCount][columnCount] = parseFloat(arrayOfNums[elementAmount]); // Ele quer floats (reais) dessa vez.
            elementAmount++;
        }
    }
    
    return theActualMatrix;
}

let daInput;
let inputArray;
let lineAmount;
let thisMatrix;
let daSum; 
let i; 
let j; 

daInput = prompt("Digite seis floats separados por espaço -->  ");
inputArray = daInput.split(" ");

lineAmount = parseInt(prompt("Digite quantas linhas terá a matriz -->  "));

thisMatrix = NumericalMatrix(inputArray, lineAmount);

daSum = 0;

for (i = 0; i < thisMatrix.length; i++) {
    for (j = 0; j < thisMatrix[i].length; j++) {
        daSum += thisMatrix[i][j];
    }
}

console.log(`Média: ${(daSum / inputArray.length).toFixed(1)}`); // Uma média é a soma de todos os elementos dividido pela quantidade de elementos.
