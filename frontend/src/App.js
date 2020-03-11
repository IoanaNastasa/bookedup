import React from 'react';
// import './containers/Landingpage/Landingpage';
import './assets/reset.scss'
import './global-styles/globals.scss'
// import Landingpage from './containers/Landingpage/Landingpage';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      {/* <Landingpage></Landingpage> */}
      <Header></Header>
    </div>
  );
}

export default App;
