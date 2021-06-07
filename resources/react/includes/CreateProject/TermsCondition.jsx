import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import Modall from "./../Project/Modall";
import ProjectService from '../../service/ProjectService';

//Добавление строки api и только

const TermsCondition = () => {

  const createProject = () => {
    ProjectService.create()
    .then(() => {
      console.log('Проект создан успешно!')
    })
    .catch(e => {
    console.log(e);
    });
};

  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, оно поменяеться на false
    // if agree === false, оно поменяеться на true
    setAgree(!agree);
    // Не пропустите восклицательный знак, он автоматич. меняет значения
  }

  const [modallActive, setModallActive] = useState(false); 

  return (
      <div className="Terms_main">
        <div className="Terms_container">
          <div >
            <h3> Условия пользовательского соглашения</h3>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
               quidem quas harum totam blanditiis amet iusto possimus est nemo commodi
                reiciendis non, dolorem quibusdam repudiandae aut dolore hic 
                necessitatibus. Sunt.</p>
          </div>
          <div>
            <input type="checkbox" id="agree" onChange={checkboxHandler} />
            <label htmlFor="agree"> Я принимаю условия пользовательского соглашения.</label>
          </div>

          {/* Не пропустите восклицательный знак */}
          <button disabled={!agree} className="Terms_btn" onClick={()=> setModallActive(true)}>
            Продолжить
          </button>
        </div>

        <Modall ModallShown={modallActive} setModallShown={setModallActive}>
            <div className= "Terms_modal">
               <p>Вы успешно приняли условия соглашения, вас перенаправит на страницу создания проекта.</p>

               <button onClick={createProject}>
                    <Link to= "/editProject/details" className= "Terms_link">
                      Создать проект
                    </Link>
                </button>
            </div>
          </Modall>
      </div>
  )
}

export default TermsCondition
