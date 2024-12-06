# Tarea07Front-end
# Gestor de Inventario de una Tienda

## Descripción

Este proyecto implementa un sistema de gestión de inventario para una tienda.  
El sistema maneja una lista de productos con información como nombre, categoría, precio, cantidad en inventario y descuento. Utiliza programación funcional y estructuras de control en JavaScript para realizar diversas operaciones sobre los productos.

## Funcionalidades

El sistema incluye las siguientes funcionalidades:

### 1. **Filtrar Productos con Descuento:**
   Filtra los productos que tienen un descuento mayor a 0 utilizando el método `filter()`.

### 2. **Calcular el Precio Final con Descuento:**
   Calcula el precio final de los productos con descuento, utilizando `map()` para aplicar el descuento sobre el precio original.

### 3. **Identificar Productos con Stock Bajo:**
   Identifica los productos con menos de 5 unidades en inventario mediante un bucle `for` y los guarda en un nuevo array.

### 4. **Actualizar el Stock de un Producto:**
   Crea una función que recibe el nombre de un producto y una cantidad a agregar. Utiliza un bloque `try...catch` para verificar si el producto existe en el inventario.

### 5. **Resumen por Categorías:**
   Utiliza un bucle para contar cuántos productos existen en cada categoría (como "electrónica", "hogar", "alimentos") y devuelve un objeto con este resumen.

## Requisitos

- **Lenguaje:** JavaScript (ES6+).
- **Funciones Principales:**
  - `filter()`
  - `map()`
  - `for`/`forEach`
  - `try...catch`
