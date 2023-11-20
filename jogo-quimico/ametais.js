const elements = [ 
    { name: "Flúor", symbol: "F" },
    { name: "Cloro", symbol: "Cl" },
    { name: "Bromo", symbol: "Br" },
    { name: "Iodo", symbol: "I" },
    { name: "Astato", symbol: "At" }
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
            alert(`Parabéns! Você concluiu o jogo.\n\nPontuação: ${score} acertos de 05 perguntas. \n\n Ametais\n
            Os ametais são elementos químicos que compartilham características de ambos os metais e não-metais. Eles são encontrados na tabela periódica principalmente na região à direita e acima da linha que separa os metais dos não-metais. Alguns exemplos de ametais incluem oxigênio (O), nitrogênio (N), flúor (F), cloro (Cl), e iodo (I).
            \n
            Características comuns dos ametais incluem baixa condutividade elétrica, geralmente são sólidos em condições normais, têm baixos pontos de fusão e ebulição, e muitos deles são gases ou sólidos quebradiços. Os ametais desempenham papéis essenciais em várias substâncias biológicas e compostos industriais. Por exemplo, o oxigênio é vital para a respiração, e o carbono forma a base das moléculas orgânicas.
            \n
            Eles também são conhecidos por formar ligações covalentes, compartilhando elétrons ao formar moléculas.`);
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
