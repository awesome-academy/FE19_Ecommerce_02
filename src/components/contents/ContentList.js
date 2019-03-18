import React, { Component } from 'react';
export default class ContentList extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="section-1__list">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="section-1__list__1">
                                    <span className="icon-plane"></span>
                                    <div className="section-1__list__1__content">
                                        <h1>MIỄN PHÍ VẬN CHUYỂN</h1>
                                        <p>Chúng tôi vận chuyển miễn phí với các đơn hàng trị giá trên 1000.000 Đ.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="section-1__list__1">
                                    <span className="icon-location"></span>
                                    <div className="section-1__list__1__content">
                                        <h1>CHÍNH SÁCH ĐỔI TRẢ</h1>
                                        <p>Nếu phát hiện lỗi của nhà sản xuất, chúng tôi sẽ đổi mới sản phẩm trong 7 ngày đầu tiên.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="section-1__list__1">
                                    <span className="icon-gift"></span>
                                    <div className="section-1__list__1__content">
                                        <h1>KHUYẾN MẠI HÀNG TUẦN</h1>
                                        <p>Chúng tôi cam kết bán hàng chính hãng 100% với tất cả các loại sản phẩm.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="section-1__list__1">
                                    <span className="icon-like"></span>
                                    <div className="section-1__list__1__content">
                                        <h1>CAM KẾT HÀNG CHÍNH HÃNG</h1>
                                        <p>Chúng tôi cam kết bán hàng chính hãng 100% với tất cả các loại sản phẩm.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
