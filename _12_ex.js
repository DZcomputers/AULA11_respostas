// AULA 10 - Exercício 12: Área Superior (feito e resolvido 9/6/2026)

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


let actualMatrix;
let operationString;
let sumOfElementsInArea;
let currentLine;
let columnCounter;
let thatsALottaNumbers;
let arrayOfALottaNumbers;
let parserOfALottaNumbers;
let nowTheyreActuallyNumbers;

operationString = prompt('Digite a operação a ser realizada com os elementos dela -->  ');

thatsALottaNumbers = prompt('Digite os floats desejados -->  ');
arrayOfALottaNumbers = thatsALottaNumbers.split(' ');
nowTheyreActuallyNumbers = [];

for (parserOfALottaNumbers = 0; parserOfALottaNumbers < arrayOfALottaNumbers.length; parserOfALottaNumbers++) {
    nowTheyreActuallyNumbers[parserOfALottaNumbers] = parseFloat(arrayOfALottaNumbers[parserOfALottaNumbers]);
}

actualMatrix = MatrixGenerator(nowTheyreActuallyNumbers, 12);

sumOfElementsInArea = 0;

// Esse loop eu copiei e colei do Carubbi. Porquê a condição é essa por sinal?
for (currentLine = 0; currentLine < actualMatrix.length; currentLine++) {
    for (columnCounter = 0; columnCounter < actualMatrix[currentLine].length; columnCounter++) {
        if (columnCounter > currentLine && columnCounter < actualMatrix[currentLine].length - 1 - currentLine)
        sumOfElementsInArea+=actualMatrix[currentLine][columnCounter];
    }
}

switch (operationString) {
    case "S":
        console.log(sumOfElementsInArea.toFixed(1));
    break;
    
    case "M":
        console.log((sumOfElementsInArea / nowTheyreActuallyNumbers.length).toFixed(1));
    break;
}
