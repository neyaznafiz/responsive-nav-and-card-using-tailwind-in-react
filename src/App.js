import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <h1 className='text-6xl'>welcome to my pricing club</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
