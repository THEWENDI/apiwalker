import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const Planets = () => {

    const { id } = useParams()
    const [planets, setPlanets] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                console.log(res.data)
                setPlanets(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                planets?
                    <div>
                        <h1>{planets.name}</h1>
                        <h3>CLIMATE: {planets.climate}</h3>
                        <h3>TERRAIN: {planets.terrain}</h3>
                        <h3>SURFACE WATER: {planets.surface_water}</h3>
                        <h3>POPULATION: {planets.population}</h3>
                    </div>:
                <h1>"These aren't the droids you're looking for"</h1>
            }
        </div>
    )
}

export default Planets