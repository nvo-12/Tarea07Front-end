// Arreglo de productos
const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
  ];
  
  // 1.- Filtrar productos con descuento mayor a 0, usar filter()
  const producto_Descuento = (products) => products.filter(product => product.discount > 0);
  
  // 2.- Calcular Precio final aplicando descuento, usar map()
  const productosPrecioFinal = (products) => products
    .filter(product => product.discount > 0)
    .map(product => {
      return {
        name: product.name,
        price: product.price,
        discount: product.discount,
        priceAfterDiscount: product.price * (1 - product.discount / 100)
      };
    });
  
  // 3.- Identificar productos con bajo stock, usar for
  // bajo stock: menos de 5 unidades
  const identificarStockBajo = (products) => {
    const P_StockBajo = []; 
    for (let i = 0; i < products.length; i++) {
      if (products[i].stock < 5) { 
        P_StockBajo.push(products[i]);
      }
    }
    return P_StockBajo;
  };
  
  // 4.- Actualizar el Stock de un Producto, usar try ... catch
  const actualizarStock = (products, nombre, cantidad) => {
    try {
      const product = products.find(p => p.name === nombre);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
  
      product.stock += cantidad;  // Actualiza el stock
  
      return `Stock actualizado: ${product.name} ahora tiene ${product.stock} unidades.`;  
  
    } catch (error) {
      console.error(error.message);
    }
  };
  
  // 5.- Resumen por categoría, usar bucle
  // cuantos existen por cada categoria
  const resumenPorCategorias = (products) => {
    const resumen = {};  // Objeto para almacenar
  
    // Bucle
    for (let i = 0; i < products.length; i++) {
      const categoria = products[i].category;
  
      if (resumen[categoria]) {
        resumen[categoria] += 1;
      } else {
        resumen[categoria] = 1;
      }
    }
  
    return resumen;
  };
  
  // Implementación funciones
  
  // 1.-
  const productos_conDescuento = producto_Descuento(products);
  console.log("Productos con descuento:", productos_conDescuento);
  
  // 2.-
  const productos_conPrecioFinal = productosPrecioFinal(products);
  console.log("Precio final de los productos:", productos_conPrecioFinal);
  
  // 3.-
  const productos_conStockBajo = identificarStockBajo(products);
  console.log("Productos con stock bajo:", productos_conStockBajo);
  
  // 4.-
  const producto_cambioStock = actualizarStock(products, 'Laptop', 5);
  console.log(producto_cambioStock);
  
  // 5.-
  const producto_Resumen = resumenPorCategorias(products);
  console.log("Resumen por categorías:", producto_Resumen);  