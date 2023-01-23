import React from 'react';
import { useState } from 'react';

function Filter( {sortBy, onChangeSortBy} ) {



return (
    <>
        <div class="ui very padded right floated segment">
            <label>Sort by  </label>
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