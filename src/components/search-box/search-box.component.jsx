import React from 'react';

import './search-box.style.css'

export const SearchBox = ({ placeholder, handleChange, value, handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder={placeholder}
                    type='search'
                    name='search'
                    onChange={handleChange}
                    value={value}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}