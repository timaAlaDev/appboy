import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import SideBar from './../modules/Sidebar';
import ProjectService from '../service/ProjectService';



const AllProjects = () => {

   const [projects, setProjects] = useState([]);

   useEffect(() => {
      retrieveProjects();
    }, []);


   const retrieveProjects = () => {
      ProjectService.getAll()
      .then(response => {
         setProjects(response.data);
         console.log(response.data);
      })
      .catch(e => {
         console.log(e);
      });
   };


   return (
      <div className= "allProjects">

         <div className="all__arcticle">
            <h1 style={{ fontFamily: 'Montserrat, sans-serif'}}>
               Все проекты
            </h1> 
            <SideBar ctg={['Рекомендованные', 'Новые', 'Бизнес', 'Еда', 'Технологий и Иноваций', 'Образование']}/>
         </div>

         <div className="allProject-form-container">
            {projects.map((project) => (
               <div key={project.id} className="project-form-item" >
                  <img src="https://www.shopcrossgates.com/wp-content/uploads/sites/18/2020/05/1920x1080-356x200.png"/>

                  <div className="cattegory-link">
                     {project.short_description}
                  </div>

                  <p className="project-title">
                     {project.title}
                  </p>

                  <div className="project-description">
                     {project.detail_description}
                  </div>

                  <progress className="progress-line" value="50" max="100"></progress>

                  <div className="project-progress">
                     <div>
                        <span>100 %</span>
                        <p>идет сбор</p>
                     </div>

                     <div>
                        <span>129999 тг</span>
                        <p>собрано</p>
                     </div>
                  </div>

                  <Link
                     to={"/editProject/details/" + project.id}
                  >
                     Редактировать
                  </Link>

               </div>
               ))
            }
         </div>

      </div>

   )
}
export default AllProjects
