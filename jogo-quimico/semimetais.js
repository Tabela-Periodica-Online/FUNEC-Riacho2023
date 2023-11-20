const semimetaisElements = [
    { name: "Boro", symbol: "B" },
    { name: "Silício", symbol: "Si" },
    { name: "Germânio", symbol: "Ge" },
    { name: "Arsênio", symbol: "As" },
    { name: "Antimônio", symbol: "Sb" },
    { name: "Telúrio", symbol: "Te" }
];

let currentQuestion = 0;
let score = 0;

function startGame() {
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = `Símbolo: ${semimetaisElements[currentQuestion].symbol}`;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const resultElement = document.getElementById("result");
    const resultContainer = document.getElementById("result-container");

    if (userAnswer.toLowerCase() === semimetaisElements[currentQuestion].name.toLowerCase()) {
        resultElement.textContent = "Correto!";
        showElementInfo();
        score++;
    } else {
        resultElement.textContent = "Incorreto.";
    }

    resultContainer.style.display = "block";
}

function showElementInfo() {
    const element = semimetaisElements[currentQuestion];
    const message = `Você acertou!\n\nNome: ${element.name}\nSímbolo: ${element.symbol}`;
    alert(message);
}

function nextQuestion() {
    const resultContainer = document.getElementById("result-container");

    if (resultContainer.style.display === "block") {
        document.getElementById("answer").value = "";
        resultContainer.style.display = "none";

        currentQuestion++;
        if (currentQuestion < semimetaisElements.length) {
            showQuestion();
        } else {
            alert(`Parabéns! Você concluiu o jogo.\n\nPontuação: ${score} acertos. de 06 questões\n\n Semimetais\n\n
            `);
            resetGame();
        }
    } else {
        alert("Por favor, responda corretamente antes de avançar.");
    }
}

function resetGame() {
    currentQuestion = 0;
    score = 0;
    startGame();
}
