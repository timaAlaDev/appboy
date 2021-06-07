import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';



class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
    
      <Menu >
  
          <form className="header__searchbox margin-auto">
              <div className="pseudo-search">
                <input type="text" placeholder="Поиск" autoFocus required />
                    <button className="fa fa-search" type="submit" />
              </div>
          </form>
  

        <div className="elem-border">
          <Link to="/createProject" className="burger-create" >Создать проект
          </Link>
         </div>

         <div className="elem-border">
            <Link to= "/allProjects" className="burger-url"> Все проекты</Link>
         </div>

         <div className="elem-border">
            <Link to="/howItWorks" className="burger-url" >Как это работает</Link>
         </div>

      </Menu>

    );
  }
}
export default BurgerMenu