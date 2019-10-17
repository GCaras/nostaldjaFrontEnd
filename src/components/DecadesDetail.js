import React from 'react'
import { Link } from 'react-router-dom'


const DecadesDetail = (props) => {
    const decadeStartYear = props.match.params.start_year;
    const decade = props.decadeData.find(decade => decade.start_year === decadeStartYear)
    return(
        <div>
            <h2>Decade: 
            {decade.start_year}
            </h2>
            <h2>Fads</h2>
            <section>
                {/* loop through each fad index */}
                {decade.fads.map((fad, i) => (
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