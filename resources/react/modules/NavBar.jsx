import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import Settings from '../includes/Settings/Settings.jsx'
import BurgerMenu from './BurgerMenu.jsx';
import Modall from './../includes/Project/Modall';



const NavBar = () => {

   const logoCpnet = (process.env.MIX_APP_URL + '/images/cpnetLogo.png')
   const logoCpnetMobile = (process.env.MIX_APP_URL + '/images/cpnetLogo-mobile.png')

   const myCookie = Cookies.get('user_logged_in');

   const [isCookie, setIsCookie] = useState(false);

   useEffect(() => {
    if (myCookie) {
    setIsCookie(true);
    }
   });

   return (
     
   <header>
     
     <div className="headerr-inner">
         <div className="burger invisible-bg" >
            <BurgerMenu/>
         </div>

         <div>
            <Link to= "/" className="header__logo">
              <picture>
                <source media="(max-width: 500px)" srcSet={logoCpnetMobile}/>
                <img src={logoCpnet} />
              </picture>
            </Link>
         </div>
       

         <div>
            <Link to="/howItWorks" className="header__url" >Как это работает</Link>
         </div>

         <div>
            <Link to= "/allProjects" className="header__url"> Все проекты</Link>
         </div>   
  
         <div style={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
         }}>
               <Link to="/createProject" className="header__create" >Создать проект</Link>
         </div>
         {!isCookie && 
         <div>
            <span>
               <Link to="/registration" className="header__reg" >Регистрация</Link>
            </span>
            <span>
               <Link to="/login" className="header__login" >Войти</Link>
            </span>
         </div>}     
         {isCookie && 
          <Settings/>
         }
         </div>    
   </header>
   )
}

export default NavBar
