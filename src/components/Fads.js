import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const fadFadImages = styled.img`
    max-height: 300px;
`

const Fads = () => {
    const [fadData, setFadData ] = useState([]
    );
  
    function fetchFads() {
        fetch("http://localhost:8000/fad/")
        .then(res => res.json())
        .then(response => setFadData(response))
        .catch(err => console.log(err))
    }
    
    useEffect(() => {
        fetchFads();
    }, [])

    console.log(fadData)

    return(
        <div>
            <h2>Fads</h2>
            <section>
                {/* loop through each fad index */}
                {fadData.map((fad, i) => (
                <div key={i}>
                    <Link to='/Fads/:name/'>
                        <h3 >{fad.start_year}</h3>
                    </Link>
                    <section>
                        {/* map and render fads for each fad */}
                        <h2>Fads</h2>
                        {fad.fads.map((fad, i) => (
                        <div key={i}>
                            <fadFadImages src={fad.image_url} alt={fad.name} />
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

export default Fads;