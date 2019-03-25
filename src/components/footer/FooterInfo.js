import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class FooterInfo extends Component {
    render() {
        return (
            <div>
                <div className="footer__down">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <p>Bản quyền thuộc về <span>Design Team</span>. Phát triển bởi<span>Bizweb</span></p>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <div className="footer__down__menu">
                                    <ul>
                                        <li><Link to="/home">Trang chủ</Link></li>
                                        <li><Link to="/about">Giới thiệu</Link></li>
                                        <li><Link to="/products">Sản phẩm</Link></li>
                                        <li><Link to="/promotion">Tin khuyến mãi</Link></li>
                                        <li><Link to="/services">Dịch vụ</Link></li>
                                        <li><Link to="/contact">Liên hệ</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
