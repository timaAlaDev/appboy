import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import TermsCondition from "../includes/CreateProject/TermsCondition";

export default function CreateProject() {
  
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="Terms">

      <div> {
          toggleState === 1 ?
            <TermsCondition/>
          : 
          <div className= "create__welcome">
            <h4>Добро пожаловать на страницу создания проектов.</h4>
            <p>
              Если вы создаете проект впервые то выберите вкладку "Создать новый проект".
              Если же у вас уже имеются начатые проекты, то можете продолжить редактирование на вкладке "Мои проекты".
            </p>
          </div> 
          }
        </div>

        <div className="block-tabs">
          <Link to= "/createProject"
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>
            <b>Создать новый проект</b>
          </Link>   

          <Link to= "/projectAuthor"
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}> 
            <b>Мои проекты</b>
          </Link>
        </div>

      </div>
    </div>
  
    );
}
