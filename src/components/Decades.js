import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Decades = () => {
    const [decadeData, setDecadeData ]= useState({ decadeList: []});
  
    function fetchDecades() {
        fetch("http://localhost:8000/decade/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Accept": "*/*",
            },
        }).then
        (res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchDecades();
    })

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


