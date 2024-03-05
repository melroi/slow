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

function displayResult(result) {
    let resultContainer = document.getElementById("resultContainer");
    let resultElement = document.createElement("div");
    resultElement.textContent = "Résultat : " + JSON.stringify(result);
    resultContainer.appendChild(resultElement);
}

let calculationCount = 0; // Variable pour compter les calculs

function runCalculations() {
    calculationCount++; // Incrémenter le compteur de calculs

    let matrix1 = [
        [Math.random(), Math.random()],
        [Math.random(), Math.random()]
    ];
    let matrix2 = [
        [Math.random(), Math.random()],
        [Math.random(), Math.random()]
    ];

    let result = multiplyMatrices(matrix1, matrix2);
    displayResult(result);
}

setInterval(runCalculations, 10);
