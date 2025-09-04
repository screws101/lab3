import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import About from './components/About';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header/>
      <h1>Profile App</h1>
      <div className="section">
        <div className="container">
          <About/>
        </div>
      </div>
      <div className="section">
        <div className="card_container">
          <Card1/>
          <Card2/>
        </div>
      </div>

    </>
  )
}

export default App;

