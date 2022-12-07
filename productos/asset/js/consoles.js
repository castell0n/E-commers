document.addEventListener("DOMContentLoaded", mostrarProductos);

const url = 'https://stirring-sopapillas-afe974.netlify.app/db.json';


async function mostrarProductos() {
    try {
        let result = await fetch(url);
        let response = await result.json();
        paintProduct(response.consoles);
    } catch (error) {
        console.log(error);
    }
}


function paintProduct(productos) {
    let containerConsoles = document.querySelector(".consoles");
    productos.forEach((prod) => {
        const {id, image, title, price} = prod;
        containerConsoles.innerHTML +=
        `<article class="producto">
            <img class="imgProducto" src="${image}" alt="">
            <div class="infoProducto">
                <h4 class="nombreProducto">${title}</h4>
                <h4 class="presioProducto">$ ${price}</h4>
                <button data-artikle="${id}" class="btnItem">Ver producto</button>
            </div>
        </article>`;
    });

    
    let btnIArti = containerConsoles.querySelectorAll(".btnItem");
    btnIArti.forEach(btn => {
        btn.addEventListener("click", async function(e) {
            let dataArti = e.target.getAttribute("data-artikle");
            try {
                let result = await fetch(url);
                let response = await result.json();
                productDetails(response.consoles[dataArti]);
            } catch (error) {
                console.log(error);
            }
        });
    });
};