import React from 'react'
import { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';

// Импорты страниц includes
import Details from '../includes/CreateProject/Details';
import Reward from '../includes/CreateProject/Reward';
import Verification from '../includes/CreateProject/Verification';


const EditProject = () => {




  // Меняет состояние таба на красный "активный"
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  //--------------------Конец ToggleState-------------------------------

  return (
    <div className="create">
          <div className="create-container">
            <div className="block-tabs words">
                    <Link to= "/editProject/details"
                      className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                      onClick={() => toggleTab(1)}>
                      Детали проекта
                    </Link>

                    <Link to= "/editProject/reward"
                      className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                      onClick={() => toggleTab(2)}> 
                      Вознаграждения
                    </Link>

                    <Link to= "/editProject/verification"
                      className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                      onClick={() => toggleTab(3)}> 
                      Верификация
                    </Link>
            </div>

            <Switch>
              <Route 
                path="/editProject/details/:id" 
                render={(props) => (
                  <Details 
                    {...props}
                    setToggleState={setToggleState}
                  />
                )}
                />

              <Route 
                path="/editProject/reward" 
                render ={(props) => (
                  <Reward 
                    {...props}
                    setToggleState={setToggleState}
                  />
                )}
                />

              <Route 
                path="/editProject/verification/:id" 
                render ={(props) => (
                  <Verification 
                    {...props}
                  />
                )}
                />
            </Switch>
          </div>
    </div>
  )
}

export default EditProject
