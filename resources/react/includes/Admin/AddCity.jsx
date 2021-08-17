import React from 'react'
import axios from 'axios'

const AddCity = () => {

  React.useEffect(() => {
    axios.get(' api/v1/city').then(({data}) => {
      console.log(data);
    })
  }, [])

  return (
    <form action="" className="add-city">
      <div className="add-city-inner">
        <b>Добавить город</b>
        <input type="text"  />
        <button className="create-btn" type="button">добавить город</button>
      </div>
      <div className="city-column">
        <span>Астана </span>
       

      </div>
    </form>
  )
}

export default AddCity
