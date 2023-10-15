import appCSS from './App.module.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux';

function App({ children }) {

  const categories = useSelector(state => {
    return state.categories.items;
  })

  return (
    <div className={appCSS.app}>
      <Header categories={categories}></Header>
      <div className={appCSS.content}>
        {children}
      </div>
      <Footer className={appCSS.footer}></Footer>
    </div>
  );
}

export default App;
