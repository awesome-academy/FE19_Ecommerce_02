import React, { Component } from 'react';

export default class Register extends Component {
    render() {
        return (
            <>
                <section id="section">
                    <div className="container">
                        <div className="section-top"><span><a href="#">Trang chủ</a></span><span className="icon-triangle-right"></span><span><a href="#">Đăng kí</a></span></div>
                        <div className="section-form">
                            <p>Thông tin cá nhân:</p>
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <form><label for="hovaten">Họ và tên:	</label><span>*</span><input type="text" id="name" name="hovaten"></input><label for="sodienthoai">Số điện thoại:</label><span>*</span><input type="tel" id="sdt" name="sodienthoai"></input></form>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <form><label for="email">Email:</label><span>*</span><input type="email" id="email" name="email"></input><label for="diachi">Địa chỉ:</label><span>*</span><input type="text" id="diachi" name="diachi"></input></form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-group"><a href="#">Quay lại</a><a href="#">Đăng kí</a></div>
                </section>
            </>
        );
    }
}
