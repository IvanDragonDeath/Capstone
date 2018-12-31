import React from 'react';
import ReactDOM from 'react-dom';


import SearchBar from './components/searchbar';
import Base from './components/base';
import Header from './components/header';
import { GridTop } from './components/grid_top';
import { Redirect } from './components/Redirect';


import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';






function main() {
  ReactDOM.render(
    
    <Base>
      
      <GridTop>
      </GridTop>
      <Image>
      </Image>
      <Header>
      </Header>
      {/* <SearchBar>
      </SearchBar> */}
      
     
      <Redirect>
      </Redirect>
    </Base>
    , document.querySelector('.app-wrapper', 'Search-Box'));
    
}

document.addEventListener('DOMContentLoaded', main);
