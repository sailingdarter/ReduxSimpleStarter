import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyAOTmg12SCeBYERVabzdMc9OAPjvraosx0';

YTSearch({key: API_KEY,  term: 'surfboards'}, function(data) { console.log(data)});



// Create a new component. This component should produce html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY,  term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState.({video: videos})

    });

  }

  render() {
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}



//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
