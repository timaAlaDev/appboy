import React from 'react';
import { useHistory, useLocation, useParams, } from 'react-router-dom';


const categories = () => {
   const location = useLocation();
   const history = useHistory();
   const { name } = useParams();

   const backclick = () => {
      history.goBack()
   };
   const atRecomended = location.pathname.includes("/Allprojects");

   return (
      <div className= "recomended">

         <div> 
            {name}
         </div>  

         {atRecomended} 

         <button onClick={backclick}> 
            Назад к категориям 
         </button>

      </div>
   )
}
export default categories