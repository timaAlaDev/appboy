import React from "react";
import Carousel from 'react-bootstrap/Carousel'

export default function Header() {
    return (
      <div>
        <Carousel className="carousel-inner">

          <Carousel.Item className="carousel-item" interval={4000}>
            <img
              className="d-block w-100"
              src="https://biz360.ru/upload/medialibrary/931/Первые%20съедобные%20ложки%20III.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <img src="https://biz360.ru/upload/medialibrary/931/Первые%20съедобные%20ложки%20III.jpg" alt=""/>
              <div>
                <h3>Съедобные ложки</h3>
                <p>Hello every nyan, I wish i was a bird. How are you 
                  I'm okay thankyou. Oh my godness, how are you! Okay 
                  thankyou? Hello every nyan, I wish i was a bird. How 
                  are you I'm okay thankyou. Oh my godness, how are you!
                  Okay thankyou? How are you I'm okay thankyou.
                </p>
                <button>Подробнее</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item" interval={4000}>
            <img
              className="d-block w-100"
              src="https://cdn.recyclemag.ru/main/5/54c134cf09ca2c3f66e7d6c8a0a1c954.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className="carousel-caption">
            <img src="https://cdn.recyclemag.ru/main/5/54c134cf09ca2c3f66e7d6c8a0a1c954.jpg" alt=""/>
              <div>
                <h3>Съедобные ложки</h3>
                <p>Hello every nyan, I wish i was a bird. How are you 
                  I'm okay thankyou. Oh my godness, how are you! Okay 
                  thankyou? Hello every nyan, I wish i was a bird. How 
                  are you I'm okay thankyou. Oh my godness, how are you!
                  Okay thankyou? How are you I'm okay thankyou.
                </p>
                <button>Подробнее</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item" interval={4000}>
            <img
              className="d-block w-100"
              src="https://regnum.ru/uploads/pictures/news/2020/11/20/regnum_picture_1605887274147167_normal.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel-caption">
            <img src="https://regnum.ru/uploads/pictures/news/2020/11/20/regnum_picture_1605887274147167_normal.jpg" alt=""/>
              <div>
                <h3>Съедобные ложки</h3>
                <p>Hello every nyan, I wish i was a bird. How are you 
                  I'm okay thankyou. Oh my godness, how are you! Okay 
                  thankyou? Hello every nyan, I wish i was a bird. How 
                  are you I'm okay thankyou. Oh my godness, how are you!
                  Okay thankyou? How are you I'm okay thankyou.
                </p>
                <button>Подробнее</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
}


