import { useEffect, useState } from "react"

const HomePage = () => {
    const [data, setData] = useState(null)

    const getData = async () => {
        const url = `https://dog.ceo/api/breeds/image/random`
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
      <main>
        <h1>Bienvenido</h1>
        <img src={data.message} className="rounded mx-auto d-block dog-img" />
      </main>
    )
  }
export default HomePage