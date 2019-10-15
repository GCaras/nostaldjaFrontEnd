import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Decades = () => {
    const [decadeData, setDecadeData ]= useState({ decadeList: []});
  
    async function fetchDecades() {
      const decadeRes = await fetch("http://127.0.0.1:8000/decades");
      decadeRes.json().then(decadeRes => setDecadeData(decadeRes))
    }
  
    useEffect(() => {
        fetchDecades();
        // setDecadeData(props);
    }
    // , [props]
    );

    return(
        <div>
            <h2>Decades</h2>
            <section>
                {decadeData.decadeList.map(decade => (
                    <div key={decade.id}>
                        <Link to='/decades/:id/' {...decadeData}>
                            <h3>{decade.start_year}</h3>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Decades;


