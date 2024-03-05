// Fonction pour afficher une matrice dans une zone spécifique
function displayMatrix(matrix, elementId) {
    const matrixElement = document.getElementById(elementId);
    let html = "<p>Matrice :</p>";
    html += "<table>";
    for (let i = 0; i < matrix.length; i++) {
        html += "<tr>";
        for (let j = 0; j < matrix[i].length; j++) {
            html += "<td>" + matrix[i][j] + "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    matrixElement.innerHTML = html;
}

// Fonction pour effectuer les calculs et le traitement de données
function performCalculationsAndDataProcessing() {
    // Taille de la matrice
    let matrixSize = 1000;
    let matrixA, matrixB;

    // Log : Début des calculs
    console.log("Début des calculs :");

    // Fonction pour doubler le nombre de calculs avec une autre valeur
    function doubleCalculations() {
        matrixSize *= 2;
        console.log(`Augmentation de la taille de la matrice : ${matrixSize}`);
        // Relancer les calculs avec la nouvelle taille de la matrice
        performCalculations(matrixSize);
    }

    // Fonction pour effectuer les calculs
    function performCalculations(size) {
        // Remplir deux matrices avec des valeurs aléatoires
        matrixA = fillMatrix(size);
        matrixB = fillMatrix(size);

        // Afficher les matrices sur la page
        displayMatrix(matrixA, "matrixA");
        displayMatrix(matrixB, "matrixB");
    }

    // Appeler la fonction pour effectuer les calculs initiaux
    performCalculations(matrixSize);

    // Doubler le nombre de calculs toutes les 5 secondes
    setInterval(doubleCalculations, 5000);

    // Rafraîchir les matrices toutes les 5 secondes
    setInterval(function() {
        // Afficher les matrices mises à jour sur la page
        displayMatrix(matrixA, "matrixA");
        displayMatrix(matrixB, "matrixB");
    }, 5000);
}

// Appeler la fonction pour effectuer les calculs et le traitement de données
performCalculationsAndDataProcessing();
