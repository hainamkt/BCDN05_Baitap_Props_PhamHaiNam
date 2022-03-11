import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let { shoeState } = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <h5 className="card-title">{shoeState.name}</h5>
                            <p className="card-text">{shoeState.price} USD</p>
                            <img style={{ width: '70%' }} src={shoeState.image} alt="" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
