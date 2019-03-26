import React, { Component } from 'react';
export const ProductMap = ({ productMap }) => {
    return (
        <div>
            {productMap.map((item) =>
            <li><a href="#"><span class="icon-th-large"></span>{item}</a></li>
            )}
        </div>
    );
}
