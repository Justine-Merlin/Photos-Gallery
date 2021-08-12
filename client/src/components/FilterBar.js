import React, { useEffect, useState } from 'react';

const FilterBar = () => {

    const checkboxsFilter = [
        {id: 0, label: "Objets"},
        {id: 1, label: "Mariages et fêtes"},
        {id: 2, label: "Portrait"}, 
        {id: 3, label: "Paysages"}];

    return (
        <div className="filter">
                {checkboxsFilter.map((checkbox) => {
                    return (
                        <li key={checkbox.id}>
                            <input type="checkbox" value={checkbox.label} id={checkbox.label}/>
                            <label htmlFor={checkbox.label}>{checkbox.label}</label>
                        </li>
                    )
                })}
        </div>
    );
};

export default FilterBar;