import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

// const apiKey = 'e590c442171b460bb4eb63bd49335e5c';
const url = 'https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey' +
  'country=us&' +
  'apiKey=e590c442171b460bb4eb63bd49335e5c';

class App extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    this.showArticles()
  }

  showArticles() {
    let req = new Request(url);

    fetch(req)
      .then(response => response.json())
      .then(articleArray => {
        this.setState({
          articles: articleArray.articles
        })
        console.log(this.state.articles)
      })
      .catch(error => console.log(`Error with fetching API: ${error} `));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main name={this.state.articles} />
        
      </div>
    );
  }
}

export default App;
