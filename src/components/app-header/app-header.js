import React from 'react';

import './app-header.css';

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="app-header d-flex">
        <h1>Список</h1>
        <h2>Кол-во 10, выделено 5 (3 красных, 1 зеленый)</h2>
      </div>
    </div>
  );
};

export default AppHeader;
