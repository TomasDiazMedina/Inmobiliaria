const btnAbrir = document.getElementById("abrirMenu");
const menu = document.getElementById("nav");
const btnCerrar = document.getElementById("cerrarMenu");
btnAbrir.addEventListener("click", () =>{
    menu.classList.toggle("visible")
    btnAbrir.classList.toggle("hidden")
    btnCerrar.classList.toggle("hidden")
});
btnCerrar.addEventListener("click", () =>{
    menu.classList.toggle("visible")
    btnCerrar.classList.toggle("hidden")
    btnAbrir.classList.toggle("hidden")
});

