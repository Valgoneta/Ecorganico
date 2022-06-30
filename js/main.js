let carritoCompras = [];

const productsContainer = document.getElementById('contenedor-productos');



mostrarProductos()


function mostrarProductos(){
    
    listaProductos.forEach(el => {

        let div = document.createElement('div')
        div.className = 'cards-container'

        div.innerHTML = `<div class="cards">
                            <div class="card-image">
                                <img src="${el.img}" width="100px">
                            </div>
                            <div class="card-values">
                                <span class="card-title">${el.nombre}</span>
                                <p class="precio"> $${el.precio}</p>
                                <button class="boton">Agregar al carrito</button>
                            </div>
                        </div> `

                    
        productsContainer.appendChild(div)
        
    })
}





