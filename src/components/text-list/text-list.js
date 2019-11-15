import React from 'react';

import './text-list.css';
import TextListItem from "../text-list-item";

const TextList = ( { texts, onDeleted,
                     onToggleSelected,
                     onToggleImportant } ) => {

  const elements = texts.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <TextListItem
        key={id}
        {...itemProps}
        onDeleted={() => onDeleted(id)}
        onToggleSelected={() => onToggleSelected(id)}
        onToggleImportant={() => onToggleImportant(id)}/>
    )
  });

  return (
    <ul className="list-group text-list">
      {elements}
    </ul>
  );
};

export default TextList;