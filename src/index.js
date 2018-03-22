import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyAOTmg12SCeBYERVabzdMc9OAPjvraosx0';
// Create a new component. Thuis component should produce html

const App = () => {
  return (
    <div><SearchBar /></div>)
}

//Take this component's generated HTML and put it on the page (in the DOM)


ReactDOM.render(<App />, document.querySelector('.container'));
