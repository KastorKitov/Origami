import {Component} from 'react';

import * as postService from './services/postServices';

import Header from './components/Header/Header';
import style from './App.module.css';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

// function App() {
//   return (
//     <div className={style.app}>
//       <Header/>

//         <div className={style.container}>
//           <Menu/>

//           <Main/>
//           <Footer/>
//         </div>
//     </div>
//   );
// }

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      posts:[]
    }
  }

  componentDidMount(){
    postService.getAll()
      .then(posts =>{
        this.setState({posts})
    })
  }

  render(){
    return (
      <div className={style.app}>
        <Header/>
  
          <div className={style.container}>
            <Menu/>
  
            <Main posts={this.state.posts}/>
            <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
