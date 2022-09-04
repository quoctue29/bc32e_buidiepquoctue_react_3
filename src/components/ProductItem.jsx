import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const {item,setStateModal}=this.props
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={item.image}
            alt={item.name}
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h6 className="card-title">{item.name}</h6>
            <p className="card-text">
              {item.shortDescription}
            </p>
            <button className="btn btn-dark" data-toggle="modal" data-target="#myModal" onClick={()=>setStateModal(item)}>
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
