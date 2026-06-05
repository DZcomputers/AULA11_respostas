// AULA 11 - Exercício 2: Acessando posições específicas (feito 5/6/2026)

// Irei usar a mesma função do exercício 1 por conveniência - só que sem comentários porquê ela não é o foco.
function Array2Matrix (someArray, howManyLines) {
    let elementCounter; 
    let daMatrix; 
    let howManyColumns;
    let lineCounter;
    let columnCounter;
    
    howManyColumns = parseInt(someArray.length / howManyLines);
    elementCounter = 0;
    daMatrix = [];

    for (lineCounter = 0; lineCounter < howManyLines; lineCounter++) {
        daMatrix[lineCounter] = []; 
        for (columnCounter = 0; columnCounter < howManyColumns; columnCounter++) {
            daMatrix[lineCounter][columnCounter] = parseInt(someArray[elementCounter]);
            elementCounter++;
        }
    }
    
    return daMatrix;
}

// Irei usar o mesmo escopo global do exercício 1 por, mais uma vez, pura conveniência.
let inputThingy;
let arrayOfTheInput;
let lineAmount;
let someMatrix;
let i;
let j;
let outputMatrix;

inputThingy = prompt('Digite seis inteiros espaçados -->  '); 
lineAmount = parseInt(prompt('Quantas linhas você deseja ter? -->  ')); 
arrayOfTheInput = inputThingy.split(' ');

someMatrix = Array2Matrix(arrayOfTheInput, lineAmount);

// Exibição hardcode:
console.log(`${someMatrix[0][0]} ${someMatrix[0][2]} ${someMatrix[1][1]} ${someMatrix[1][2]}`);

// Exibição softcode:
/*  
    O professor quer que eu exibe o valor em 0/0, 0/2, 1/1, e 1/2. 
    Primeiro, é exibido o elemento cujo número de linha é igual ao seu número de coluna.
    Depois, é exibido o elemento que está na mesma linha, só que na segunda coluna.
    Hm...
*/

for (i = 0; i < someMatrix.length; i++) {
    for (j = 0; j < someMatrix[i].length; j++) {
        if (i == j) { // Se "i" (contador de linhas 2) for numericamente igual a "j" (contador de colunas 2)...
            console.log(`${someMatrix[i][j]}\n${someMatrix[i][lineAmount]}`); // ...então exibe: o elemento que está na linha i, coluna j e o elemento que está na linha i, última coluna.
        }
    }
}
