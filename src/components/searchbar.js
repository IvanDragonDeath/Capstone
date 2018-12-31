import React from 'react';

 export function SearchBar() {
    return (
      <div className= 'Search_Bar'>
          <div>
        <input type="text" id="myInput" onKeyUp="myFunction()" placeholder="Search Here" className= 'Search'></input>
          </div>
      </div>
    )
  }


