document.addEventListener("DOMContentLoaded", mostrarProductos);

const url = 'https://stirring-sopapillas-afe974.netlify.app/db.json';
// const url = 'https://castell0n.github.io/E-commers/db.json';


async function mostrarProductos() {
    try {
        let result = await fetch(url);
        let response = await result.json();
        paintProduct(response.starWars);
    } catch (error) {
        console.log(error);
    }
}


function paintProduct(productos) {
    let containerStarwars = document.querySelector(".starWars");
    let container = document.querySelector(".itemProducto");
productos.forEach((prod) => {
        const { id, image, title, price } = prod;
        containerStarwars.innerHTML +=
        `<article class="producto">
        <div id="contenLoader" class="contenLoader">
            <span class="loader"></span>
        </div>
            <img class="imgProducto" src="${image}" alt="">
            <div class="infoProducto">
                <h4 class="nombreProducto">${title}</h4>
                <h4 class="presioProducto">$ ${price}</h4>
                <button data-artikle="${id}" class="btnItem">Ver producto</button>
            </div>
        </article>`;

        let contenLoader = containerStarwars.querySelectorAll(".contenLoader");
        contenLoader.forEach(loader => {
            setTimeout(() => {
                loader.style.display = "none";
            }, 4000);
        });
    });

    
    let btnIArti = container.querySelectorAll(".btnItem");
    btnIArti.forEach(btn => {
        btn.addEventListener("click", async function(e) {
            let dataArti = e.target.getAttribute("data-artikle");
            try {
                let result = await fetch(url);
                let response = await result.json();
                productDetails(response.starWars[dataArti]);
            } catch (error) {
                console.log(error);
            }
        });
    });
};