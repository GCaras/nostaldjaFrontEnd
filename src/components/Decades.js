import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DecadeFadImages = styled.img`
    max-height: 300px;
`

const Decades = () => {
    const [decadeData, setDecadeData ] = useState([]
    );
  
    function fetchDecades() {
        fetch("http://localhost:8000/decade/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
        }).then(res => res.json())
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
                    <Link to='/decades/:start_year/'>
                        <h3 >{decade.start_year}</h3>
                    </Link>
                    <section>
                        {/* map and render fads for each decade */}
                        <h2>Fads</h2>
                        {decade.fads.map((fad, i) => (
                        <div key={i}>
                            <DecadeFadImages src={fad.image_url} alt={fad.name} />
                            <Link to='/fads/:id/'>
                                <h3>{fad.name}</h3>
                            </Link>
                            <p>{fad.description}</p>
                        </div>
                        ))}
                    </section>
                </div>
                ))}
            </section>
        </div>
    )
}

export default Decades;


