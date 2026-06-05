// AULA 11 - Exercício 1: Criando e exibindo uma matriz 2x3 (5/6/2026)

function Array2Matrix (someArray, howManyLines) {
    let elementCounter; // Contador responsável pela inserção de um elemento na matriz.
    let daMatrix; // A matriz propriamente dita.
    let howManyColumns; // Limite de colunas.
    let lineCounter; // Contador que itera até atingir o número de linhas desejado.
    let columnCounter; // Contador que itera até atingir o número de colunas desejado.
    
    howManyColumns = parseInt(someArray.length / howManyLines);
    elementCounter = 0;
    daMatrix = []; // Inicializando a matriz para não dar undefined.

    for (lineCounter = 0; lineCounter < howManyLines; lineCounter++) {
        daMatrix[lineCounter] = []; // Cada linha corresponde a um array vazio, cujos elementos serão inseridos no loop das colunas - esse loop de baixo.
        for (columnCounter = 0; columnCounter < howManyColumns; columnCounter++) {
            daMatrix[lineCounter][columnCounter] = parseInt(someArray[elementCounter]); // Inserção do elemento do índice elementCounter na linha índice lineCounter e coluna índice columnCounter.
            elementCounter++; // Iteração para assegurar que nenhum elemento seja deixado pra fora.
        }
    }
    
    return daMatrix;
}

let inputThingy;
let arrayOfTheInput;
let lineAmount;
let outputMatrix;
let i; // lineCounter do escopo global.
let j; // columnCounter do escopo global.

inputThingy = prompt('Digite seis inteiros espaçados -->  '); // Entrada esperada: "1 2 3 4 5 6"
arrayOfTheInput = inputThingy.split(' ');

lineAmount = parseInt(prompt('Quantas linhas você deseja ter? -->  ')); // Entrada esperada: "2"

outputMatrix = Array2Matrix(arrayOfTheInput, lineAmount);

// Esqueci de incluir a parte onde eu exibo todos os valores com loops For. Ups!
for (i = 0; i < outputMatrix.length; i++) {
    for (j = 0; j < outputMatrix[i].length; j++) {
        console.log(outputMatrix[i][j]);
    }
}
