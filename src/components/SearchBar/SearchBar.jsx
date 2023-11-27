import React from 'react';
import { IoSearch } from 'react-icons/io5';

function SearchBar() {
    return (  
        <form>
            <input type="search" 
                placeholder="Buscar produtos" 
                className="search__input"
                required
            />

            <button type="submit" className="search__button">
                <IoSearch />
            </button>
        </form>
    );
}

export default SearchBar;