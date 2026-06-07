// AULA 11 - Exercício 6: Maior valor e posição (feito e resolvido 7/6/2026)

// Conversão automática do tipo de dado do array (array 1D) a ser convertido em matriz (array 2D).
function StringArray2NumArray (stringArray) {
    let parserCounter; // Inteiro. Corresponde ao índice do elemento a ser convertido.
    let numArray; 
    
    numArray = [];
    
    // Conversão string -> número.
    for (parserCounter = 0; parserCounter < stringArray.length; parserCounter++) {
        numArray[parserCounter] = parseInt(stringArray[parserCounter]);
    }
    
    return numArray;
}

// Conversor array -> matriz.
function MakeMatrix (someArray, lineNums) {
    let columnNums; // Inteiro. Número de colunas.
    let columnCounter; // Inteiro. Contador que adiciona elementos novos a cada iteração até atingir um número menor do que columnNums.
    let lineCounter; // Inteiro. Contador que adiciona linhas novas a cada iteração.
    let daMatrix; // A matriz propriamente dita.
    let elementNums; // Inteiro. Desempenha um papel similar ao parserCounter da função StringArray2NumArray.
    
    columnNums = parseInt(someArray.length / lineNums);
    
    daMatrix = []; // Inicializando a matriz para não dar undefined.
    elementNums = 0;
    
    // Criação da matriz.
    for (lineCounter = 0; lineCounter < lineNums; lineCounter++) {
        daMatrix[lineCounter] = [];
        for (columnCounter = 0; columnCounter < columnNums; columnCounter++) {
            daMatrix[lineCounter][columnCounter] = parseInt(someArray[elementNums]);
            elementNums++;
        }
    }
    
    return daMatrix;
}

// Escopo global. 
// A lógica do algoritmo do maior é adaptada de "https://github.com/DZcomputers/JSexercises/blob/main/Personal/Biggest%2C%20Index%20and%20Position%20(Array).js".

////// ---- COISAS DE ARRAY ---- \\\\\\
let inputForArray; // A entrada.
let stringArray; // Array formado pelos strings da entrada.
let finalArray; // Array convertido de stringArray.
let finalMatrix; // Matriz convertida a partir dos elementos de stringArray.
let numOfLines; // Inteiro. Número de linhas que "finalMatrix" terá.

///// ---- COISAS DO MAIOR ---- \\\\\
let daBiggest; // Inteiro. O maior valor dentro da matriz. Será inicializado como o elemento inicial e verificado em um loop.
let biggestLineCounter; // Inteiro. Contador que será iterado no loop externo quando biggestColumnCounter chegar a finalMatrix[biggestLineCounter].length.
let biggestColumnCounter; // Inteiro. Contador que será resetado quando atingir finalMatrix[biggestLineCounter].length.
let lineIndexOfBiggest; // Inteiro. O índice da linha do maior.
let columnIndexOfBiggest; // Inteiro. O índice da coluna do maior.


// Entradas e conversões.
inputForArray = prompt('Digite uma sequência de inteiros -->  ');
numOfLines = parseInt(prompt('Digite quantas linhas terá essa matriz -->  '));

stringArray = inputForArray.split(' ');
finalArray = StringArray2NumArray(stringArray);

finalMatrix = MakeMatrix(finalArray, numOfLines);

// Inicializando a variável do maior.
daBiggest = finalMatrix[0][0];

// Loop para achar o maior definitivo.
for (biggestLineCounter = 0; biggestLineCounter < finalMatrix.length; biggestLineCounter++) {
   for (biggestColumnCounter = 0; biggestColumnCounter < finalMatrix[biggestLineCounter].length; biggestColumnCounter++) {
       if (finalMatrix[biggestLineCounter][biggestColumnCounter + 1] > daBiggest) {
           daBiggest = finalMatrix[biggestLineCounter][biggestColumnCounter + 1];
           lineIndexOfBiggest = biggestLineCounter;
           columnIndexOfBiggest = biggestColumnCounter + 1;
       }
   } 
}

// Saída.
console.log(`Maior valor: ${daBiggest}\nLinha: ${lineIndexOfBiggest}\nColuna: ${columnIndexOfBiggest}`);
