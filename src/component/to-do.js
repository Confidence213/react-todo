import React, { Component } from 'react';
import '../style/todo.css';

import AddItem from './add-item.js';
import ItemList from './item-list.js';

class ToDo extends Component {
    constructor(){
        super();
        this.state = {
            items: ['11111','22222','33333'],
        }
    }

    render() {
        return (
            <div className="todo-container">
                <h1 className="todo-title">Todo List</h1>
                <AddItem onClick={(item) => this.addItem(item)}/>
                <ItemList items={this.state.items} deleteItem={(index) => this.deleteItem(index)} />
            </div>
        )
    }

    addItem(item) {
        this.setState({items: this.state.items.concat(item)});
    }

    deleteItem(index) {
        this.setState({items: this.state.items.splice(0,index-1).concat(this.state.items.splice(1))});
    }
}

export default ToDo;