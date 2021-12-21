import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import ColorPicker from './ColorPicker';
import { robots } from './robots';

class App extends Component{

  constructor(){
    super();
    this.state = {
      searchField: '',
      color1: '#000000',
      color2: '#ffffff'
    }
  }

  onSearchChange = (event) => {
    // Changing the state
    this.setState({ searchField: event.target.value });
  }

  onInputChange = (event) => {
    if(event.target.attributes.id.value == 'color1'){
      this.setState({ color1: event.target.value });
    }else{
      this.setState({ color2: event.target.value });
    }
  }

  render() {

    const gradientBackground = `linear-gradient(to right, ${this.state.color1}, ${this.state.color2})`
    document.querySelector('body').style.background = gradientBackground;
    
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return(
      <div className="tc">
        <h1>RoboFriends</h1>
        <ColorPicker inputChange={this.onInputChange} />
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;