import React, { Component } from 'react';
export const FooterList = ({ footerList }) => {
    return (
        <div>
            {footerList.map((item) =>
                <li><a href="#">{item}</a></li>
            )}
        </div>
    );
}
