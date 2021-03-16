import Header from './components/Header/Header';
import style from './App.module.css';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={style.app}>
      <Header/>

        <div className={style.container}>
          <Menu/>

          <Main/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
