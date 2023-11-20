const elements = [ 
    { name: "Hidrogênio", symbol: "H" },
    { name: "Hélio", symbol: "He" },
    { name: "Lítio", symbol: "Li" },
    { name: "Berílio", symbol: "Be" },
    { name: "Boro", symbol: "B" },
    { name: "Carbono", symbol: "C" },
    { name: "Nitrogênio", symbol: "N" },
    { name: "Oxigênio", symbol: "O" },
    { name: "Flúor", symbol: "F" },
    { name: "Neônio", symbol: "Ne" },
    { name: "Sódio", symbol: "Na" },
    { name: "Magnésio", symbol: "Mg" },
    { name: "Alumínio", symbol: "Al" },
    { name: "Silício", symbol: "Si" },
    { name: "Fósforo", symbol: "P" },
    { name: "Enxofre", symbol: "S" },
    { name: "Cloro", symbol: "Cl" },
    { name: "Argônio", symbol: "Ar" },
    { name: "Potássio", symbol: "K" },
    { name: "Cálcio", symbol: "Ca" },
    { name: "Escândio", symbol: "Sc" },
    { name: "Titânio", symbol: "Ti" },
    { name: "Vanádio", symbol: "V" },
    { name: "Crômio", symbol: "Cr" },
];
function startGame() {
    showQuestion();
}
let currentQuestion = 0;
let score = 0;


function showQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = `Símbolo: ${elements[currentQuestion].symbol}`;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const resultElement = document.getElementById("result");
    const resultContainer = document.getElementById("result-container");

    if (userAnswer.toLowerCase() === elements[currentQuestion].name.toLowerCase()) {
        resultElement.textContent = "Correto!";
        showElementInfo();
        score++;
    } else {
        resultElement.textContent = "Incorreto.";
    }

    resultContainer.style.display = "block";
}

function showElementInfo() {
    const element = elements[currentQuestion];
    const message = `Você acertou!\n\nNome: ${element.name}\nSímbolo: ${element.symbol}`;
    alert(message);
}

function nextQuestion() {
    const resultContainer = document.getElementById("result-container");

    if (resultContainer.style.display === "block") {
        document.getElementById("answer").value = "";
        resultContainer.style.display = "none";

        currentQuestion++;
        if (currentQuestion < elements.length) {
            showQuestion();
        } else {
            alert(`Parabéns! Você concluiu o jogo.\n\nPontuação: ${score} acertos de 25 questões. \n\n Concretize seus conhecimentos no nosso site: https://tabela-periodica-online.github.io/FUNEC-Riacho2023/`);
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
