import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductsShow extends Component {
  render() {
    const { id, image, name, price, title } = this.props;
    return (
      <div class="section-7__card">
        <div class="section-7__card__img">
          <img src={image} />
        </div>
        <div class="section-7__card__content">
          <p>{name}</p>
          <p>
            <span class="icon-star-full"></span><span class="icon-star-full"></span><span class="icon-star-full"></span>
            <span class="icon-star-full"></span>
            <span class="icon-star-empty"></span>(12 đánh giá)</p>
          <p>{title}</p>
          <p>{price}</p>
          <div class="section-7__card__button"><a href="#">MUA NGAY</a><a href="#">XEM CHI TIẾT</a></div>
        </div>
      </div>
    );
  }
}