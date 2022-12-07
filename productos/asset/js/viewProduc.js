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

    let url = "../producto/producto.html"

    let rutaUrl = url.replace(url , "?/productos/producto/producto.html");

    window.location.href = rutaUrl;
};


function mostrarArticle() {
    let local = JSON.parse(localStorage.getItem("ViewProduc"));
    iiimage.setAttribute("src", local.imgProduc);
    iititle.innerText = local.titleProduc;
    iiprice.innerText = "$ "+local.priceProduc
    iidescript.innerText = local.descriptionProduc
};