import React from 'react';

const CheckboxFilter = ( { checkbox, handleFilterImage, filterValue }) => {
    console.log(checkbox);
    return (
        <li key={checkbox.id}>
            <input 
                type="radio"
                value={checkbox.label} 
                id={checkbox.label} 
                defaultChecked={checkbox !== '' && checkbox.label === filterValue}
                onClick={handleFilterImage}
                name="filter"
            />
            <label htmlFor={checkbox.label}>{checkbox.label}</label>
        </li>

    );
};

export default CheckboxFilter;