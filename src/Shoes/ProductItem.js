import React, { Component } from 'react'

export default class ProductItem extends Component {

    render() {
        let { sanPham, xem } = this.props;
        return (
            <div className="card">
                <img src={sanPham.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sanPham.name}</h5>
                    <p className="card-text">{sanPham.price} USD</p>
                    <button href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                        xem(sanPham);
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
