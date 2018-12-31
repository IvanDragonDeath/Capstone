import React, { Component } from 'react';

import { SearchBar } from './searchbar';
import { Header } from './header';
import { Image } from './image';
import { GridTop } from './grid_top';


class Base extends Component {
    render() {
        return (
            <div className="grid__main">
                <SearchBar/>
                <Header/>
                <Image/>
                <GridTop/>
                
         


            </div>
        )
        }
    }

export default Base;