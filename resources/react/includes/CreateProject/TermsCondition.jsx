import React from 'react'
import { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import Modall from "./../Project/Modall";
import ProjectService from '../../service/ProjectService';

//Добавление строки api и только

const TermsCondition = () => {

  const history = useHistory();

  const createProject = () => {
    ProjectService.createNew()
    .then(response => {
      console.log(response.data.id)
      history.push(`/editProject/details/${response.data.id}`);
    })
    .catch(e => {
    console.log(e);
    })
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
            <h3>Создание проекта</h3>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
               quidem quas harum totam blanditiis amet iusto possimus est nemo commodi
                reiciendis non, dolorem  quibusdam repudiandae aut dolore hic 
                necessitatibus. Sunt. 
              <Link to="/howItWorks" >
                Как это работает
              </Link>  
            </p> 
          </div>
          <div>

          </div>

          {/* Не пропустите восклицательный знак */}
          <button  className="Terms_btn" onClick={()=> setModallActive(true)}>
            Продолжить
          </button>
        </div>

        <Modall ModallShown={modallActive} setModallShown={setModallActive}>
            <div className= "Terms_modal">
              <div className="terms-modal-inner">
                <div className="terms-modal-content">
                  <h2>Условаия соглашения.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perspiciatis dignissimos totam beatae maiores praesentium unde eum necessitatibus, aut repellendus eaque molestiae, vero nostrum quia, debitis possimus? Vitae at sequi natus minima. Cumque culpa rerum nemo itaque aliquid eos, blanditiis excepturi debitis dolore doloribus, at, natus recusandae fuga sunt nobis non corporis ut aut? Exercitationem, nihil consequatur recusandae ex adipisci voluptate distinctio quae facere suscipit, numquam beatae qui? Non quam suscipit autem quis! Ducimus veritatis deleniti, animi ullam tenetur dolorum nulla perferendis rem cum quibusdam placeat harum quia fuga, impedit dignissimos aperiam deserunt, minima repellat reprehenderit. Non sapiente illo ullam.</p>
                  <h2>Lorem ipsum dolor sit amet.</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dicta sit deleniti corporis omnis minima quae laboriosam sapiente eius ratione aliquam ullam aliquid, nisi optio dolore magnam expedita inventore quis maiores est. Eius assumenda nesciunt ab voluptate odit deserunt! Maxime impedit commodi cupiditate at sint dicta eius eveniet qui sequi.</p>
                  <h2>Lorem ipsum dolor sit amet.</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, at tempore architecto unde officiis voluptatibus repudiandae nisi numquam dicta natus eos mollitia voluptas harum et qui, a doloremque. Quas veniam ad dolorem dignissimos in distinctio, alias mollitia assumenda vitae qui ullam saepe iusto architecto hic, doloremque error a. Natus asperiores consequuntur possimus optio ea eligendi commodi perferendis placeat ab provident nobis laudantium adipisci quis, repudiandae blanditiis porro ut, beatae vel esse labore earum et voluptatum, odit perspiciatis. Consequatur aperiam in recusandae. Expedita obcaecati deleniti vitae est repudiandae reiciendis quam minima id quidem eius nesciunt, itaque quisquam ratione corporis nam iusto?</p>
                </div>
                <div>
                <input type="checkbox" id="agree" onChange={checkboxHandler} style={{marginRight: '10px'}} />
                 <label htmlFor="agree"> Я принимаю условия пользовательского соглашения.</label>
                </div>
                 <button disabled={!agree} onClick={createProject} className= {agree ? "Terms_link" : ""}>
                    Создать проект
                    </button>
              </div>
            </div>
          </Modall>
      </div>
  )
}

export default TermsCondition



