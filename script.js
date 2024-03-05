// Fonction pour effectuer les calculs et le traitement de données
function performCalculationsAndDataProcessing() {
    // Taille de la matrice
    let matrixSize = 1000;

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
        // Appel des différentes fonctions de calcul et traitement
        fillMatrix(size);
        multiplyMatrices(matrixA, matrixB);
        performNestedLoops(size);
        performParticleSimulation(size);
        performImageProcessing(size);

        // Appel des fonctions mathématiques, de traitement d'image simplifié et de simulation physique
        operationsMathematiques();
        traitementImage();
        simulationPhysique();
    }

    // Appeler la fonction pour effectuer les calculs initiaux
    performCalculations(matrixSize);

    // Doubler le nombre de calculs toutes les 5 secondes
    setInterval(doubleCalculations, 5000);
}

// Appeler la fonction pour effectuer les calculs et le traitement de données
performCalculationsAndDataProcessing();
