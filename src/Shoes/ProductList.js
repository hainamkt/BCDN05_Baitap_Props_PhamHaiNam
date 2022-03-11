import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProduct = () => {
        let { arrProduct, xemChiTiet } = this.props;
        return arrProduct.map((sp) => {
            return (
                <div className="col-4 my-4" key={`sp${sp.id}`}>
                    <ProductItem sanPham={sp} xem={xemChiTiet}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderProduct()}
            </div>
        )
    }
}
