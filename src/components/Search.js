import React from 'react';
import { VscSearch } from 'react-icons/vsc';
import dayIcon from '../svg/day.svg';
import nightIcon from '../svg/night.svg';
const Search = ({
    query,
    setQuery,
    handleSubmit,
    toggleTheme,
    theme,
    showAlert,
    setAlert,
}) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='search'>
                <input
                    type='text'
                    value={query}
                    placeholder='Search for music...'
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setAlert({ showAlert: false });
                    }}
                />
                <button className='btn btn-search'>
                    <VscSearch />
                </button>
            </div>
            <div className='toggle'>
                <img
                    src={theme === 'light-theme' ? nightIcon : dayIcon}
                    alt='icon'
                    className='toggle'
                    onClick={toggleTheme}
                />
            </div>
        </form>
    );
};

export default Search;
