import React from 'react';
import axios from 'axios';

import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
// import { ChildComponent } from './components/child-component/child-component';

import { Container } from 'react-bootstrap';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchField: ''
    }
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.get(`http://www.omdbapi.com/?apikey=bd9f9eb5&s=${this.state.searchField}`)
      .then(response => this.setState({ movies: response.data.Search }, () => console.log(response.data.Search)))
      .catch(error => console.error(error))
  }

  // clickHandler() {
  //   this.setState((prevState) => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }))
  //   console.log(this)
  // }

  // clickHandler2() {
  //   console.log(this)
  // }

  // greetParent = (childName) => {
  //   alert(`Hello ${this.state.parent} from ${childName}`)
  // }

  render() {
    const { movies } = this.state;
    return (
      <div className='App'>
        <Container>
          <h1>Movie DB</h1>
          <SearchBox placeholder='Search Movie' handleChange={this.handleChange} value={this.state.searchField} handleSubmit={this.handleSubmit} />
          <CardList movies={movies} />
        </Container>
      </div>
    )
  }
}

export default App