import React from "react";
import StyledStore from "./storeStyling";
import products from "../../data/products";
import Product from "../product/productItem";

export default function dessertStore() {
  return (
    <StyledStore>
      <h1 className="store-header">Desserts</h1>

      <section className="items-container">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </section>
    </StyledStore>
  );
}
