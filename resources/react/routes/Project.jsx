import React from "react";
import ProjectHead from "../includes/Project/ProjectHead";
import ProjectMain from "../includes/Project/ProjectMain";
import ProjectFee from "./../includes/Project/ProjectFee";
import ProjectService from "../service/ProjectService";


const Project = (props) => {

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
  const [currentProject, setCurrentProject] = React.useState(initialProjectState);

  const getProject = id => {
    ProjectService.get(id)
      .then(response => {
        setCurrentProject(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    getProject(props.match.params.id);
    }, [props.match.params.id]);


  return (
  <div className="project-page">
    <ProjectHead project={currentProject} />

    <div className="main-project-col">
      <ProjectMain project={currentProject}/> 
      <ProjectFee/>
    </div>
  </div>
  );
}

export default Project;










    // const {id} = useParams()

    // const [posts, setPosts] = React.useState([])

    // React.useEffect (() => {
    //    fetch(process.env.MIX_APP_URL + '/api/posts')
    //       .then(response => response.json())
    //       .then(post => setPosts(post.data))
    // }, [])
 
    // const projectDetails = posts.filter(post => {
    //     return  post.post_id == id
    // })

    // console.log(projectDetails)
