import React from 'react';
import Search from "../components/Search/search"
import Navbar from '../components/Search/navbar';
import ItemContainer from '../components/Search/list';

function Searchpage () {
  return (
    <div>
        <Navbar/>
        <Search />
        <ItemContainer />
    </div>
  )
}

export default Searchpage;