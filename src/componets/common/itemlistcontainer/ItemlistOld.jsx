import React, { useEffect, useState } from 'react';
import CardProduct from '../cardproduct/CardProduct';
import "./ItemListContainer"

export const ItemListContainer = () => {

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
            return <CardProduct key={product.id} product={product} />
            
        })
      }
    </div>
  )
};