import React, { Component } from 'react';

class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            item: ' ',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    render() {
        return (
            <div className="add-item">
                <input type="text" value={this.state.item} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
                <button className="add-item-button" onClick={this.addItem}>ADD</button>
            </div>
        )
    }
    
    handleChange(event) {
        this.setState({item: event.target.value});
    }
    handleKeyDown(event) {
        if(event.keyCode === 13) {
            this.addItem();
        }
    }
    addItem(){
        let item = this.state.item;
        item = item.replace(/\s+/g,"");
        if (item !== ''){
            this.props.onClick(item);
            this.setState({item:''});
        }else {
            this.setState({item: ''});
            console.warn('entey something!');
        }
    }
}

export default AddItem;