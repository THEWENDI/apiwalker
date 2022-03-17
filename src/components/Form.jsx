
import React, { useState } from 'react'
import {useHistory} from "react-router-dom"

const Form = () => {

    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const history = useHistory()

    const handleSubmit =(e) =>{
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>
                    SEARCH FOR: 
                    <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
                        <option hidden>PEOPLE OR PLANETS</option>
                        <option value="people"> PEOPLE </option>
                        <option value="planets"> PLANETS </option>
                    </select>
                    <span>     </span>
                    ID:
                    <input type="text" name="id" value={id} onChange={e=>setId(e.target.value)} />
                    <button> Search </button>
                </h3>
            </form>
        </div>
    )
}

export default Form