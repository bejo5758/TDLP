import React from 'react';

const List = props => (
    <ul className="App-list">
        {
            props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
);

export default List;