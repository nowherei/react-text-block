import React from 'react';

import './app-header.css';

const AppHeader = ({all, selected,
                    selectedGreen, selectedRed}) => {
  return (
    <div className="app-header">
      <div className="app-header d-flex">
        <h1>List</h1>
        <h2>
          All {all}, selected {selected}
          (<span className="red">{selectedRed} red</span>, <span className="green">{selectedGreen} green)</span>
        </h2>
      </div>
    </div>
  );
};

export default AppHeader;
