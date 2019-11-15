import React, {Component} from 'react';

import './app.css';
import AppHeader from "../app-header";
import TextList from "../text-list";
import GroupButton from "../group-button";

export default class App extends Component {

  maxId = 100;

  state = {
    textData: [
      this.createTextItem('Text 1', 'simple'),
      this.createTextItem('Text 2', 'complex'),
      this.createTextItem('Text 3', 'simple'),
    ]
  };

  createTextItem(label,type) {
    const item = {
      label,
      type,
      selected: false,
      id: this.maxId++
    };
    if (type === 'complex') {
      item.important = true
    }
    return item
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {...oldItem,
      [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  addItem = (type) => {
    this.setState(({textData}) => {
      const newArray = [
        ...textData,
        this.createTextItem(`Text ${this.maxId}`, type)
      ];
      return {
        textData: newArray
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({textData}) => {
      const idx = textData.findIndex((el) => el.id === id);

      if (textData[idx].type === 'complex') {
        if (!window.confirm(`Are you sure?`)) {
          return null;
        }
      }

      const newArray = [
        ...textData.slice(0, idx),
        ...textData.slice(idx + 1)
      ];

      return {
        textData: newArray
      };
    });
  };

  onToggleSelected = (id) => {
    this.setState(({textData}) => {
      return {
        textData: this.toggleProperty(textData, id, 'selected')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({textData}) => {
      return {
        textData: this.toggleProperty(textData, id, 'important')
      };
    });
  };

  render() {
    const {textData} = this.state;

    return (
      <div className="list-app">
        <AppHeader/>
        <TextList
          texts={textData}
          onDeleted={this.deleteItem}
          onToggleSelected={this.onToggleSelected}
          onToggleImportant={this.onToggleImportant} />
        <GroupButton
          onItemAdded={this.addItem} />
      </div>
    );
  };
};