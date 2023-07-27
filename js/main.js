//Variables
let inputProducto = document.querySelector('#input-producto');
let buttonAgregar = document.querySelector('#btn-agregar');
let listaProducto = document.querySelector('#lista');
let arreglo = JSON.parse(localStorage.getItem("productos")) || [];
let alerta = document.querySelector('#alerta');
let buttonLimpiar = document.querySelector('#btn-limpiar');

//Listeners
buttonAgregar.addEventListener("click", agregarProducto)
buttonLimpiar.addEventListener("click",limpiarLista);

//Functions
function agregarProducto(){
    let texto_input = inputProducto.value;
    crearHTML(texto_input);
    arreglo.push(texto_input);
    localStorage.setItem("productos", JSON.stringify(arreglo));
    mostrarAlerta();
}

function crearHTML(textoProducto){
    let etiqueta_li = document.createElement("li");          //<li></li>
    let texto_li = document.createTextNode(textoProducto);   //Tenis
    etiqueta_li.append(texto_li)                             //<li>Tenis</li>
    etiqueta_li.classList.add("list-group-item");            //<li class="list-group-item">Tenis</li>
    listaProducto.appendChild(etiqueta_li);                  //<ul><li></li> <li></li>    <li>Tenis</li>   </ul>
}

function recuperarProductos(){
    mostrarAlerta();
    arreglo.forEach(producto => {
        crearHTML(producto);
    });
}

function mostrarAlerta(){
    if(arreglo.length>0){
        alerta.classList.add("d-none");
    }else{
        alerta.classList.remove("d-none");
    }
}

function limpiarLista(){
    localStorage.removeItem("productos");
    arreglo = [];
    while(listaProducto.firstChild){
        listaProducto.removeChild(listaProducto.firstChild)
    }
    mostrarAlerta();
}

recuperarProductos();