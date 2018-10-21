import React, { Component } from "react";
import ReactDom from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
const API_KEY = "AIzaSyBZNFy7YGA6qlMhF13-Wac0EbMlhiOBV7c";

// Create a new component. This compenent should produce
// HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this cmponent's generated HTML and put it on
//the page (in the DOM)
ReactDom.render(<App />, document.querySelector(".container"));
