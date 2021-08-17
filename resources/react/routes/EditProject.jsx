import React, { useState } from "react";
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import ProjectService from './../service/ProjectService';

// Импорты страниц includes
import Details from '../includes/CreateProject/Details';
import Reward from '../includes/CreateProject/Reward';
import Verification from '../includes/CreateProject/Verification';


const EditProject = () => {

  const initialProjectState = {
    id: null,
    title: '',
    image: '',
    short_description: '',
    city_id: '',
    sum_of_money: '',
    closed_at: '',
    video_or_animation: '',
    detail_description: '',
    published: false
  };



  const [currentProject, setCurrentProject] = useState(initialProjectState);

  const getProject = id => {
    ProjectService.get(id)
      .then(response => {
        setCurrentProject(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProject({ ...currentProject, [name]: value });
  };  

  const handleImageChange = (e) => {
    setImageSelected(e.target.files[0]);
    const { name, value } = e.target;
    setCurrentProject({ ...currentProject, [name]: value });
  }
  const [imageChange, setImageSelected] = useState('')

  const projectFormData = new FormData();
  
  const updateProject = () => {
    ProjectService.update(projectFormData)
    .then(response => {
    console.log(response.data);
    })
    .catch(e => {
    console.log(e);
    });
  };


  //Активные табы
  const location = useLocation();
  const switchTab1 = location.pathname.includes ("/editProject/details");
  const switchTab2 = location.pathname.includes ("/editProject/reward");
  const switchTab3 = location.pathname.includes ("/editProject/verification");
  // Конец Активные табы

  return(
  <div className="create">
    <div className="create-container">

      <div className="block-tabs words">
        <Link to= {`/editProject/details/${currentProject.id}`}
          className={switchTab1 ? "tabs active-tabs" : "tabs"}>
          Детали проекта
        </Link>

        <Link to= {`/editProject/reward/${currentProject.id}`}
          className={switchTab2 ? "tabs active-tabs" : "tabs"}> 
          Вознаграждения
        </Link>

        <Link to= {`/editProject/verification/${currentProject.id}`}
          className={switchTab3 ? "tabs active-tabs" : "tabs"}> 
          Верификация
        </Link>
      </div>

      <Switch>
        <Route 
          path="/editProject/details/:id" 
          render={(props) => (
            <Details 
              getProject = {getProject}
              currentProject = {currentProject}
              updateProject = {updateProject}
              handleInputChange = {handleInputChange}
              handleImageChange = {handleImageChange}
              projectFormData = {projectFormData}
              imageChange = {imageChange}
              {...props}
            />
          )}
          />

        <Route 
          path="/editProject/reward/:id" 
          render ={(props) => (
            <Reward 
              {...props}
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
