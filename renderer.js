const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    let bestSeed = 0;
    let bestScore = 0;

    for (let i = 0; i < 1000000; i++) {
        const seed = Math.floor(Math.random() * 4294967295);

        // Temporary coolness score
        const score = Math.floor(Math.random() * 1000000);

        if (score > bestScore) {
            bestScore = score;
            bestSeed = seed;

            document.getElementById("seed").textContent = bestSeed;
            document.getElementById("score").textContent = bestScore;
        }
    }

    alert("Search Complete!");
});