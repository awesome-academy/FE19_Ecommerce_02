import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="top-upper">
            <div className="container">
              <div className="top-upper__left">
                <ul>
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-google-plus"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                </ul>
              </div>
              <div className="top-upper__right">
                <ul>
                  <li><Link to="/register">Đăng Ký</Link></li>
                  <li><Link to="/login">Đăng Nhập</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top-down">
            <div className="container">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="top-down__logo"><img src={require("../../images/logo.png")} alt="logo" /></div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="top-down__phone">
                    <div className="top-down__phone__hotline">
                      <ul>
                        <li>Hotline:</li>
                        <li><span>(04) 9500 9650</span> - <span>(04) 9500 8850</span></li>
                      </ul>
                    </div>
                    <div className="top-down__phone__order">
                      <ul>
                        <li>Đặt hàng nhanh:</li>
                        <li><span>(04) 9500 9650</span> - <span>(04) 9500 8850</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="top-down__search"><input type="search" placeholder="   Tìm kiếm..." /><span className="icon-search1"></span></div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <div className="container"><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item"><Link className="nav-link" to="/home">Trang chủ</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/about">Giới thiệu</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/products">Sản phẩm</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/promotion">Tin khuyến mãi</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/services">Dịch vụ</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/contact">Liên Hệ</Link></li>
                </ul>
              </div><Link to="#"> <img src={require("../../images/cart.png")} alt="cart" /></Link></div>
          </nav>
        </header>
      </div>
    );
  }
}
