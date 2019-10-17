import React, { useState } from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'




const CreateDecade = (props) => {
    const [decadeData, setdecadeData ] = useState({
        start_year: "",
    });

    const decadeUrl = "http://localhost:8000/decade/"

    const CreateDecade = () => {
        fetch(decadeUrl, {
            method: "POST",
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    }

    const handleValueChange = (value)  => {
        setdecadeData({
            start_year: value
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
                    onChange={evt => handleValueChange(evt.target.value)}
                />
                <button
                onClick = {CreateDecade}
                >Submit</button>
            </form>
        </div>
    )
}

export default CreateDecade;