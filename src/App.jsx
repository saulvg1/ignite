import React from 'react';
//router
import { Route } from 'react-router-dom';
//components and pages
import Home from './pages/home.jsx';
import GlobalStyles from './components/globalStyles';
import Nav from './components/nav.jsx';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
