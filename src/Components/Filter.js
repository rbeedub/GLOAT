import React from 'react';
import { useState } from 'react';

function Filter( {sortBy, onChangeSortBy} ) {



return (
    <>
        <div className="ui item">
            <label>Sort by</label>
        </div>
        <div className="ui item">
            <select 
                value={sortBy} 
                onChange={(e) => onChangeSortBy(e.target.value)}
                classname="ui selection dropdown"
                >
                    <option value="price">Price</option>
                    <option value="condition">Condition</option>
                    </select>
            </div>
    </>
    )
}

export default Filter;