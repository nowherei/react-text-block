import React from 'react';

import './group-button.css';

const GroupButton = ({onItemAdded}) => {

  const buttons = [
    {label: 'Add Simple', type: 'simple', id: 1},
    {label: 'Add Complex', type: 'complex', id: 2}
  ];

  const elements = buttons.map(({label, type, id}) => {
    return (
      <button key={id} onClick={(e) => {onItemAdded(e.target.value)}} type="button" className="btn btn-outline-secondary add-button" value={type}>
          {label}
      </button>
    );
  });

  return (
    <div className="btn-group group-button">
      {elements}
    </div>
  );
};

export default GroupButton;