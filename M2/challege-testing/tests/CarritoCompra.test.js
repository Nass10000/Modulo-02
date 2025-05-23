const CarritoCompra = require('./index'); // Importa la clase desde el archivo 'index.js'

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra(); // Crea una nueva instancia antes de cada test
    });

    it('Debería inicializar el carrito vacío', () => {
        expect(carrito.carrito).toEqual([]); // Verifica que el carrito esté vacío al inicializar
        expect(Array.isArray(carrito.carrito)).toBe(true); // Verifica que el carrito sea un array
        expect(carrito.carrito.length).toBe(0); // Verifica que el tamaño inicial sea 0
    });

    it('Debería agregar un producto al carrito', () => {
        const producto = { nombre: 'Manzana', precio: 2 };
        carrito.agregarProducto(producto);
        expect(carrito.carrito.length).toBe(1); // Verifica el tamaño del carrito
        expect(carrito.carrito[0]).toEqual(producto); // Verifica que el producto agregado esté en el carrito
        expect(carrito.carrito[0].nombre).toBe('Manzana'); // Verifica el nombre del producto
        expect(carrito.carrito[0].precio).toBe(2); // Verifica el precio del producto
    });

    it('Debería calcular el total del carrito correctamente', () => {
        const producto1 = { nombre: 'Manzana', precio: 2 };
        const producto2 = { nombre: 'Pan', precio: 3 };
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.carrito.length).toBe(2); // Verifica que haya dos productos
        expect(carrito.carrito[1].nombre).toBe('Pan'); // Verifica que el segundo producto sea Pan
        expect(carrito.calcularTotal()).toBe(5); // Verifica el total del carrito
    });

    it('Debería aplicar un descuento correctamente', () => {
        const producto = { nombre: 'Laptop', precio: 1000 };
        carrito.agregarProducto(producto);
        expect(carrito.calcularTotal()).toBe(1000); // Verifica el total antes del descuento
        carrito.aplicarDescuento(20);
        expect(carrito.calcularTotalFinal()).toBe(800); // Verifica el total después del descuento
        expect(carrito.totalConDescuento).toBe(800); // Verifica el atributo `totalConDescuento`
    });

    it('Debería lanzar un error si intenta aplicar un descuento inválido', () => {
        expect(() => carrito.aplicarDescuento(-10)).toThrow('El porcentaje de descuento debe estar entre 0 y 100');
        expect(() => carrito.aplicarDescuento(110)).toThrow('El porcentaje de descuento debe estar entre 0 y 100');
    });

    it('Debería lanzar un error al intentar agregar un producto sin nombre o precio', () => {
        const productoInvalido = { precio: 10 };
        expect(() => carrito.agregarProducto(productoInvalido)).toThrow('El producto debe tener un nombre y un precio');
        const productoInvalido2 = { nombre: 'Producto sin precio' };
        expect(() => carrito.agregarProducto(productoInvalido2)).toThrow('El producto debe tener un nombre y un precio');
    });
});
