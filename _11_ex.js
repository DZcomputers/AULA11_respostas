// AULA 10 - Exercício 11: Linha Na Matriz (feito e resolvido 9/6/2026)

function MatrixGenerator (someArray, lineNums) {
    let columnNums;
    let elementCounter;
    let lineCounter;
    let columnCounter;
    let daMatrix;
    
    daMatrix = [];
    elementCounter = 0;
    columnNums = parseInt(someArray.length / lineNums);
    
    for (lineCounter = 0; lineCounter < lineNums; lineCounter++) {
        daMatrix[lineCounter] = [];
        for (columnCounter = 0; columnCounter < columnNums; columnCounter++) {
            daMatrix[lineCounter][columnCounter] = parseFloat(someArray[elementCounter]);
            elementCounter++
        }
    }
    
    return daMatrix;
}

function LineSum (line, matrix) {
    let columnNum;
    let daSum;
    
    daSum = 0;
    
    for (columnNum = 0; columnNum < matrix[line].length; columnNum++) {
        daSum+=matrix[line][columnNum];
    }
    
    return daSum;
}

function LineAverage (lineAgain, matrixAgain) {
    let sumOfEverything;
    let daAverage;
    
    sumOfEverything = LineSum(lineAgain, matrixAgain);
    daAverage = (sumOfEverything / matrixAgain[lineAgain].length);
    
    return daAverage;
}

let actualMatrix;
let operationString;
let lineNumber;
let resultToShow;
let thatsALottaNumbers;
let arrayOfALottaNumbers;
let parserOfALottaNumbers;
let nowTheyreActuallyNumbers;

lineNumber = parseInt(prompt('Digite a linha na qual uma operação será realizada -->  '));
operationString = prompt('Digite a operação a ser realizada com os elementos dela -->  ');

thatsALottaNumbers = prompt('Digite os floats desejados -->  ');
arrayOfALottaNumbers = thatsALottaNumbers.split(' ');
nowTheyreActuallyNumbers = [];

for (parserOfALottaNumbers = 0; parserOfALottaNumbers < arrayOfALottaNumbers.length; parserOfALottaNumbers++) {
    nowTheyreActuallyNumbers[parserOfALottaNumbers] = parseFloat(arrayOfALottaNumbers[parserOfALottaNumbers]);
}

actualMatrix = MatrixGenerator(nowTheyreActuallyNumbers, 12);

switch (operationString) {
    case "S":
        resultToShow = LineSum(lineNumber, actualMatrix);
    break;
    
    case "M":
        resultToShow = LineAverage(lineNumber, actualMatrix);
    break;
}

console.log(resultToShow.toFixed(1));
