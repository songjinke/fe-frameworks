import React from 'react';

function SimpleList({ name }) {
  const reactElement = React.createElement(
    'ul',
    {
      className: 'list',
    },
    React.createElement(
      'li',
      {
        key: '1',
      },
      '1'
    ),
    React.createElement(
      'li',
      {
        key: '2',
      },
      '2'
    )
  );
  console.log(reactElement);
  return reactElement;
}

export default SimpleList;
