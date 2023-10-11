import './App.css';
import Header from './components/Header/Header'
import MainFeed from './components/MainFeed/MainFeed';
import NewsBlock from './components/NewsBlock/NewsBlock';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <MainFeed></MainFeed>
    </div>
  );
}

export default App;
