const btnAbrir = document.getElementById("abrirMenu");
const menu = document.getElementById("nav");
btnAbrir.addEventListener("click", () =>{
    menu.classList.toggle("visible")
    btnAbrir.classList.toggle("iconoir-menu")
    btnAbrir.classList.toggle("iconoir-xmark")
});
let listaPropiedades=[]
async function obtenerPropiedades() {
    try {
        const resultado = await fetch("./propiedades.json");
        const datos = await resultado.json();
        listaPropiedades = datos.propiedades;
        mostrarPropiedades(listaPropiedades);
    } catch (error) {
        console.log("Encargar las propiedades", error)
    }
}
obtenerPropiedades();
function mostrarPropiedades(propiedades){
    const contenedor = document.getElementById("contenedor");
    //Limpiar el html previo cada que se llame a la función
    contenedor.innerHTML = "";
    if(propiedades.length === 0){
        contenedor.innerHTML = '<p class="texto_contenedor">No hay propiedades disponibles.</p>'; 
        return;
    }
    propiedades.forEach(propiedad => {
        const card = document.createElement("DIV");
        card.classList.add("property-card");
        card.innerHTML = `
            <div class="property-card__image-wrapper">
                            <img
                                src="${propiedad.imagen}"
                                alt="Departamento de lujo con vista panorámica al río"
                                class="property-card__image"
                                loading="lazy"
                            >
                            <span class="property-card__badge">${propiedad.categoria}</span>
                        </div>
                        <div class="property-card__content">
                            <h3 class="property-card__title">${propiedad.titulo}</h3>
                            <p class="property-card__location"> <i class="iconoir-pin-solid"></i>${propiedad.ubicacion}</p>
                            <ul class="property-card__features">
                                <li> ${propiedad.info.habitacion} Dormitorios</li>
                                <li> ${propiedad.info.baños} Baños</li>
                                <li> ${propiedad.info.dimension}</li>
                            </ul>
                            <div class="property-card__footer">
                                <span class="property-card__price">${propiedad.precio}</span>
                                <a href="#contacto" class="property-card__link">Ver detalles &rarr;</a>
                            </div>
                        </div>   
        `;
        contenedor.appendChild(card);
    });
}