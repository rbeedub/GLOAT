import React from 'react';
import { useState } from 'react';

function Filter( {sortBy, onChangeSortBy } ) {



return (
    <>
        <div class="ui raised small padded right floated segment">
            <label>  Sort by  </label>
            <select 
                value={sortBy} 
                onChange={(e) => onChangeSortBy(e.target.value)}
                classname="ui selection dropdown">
                    <option value="price">Price: $ to $$$$</option>
                    <option value="condition">Condition: New to Used </option>
                    </select>
            </div>
    </>
    )
}

export default Filter;