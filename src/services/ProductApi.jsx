import React, { useEffect, useState } from 'react'

export const ProductApi = () => {

    const [prodcutos, setProductos] = useState([]);

    useEffect(() =>{
        const getProducts = fetch("https://fakestoreapi.com/products");
        getProducts
        .then((res) => res.json())
        .then((res) => setProductos(res))
        .catch((error) => console.log(error))
    }, []);
  return (
    <div>
      {
        prodcutos.map( product =>{
            return <div key={product.id}>
                <h2>{product.title}</h2>
                <h3>{product.category}</h3>
                <h3>{`$${product.price} USD`}</h3>
            </div>
            
        })
      }
    </div>
  )
};
