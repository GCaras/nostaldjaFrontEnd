import React from 'react'
import { Link } from 'react-router-dom'


const DecadesDetail = (props) => {
    console.log(props)
    return(
        <div>
            <h2>Decade: 
            {props.decadeData.start_year}
            </h2>
            <h2>Fads</h2>
            <section>
                {/* loop through each fad index */}
                {props.decadeData[3].fads.map((fad, i) => (
                <div key={i}>
                    <Link to={'/fads/'+fad.name+'/'}>
                        <h3 >{fad.name}</h3>
                    </Link>
                </div>
                ))}
            </section>
        </div>
    )
}

export default DecadesDetail;