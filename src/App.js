import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import Assignment from './components/Assignment/Assignment';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Pricing></Pricing>
      <Assignment></Assignment>
    </div>
  );
}

export default App;
