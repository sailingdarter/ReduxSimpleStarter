import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/VideoDetail';
import
const API_KEY = 'AIzaSyAOTmg12SCeBYERVabzdMc9OAPjvraosx0';

YTSearch({key: API_KEY,  term: 'surfboards'}, function(data) { console.log(data)});



// Create a new component. This component should produce html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term){
    YTSearch({key: API_KEY,  term: term}, (videos) => {
      this.setState({
        videos: videos,             // this.setState.({video: videos}) is a more expanded form of showin the iteration over a video list
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return(
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}



//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
