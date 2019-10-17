import React, { useState } from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'




const CreateDecade = (props) => {
    const [decadeData, setdecadeData ] = useState({
        start_year: "",
    });

    const decadeUrl = "http://localhost:8000/decade/"

    const CreateDecade = (evt) => {
        evt.preventDefault()
        fetch(decadeUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
            },
            body: JSON.stringify(decadeData)
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    }

    const handleValueChange = (evt)  => {
        evt.preventDefault()
        setdecadeData({
            start_year: evt.target.value
        })
        console.log(decadeData.start_year)
    };

    return(
        <div>
            <h2>Create Decade</h2>
            <form>
                <input 
                    type="text"
                    placeholder="Start Year"  
                    onChange={evt => handleValueChange(evt)}
                />
                <button
                onClick = {CreateDecade}
                >Submit</button>
            </form>
        </div>
    )
}

export default CreateDecade;