import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const fadUrl = "http://localhost:8000/fad/"

    console.log(fadUrl + fad.name);

    const deleteFad = () => {
        fetch(fadUrl + fad.id, {
            method: "DELETE",
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    }

const CreateDecade = (props) => {
    

    const handleValueChange = (field, value)  => {
        setFadData({
            [field]: value
        })
        console.log(fadData.name)
    };

    return(
        <div>
            <input 
                name="name"
                type="text"
                placeholder="Name"  
                onChange={evt => handleValueChange("name", evt.target.value)}
                />
        </div>
    )
}

export default CreateDecade;