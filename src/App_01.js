//import logo from './logo.svg';
//import './App.css';
import React, {Component} from "react";

/*
class App extends Component {
  render() {
    return (    

      <Fragment> 
        리액트에서는 모든 요소가 하나의 태그로 감싸져있어야함. 그 때 구조에 영향을 줄 수 있는 div 대신 쓸수 있는 요소. import React, {Component, Fragment} froma "react"; 로 가져와야함.
        <div>
          안녕하세요.
        </div>
        <div>
          리액트
        </div>
      </Fragment>      


    )
  }
}
*/
class App extends Component {
  render() {
    const name = 'react';
    return(
      <div>
        hello {name}!
      </div>      
    );
  }
}



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}
*/
export default App;

