var modalBtns = document.querySelectorAll(".modal-open")

const _elements ={
    tema: document.querySelector(".switch_track"),
}

modalBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute("data-modal")

        document.getElementById(modal).style.display = "block"
    }
})

var closeBtns = document.querySelectorAll(".modal-close")

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.closest(".modal").style.display = "none"
    }
})

window.onclick = function(e){

    if(e.target.classList.contains('modal')){

        e.target.style.display = "none"

    }

}

_elements.tema.addEventListener("click", () => {
    const modoescuro = _elements.tema.classList.toggle("switch_track--dark");

    if(modoescuro)
        document.documentElement.setAttribute("data-theme", "dark");
    else
        document.documentElement.setAttribute("data-theme", "light");
});