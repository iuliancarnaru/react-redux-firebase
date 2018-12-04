
import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {props.options.map((option, index) => (
            <Option 
                key={index+1} 
                optionText={option} 
                handleDeleteOption={props.handleDeleteOption}
            />
        ))}
    </div>
);

export default Options;
