import { productService } from "./productos.js";


async function mostrarProductos() {
    let url = productService.listProducStarWars();
    try {
        let result = await fetch(url);
        let response = await result.json();
        paintProduct(response);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
mostrarProductos();

function paintProduct(productos) {
    const feed = {
        id: 7,
        image: "https://wallpapercave.com/dwp1x/wp4445437.jpg",
        title: "ss",
        price: "ll",
    };
    productos.push(feed)
}














// let blah = document.getElementById("blah");

// function readURL(input) {
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();
  
//       reader.onload = function (e) {
//         blah.setAttribute("src", e.target.result);
//       };
  
//       reader.readAsDataURL(input.files[0]);
//     }
// }