import React, { Component } from 'react';
import ProductsShow from './ProductShow';
import { ProductMap } from './ProductMap';

export default class ProductsLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  componentDidMount() {

    fetch("http://5c85dbeb63a5850014a82296.mockapi.io/product")

      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ products: res });
      })

  }
  render() {
    let arrayProduct = ["Máy in phun khổ lớn", "Máy quét Canon 3D", "Máy hàn điện Alunima", "Máy khoan Decameta", "Máy phay đa năng CNC", "Máy mài, tiện DC 12V", "Máy khoan, cắt CNC", "Máy quay thông minh N3", "Motor R34C đa dụng", "Máy in aser màu 3D"];
    let arrayPrice = ["0 - 200.000 Đ (45)", "200.000 Đ - 500.000 Đ (32)", "500.000 Đ - 1.000.000 Đ (27)", "1.000.000 Đ - 2.000.000 Đ (27)", "Trên 2.000.000 Đ (9)"];
    return (
      <div>
        <div className="container">
          <div className="section-1">
            <span><a href="#">Trang chủ</a></span><span class="icon-triangle-right"></span><span><a href="#">Danh mục sản phẩm</a></span>
          </div>
          <div class="section-2">
            <div class="row">
              <div class="col-sm-3 col-md-3 col-lg-3">
                <div class="section-2__product">
                  <ul>
                    <li><a href="#"><span class="icon-menu"></span>DANH MỤC SẢN PHẨM</a></li>
                    <ProductMap productMap={arrayProduct} />
                  </ul>
                </div>
                <div class="section-2__product">
                  <ul>
                    <li><a href="#"><span class="icon-credit"></span>TÌM THEO MỨC GIÁ</a></li>
                    <ProductMap productMap={arrayPrice} />
                  </ul>
                </div>
                <div class="section-2__product">
                  <ul>
                    <li><a href="#"><span class="icon-paint-brush"></span>TÌM THEO MÀU SẮC</a></li>
                    <li><a href="#"><span class="icon-cube red"></span>Màu đỏ (45)</a></li>
                    <li><a href="#"><span class="icon-cube yellow"></span>Màu vàng (32)</a></li>
                    <li><a href="#"><span class="icon-cube blue"></span>Màu xanh (27)</a></li>
                    <li><a href="#"><span class="icon-cube gray"></span>Màu bạc (27)</a></li>
                    <li><a href="#"><span class="icon-cube black"></span>Màu đen (9)</a></li>
                  </ul>
                </div>
                <div class="section-2__product-list-4">
                  <ul>
                    <li><a href="#"><span class="icon-gift"></span>Sản phẩm khuyến mãi</a></li>
                    <li>
                      <a href="#">
                        <img src={require("../../images/product-1.png")} alt="logo" width="74px" height="53px" />
                        <div class="section-2__product-list-4__content">
                          <p>MẤY KHOAN BLACK DECKER LOẠI 1</p>
                          <p>1.550.000 Đ</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../images/new-product.png")} alt="logo" width="74px" height="53px" />
                        <div class="section-2__product-list-4__content">
                          <p>MẤY KHOAN BLACK DECKER LOẠI 1</p>
                          <p>1.550.000 Đ</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../images/product-4.png")} alt="logo" width="74px" height="53px" />
                        <div class="section-2__product-list-4__content">
                          <p>MẤY KHOAN BLACK DECKER LOẠI 1</p>
                          <p>1.550.000 Đ</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../images/product-5.png")} alt="logo" width="74px" height="53px" />
                        <div class="section-2__product-list-4__content">
                          <p>MẤY KHOAN BLACK DECKER LOẠI 1</p>
                          <p>1.550.000 Đ</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={require("../../images/product-3.png")} alt="logo" width="74px" height="53px" />
                        <div class="section-2__product-list-4__content">
                          <p>MẤY KHOAN BLACK DECKER LOẠI 1</p>
                          <p>1.550.000 Đ</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-9 col-md-9 col-lg-9">
                <div class="section-2__upper">
                  <div class="section-2__upper__sort">
                    <p>Sắp xếp theo:</p>
                    <select>
                      <option value="product">Tên sản phẩm</option>
                      <option value="random">random</option>
                      <option value="price">Giá</option>
                    </select>
                  </div>
                  <div class="section-2__upper__number">
                    <p>Show:</p>
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div class="section-2__upper__icon"><span class="icon-menu"></span><span class="icon-th"></span></div>
                </div>
                {this.state.products.map(item => <ProductsShow name={item.name} image={item.image} price={item.price} title={item.title} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
