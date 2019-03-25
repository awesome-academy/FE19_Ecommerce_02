import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <section id="section">
                    <div class="container">
                        <div class="section-top"><span><a href="#">Trang chủ</a></span><span class="icon-triangle-right"></span><span><a href="#">Đăng nhập</a></span></div>
                        <div class="section-form">
                            <div class="row">
                                <div class="col-sm-6 col-md-6 col-lg-6">
                                    <h3>Thông tin đăng nhập</h3>
                                    <form>
                                        <label for="hovaten">Họ và tên:	</label><span>*</span><input type="text" id="name" name="hovaten"></input><label for="email">Email:</label><span>*</span><input type="email" id="email" name="email" />
                                        <div class="section-form__checkbox">
                                            <form><input type="checkbox">
                                            </input>
                                                <span>Ghi nhớ đăng nhập</span>
                                                <p>Bạn quên mật khẩu ?</p>
                                            </form>
                                        </div>
                                        <a href="#">Đăng nhập</a>
                                    </form>
                                </div>
                                <div class="col-sm-6 col-md-6 col-lg-6">
                                    <div class="section-form__content">
                                        <h3>Bạn chưa có tài khoản ?</h3>
                                        <p>Đăng ký tài khoản để mua hàng nhanh hơn. Theo dõi đơn đặt hàng, vận chuyển. Cập nhật các tin tức sự kiện và các chương trình giảm giá của chúng tôi.</p>
                                        <a href="#">Đăng kí</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Login;
