import React from 'react';

export function TextBox(props){

    const {placeholder, value, onChange} = props;

    return (        
        <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
    )
}
