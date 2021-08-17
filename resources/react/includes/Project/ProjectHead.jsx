 
import React from 'react'
import Modall from './Modall'
import { useState } from 'react';
import defaultAvatar from './../../img/default-avatar.jpg'
import ReactPlayer from 'react-player'



export default function ProjectHead ({project}) {

  const video = project.video_or_animation
  const [imgVideo, setImgVideo] = useState(null)
  React.useEffect(() => {
    // switch(video) {
    //   case null: 
    //     setImgVideo(false)
    //   case "null":
    //     setImgVideo(false)
    //   case undefined: 
    //     setImgVideo(false)
    //   case "undefined":
    //     setImgVideo(false)
    //   case false: 
    //     setImgVideo(false)
    //   case video:
    //     setImgVideo(true)
    // }
    if (video === null) {
      setImgVideo(false)
    } else if (video === "null"){
      setImgVideo(false)
    } else if (video === undefined) {
      setImgVideo(false)
    } else if (video) {
      setImgVideo(true)
    }
  },[video] )

  console.log(project.video_or_animation);

  const cover = (`${process.env.MIX_APP_URL}/${project.image}`)

  const [modallActive, setModallActive] = useState(false); 
  const [modallAgree, setModallAgree] = useState(false)

  const [increment, setIncrement] = useState(0)

  const handlePaymentBtn = () => {
    if (increment > 100) {
      setModallAgree(true)
    }
  }

  const increase = () => {
    setIncrement(increment + 100)
  } 

  const decrease = () => {
    if (increment > 0) {
      setIncrement(increment - 100)
    }
  }
  const decrease1000 = () => {
    if (increment >= 1000) {
      setIncrement(increment - 1000)
    }
  }
  
  const decrease10000 = () => {
    if (increment >= 10000) {
      setIncrement(increment - 10000)
    }
  }
  const increase1000 = () => {
    setIncrement(increment + 1000)
  } 
  const increase10000 = () => {
    setIncrement(increment + 10000)
  } 

  const increase100000 = () => {
    setIncrement(increment + 100000)
  } 

  const decrease100000 = () => {
    if (increment >= 100000) {
      setIncrement(increment - 100000)
    }
  }

  return (
    <section className="ProjectHead">
      <aside className="head__left">
        <div className="head__img">
          {imgVideo ? 
            <ReactPlayer
              className="head__video"
              url={project.video_or_animation}
              light={cover}
              controls={true}/> 
              :
              <img src= {(process.env.MIX_APP_URL + '/' + project.image)} /> 
          }
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
        </div>
      </aside>

      <aside className="head__right">
        <h2 className="projectHead__title">
          {project.title} 
        </h2>
        <p className="projectHead__descrip">
          {project.short_description}
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
                собрано из <span>{project.sum_of_money}</span>
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

              <button className="backer-btn" onClick={handlePaymentBtn} > Пожертвовать <pre>{increment}ед.</pre> </button>

            </div>
          </Modall>
          <Modall ModallShown={modallAgree} setModallShown={setModallAgree} >
            <div className="modall-agree">
              <p>Вы действительно хотите пожертвовать проекту:</p>
                <span>{increment} ед.</span>
                <div className="modall-agree-btn">
                  <button>Да</button>
                  <button onClick={() => setModallAgree(false)}>Нет</button>
                </div>
            </div>
          </Modall>

        </div>
      </aside>

    </section>
  )
}