import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousell from './../Main/Carousel';


const Slider = () => {

const initialSliderState = {
  title1: "",
  img1: "",
  details1: "",
  url1: "",

  title2: "",
  img2: "",
  details2: "",
  url2: "",

  title3: "",
  img3: "",
  details3: "",
  url3: "",

  title4: "",
  img4: "",
  details4: "",
  url4: "",
};

const [currentSlider, setCurrentSlider] = useState(initialSliderState);
const [message, setMessage] = useState("");

console.log(currentSlider);

const getSlider = () => {
   axios.post("http://localhost:8080/Carousel")
    .then(response => {
      setCurrentSlider(response.data);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
};

useEffect(() => {
  getSlider();
}, []);


const handleInputChange = event => {
const { name, value } = event.target;
setCurrentSlider({ ...currentSlider, [name]: value });
};
console.log(setCurrentSlider)


const updateSlider = () => { 
  axios.update(currentSlider, currentSlider)
  .then(response => {
  console.log(response.data);
  setMessage("Карусель обновился!!!!!");
  })
  .catch(e => {
  console.log(e);
  });
};



  return (

<div>
<div className="admin-slider">
  <form onSubmit={updateSlider}>
    <div className="box-shadow">
    <h4>Первая страница карусели</h4>
    <div className="create-inner size3">
    <label className="size">Заголовок</label>
    <input
      name="title1"
      className="create-input"
      placeholder="Заголовок проекта"
      type="text"
      value={currentSlider.title1}
      onChange={handleInputChange}
    />
    </div>
    <div className="create-inner size3">
      <label className="size">Ссылка изображение</label>
      <input
        name="img1"
        className="create-input"
        placeholder="Ссылка изображения из проекта /.img"
        type="text"
        value={currentSlider.img1}
        onChange={handleInputChange}
      />
    </div>

    <div className="create-inner size3">
      <label className="size">Описание</label>
      <input 
        name="details1"
        className="create-input"
        placeholder="Описание проекта"
        type="text"
        value={currentSlider.details1}
        onChange={handleInputChange}
      />
    </div>

    <div className="create-inner size3">
      <label className="size">Ссылка проекта</label>
      <input
        name="url1"
        className="create-input"
        placeholder="Ссылка проекта на сайте"
        type="text"
        value={currentSlider.url1}
        onChange={handleInputChange}
      />
    </div>
    </div>
    <div className="box-shadow">
    <h4>Вторая страница карусели</h4>
    <div className="create-inner size3">
      <label className="size">Заголовок</label>
        <input
          name="title2"
          className="create-input"
          placeholder="Заголовок проекта"
          type="text"
          value={currentSlider.title2}
          onChange={handleInputChange}
        />
    </div>

    <div className="create-inner size3">
      <label className="size">Ссылка изображение</label>
      <input
        className="create-input"
        placeholder="Ссылка изображения из проекта /.img"
        type="text"
        value={currentSlider.img2}
        onChange={handleInputChange}
        name="img2"
      />
    </div>

    <div className="create-inner size3">
      <label className="size">Описание</label>
      <input
        className="create-input"
        placeholder="Описание проекта"
        type="text"
        value={currentSlider.details2}
        onChange={handleInputChange}
        name="details2"
      />
    </div>

    <div className="create-inner size3">
      <label className="size">Ссылка проекта</label>
      <input
        className="create-input"
        placeholder="Ссылка проекта на сайте"
        type="text"
        value={currentSlider.url2}
        onChange={handleInputChange}
        name="url2"
      />
    </div>
    </div>
    <div className="box-shadow">
    <h4>Третья страница карусели</h4>
    <div className="create-inner size3">
      <label className="size">Заголовок</label>
      <input
        name="title3"
        className="create-input"
        placeholder="Заголовок проекта"
        type="text"
        value={currentSlider.title3}
        onChange={handleInputChange}
      />
    </div>

    <div className="create-inner size3">
      <label className="size">Ссылка изображение</label>
      <input
        className="create-input"
        placeholder="Ссылка изображения из проекта /.img"
        type="text"
        value={currentSlider.img3}
        onChange={handleInputChange}
        name="img3"
      />
    </div>

    <div className="create-inner size3">
      <label className="size">Описание</label>
      <input
        className="create-input"
        placeholder="Описание проекта"
        type="text"
        value={currentSlider.details3}
        onChange={handleInputChange}
        name="details3"
      />
    </div>

    <div className="create-inner size3">
      <label className="size">Ссылка проекта</label>
      <input
        name="url3"
        className="create-input"
        placeholder="Ссылка проекта на сайте"
        type="text"
        value={currentSlider.url3}
        onChange={handleInputChange}
      />
    </div>
    </div>
    <div className="box-shadow">
    <h4>Четвертая страница карусели</h4>
    <div className="create-inner size3">
      <label className="size">Заголовок</label>
      <input
        name="title4"
        className="create-input"
        placeholder="Заголовок проекта"
        type="text"
        value={currentSlider.title4}
        onChange={handleInputChange}
      />
    </div>

    <div className="create-inner size3">
      <label className="size">Ссылка изображение</label>
      <input
        className="create-input"
        placeholder="Ссылка изображения из проекта /.img"
        type="text"
        value={currentSlider.img4}
        onChange={handleInputChange}
        name="img4"
      />
    </div>

    <div className="create-inner size3">
      <label className="size">Описание</label>
      <input
        className="create-input"
        placeholder="Описание проекта"
        type="text"
        value={currentSlider.details4}
        onChange={handleInputChange}
        name="details4"
      />
    </div>

    <div className="create-inner size3">
      <label className="size">Ссылка проекта</label>
      <input
        name="url4"
        className="create-input"
        placeholder="Ссылка проекта на сайте"
        type="text"
        value={currentSlider.url4}
        onChange={handleInputChange}
      />
    </div>
    </div>
  <button type= "submit">
    Обновить Карусель
  </button>
  </form>
</div>
</div>
  )
}

export default Slider


