import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Chi tiết sản phẩm</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="row">
                  <div className="col-4">
                    <img src={content.image} alt={content.name} className="img-fluid"/>
                  </div>
                  <div className="col-8">
                    <table className="table">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td><b>Tên sản phẩm</b></td>
                          <td>{content.name}</td>
                        </tr>
                        <tr>
                          <td><b>Mô tả</b></td>
                          <td>{content.description}</td>
                        </tr>
                        <tr>
                          <td><b>Số lượng</b></td>
                          <td>{content.quantity}</td>
                        </tr>
                        <tr>
                          <td><b>Giá</b></td>
                          <td>{content.price}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
