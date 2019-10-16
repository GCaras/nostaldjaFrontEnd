import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'

const Decades = () => {
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

    console.log(decadeData)

    return(
        <div>
            <h2>Decades</h2>
            <section>
                {/* loop through each decade index */}
                {decadeData.map((decade, i) => (
                <div key={i}>
                    <Link to={'/decades/' + decade.start_year +'/'}>
                        <h3 >{decade.start_year}</h3>
                    </Link>
                </div>
                ))}
            </section>
        </div>
    )
}

export default Decades;


