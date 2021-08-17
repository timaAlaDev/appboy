 import React from "react";
 import slide1 from './../../img/slide1.jpg'
 import slide2 from './../../img/slide2.jpg'
 import slide3 from './../../img/slide3.jpg'
 import slide4 from './../../img/slide4.jpg'

export default function Carousell({slideT}) {

   React.useEffect(() => {
      start()
   }, [])

function start(){	
let i = 1;
function Move(){ 	
	i = (i%4)+1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
  setInterval(Move,10000); 
}

    return (

  <div className="slider">
    <input type="radio" id="i1" name="images" defaultChecked />
    <input type="radio" id="i2" name="images" />
    <input type="radio" id="i3" name="images" />
    <input type="radio" id="i4" name="images" />
    <div className="slide_img" id="one">			
      <div className="slide-content1">
        <img className="content-img" src={slide1} alt="" />
          <div className="content-body">
            <h2>{slideT}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quae dignissimos facilis architecto aliquid hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, adipisci esse neque sunt velit voluptas!
            </p>
            <button type="button">Поддержать</button>
          </div>
      </div>
      <img className="slider-background-img" src={slide1} />
      <label className="prev" htmlFor="i4"><span /></label>
      <label className="next" htmlFor="i2"><span /></label>	
    </div>
    <div className="slide_img" id="two">
    <div className="slide-content1">
        <img className="content-img" src={slide2} alt="" />
          <div className="content-body">
            <h2>Сьдобные ложки</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quae dignissimos facilis architecto aliquid hic.
              
            </p>
            <button type="button">Перейти</button>
          </div>
      </div>
      <img className="slider-background-img" src={slide2} />
      <label className="prev" htmlFor="i1"><span /></label>
      <label className="next" htmlFor="i3"><span /></label>
    </div>
    <div className="slide_img" id="three">
    <div className="slide-content1">
        <img className="content-img" src={slide3} alt="" />
            <div className="content-body">
            <h2>Сьдобные ложки</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quae dignissimos facilis architecto aliquid hic.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid reiciendis sint quibusdam, praesentium itaque, 
            </p>
            <button type="button">Пожертвовать</button>
          </div>
      </div>
      <img className="slider-background-img" src={slide3} />	
      <label className="prev" htmlFor="i2"><span /></label>
      <label className="next" htmlFor="i4"><span /></label>
    </div>
    <div className="slide_img" id="four">
    <div className="slide-content1">
        <img className="content-img" src={slide4} alt="" />
          <div className="content-body">
            <h2>Сьдобные ложки</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quae dignissimos facilis 
            </p>
            <button type="button">Подробнее</button>
          </div>
    </div>
      <img className="slider-background-img" src={slide4} />	
      <label className="prev" htmlFor="i3"><span /></label>
      <label className="next" htmlFor="i1"><span /></label>
    </div>

    <div id="nav_slide">
      <label htmlFor="i1" className="dots" id="dot1" />
      <label htmlFor="i2" className="dots" id="dot2" />
      <label htmlFor="i3" className="dots" id="dot3" />
      <label htmlFor="i4" className="dots" id="dot4" />
    </div>
  </div>
  );
}

