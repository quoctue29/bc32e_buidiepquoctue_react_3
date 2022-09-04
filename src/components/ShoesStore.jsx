import React, { Component } from "react";
import ProductList from "./ProductList";
import products from "./data.json";
import Modal from "./Modal";
export default class ShoesStore extends Component {
  state = {
    productDetail: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  setStateModal = (handleShoe) => {
    this.setState({
      productDetail: handleShoe,
    });
  };
  render() {
    return (
      <div>
        <h1 className="text-center mb-5">Shoes Shop</h1>
        <div className="container-fluid row">
          <div className="col-3">
            <p style={{padding:"10px",margin:"5px",border:"2px solid blue",cursor:"pointer"}}>Home</p>
            <p style={{padding:"10px",margin:"5px",cursor:"pointer"}}>Shop</p>
          </div>
          <div className="col-9">
            <div className="container">
              <ProductList
                productsData={products}
                setStateModal={this.setStateModal}
              ></ProductList>
            </div>
          </div>
        </div>
        <Modal content={this.state.productDetail}></Modal>
      </div>
    );
  }
}
