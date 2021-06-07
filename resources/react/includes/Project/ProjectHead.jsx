 
import React from 'react'
import Modall from './Modall'
import { useState } from 'react';
import defaultAvatar from './../../img/default-avatar.jpg'

export default function ProjectHead (props) {
  const [modallActive, setModallActive] = useState(false); 

  const [increment, setIncrement] = useState(0)

  function increase () {
    setIncrement(increment + 100)
  } 

  function decrease () {
    if (increment > 0) {
      setIncrement(increment - 100)
    }
  }
  function decrease1000 () {
    if (increment >= 1000) {
      setIncrement(increment - 1000)
    }
  }
  
  function decrease10000 () {
    if (increment >= 10000) {
      setIncrement(increment - 10000)
    }
  }
  function increase1000 () {
    setIncrement(increment + 1000)
  } 
  function increase10000 () {
    setIncrement(increment + 10000)
  } 

  function increase100000 () {
    setIncrement(increment + 100000)
  } 

  function decrease100000 () {
    if (increment >= 100000) {
      setIncrement(increment - 100000)
    }
  }
  



  return (
    <section className="ProjectHead">
      <aside className="head__left">
        <div className="head__img">
          <img src="https://img.kapital.kz/X__9gO9jOc4/bG9jYWw6Ly8vbGVnYWN5L2ltYWdlcy85LzUvMS9jL2UvNmQ1NGNhMWUwMjkwODY3YzQ2NjNkNWNjNDhkLmpwZw"/>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <article className="head__under">
          Технологии и иновации
        </article>
        <article className="head__under">
          Павлодар
        </article>
        </div>
      </aside>

      <aside className="head__right">
        <h2 className="projectHead__title">
          Сьдобные Ложки 
        </h2>
        <p className="projectHead__descrip">
          Hello every nyan, I wish i was a bird. How are you I'm okay thankyou. Oh my godness, how are you! Okay thankyou? Hello every nyan, I wish i was a bird. How are you I'm okay thankyou. Oh my godness, how are you! Okay thankyou? How are you I'm okay thankyou.
        </p>

        <div className="projectHead__flex">
          <div className="head__contacts"> 
            <div className="head__author">
              <img src={defaultAvatar} alt=""/> 
              Бред Питт
            </div>
          </div>

          <div className="head__score">
            <div className="head__count">
              <div className="headCurrentCount">
                0 
                <span>
                ед.
                </span>
              </div>

              <div className="headCounOf">
                собрано из 12312312
              </div>
            </div>

            <div className="head__patreons">
              <div className="patreonsCount">
                 7 спонсоров
              </div>
              <div className="daysBefore">
                25 дней
              </div>
            </div>
          </div>

          <div className="head__button">
            <button onClick={()=> setModallActive(true)}>
            Пожертвовать
            </button>
          </div>
          <Modall ModallShown={modallActive} setModallShown={setModallActive}>
            <div className="project-head-modall">
              <h4>Пожертвовать проекту</h4>
                  <input type="text"
                    value={increment}
                    readOnly/>
                <div className="display-flex">      
                  <div>
                    <button onClick={increase}>+100</button>
                    <button onClick={decrease}>-100</button>
                  </div>        

                  <div>
                  <button onClick={increase1000}>+1000</button>
                  <button onClick={decrease1000}>-1000</button>
                  </div>

                  <div>
                  <button onClick={increase10000}>+10K</button>
                  <button onClick={decrease10000}>-10K</button>
                  </div>

                  <div>
                  <button onClick={increase100000}>+100K</button>
                  <button onClick={decrease100000}>-100K</button>
                  </div>

                </div>

                <p>
                Для получения вознаграждения за пожертвование, перейдите во вкладку выбора вознаграждений на странице проекта.
              </p>

              <button> Пожертвовать {increment}ед.</button>

            </div>
          </Modall>

        </div>
      </aside>

    </section>
  )
}