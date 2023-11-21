import './App.css';
import News from './News';
import Header from './component/Header';


function App() {
  return (
    <div className = "container">
      <Header className="header"/>
      <News className="news"/>
    </div>
  );
}

export default App;
