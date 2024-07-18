const carrito = {};
const botones = document.querySelectorAll('.card button');
const carritoInfo = document.getElementById('cart');

// Mostrar ventana modal
document.getElementById('openCart').addEventListener('click', () => {
  carritoInfo.showModal();
});

// Cerrar ventana modal
document.getElementById('closeCart').addEventListener('click', () => {
  carritoInfo.close();
});

// Añadir productos al carrito
botones.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.id in carrito) {
      carrito[e.target.id] += 1;
    } else {
      carrito[e.target.id] = 1;
    }
    carritoInfo.querySelector('.cart-body').innerHTML = '';
    if (Object.keys(carrito).length > 0) {
      for (let producto in carrito) {
        const itemCarrito = document.createElement('div');
        const cantidadItem = document.createElement('span');
        cantidadItem.innerText = carrito[producto];
        itemCarrito.innerText = producto;
        itemCarrito.appendChild(cantidadItem);
        carritoInfo.querySelector('.cart-body').appendChild(itemCarrito);
      }
    }
  });
});

// Carrito vacío
if (Object.keys(carrito).length === 0) {
  carritoInfo.querySelector('.cart-body').innerText = 'Selecciona un producto';
}
