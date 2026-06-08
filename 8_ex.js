// AULA 11 - Exercício 8: Soma de cada linha (feito e resolvido 8/6/2026)

// Função que converte um array em uma matriz de N linhas e [quantidade de elementos no array] / N colunas.
function MatrixFromNumArray (someArray, lineNums) {
    let columnNums; // Inteiro. Quantidade de colunas.
    let lineCounter; // Inteiro. Contador responsável por criar uma nova linha a cada iteração.
    let columnCounter; // Inteiro. Contador responsável por adicionar elementos à linha no. [iteração atual de lineCounter].
    let daMatrix; // A matriz propriamente dita.
    let elementIndex; // Inteiro. Contador que corresponde ao índice - no array! - do elemento a ser inserido.
    
    columnNums = parseInt(someArray.length / lineNums);
    elementIndex = 0;
    daMatrix = []; // Inicializando a matriz para não dar undefined.
    
    // Loop externo: incializa uma linha nova cada iteração.
    for (lineCounter = 0; lineCounter < lineNums; lineCounter++) {
        daMatrix[lineCounter] = [];
        // Loop interno: adiciona os elementos à linha correspondente à iteração atual e reseta quando atingir columnNums.
        for (columnCounter = 0; columnCounter < columnNums; columnCounter++) {
            daMatrix[lineCounter][columnCounter] = someArray[elementIndex];
            elementIndex++;
        }
    }
    
    return daMatrix;
}

// Função que automaticamente converte um array de strings em um array de números.
function StringArr2NumArr (stringArray) {
    let numArray; // Array de números.
    let parserCounter; // Inteiro. Corresponde ao índice do elemento a ser convertido.
    
    numArray = []; // Inicializando o array para não dar undefined.
    
    // Converte o elemento do índice parserCounter em um inteiro e armazena no array de números a ser retornado.
    for (parserCounter = 0; parserCounter < stringArray.length; parserCounter++) {
        numArray[parserCounter] = parseInt(stringArray[parserCounter]);
    }
    
    return numArray;
}

let currentLineSum;
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

currentLineSum = 0;

// Loop externo: responsável por inicializar currentLineSum a zero - uma vez que cada linha há uma soma diferente.
for (i = 0; i < actualMatrix.length; i++) {
    currentLineSum = 0;
    for (j = 0; j < actualMatrix[i].length; j++) {
        currentLineSum += actualMatrix[i][j];
        if (j == actualMatrix[i].length - 1) { // Se j corresponde ao último índice, imprime a soma e pare o loop interno.
            console.log(`Soma da linha ${i}: ${currentLineSum}`);
            break;
        }
    }
}
