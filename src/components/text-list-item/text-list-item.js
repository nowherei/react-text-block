import React, {Component} from 'react';

import './text-list-item.css';

export default class TextListItem extends Component {

  componentDidMount() {
    this.clickTimeout = null;
  }

  onClick = (e) => {
    const {onToggleSelected, onToggleImportant, type} = this.props;

    const tagName = e.target.tagName;
    if (tagName === 'LI' || tagName === 'SPAN') {
      if (type === 'complex') {
        if (this.clickTimeout !== null) {
          onToggleImportant();
          clearTimeout(this.clickTimeout);
          this.clickTimeout = null;
        } else {
          this.clickTimeout = setTimeout(() => {
            onToggleSelected();
            clearTimeout(this.clickTimeout);
            this.clickTimeout = null;
          }, 400)
        }
      } else {
        onToggleSelected();
      }
    }
  };

  render() {

    const {
      label, type, onDeleted,
      selected, important
    } = this.props;

    let classNames = `text-list-item list-group-item ${type}`;

    if (selected) {
      classNames += ' selected';
    }

    if (type === 'complex' && important) {
      classNames += ' important';
    }

    return (
      <li onClick={this.onClick} className={classNames}>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-times"/>
        </button>
        <span>{label}</span>
      </li>
    );
  }
}