// Fonction pour calculer la RAM utilisée
function calculateRAM() {
    // Calcul de la RAM fictif (simulation)
    const ramUsed = Math.floor(Math.random() * 100); // Valeur aléatoire entre 0 et 100%
    return ramUsed;
}

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
        // Remplir deux matrices avec des valeurs aléatoires
        const matrixA = fillMatrix(size);
        console.log(`Matrice A remplie avec des valeurs aléatoires de taille ${size}.`);

        const matrixB = fillMatrix(size);
        console.log(`Matrice B remplie avec des valeurs aléatoires de taille ${size}.`);

        // Utiliser des boucles imbriquées
        console.log("Calcul avec des boucles imbriquées :");
        console.time('nestedLoops');
        let sumNestedLoops = 0;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                sumNestedLoops += i * j; // Calcul répétitif
            }
        }
        console.timeEnd('nestedLoops');
        console.log("Calcul avec des boucles imbriquées terminé.");

        // Calcul matriciel
        console.log("Calcul matriciel :");
        console.time('matrixMultiplication');
        const resultMatrix = multiplyMatrices(matrixA, matrixB);
        console.timeEnd('matrixMultiplication');
        console.log("Calcul matriciel terminé.");

        // Simulation physique (simulation simple de particules)
        console.log("Simulation physique :");
        console.time('particleSimulation');
        const particles = [];
        for (let i = 0; i < size; i++) {
            particles.push({
                x: Math.random() * 100,
                y: Math.random() * 100,
                velocityX: Math.random(),
                velocityY: Math.random()
            });
        }
        for (let i = 0; i < size; i++) {
            particles[i].x += particles[i].velocityX;
            particles[i].y += particles[i].velocityY;
        }
        console.timeEnd('particleSimulation');
        console.log("Simulation physique terminée.");

        // Traitement d'images (flou gaussien simple)
        console.log("Traitement d'images :");
        console.time('imageProcessing');
        const imageWidth = 1000;
        const imageHeight = 1000;
        const imageData = new ImageData(imageWidth, imageHeight);
        for (let i = 0; i < imageWidth * imageHeight * 4; i += 4) {
            const grayValue = Math.floor(Math.random() * 256);
            imageData.data[i] = grayValue; // Rouge
            imageData.data[i + 1] = grayValue; // Vert
            imageData.data[i + 2] = grayValue; // Bleu
            imageData.data[i + 3] = 255; // Alpha
        }
        console.timeEnd('imageProcessing');
        console.log("Traitement d'images terminé.");

        // Opérations mathématiques
        console.log("Opérations mathématiques :");
        operationsMathematiques();

        // Traitement d'image simplifié
        console.log("Traitement d'image simplifié :");
        traitementImage();

        // Simulation physique basique
        console.log("Simulation physique basique :");
        simulationPhysique();
    }

    // Appeler la fonction pour effectuer les calculs initiaux
    performCalculations(matrixSize);

    // Doubler le nombre de calculs toutes les 5 secondes
    setInterval(doubleCalculations, 5000);
}

// Appeler la fonction pour effectuer les calculs et le traitement de données
performCalculationsAndDataProcessing();
