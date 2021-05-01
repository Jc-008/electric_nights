import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './SearchBar.css';


const SearchBar = () => {
  const [keyword, setKeyword] = useState('')      // empty state for search
  const history = useHistory();
  const dispatch = useDispatch();



  return(
    <div className={'searchbar-container'}>
      <h3>Search Bar here</h3>
    </div>
  )
}

export default SearchBar;
