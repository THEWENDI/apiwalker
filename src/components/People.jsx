import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const People = () => {

    const { id } = useParams()
    const [people, setPeople] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res.data)
                setPeople(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                people?
                    <div>
                        <h1>{people.name}</h1>
                        <h3>HEIGHT: {people.height}</h3>
                        <h3>MASS: {people.mass}</h3>
                        <h3>HAIR COLOR: {people.hair_color}</h3>
                        <h3>SKIN COLOR: {people.skin_color}</h3>
                    </div>:
                <h1>"These aren't the droids you're looking for"</h1>
            }
        </div>
    )
}

export default People