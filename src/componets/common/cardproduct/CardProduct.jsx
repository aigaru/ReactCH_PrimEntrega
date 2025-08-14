import React from 'react';
import './CardProduct.css';

export default function CardProduct({product}) {
    const {id, title, price, image, category, rating} = product;
    
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <div className="product-card" key={id}>
            <div className="card-image-container">
                <img src={image} alt={title} className="product-image" />
                {category && (
                    <div className="category-tag">
                        {category}
                    </div>
                )}
            </div>
            
            <div className="card-content">
                <h2 className="product-title">
                    {truncateText(title, 60)}
                </h2>
                
                <div className="card-footer">
                    <div className="price-section">
                        <span className="price-value">${price} USD</span>
                    </div>
                    
                    {rating && (
                        <div className="rating-section">
                            <span className="rating-stars">⭐ {rating.rate}</span>
                            <span className="rating-count">({rating.count})</span>
                        </div>
                    )}
                    
                    <button className="add-to-cart-btn">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
