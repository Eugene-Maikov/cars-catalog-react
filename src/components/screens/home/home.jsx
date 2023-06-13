import {cars as carsData } from './cars.data.js'
import CarItem from "./cat-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {useEffect, useState} from "react";

function Home() {

  const [cars, setCars] = useState(carsData)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/cars')
      const data = await response.json()

      setCars(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Cars catalog</h1>

      <CreateCarForm setCars={setCars}/>

      <div>
        {cars.length ? cars.map(
          car => <CarItem key={car.id} car={car}/>
        ) : (
          <p>There are not cars </p>
        )}
      </div>
    </div>
  )
}

export default Home
