import React from 'react';
// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Page from './components/page/Page.js';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Page />
      </div>
    );
  }
}

export default App;
