document.addEventListener("DOMContentLoaded", mostrarArticle);
let iititle = document.getElementById("iititle");
let iiimage = document.getElementById("iiimage");
let iiprice = document.getElementById("iiprice");
let iidescript = document.getElementById("iidescript");

function productDetails(response) {
    let {image, title, price, description} = response;

    localStorage.setItem("ViewProduc", JSON.stringify({
        titleProduc: title,
        imgProduc: image,
        priceProduc: price,
        descriptionProduc: description
    }));

    window.location.href = "https://stirring-sopapillas-afe974.netlify.app/productos/producto/producto.html";
};


function mostrarArticle() {
    let local = JSON.parse(localStorage.getItem("ViewProduc"));
    iiimage.setAttribute("src", local.imgProduc);
    iititle.innerText = local.titleProduc;
    iiprice.innerText = "$ "+local.priceProduc
    iidescript.innerText = local.descriptionProduc
};