import logo from './logo.svg';
import './App.css';
import NavBar from './components/UniversalComponents/NavBar';
// import Header from './components/UniversalComponents/Header';

function App() {
  
  return (
    <div className='mainBody'>
      {/* <Header /> */}
      <div className='pageFormat'>
        <NavBar x="indexNav"/>
      </div>
    </div>
    
  );
}

export default App;
