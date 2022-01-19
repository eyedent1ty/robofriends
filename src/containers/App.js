import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ColorPicker from '../components/ColorPicker';
import Scroll from '../components/Scroll';
import './App.css';

const App = () => {

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [color1, setColor1] = useState('#000000');
  const [color2, setColor2] = useState('#ffffff');
  
  function onInputChange(event) {
    const { value } = event.target.attributes.id;
    value === 'color1' ? setColor1(event.target.value) : setColor2(event.target.value);
  }

  function onSearchChange(event) {
    setSearchfield(event.target.value);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
  }, []);

  const filteredRobots = robots.filter(robot => {
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  });

  const gradientBackground = `linear-gradient(to right, ${color1}, ${color2})`
  document.querySelector('body').style.background = gradientBackground;

  return !robots.length ?
    <h1>Loading</h1>
      :<div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <ColorPicker 
          inputChange={onInputChange} 
          currentColor={gradientBackground} 
          color1={color1} 
          color2={color2}
        />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
        {console.log(count)}
      </div>
}

export default App;