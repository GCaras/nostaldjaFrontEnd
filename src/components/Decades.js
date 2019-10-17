import React from 'react'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'

const Decades = (props) => {
    return(
        <div>
            <h2>Decades</h2>
            <Link to="/create_decade/">
                <h4>
                    Create Decade
                </h4>
            </Link>
            <section>
                {/* loop through each decade index */}
                {props.decadeData.map((decade, i) => (
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


