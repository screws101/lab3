import './App.css';
import Card1 from './components/Card1';
import About from './components/About';

function App() {

  return (
    <>
      <div className="section">
        <div className="container">
          <Header/>
        </div>
      </div>
      <h1>Profile App</h1>
      <div className="section">
        <div className="container">
          <About/>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <Card1/>
        </div>
      </div>

    </>
  )
}

export default App;

