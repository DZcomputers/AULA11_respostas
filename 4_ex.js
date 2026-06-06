// AULA 11 - Exercício 4: Soma de todos os elementos (feito e resolvido 6/6/2026)

// Função que gera uma matriz NxN a partir de um array de números.
function NumericalMatrix (arrayOfNums, lines) {
    let elementAmount; // Int. Contador que corresponde a quantidade de elementos no array inicial. Inicia com 0 - pois, em JS, esse é o índice inicial de um típico array - e itera para assegurar que nenhum elemento não seja adicionado na matriz.
    let columns; // Int. Representa o número de colunas - o número de elementos dividido pelo número de linhas.
    let theActualMatrix; // A matriz que será retornada.
    let lineCount; // Int. Contador que adiciona linhas novas a cada iteração.
    let columnCount; // Int. Contador que adiciona elementos novos a cada iteração até atingir um número menor do que "columns".
    
    columns = parseInt(arrayOfNums.length / lines);
    theActualMatrix = [];
    elementAmount = 0;
    
    for (lineCount = 0; lineCount < lines; lineCount++) {
        theActualMatrix[lineCount] = [];
        for (columnCount = 0; columnCount < columns; columnCount++) {
            theActualMatrix[lineCount][columnCount] = parseInt(arrayOfNums[elementAmount]);
            elementAmount++;
        }
    }
    
    return theActualMatrix;
}

let daInput;
let inputArray;
let lineAmount;
let thisMatrix;
let daSum; // Int. Número que será, em um loop, acumulado à medida que a matriz é percorrida.
let i; // Int. Contador de linhas do escopo global.
let j; // Int. Contador de colunas do escopo global.

// As duas últimas variáveis são responsáveis por percorrer a matriz e acumular seus elementos em "daSum".

// Coisas do array.
daInput = prompt("Digite nove inteiros separados por espaço -->  ");
inputArray = daInput.split(" ");

// Quantidade de linhas.
lineAmount = parseInt(prompt("Digite quantas linhas terá a matriz -->  "));

// Convertendo.
thisMatrix = NumericalMatrix(inputArray, lineAmount);

// Inicializando e acumulando a soma com os elementos da matriz por meio de seu percorrimento.
daSum = 0;

for (i = 0; i < thisMatrix.length; i++) {
    for (j = 0; j < thisMatrix[i].length; j++) {
        daSum += thisMatrix[i][j];
    }
}

console.log(`Soma: ${daSum}`);
