import React, { useEffect, useState } from 'react';
import CardProduct from '../../common/cardproduct/CardProduct';
import {FAKE_STORE_API_URL} from '../../../services/ApiContext';
import './Home.css'

export const Home = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(FAKE_STORE_API_URL);
        
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
        <h1 className="main-title">Productos Destacados</h1>
      </div>
      
      <div className="products-grid">
        {productos.map((product) => (
          <div 
            key={product.id} 
            className="product-item"
          >
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}