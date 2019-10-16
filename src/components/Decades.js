import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Decades = (props) => {
    const [decadeData, setDecadeData ] = useState({
        decadeData: null
    });
  
    function fetchDecades() {
        fetch("http://localhost:8000/decade/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
        }).then(res => res.json().then(JSON.stringify(res)))
        .then(response => setDecadeData(response))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchDecades();
        JSON.stringify(decadeData)
    }, [])

    console.log(decadeData)

    return(
        <div>
            <h2>Decades</h2>
            <div>{JSON.stringify(decadeData[0])}</div>
            {/* <section>
                {decadeData.forEach((decade, i) => (
                    <div key={i}>
                        <Link to='/decades/:id/' {...decadeData}>
                            <h3 >{decade[i].start_year}</h3>
                        </Link>
                    </div>
                ))}
            </section> */}
        </div>
    )
}

export default Decades;


