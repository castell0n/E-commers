document.addEventListener("DOMContentLoaded", mostrarProductos);

const url = 'https://castell0n.github.io/E-commers/db.json';


async function mostrarProductos() {
    try {
        let result = await fetch(url);
        let response = await result.json();
        paintProduct(response.various);
    } catch (error) {
        console.log(error);
    }
}


function paintProduct(productos) {
    let containervarious = document.querySelector(".various");
    productos.forEach((prod) => {
        const {id, image, title, price} = prod;
        containervarious.innerHTML +=
        `<article class="producto">
            <img class="imgProducto" src="${image}" alt="">
            <div class="infoProducto">
                <h4 class="nombreProducto">${title}</h4>
                <h4 class="presioProducto">$ ${price}</h4>
                <button data-artikle="${id}" class="btnItem">Ver producto</button>
            </div>
        </article>`;
    });

    
    let btnIArti = containervarious.querySelectorAll(".btnItem");
    btnIArti.forEach(btn => {
        btn.addEventListener("click", async function(e) {
            let dataArti = e.target.getAttribute("data-artikle");
            try {
                let result = await fetch(url);
                let response = await result.json();
                productDetails(response.various[dataArti]);
            } catch (error) {
                console.log(error);
            }
        });
    });
};