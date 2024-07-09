import React from 'react';

const ListaProductos = ({ productos, agregarAlCarrito }) => {
  return (
    <div className="lista-productos">
      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
      ))}
    </div>
  );
};

export default ListaProductos;
