import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import ProjectService from '../../service/ProjectService';
import SideBar from '../../modules/Sidebar';

function ProjectsAll() {


  const loadingLogo = (process.env.MIX_APP_URL + '/images/loadingLogo.gif')

  const [projects, setProjects] = useState([]);

  const [dataLoaded, setDataLoaded] = useState(false) 

  useEffect(() => {
     retrieveProjects();

   }, []);


  const retrieveProjects = async () => {
   await ProjectService.getAll()
     .then(response => {
        setProjects(response.data);
        console.log(response.data);
     })
     .catch(e => { 
        console.log(e);
     })
     setDataLoaded(true)
  };


  return (
    <div className= "allProjects">
    <div className="all__arcticle">
       <h1 style={{ fontFamily: 'Montserrat, sans-serif'}}>
          Все проекты 
       </h1> 
       <SideBar ctg={['Рекомендованные', 'Новые', 'Бизнес', 'Еда', 'Технологий и Иноваций', 'Образование']}/>
    </div> 

   {dataLoaded ?   
   <div className="projectAll-form-container">  
     {projects.map((project) => (

        <div key={project.id} className="project-form-item" >
          <Link to= {`/project/${project.id}`}>
             <img src= {(process.env.MIX_APP_URL + '/' + project.image)} />
          </Link>

          <p className="project-title">
              {project.title}
           </p>

        
           <div className="project-description">
     
              {project.short_description}
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
{/* 
           <Link
              to={"/editProject/details/" + project.id}>
              Редактировать
           </Link> */}

        </div>
        ))
     }
  </div> : <h2 style={{textAlign: 'center'}}><img src={loadingLogo} width="100px" /></h2>}
  

 </div>
  )
}

export default ProjectsAll
