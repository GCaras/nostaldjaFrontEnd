import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Fads = () => {
    const [fadData, setFadData ]= useState({ fadList: []});
  
    async function fetchFads() {
      const fadRes = await fetch("http://127.0.0.1:8000/fads");
      fadRes.json().then(fadRes => setFadData(fadRes))
    }
  
    useEffect(() => {
        fetchFads();
        // setFadData(props);
    }
    // ,[props]
    );

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