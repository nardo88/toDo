import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import MainContainer from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <MainContainer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
