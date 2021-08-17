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
import MyProjects from './includes/Settings/MyProjects.jsx';
import MyInvestions from './includes/Settings/MyInvestions.jsx';
import Job from './routes/Job.jsx';
import ForgotPassword from './routes/ForgotPassword.jsx';
//Импорты страниц routes


// Главная константа Index обработчик всех страниц
const Index = (
   <React.StrictMode>
      <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component = {Main}/>
         <Route path="/allProjects" component = {AllProjects}/>
         <Route path="/howItWorks" component = {HowItWorks}/>
         <Route path="/createProject" component = {Opener}/>
         <Route path="/project/:id" component = {Project}/>
         <Route path="/Admin" component = {Admin}/>
         <Route path="/editProject" component = {EditProject}/>
         <Route path="/registration" component = {SignUp}/>
         <Route path="/login" component = {Login}/> 
         <Route path="/profile" component = {profile}/>
         <Route path="/bill" component = {bill}/>
         <Route path="/myProjects" component = {MyProjects}/>
         <Route path="/myInvestions" component = {MyInvestions}/>
         <Route path="/job" component = {Job}/> 
         <Route path="/forgotPassword" component = {ForgotPassword}/> 
      </Switch>
      <Footer />
      </BrowserRouter>
   </React.StrictMode>
);

render (
   Index,
   document.getElementById('root')
);
