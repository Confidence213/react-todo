import React, { Component } from 'react';

class Item extends Component {

    render() {
        return (
            <div className="item">
                <div className="item-index">
                    {this.props.index}
                </div>
                <div className="item-content">
                    {this.props.item}
                </div>
                <button className="item-close-icon" onClick={() => this.deleteItem()} >
                    X
                </button>
            </div>
        )
    }

    deleteItem(){
        let index = this.props.index;
        this.props.deleteItem(index);
    }
}

export default Item;