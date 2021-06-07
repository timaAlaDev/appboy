import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Switch,} from 'react-router-dom';

// Импорты страниц routes
import Main from './routes/Main.jsx';
import NavBar from './modules/NavBar.jsx';
import Footer from './modules/Footer.jsx';
import AllProjects from './routes/AllProjects.jsx';
import HowItWorks from './routes/HowItWorks.jsx';
import Project from './routes/Project.jsx';
import SignUp from './routes/SignUp.jsx';
import Login from './routes/Login.jsx';
import Opener from './routes/Opener'
import Admin from './routes/Admin'
import EditProject from './routes/EditProject'
import profile from './includes/Settings/Profile.jsx';
import bill from './includes/Settings/Bill.jsx';
import projectAuthor from './includes/Settings/ProjectAuthor.jsx';
import projectInv from './includes/Settings/ProjectInv.jsx';
import Job from './routes/Job.jsx';
//Импорты страниц routes


// Главная константа Index обработчик всех страниц
const Index = (
   <React.StrictMode>
      <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component = {Main}/>
         <Route path="/allProjects/:id" component = {Project}/>
         <Route path="/allProjects" component = {AllProjects}/>
         <Route path="/howItWorks" component = {HowItWorks}/>
         <Route path="/createProject" component = {Opener}/>
         <Route path="/project" component = {Project}/>
         <Route path="/Admin" component = {Admin}/>
         <Route path="/editProject" component = {EditProject}/>
         <Route path="/registration" component = {SignUp}/>
         <Route path="/login" component = {Login}/> 
         <Route path="/profile" component = {profile}/>
         <Route path="/bill" component = {bill}/>
         <Route path="/projectAuthor" component = {projectAuthor}/>
         <Route path="/projectInv" component = {projectInv}/>
         <Route path="/job" component = {Job}/> 
      </Switch>
      <Footer />
      </BrowserRouter>
   </React.StrictMode>
);

render (
   Index,
   document.getElementById('root')
);
