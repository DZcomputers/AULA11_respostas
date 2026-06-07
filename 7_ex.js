// AULA 11 - Exercício 7: Busca em matriz (feito e resolvido 7/6/2026)
// Irei usar as mesmas funções do exercício passado por pura conveniência.

function StringArray2NumArray (stringArray) {
    let parserCounter; 
    let numArray; 
    
    numArray = [];
    
    for (parserCounter = 0; parserCounter < stringArray.length; parserCounter++) {
        numArray[parserCounter] = parseInt(stringArray[parserCounter]);
    }
    
    return numArray;
}

function MakeMatrix (someArray, lineNums) {
    let columnNums;
    let columnCounter; 
    let lineCounter; 
    let daMatrix;
    let elementNums;
    
    columnNums = parseInt(someArray.length / lineNums);
    
    daMatrix = [];
    elementNums = 0;

    for (lineCounter = 0; lineCounter < lineNums; lineCounter++) {
        daMatrix[lineCounter] = [];
        for (columnCounter = 0; columnCounter < columnNums; columnCounter++) {
            daMatrix[lineCounter][columnCounter] = parseInt(someArray[elementNums]);
            elementNums++;
        }
    }
    
    return daMatrix;
}

// COISAS DE ARRAY:
let inputForArray;
let arrayOfInputs;
let actualArray;
let actualMatrix;
let lines;

// COISAS DE BUSCA:
let numToFind;
let lineOfFoundNum;
let columnOfFoundNum;

inputForArray = prompt('Digite uma sequência de inteiros -->  ');
arrayOfInputs = inputForArray.split(' ');
lines = parseInt(prompt('Digite o número de linhas da matriz -->  '));
numToFind = parseInt(prompt('Digite o número a ser achado -->  '));

actualArray = StringArray2NumArray(arrayOfInputs);
actualMatrix = MakeMatrix(actualArray, lines);

// Percorrendo a matriz para achar o valor e parar o loop quando achar de fato.
for (lineOfFoundNum = 0; lineOfFoundNum < actualMatrix.length; lineOfFoundNum++) {
    for (columnOfFoundNum = 0; columnOfFoundNum < actualMatrix[lineOfFoundNum].length; columnOfFoundNum++) {
        if (numToFind == actualMatrix[lineOfFoundNum][columnOfFoundNum]) {
            console.log(`Valor encontrado\nLinha: ${lineOfFoundNum}\nColuna: ${columnOfFoundNum}`);
            break;
        }
    }
}
