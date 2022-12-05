document.addEventListener("DOMContentLoaded", mostrarProductos);

const url = 'https://stirring-sopapillas-afe974.netlify.app/db.json';


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
    productos.forEach((prod) => {
        const {id, image, title, price} = prod;
        containerStarwars.innerHTML +=
        `<article class="producto">
            <img class="imgProducto" src="${image}" alt="">
            <div class="infoProducto">
                <h4 class="nombreProducto">${title}</h4>
                <h4 class="presioProducto">$ ${price}</h4>
                <button data-artikle="${id}" class="btnItem">Ver producto</button>
            </div>
        </article>`;
    });

    
    let btnIArti = containerStarwars.querySelectorAll(".btnItem");
    btnIArti.forEach(btn => {
        btn.addEventListener("click", async function(e) {
            let dataArti = e.target.getAttribute("data-artikle");
            try {
                let result = await fetch(url + `${dataArti}`);
                let response = await result.json();
                productDetails(response);
            } catch (error) {
                console.log(error);
            }
        });
    });
}


function productDetails(response) {
    let {image, title, price, description} = response;

    let viewProduc =  document.createElement("section");
    viewProduc.setAttribute("class", "animate__animated animate__bounceIn viewProduc");

    viewProduc.innerHTML =
    `<article class="producModal">
        <header class="contenTitle">
            <h4 class="titleProduc">${title}</h4>
            <button class="closeViewProduc">X</button>
        </header>
        <div class="contentImg">
            <img class="imgProduc" src="${image}" alt="">
            <a href="" class="btn comprar"><i class="fa-solid fa-dumpster"></i></a>
            <a href="" class="btn carrito"><i class="fa-solid fa-truck"></i></a>
        </div>
        <div class="infoProduc">
            <h4 class="presioProduc">$ ${price}</h4>
            <p class="descriptionProduc">${description}</p>
        </div>
    </article>`;
    

    viewProduc.style.display = "flex";
    document.body.appendChild(viewProduc);

    let closeViewProduc = document.querySelector(".closeViewProduc");
    closeViewProduc.addEventListener("click", ()=> {
        viewProduc.setAttribute("class", "animate__animated animate__bounceOut viewProduc ");
        setTimeout(() => {
            viewProduc.innerHTML = "";
            viewProduc.style.display = "none";
        }, 1000);
    });
}