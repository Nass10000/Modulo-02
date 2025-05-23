class CarritoCompra {
  constructor() {
      // Inicializamos el carrito como un array vacío
      this.carrito = [];
      this.totalConDescuento = null; // Total con descuento aplicado
  }

  agregarProducto(producto) {
      // Método para agregar un producto al carrito
      if (producto && producto.precio && producto.nombre) {
          this.carrito.push(producto);
      } else {
          throw new Error('El producto debe tener un nombre y un precio');
      }
  }

  calcularTotal() {
      // Calcula la suma de los precios de todos los productos en el carrito
      if (this.totalConDescuento !== null) {
          return this.totalConDescuento; // Si hay descuento aplicado, retorna el total con descuento
      }
      return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }

  aplicarDescuento(porcentaje) {
      // Aplica un descuento al total del carrito
      if (porcentaje < 0 || porcentaje > 100) {
          throw new Error('El porcentaje de descuento debe estar entre 0 y 100');
      }
      const total = this.carrito.reduce((total, producto) => total + producto.precio, 0); // Calculamos el total actual
      this.totalConDescuento = total - (total * (porcentaje / 100)); // Guardamos el total con descuento
  }

  calcularTotalFinal() {
      // Alias para calcular el total con descuento, si es necesario
      return this.calcularTotal();
  }
}

module.exports = CarritoCompra;
