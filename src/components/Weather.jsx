import { useEffect, useState } from "react"
import { keyApi } from "../helpers/data"

const Weather =() =>{
    const [data, setData] = useState(null)
    const apiKey= keyApi
    const city= 'Santiago'
    const country= 'cl'
    const getData = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}&units=metric`
        try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.error('Error al obtener data:', error)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    if (!data) {
        return <div>Cargando...</div> // Mensaje de carga
    }

    return (
        <>
        <header className="d-flex flex-row justify-content-center align-items-center bg-warning rounded-0 rounded-top-4 mb-3">
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
        </header>
        <section className="row p-0 m-0">
            <p className="col-12 col-sm-6">
                Condiciones: {data.weather[0].description}
            </p>
            <p className="col-12 col-sm-6">Temperatura Actual: {data.main.temp}</p>
            <p className="col-12 col-sm-6">Temperatura Mínima: {data.main.temp_min}</p>
            <p className="col-12 col-sm-6">Temperatura Máxima: {data.main.temp_max}</p>
            <p className="col-12 col-sm-6">Humedad: {data.main.humidity}</p>

        </section>
        </>
    )
}

export default Weather