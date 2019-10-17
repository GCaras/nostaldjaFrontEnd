import React, {useState, useEffect} from 'react'
import Decades from './Decades'
import DecadesDetail from './DecadesDetail'
import CreateDecade from './CreateDecade'

import Fads from './Fads'
import FadDetail from './FadDetail'
import FadUpdate from './FadUpdate'
import { Route, Link } from 'react-router-dom'

export default function App() {
  const [fadData, setFadData ] = useState([]
    );
  const [decadeData, setDecadeData ] = useState([]
    );
    
  function fetchDecades() {
      fetch("http://localhost:8000/decade/")
      .then(res => res.json())
      .then(response => setDecadeData(response))
      .catch(err => console.log(err))
  }

  useEffect(() => {
      fetchDecades();
  }, [])

  function fetchFads() {
      fetch("http://localhost:8000/fad/")
      .then(res => res.json())
      .then(response => setFadData(response))
      .catch(err => console.log(err))
  }
    
  useEffect(() => {
      fetchFads();
  }, [])

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
      <main>
        <Route
          path='/decades/'
          exact
          render={props => <Decades decadeData={decadeData} {...props}/>}
        />
        <Route
          path='/create_decade/'
          exact
          render={props => <CreateDecade {...props}/>}
        />
        <Route
          path='/decades/:start_year/'
          exact
          render={props => <DecadesDetail decadeData={decadeData} {...props}/>}
        />
        <Route
          path='/fads/'
          exact
          render={props => <Fads fadData={fadData} {...props} />}
        />
        <Route
          path='/fads/:name/'
          exact
          render={props => <FadDetail fadData={fadData} decadeData={decadeData} {...props} />}
        />
        <Route
          path='/fads/:name/edit'
          exact
          render={props => <FadUpdate fadData={fadData} {...props} />}
        />
      </main>
    </div>
  );
}
