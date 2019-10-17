import React from 'react'

const FadDetail = (props) => {
    const fadName = props.match.params.name;
    const fad = props.fadData.find(fad => fad.name === fadName)

    const fadUrl = "http://localhost:8000/fad/"

    console.log(fadUrl + fad.name);

    const deleteFad = () => {
        fetch(fadUrl + fad.id, {
            method: "DELETE",
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return(
        <div>
            <h2>{ fad.name }</h2>
            <div onClick={deleteFad}>{"Delete Fad :("}</div>
            <section>
                <img src = { fad.image_url } />
                <p>{ fad.description }</p>
            </section>
        </div>
    )
}

export default FadDetail;