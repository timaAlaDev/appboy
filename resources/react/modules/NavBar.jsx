import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import Settings from '../includes/Settings/Settings.jsx'
import BurgerMenu from './BurgerMenu.jsx';

const NavBar = () => {

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
                <div className="burger">
                     <BurgerMenu/>
                </div>
         <div>
            <Link to= "/" className="header__logo"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIB4L7ybROqR_f-pMuOjgqgyjNDmxdEsdH4WdY471nCTgtm1zGp6N8Le7fEOveqrU4WWI&usqp=CAU" alt="" /></Link>
         </div>
       

         <div>
            <Link to="/howItWorks" className="header__url" >Как это работает</Link>
         </div>

         <div>
            <Link to= "/allProjects" className="header__url"> Все проекты</Link>
         </div>

         <form className="header__searchbox">
            <div className="pseudo-search">
               <input type="text" placeholder="Поиск" autoFocus required />
                  <button className="fa fa-search" type="submit" />
            </div>
         </form>
         
  
 
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
