import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FooterInfo from './FooterInfo';
import { FooterList } from './FooterList';

const Footer = () => {
  let arrayPolicy = ["Chính sách giao hàng", "Chính sách đổi sản phẩm", "Chính sách bảo hành", "Chính sách trả góp", "Giới thiệu hàng đổi trả", "Vận chuyển miễn phí"]
  let arraySupport = ["Hệ thống cửa hàng", "Hướng dẫn mua hàng", "Hướng dẫn thanh toán", "Tích điểm đổi thưởng", "Dịch vụ đổi trả hàng", "Câu hỏi thường gặp"]
  let arrayEvent = ["Tin tức mới nhất", "Tin tức khuyến mãi", "Tuyển dụng , đãi ngộ", "Download tài liệu", "Chương trình đối tác", "Nhà phát triển ứng dụng"]
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
              <div className="footer__title">
                <img src={require("../../images/list-yellow.png")} alt="list" />
                <h2>VỀ CHÚNG TÔI</h2>
              </div>
              <p>Công ty Cổ phẩn Công nghệ DKT đã và đang khẳng định được vị trí hàng đầu trong lĩnh vực Thương mại điện tử. </p>
              <div className="footer__map"><span className="icon-location"></span>
                <p>Tầng 4 - Tòa nhà Hanoi Group 442 Đội Cấn Ba Đình - Hà Nội</p>
              </div>
              <div className="footer__email"><span className="icon-envelope"></span>
                <p>support@dkt.com.vn</p>
              </div>
              <div className="footer__phone"><span className="icon-mobile"></span>
                <p>(84-4) 66558868 - (84-4) 37868904</p>
              </div>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <div className="footer__title"><img src={require("../../images/list-yellow.png")} alt="list" />
                <h2>CHÍNH SÁCH</h2>
              </div>
              <ul>
                <FooterList footerList={arrayPolicy} />
              </ul>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <div className="footer__title"><img src={require("../../images/list-yellow.png")} alt="list" />
                <h2>DỊCH VỤ&HỖ TRỢ</h2>
              </div>
              <ul>
                <FooterList footerList={arraySupport} />
              </ul>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="footer__title"><img src={require("../../images/list-yellow.png")} alt="list" />
                    <h2>TIN TỨC - SỰ KIỆN</h2>
                  </div>
                  <ul>
                    <FooterList footerList={arrayEvent} />
                  </ul>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="footer__title"><img src={require("../../images/list-yellow.png")} alt="list" />
                    <h2>KẾT NỐI</h2>
                  </div>
                  <ul>
                    <li><a href="#"><span className="icon-facebook"></span> Facebook</a></li>
                    <li><a href="#"><span className="icon-twitter"></span> Twitter</a></li>
                    <li><a href="#"><span className="icon-google-plus"></span> Google</a></li>
                    <li><a href="#"><span className="icon-skype"></span> Skype</a></li>
                    <li><a href="#"><span className="icon-instagram"></span> Instagram</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="row">
            <div className="col-sm-6 col-md-6 ol-lg-6">
              <h3>Thanh toán</h3>
              <p><span><a href="#">
                <img src={require("../../images/bank-1.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-2.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-3.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-4.png")} alt="" /></a></span></p>
              <p><span><a href="#"><img src={require("../../images/bank-5.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-6.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-7.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-8.png")} alt="" /></a></span></p>
            </div>
            <div className="col-sm-6 col-md-6 ol-lg-6">
              <h3>Giải đáp nhanh:</h3>
              <div className="row">
                <div className="col-sm-6 col-md-6 ol-lg-6">
                  <div className="footer__advisory"><span className="icon-phone1"></span>
                    <div className="footer__advisory__phone">
                      <p>Tư vấn miễn phí (24/7)</p>
                      <p>1900 650 650</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 ol-lg-6">
                  <div className="footer__chat"><span className="icon-wechat"></span>
                    <div className="footer__chat__phone">
                      <p>Góp ý - phản hồi - thắc mắc</p>
                      <p>1900 650 650</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterInfo></FooterInfo>
      </footer>
    </div>
  );
}
export default Footer;
