import React from 'react';
import { Route, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import CreateProject from './CreateProject';

const Opener = () => {
  
const myCookie = Cookies.get('user_logged_in');

console.log(myCookie);

if (myCookie) {
   return <Route path="/createProject" component = {CreateProject}/>
};

return (
   <div className="opener-inner">
      <div className="opener"> 
         <p>Что-то пошло не так, пожалуйста 
            <Link to="/login"> войдите в аккаунт</Link> и попробуйте снова, или зарегистрируйтесь  
            <Link to="/registration"> здесь</Link>.
         </p>
      </div>
   </div>
)

}
export default Opener