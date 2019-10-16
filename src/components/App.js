import React, {useState, useEffect} from 'react'
import Decades from './Decades'
import DecadesDetail from './DecadesDetail'
import Fads from './Fads'
import FadDetail from './FadDetail'
import { Route, Link } from 'react-router-dom'

export default function App(props) {
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
          render={() => <Decades decadeData={decadeData} />}
        />
        <Route
          path='/decades/:startyear/'
          exact
          render={() => <DecadesDetail decadeData={decadeData}/>}
        />
        <Route
          path='/fads/'
          exact
          render={() => <Fads fadData={fadData} />}
        />
        <Route
          path='/fads/:name/'
          exact
          render={() => <FadDetail fadData={fadData} />}
        />
      </main>
    </div>
  );
}
