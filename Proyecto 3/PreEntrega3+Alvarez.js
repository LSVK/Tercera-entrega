const productos = [
                 { id: 1, articulo: "mate liso", precio: 8600, img: "mateliso.jpeg"},
                 { id: 2, articulo: "mate cincelado", precio: 8700 },
                 { id: 3, articulo: "mate estandar", precio: 7800 },
                 { id: 4, articulo: "mate max", precio: 7900 },
                 { id: 5, articulo: "bombilla lisa", precio: 1850 },
                 { id: 6, articulo: "bombilla cincelada", precio: 1950, img: "bombilla.jpg"},
]
    
const btnSearch = document.querySelector("#btnSearch"),
    inputIngreso = document.querySelector("#ingreso");  
const caja = document.querySelector(".caja");
const carrito = []; 

function buscarProducto(arr, filtro) {
    const encontrado = arr.find((el) => {
    return el.articulo.includes(filtro);
    });
    return encontrado;
}
     
 function crearHtml(el) {

  contenedor.innerHTML = "";
 
   let html = `<div class="card"> 
              <img src=" ./img/${el.img}" alt="${el.articulo}">                                                 
             <h3>${el.articulo}</h3>
       <p>Precio: $${el.precio} </p>
       <div class="card-action">
        <button id="${el.id}">Comprar</button>
         </div>
       </div>`;

contenedor.innerHTML = html;
}
          
 btnSearch.addEventListener("click", () => {
 const encontrado = buscarProducto(productos, inputIngreso.value);
 console.log(encontrado);
 crearHtml(encontrado);
});       
   
function toggleDark() {
    const container = document.body;
    const dataTheme = container.getAttribute("data-theme");
    let theme = localStorage.getItem("data-theme");
  
  if (theme === "light") {
    container.setAttribute("data-theme", "dark");
    document.getElementById("night").style.display = "block";
    document.getElementById("light").style.display = "none";
    localStorage.setItem("data-theme", "dark");
  
  } else {
  
    container.setAttribute("data-theme", "light");
    document.getElementById("night").style.display = "none";
    document.getElementById("light").style.display = "block";
    localStorage.setItem("data-theme", "light");
    }
  }

  function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
   
    if (miLocalStorage.getItem('carrito') !== null) {
     
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}


DOMbotonVaciar.addEventListener('click', vaciarCarrito);


cargarCarritoDeLocalStorage();

