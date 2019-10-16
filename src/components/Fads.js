import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const fadFadImages = styled.img`
    max-height: 300px;
`

const Fads = (props) => {
    return(
        <div>
            <h2>Fads</h2>
            <section>
                {/* loop through each fad index */}
                {props.fadData.map((fad, i) => (
                <div key={i}>
                    <Link to={'/Fads/'+fad.name+'/'}>
                        <h3 >{fad.name}</h3>
                    </Link>
                    {/* <section>
                        <h2>Fads</h2>
                        {props.fads.map((fad, i) => (
                        <div key={i}>
                            <fadFadImages src={fad.image_url} alt={fad.name} />
                            <Link to='/fads/:id/'>
                                <h3>{fad.name}</h3>
                            </Link>
                            <p>{fad.description}</p>
                        </div>
                        ))}
                    </section> */}
                </div>
                ))}
            </section>
        </div>
    )
}

export default Fads;