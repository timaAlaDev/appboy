import React from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import { MdAccountCircle } from 'react-icons/md'
import { RiBilliardsLine } from 'react-icons/ri'
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { FaHandshake  } from 'react-icons/fa'
import { FaPowerOff } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { Link, useHistory } from 'react-router-dom';




const Settings = () => {

  const history = useHistory()

  const handleLogOut = () => {
     axios.get('sanctum/csrf-cookie').then(() => {
        axios.post('/api/logout').then(() => {
           Cookies.remove('user_logged_in')
           console.log('Вы теперь не авторизованы!')
           history.push('/')
           history.go(0)
        })
     })
  };

  return (
    <div className="header__settings">
          <ul className="settings">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Kassym-Jomart_Tokayev_%282020-02-01%29.jpg" alt=""/> 
            <span> Настройки </span>
            <IoIosArrowDown className="iicon"/>
            <li className="settings__inner">
              <div>
            <Link to="/profile" className="profile-btn"><MdAccountCircle className="iconn"/>  Мой профиль</Link> 
            </div>
            <div>  
              <Link to="/bill" className="profile-btn"> <RiBilliardsLine className="iconn"/>Средства на счету</Link> 
            </div>
            <div>
             <Link to="/projectAuthor" className="profile-btn">  <AiFillCopyrightCircle className="iconn"/> Проекты авторство</Link> 
            </div>
            <div>
            <Link to="/projectInv"  className="profile-btn">  <FaHandshake className="iconn"/>Проекты инвестиции</Link> 
            </div>
            <div >
            <button className="profile-btn" onClick={handleLogOut}> <FaPowerOff className="iconn"/> Выйти</button>
            </div>
            </li>
          </ul>
    </div>
  )
}
export default Settings