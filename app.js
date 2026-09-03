const btnAbrir = document.getElementById("abrirMenu");
const menu = document.getElementById("nav");
btnAbrir.addEventListener("click", () =>{
    menu.classList.toggle("visible")
    btnAbrir.classList.toggle("iconoir-menu")
    btnAbrir.classList.toggle("iconoir-xmark")
});


