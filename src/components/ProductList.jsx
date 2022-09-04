import React, { Component } from 'react';
import ProductItem from "./ProductItem";
export default class ProductList extends Component {
  render() {
    const {productsData,setStateModal}=this.props
    return (
      <div>
        <div className="row">
          {productsData.map((product)=>{
            return <div className="col-4 my-3" key={product.id}>
               <ProductItem item={product} setStateModal={setStateModal}></ProductItem>
            </div>
          })}
        </div>
      </div>
    )
  }
}
