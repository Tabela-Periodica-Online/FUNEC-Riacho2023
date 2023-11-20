function showCustomAlert() {
    const modal = document.getElementById("custom-alert");
    const overlay = document.getElementById("overlay");

    // Adiciona o link no HTML do modal
    modal.innerHTML = `
        <p>Clique no link abaixo:</p>
        <a href="https://www.example.com" target="_blank">Ir para Example.com</a>
    `;

    // Exibe o modal e overlay
    modal.style.display = "block";
    overlay.style.display = "block";
}

function closeCustomAlert() {
    const modal = document.getElementById("custom-alert");
    const overlay = document.getElementById("overlay");

    // Oculta o modal e overlay
    modal.style.display = "none";
    overlay.style.display = "none";
}
