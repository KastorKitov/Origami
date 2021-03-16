import Header from './components/Header/Header';
import style from './App.module.css';
import Menu from './components/Menu/Menu';
function App() {
  return (
    <div className={style.app}>
      <Header/>

        <div className={style.container}>
          <Menu/>

        </div>
    </div>
  );
}

export default App;
