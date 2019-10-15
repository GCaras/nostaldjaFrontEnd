import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Fads = () => {
    const [fadData, setFadData ]= useState({ fadList: []});
  
    function fetchFads() {
        fetch("http://localhost:8000/fad/", {
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
        fetchFads();
    })

    return(
        <div>
            <h2>Fads</h2>
            <section>
                {fadData.fadList.map(fad => (
                    <div key={fad.id}>
                        <Link to='/fads/:id/' {...fadData}>
                            <img src={fad.image_url} />
                            <h3>{fad.name}</h3>
                            <p>{fad.description}</p>
                            <p>{fad.decade}</p>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Fads;