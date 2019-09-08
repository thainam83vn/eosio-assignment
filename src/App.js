import React from 'react';
import {} from 'react-redux';
import { Header, Navigator } from './common-components';
import { BrowserRouter, Route } from 'react-router-dom';
import BlockPage from './components/Blocks';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Navigator />
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/blocks' component={BlockPage}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
