let catalogo = [{"id": "producto1", "precio": 50},
                {"id": "producto2", "precio": 100},
                {"id": "producto3", "precio": 200}
                ];

let carrito = [];
let pCarrito = document.getElementById("carrito");

function agregarAlCarrito(idProducto) {

    let producto = catalogo.find(p => {
        return p.id == idProducto;
    });

    let item = carrito.find(i => {
        return i.producto.id == idProducto;
    })

    if(item) {
        item.unidades++;
    }else {
        carrito.push({"producto": producto, "unidades": 1});
    }

    html = "";

    carrito.forEach(i => {
       html += "<p>Producto: " + JSON.stringify(i.producto.id) + " </p>"
       + "<p>Precio: " + JSON.stringify(i.producto.precio) + " </p>"
       + "<p>Unidades: " + JSON.stringify(i.unidades) + " </p>"; 
    });

    pCarrito.innerHTML = html;
 
}