import React from 'react'

const FadDetail = (props) => {
    const fadName = props.match.params.name;
    const fad = props.fadData.find(fad => fad.name === fadName)
    console.log(fad.decade)

    return(
        <div>
            <h2>{ fad.name }</h2>
            <section>
                <img src = { fad.image_url } />
                <p>{ fad.description }</p>
                <p>{ fad.decade}</p>
            </section>
        </div>
    )
}

export default FadDetail;