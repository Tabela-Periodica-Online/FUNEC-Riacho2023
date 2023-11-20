const metalElements = [
    { name: "Lítio", symbol: "Li" },
    { name: "Sódio", symbol: "Na" },
    { name: "Potássio", symbol: "K" },
    { name: "Rubídio", symbol: "Rb" },
    { name: "Césio", symbol: "Cs" }
];

let currentQuestion = 0;
let score = 0;

function startGame() {
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = `Símbolo: ${metalElements[currentQuestion].symbol}`;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const resultElement = document.getElementById("result");
    const resultContainer = document.getElementById("result-container");

    if (userAnswer.toLowerCase() === metalElements[currentQuestion].name.toLowerCase()) {
        resultElement.textContent = "Correto!";
        showElementInfo();
        score++;
    } else {
        resultElement.textContent = "Incorreto.";
    }

    resultContainer.style.display = "block";
}

function showElementInfo() {
    const element = metalElements[currentQuestion];
    const message = `Você acertou!\n\nNome: ${element.name}\nSímbolo: ${element.symbol}`;
    alert(message);
}

function nextQuestion() {
    const resultContainer = document.getElementById("result-container");

    if (resultContainer.style.display === "block") {
        document.getElementById("answer").value = "";
        resultContainer.style.display = "none";

        currentQuestion++;
        if (currentQuestion < metalElements.length) {
            showQuestion();
        } else {
            alert(`Parabéns! Você concluiu o jogo.\n\nPontuação: ${score} acertos de 05 perguntas.\n \n Metais \n\n 
            Os metais alcalinos são uma família de elementos químicos localizados na coluna 1 da tabela periódica, incluindo lítio, sódio e potássio. Conhecidos por alta reatividade, bons condutores de eletricidade e baixos pontos de fusão, são essenciais para várias aplicações, desde baterias até processos químicos. Sua reatividade é evidenciada pela rápida reação com água e pela coloração característica em chamas. `);
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
