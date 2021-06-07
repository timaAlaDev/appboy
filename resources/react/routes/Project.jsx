import React from "react";
import { useParams } from "react-router";
import ProjectHead from "../includes/Project/ProjectHead";
import ProjectMain from "../includes/Project/ProjectMain";
import ProjectFee from "./../includes/Project/ProjectFee";


const Project = () => {
    const {id} = useParams()

    const [posts, setPosts] = React.useState([])

    React.useEffect (() => {
       fetch(process.env.MIX_APP_URL + 'api/posts')
          .then(response => response.json())
          .then(post => setPosts(post.data))
    }, [])
 
    const projectDetails = posts.filter(post => {
        return  post.post_id == id
    })

    console.log(projectDetails)
    

    return (
        <div className="project-page">
            <ProjectHead />
            <div className="main-project-col">
              <ProjectMain /> <ProjectFee />
            </div>
        </div>
    );
};

export default Project;
