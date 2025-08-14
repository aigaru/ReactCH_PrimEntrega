import React, { useEffect, useState } from 'react';
import CardProduct from '../cardproduct/CardProduct';
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]); // Corregí el typo "prodcutos"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        
        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }
        
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        setError(error.message);
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading-container">
          <div className="spinner"></div>
          <h2>Cargando productos...</h2>
          <p>Estamos preparando los mejores productos para ti</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h2>¡Oops! Algo salió mal</h2>
          <p>{error}</p>
          <button 
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header-section">
        <h1 className="main-title">Nuestros Productos</h1>
        <p className="subtitle">Descubre nuestra increíble colección de productos</p>
        <div className="products-count">
          <span>{productos.length} productos disponibles</span>
        </div>
      </div>
      
      <div className="products-grid">
        {productos.map((product, index) => (
          <div 
            key={product.id} 
            className="product-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
