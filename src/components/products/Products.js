import React, { Component } from 'react';
import ProductsLeft from './ProductsLeft';
import ProductsShow from './ProductShow';


class Products extends Component {
  render() {
    return (
      <div >
        <section id="section">
          <ProductsLeft />
        </section>
      </div>
    );
  }
}
export default Products;
