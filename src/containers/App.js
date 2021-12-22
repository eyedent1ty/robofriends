import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ColorPicker from '../components/ColorPicker';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{

  state = {
    robots: [],
    searchField: '',
    color1: '#000000',
    color2: '#ffffff',
  }

  // Lifecycle methods (mounting)
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    // Changing the state
    this.setState({ searchField: event.target.value });
  };

  onInputChange = (event) => {
    const { value } = event.target.attributes.id;
    value === 'color1' ?
      this.setState({ color1: event.target.value })
      : this.setState({ color2: event.target.value });

  };

  render() {
    const {robots, searchField, color1, color2} = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    const gradientBackground = `linear-gradient(to right, ${color1}, ${color2})`
    document.querySelector('body').style.background = gradientBackground;

    return (!robots.length) ?
      <h1>Loading</h1>
      :<div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <ColorPicker 
          inputChange={this.onInputChange} 
          currentColor={gradientBackground} 
          color1={this.state.color1} 
          color2={this.state.color2}
        />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
  }
}

export default App;