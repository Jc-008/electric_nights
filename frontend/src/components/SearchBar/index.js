import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {searchFunc} from '../../store/search'
import './SearchBar.css';


const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState('')      // empty state for search
  const history = useHistory();
  const dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchFunc(searchTerm));
    history.push('/search');        // will WANT to redirect to search page after
  }

  return(
    <div className={'searchbar-container'}>
      <form
        method='get'
        action='/search/'
        onSubmit={(e) => handleSubmit(e)}>

        <input
        value={searchTerm}
        placeholder='Find Event'
        onChange={(e) => setsearchTerm(e.target.value)}>
        </input>

        <button className='search-btn' onClick={(e) => handleSubmit(e)} type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;
