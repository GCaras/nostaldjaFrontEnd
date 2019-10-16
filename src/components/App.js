import React from 'react';
import Decades from './Decades'
import DecadeDetail from './DecadesDetail'
import Fads from './Fads'
import { Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <header>
        <Link to='/'>
        <h1>Nostaldja</h1>
        </Link>
        <nav>
          <Link to='/decades/'>
            <div>
              Decades
            </div>
          </Link>  
          <Link to='/fads/'>
            <div>
              Fads
            </div>  
          </Link>
        </nav>
      </header>
      <Route
        path='/decades/'
      >
        <Decades />
      </Route>
      <Route
        path='/decades/:startyear/'
        exact
      >
        <DecadeDetail />
      </Route>
      <Route
        path='/fads/'
        exact
      >
        <Fads />
      </Route>
    </div>
  );
}
