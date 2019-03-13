import React, { Component } from 'react';
import ContentList from './ContentList';
export default class Contents extends Component {
  render() {
    return (
      <div>
        <section id="section">
          <div className="container">
            <div className="section-1">
              <div className="row">
                <div className="col-sm-8 col-md-8 col-lg-8">
                  <div className="section-1__slider">
                    <div className="section-1__slider__content">
                      <h1>Máy khoan đa năng</h1>
                      <h2>Dewalt</h2>
                      <ul>
                        <li><span className="icon-checkmark"></span>Thiết kế nhỏ ngọn, phù hợp, đa mục đích</li>
                        <li><span className="icon-checkmark"></span>Mạnh mẽ, bền bĩ và hiệu suất lớn hơn</li>
                        <li><span className="icon-checkmark"></span>Khoan cắt với độ chính xác tuyệt đối</li>
                      </ul>
                      <div className="button"><a href="#">Đặt hàng</a></div>
                    </div>
                    <div className="section-1__slider__images">
                      <img src={require("../../images/perforator-gray.png")} alt="perforator" />
                    </div>
                  </div>
                  <div className="section-1__bt-slider"><a href="#"></a><a href="#"></a><a href="#"></a></div>
                </div>
                <ContentList />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
} 
