const gasesNobresElements = [
    { name: "Hélio", symbol: "He" },
    { name: "Neônio", symbol: "Ne" },
    { name: "Argônio", symbol: "Ar" },
    { name: "Criptônio", symbol: "Kr" },
    { name: "Xenônio", symbol: "Xe" }
];

let currentQuestion = 0;
let score = 0;

function startGame() {
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = `Símbolo: ${gasesNobresElements[currentQuestion].symbol}`;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const resultElement = document.getElementById("result");
    const resultContainer = document.getElementById("result-container");

    if (userAnswer.toLowerCase() === gasesNobresElements[currentQuestion].name.toLowerCase()) {
        resultElement.textContent = "Correto!";
        showElementInfo();
        score++;
    } else {
        resultElement.textContent = "Incorreto. Tente novamente.";
    }

    resultContainer.style.display = "block";
}

function showElementInfo() {
    const element = gasesNobresElements[currentQuestion];
    const message = `Você acertou!\n\nNome: ${element.name}\nSímbolo: ${element.symbol}`;
    alert(message);
}

function nextQuestion() {
    const resultContainer = document.getElementById("result-container");

    if (resultContainer.style.display === "block") {
        document.getElementById("answer").value = "";
        resultContainer.style.display = "none";

        currentQuestion++;
        if (currentQuestion < gasesNobresElements.length) {
            showQuestion();
        } else {
            alert(`Parabéns! Você concluiu o jogo.\n\nPontuação: ${score} acertos de 05 perguntas.\n\n Gases Nobres\n
            Os gases nobres são elementos químicos localizados na coluna 18 da tabela periódica, conhecidos por sua estabilidade e baixa reatividade. Hélio, neônio, argônio, criptônio, xenônio e radônio fazem parte dessa família. São predominantemente gases em condições normais e historicamente considerados inertes, embora alguns compostos tenham sido sintetizados em laboratório. Gases nobres têm aplicações práticas, como o uso de hélio em balões e neônio em luzes de néon. Cada gás nobre exibe uma cor característica em chamas. O radônio é radioativo e requer monitoramento devido aos riscos à saúde. Esses elementos desempenham um papel significativo na química e em várias aplicações tecnológicas.
` );
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
