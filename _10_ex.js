// AULA 10 - Exercício 10: Indexação por cores (feito e resolvido 9/6/2026)

// 10.1 - Matriz por dimensões:
function AutoMatrixUsingDimensions (lineNums, columnNums) {
    let lineCounter; // Inteiro. Contador que insere uma nova linha à matriz a cada iteração.
    let columnCounter; // Inteiro. Contador que adiciona os elementos na linha atual.
    let daMatrix; // A matriz propriamente dita.
    
    // Inicializando e verificando a divisibilidade.
    daMatrix = [];
    elementIndex = 0;
    
    for (lineCounter = 0; lineCounter < lineNums; lineCounter++) {
        daMatrix[lineCounter] = [];
        for (columnCounter = 0; columnCounter < columnNums; columnCounter++) {
            daMatrix[lineCounter][columnCounter] = lineCounter * 10 + columnCounter; // Usando a fórmula do Carubbi.
        }
    }
    
    return daMatrix;
}

// Gerando os elementos destacados por cores dependendo da cor inserida pelo usuário.
function ElementsByColor (daColor, matrix) {
    let matrixLine; // lineCounter desse escopo.
    let matrixColumn; // columnCounter desse escopo.

    // Para alguns, estou usando o formato esperado do Carubbi.
    switch (daColor) {
        // AZUL (10.1) -> Todos os elementos da coluna de índice 2.
        case "azul": 
            for (matrixLine = 0; matrixLine < matrix.length; matrixLine++) {
                console.log(matrix[matrixLine][2]);
            }
        break;
        
        // VERMELHO (10.2) -> Os elementos de índice 3 e 4 da linha de índice 0.
        case "vermelho":
            matrixLine = 0;
            
            for (matrixColumn = 3; matrixColumn < matrix[matrixLine].length; matrixColumn++) {
                console.log(matrix[matrixLine][matrixColumn]);
                if (matrixColumn == 4) {
                    break;
                }
            }
        break;
        
        // ROXO (10.3) -> Os elementos localizados em lugares cujos índices de linhas são divisíveis por 2 - exceto por 0 - e cujos índices de colunas são divisíveis por 2.
        case "roxo":
            for (matrixLine = 2; matrixLine < matrix.length; matrixLine++) {
                if (matrixLine % 2 == 0) {
                    for (matrixColumn = 0; matrixColumn < matrix[matrixLine].length; matrixColumn++) {
                        if (matrixColumn % 2 == 0) {
                            console.log(matrix[matrixLine][matrixColumn]);
                        }
                    }
                }
            }
        break;
        
        // VERDE (10.4) -> Os dois últimos elementos das duas últimas colunas e das duas últimas linhas.
        case "verde":
            for (matrixLine = 4; matrixLine < matrix.length; matrixLine++) {
                for (matrixColumn = 4; matrixColumn < matrix[matrixLine].length; matrixColumn++) {
                    console.log(matrix[matrixLine][matrixColumn]);
                }
            }
        break;
    }
}

let colorPrompt;
let arrayOfTheColors;
const theMatrixItself = AutoMatrixUsingDimensions(6, 6);

colorPrompt = prompt('Digite uma cor -->  ');
arrayOfTheColors = ElementsByColor(colorPrompt, theMatrixItself);
