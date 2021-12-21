import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import ColorPicker from './ColorPicker';
import Scroll from './Scroll';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: '',
      color1: '#000000',  
      color2: '#ffffff'
    }
  }

  // Lifecycle methods (mounting)
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    // Changing the state
    this.setState({ searchField: event.target.value });
  };

  onInputChange = (event) => {
    if(event.target.attributes.id.value === 'color1'){
      this.setState({ color1: event.target.value });
    }else{
      this.setState({ color2: event.target.value });
    }
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    const gradientBackground = `linear-gradient(to right, ${this.state.color1}, ${this.state.color2})`
    document.querySelector('body').style.background = gradientBackground;
    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    }else{
      return(
        <div className="tc">
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
      );
    }
  }
}

export default App;