class Producto {
    constructor(identifier, marca, descripcion, precio, existencias, categoria) {
        this.identifier = identifier;
        this.marca = marca;
        this.descripcion = descripcion;
        this.precio = precio;
        this.existencias = existencias;
        this.categoria = categoria;
    }

    obtenerMarca() {
        return this.marca;
    }

    obtenerCategoria() {
        return this.categoria;
    }
}

let productos = [];

document.getElementById('formularioProducto').addEventListener('submit', function(e) {
    e.preventDefault();

    let identifier = document.getElementById('identifier').value;
    let marca = document.getElementById('marca').value;
    let descripcion = document.getElementById('descripcion').value;
    let precio = parseFloat(document.getElementById('precio').value);
    let existencias = parseInt(document.getElementById('existencias').value);
    let categoria = document.getElementById('categoria').value;

    producto = new Producto(identifier, marca, descripcion, precio, existencias, categoria);
    productos.push(producto);

    document.getElementById('formularioProducto').reset();
});

function verUltimoProducto() {
    if (producto) {
        console.log('Ultimo producto creado:');
        console.log('Identificador:', producto.identifier);
        console.log('Marca:', producto.marca);
        console.log('Descripción:', producto.descripcion);
        console.log('Precio:', producto.precio);
        console.log('Existencias:', producto.existencias);
        console.log('Categoría:', producto.categoria);
        console.log('');
    } else {
        console.log('No se ha creado ningún producto aún.');
    }
}

function mostrarProducto() {
    let x = prompt("¿Qué producto quiere ver? (Ingrese el número)");
    x = parseInt(x);

    if (!isNaN(x) && x >= 1 && x <= productos.length) {
        let producto = productos[x - 1];

        console.log('Producto seleccionado:', x);
        console.log('Identificador:', producto.identifier);
        console.log('Marca:', producto.marca);
        console.log('Descripción:', producto.descripcion);
        console.log('Precio:', producto.precio);
        console.log('Existencias:', producto.existencias);
        console.log('Categoría:', producto.categoria);
        console.log('');
    } else {
        console.log('El número ingresado no es válido');
    }
}

function mostrarProductosFiltrados(producto) {
    console.log('Identificador:', producto.identifier);
    console.log('Marca:', producto.marca);
    console.log('Descripción:', producto.descripcion);
    console.log('Precio:', producto.precio);
    console.log('Existencias:', producto.existencias);
    console.log('Categoría:', producto.categoria);
    console.log('');
    }

function mostrarProductosPorMarca() {
    
    function filtroMarca(producto) {
        return producto.marca.toUpperCase() === marca;
    }

    let marca = prompt("Ingrese la marca que desea encontrar").toUpperCase();
    let productosFiltrados = productos.filter(filtroMarca);

    if (productosFiltrados.length > 0) {
        console.log(`Productos con la marca "${marca}":`);
        productosFiltrados.forEach(mostrarProductosFiltrados);
    } else {
        console.log(`No hay productos con la marca "${marca}".`);
    }
}

function mostrarProductosPorCategoria() {

    function filtroCategoria(producto) {
        return producto.categoria.toUpperCase() === categoria;
    }

    let categoria = prompt("Ingrese la categoria que desea encontrar").toUpperCase();
    let productosFiltrados = productos.filter(filtroCategoria);

    if (productosFiltrados.length > 0) {
        console.log(`Productos con la Categoria "${categoria}":`);
        productosFiltrados.forEach(mostrarProductosFiltrados);
    } else {
        console.log(`No hay productos con la categoria "${categoria}" o no existe.`);
    }
}