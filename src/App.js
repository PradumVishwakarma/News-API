import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NewsPage from './components/NewsPage';

export default class App extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container">
                    <NewsPage />
                </div>

            </>
        )
    }
}



