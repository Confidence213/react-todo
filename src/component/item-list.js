import React, { Component } from 'react';

import Item from './item';

class ItemList extends Component {
    
    render() {
        let items = this.props.items;
        let itemsDom = items.map( (item,index) =>
            <Item key={index} index={index+1} item={item} deleteItem={(index) => this.props.deleteItem(index)} />    
        )
        return (
            <div className="item-list">
                {itemsDom}
            </div>
        )
    }
}

export default ItemList;