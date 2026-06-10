function MatrixGenerator (lineNums, columnNums) {
    let daMatrix;
    let numberInMatrix;
    let lineCounter;
    let columnCounter;
    
    daMatrix = [];
    numberInMatrix = 1;
    
    for (lineCounter = 0; lineCounter < lineNums; lineCounter++) {
        daMatrix[lineCounter] = [];
        for (columnCounter = 0; columnCounter < columnNums; columnCounter++) {
            daMatrix[lineCounter][columnCounter] = numberInMatrix;
            numberInMatrix++;
        }
    }
    
    return daMatrix;
}

function MatrixTransposer (matrix) {
    let transposedMatrix;
    let lineIndex;
    let columnIndex;
    
    transposedMatrix = [];

    for (columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
        transposedMatrix[columnIndex] = [];
        for (lineIndex = 0; lineIndex < matrix.length; lineIndex++) {
            transposedMatrix[columnIndex][lineIndex] = matrix[lineIndex][columnIndex];
        }
    }
    
    return transposedMatrix;
}

const someMatrix = MatrixGenerator(2, 3);
const transposedVersionOfSomeMatrix = MatrixTransposer(someMatrix);

console.log(someMatrix);
console.log(transposedVersionOfSomeMatrix);
