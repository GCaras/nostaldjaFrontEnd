import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Decades = () => {
    const [decadeData, setDecadeData ] = useState({
        decadeData: []
    });
  
    function fetchDecades() {
        fetch("http://localhost:8000/decade/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Connection": "keep-aliv",
                "Accept": "*/*",
            },
        // }).then(res => res.json())
        // .then(res => setDecadeData(res))
        // .then(JSON.stringify(decadeData))
        // .then(console.log(decadeData))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchDecades();
    })

    return(
        <div>
            <h2>Decades</h2>
            <span>{JSON.stringify(decadeData)}</span>
            {/* <section>
                {Decades.decadeData.map((decade, i) => (
                    <div key={i}>
                        <Link to='/decades/:id/' {...decadeData}>
                            <h3>{decade[i].start_year}</h3>
                        </Link>
                    </div>
                ))}
            </section> */}
        </div>
    )
}

export default Decades;


