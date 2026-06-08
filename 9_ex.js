// AULA 11 - Exercício 9: Soma de cada coluna (feito e resolvido 8/6/2026)
// Irei usar as mesmas funções e variáveis globais do exercício passado por conveniência.

function MatrixFromNumArray (someArray, lineNums) {
    let columnNums; 
    let lineCounter; 
    let columnCounter;
    let daMatrix;
    let elementIndex;
    
    columnNums = parseInt(someArray.length / lineNums);
    elementIndex = 0;
    daMatrix = [];
    
    for (lineCounter = 0; lineCounter < lineNums; lineCounter++) {
        daMatrix[lineCounter] = [];
        for (columnCounter = 0; columnCounter < columnNums; columnCounter++) {
            daMatrix[lineCounter][columnCounter] = someArray[elementIndex];
            elementIndex++;
        }
    }
    
    return daMatrix;
}

function StringArr2NumArr (stringArray) {
    let numArray; 
    let parserCounter; 
    
    numArray = []; 

    for (parserCounter = 0; parserCounter < stringArray.length; parserCounter++) {
        numArray[parserCounter] = parseInt(stringArray[parserCounter]);
    }
    
    return numArray;
}

let currentColumnSum;
let inputForArray;
let stringArray;
let actualArray;
let arrayLines;
let actualMatrix;
let i; // lineCounter global.
let j; // columnCounter global.

inputForArray = prompt('Digite uma sequência de inteiros -->  ');
stringArray = inputForArray.split(' ');
actualArray = StringArr2NumArr(stringArray);

arrayLines = parseInt(prompt('Digite a quantidade de linhas da matriz -->  '));
actualMatrix = MatrixFromNumArray(actualArray, arrayLines);

currentColumnSum = 0;

/*  
    Como eu quero somar os elementos das COLUNAS agora, irei primeiro inicializar a variável da soma no contador das colunas 
    (que, dessa vez, será o loop externo) e somar no contador das linhas (que, dessa vez, será o loop interno).
*/

i = 0; // Só pra não dar undefined. Eu sei que é redundante.

for (j = 0; j < actualMatrix[i].length; j++) {
    currentColumnSum = 0;
    for (i = 0; i < actualMatrix.length; i++) {
        currentColumnSum += actualMatrix[i][j]; // ???
        if (i == actualMatrix.length - 1) {
            console.log(`Soma da coluna ${j}: ${currentColumnSum}`);
            break;
        }
    }
}
