import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Reaction';

  return (
    <div>
      <h1>Hello, {title}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

const numbers = [1, 4, 9, 16];

const newNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(newNumbers);

export default App;
