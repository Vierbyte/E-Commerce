// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ItemImage from './components/itemImage';
// import ItemTitles from './components/itemTitle';
class App extends React.Component{
  render(){
    return (
      <React.Fragment>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <div className='itemContainer'>
          <div className='items'>
            <div className='itemImage'>
              <ItemImage src='http://placekitten.com/500/400' alt='cat'/>
              {/* <ItemTitles /> */}
            </div>
            <div className='itemImage'>
              <ItemImage src='http://placekitten.com/500/400' alt='cat'/>
              {/* <ItemTitles /> */}
            </div>
          </div>
          <div className='items'></div>
        </div>
      </div>
      </React.Fragment>
    );
  }

}

export default App;
