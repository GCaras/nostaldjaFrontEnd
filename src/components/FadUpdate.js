import React, { useState } from 'react'
// import styled from "styled-components";
import {Link} from 'react-router-dom';

const FadUpdate = (props) => {
    const [fadData, setFadData ] = useState({
        name: "",
        description: "",
        image_url: "",
        decade: ""
    });

    const fadName = props.match.params.name;
    const fad = props.fadData.find(fad => fad.name === fadName)

    const fadUrl = "http://localhost:8000/fad/"

    const handleValueChange = (field, value)  => {
        setFadData({
            [field]: value
        })
        console.log(fadData.image_url)
    };

    const updateFad= () => {
        fetch(fadUrl + fad.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fadData)
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    };

        return (
            <div>
                <article>
                    <h2>Update Fad</h2>
                    <form>
                        <input 
                            name="name"
                            type="text"
                            placeholder="Name"  
                            onChange={evt => handleValueChange("name", evt.target.value)}
                        />
                        <input 
                            name="description"
                            type="text"
                            placeholder="Description"  
                            onChange={evt => handleValueChange("description", evt.target.value)}
                        />
                        <input 
                            name="image_url"
                            type="text"
                            placeholder="Image URL"  
                            onChange={evt => handleValueChange("image_url", evt.target.value)}
                        />
                        <input 
                            name="decade"
                            type="text"
                            placeholder="Decade Start Year"  
                            onChange={evt => handleValueChange("decade", evt.target.value)}
                        />
                        <div onClick={updateFad}>Submit</div>
                    </form>
                </article>    
            </div>
        )
    }

export default FadUpdate