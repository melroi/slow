let calculationResults = []; // Tableau pour stocker tous les résultats de calcul
let calculationCount = 0; // Compteur pour suivre le nombre de calculs lancés

function multiplyMatrices(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function displayResults() {
    let resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = ""; // Efface le contenu précédent
    for (let i = 0; i < calculationResults.length; i++) {
        let resultElement = document.createElement("div");
        resultElement.textContent = "Résultat " + (i + 1) + ": " + JSON.stringify(calculationResults[i]);
        resultContainer.appendChild(resultElement);
    }
}

function generateFibonacciMatrix(size) {
    let fibSequence = [1, 1];
    for (let i = 2; i < size * size; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = fibSequence[i * size + j];
        }
    }
    return matrix;
}

function runCalculations() {
    let matrixSize = 10; // Taille des matrices 5x5
    let matrix1 = generateFibonacciMatrix(matrixSize);
    let matrix2 = generateFibonacciMatrix(matrixSize);

    calculationCount++;
    let currentCalculation = calculationCount;

    // Lancer le calcul de manière asynchrone
    setTimeout(function() {
        let result = multiplyMatrices(matrix1, matrix2);
        calculationResults[currentCalculation] = result;
        displayResults();
    }, 0);
}

// Lancer les calculs toutes les secondes
setInterval(runCalculations, 100);
