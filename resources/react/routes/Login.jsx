import React from 'react';
import useForm from './../includes/useForm.jsx'
import validateinfo from './../includes/validateInfo.jsx'
import { withRouter, Link } from 'react-router-dom'

const Login = () => {
   const {handleChange, values, errors, handleSubmit} = useForm(validateinfo);

   return (  
     <div className="reg__inner">
      <div className="reg">
         <form className="regform" onSubmit={handleSubmit}>
         <div className="reg-line2">
             <hr style={{
               border: 'black solid 1px',
               marginLeft: '15px',
               marginRight: '15px',
             }}/>
            <h1>Войти в профиль</h1>
            </div>
            <div className="regform-inputs">
               {/* <label htmlFor="email" className="form-label">
                  Введите почту
               </label> */}
               <input 
                     id="email"
                     type="email"
                     name="email"
                     className="form-input"
                     placeholder="Введите свою почту"
                     value={values.email}
                     onChange={handleChange}
                  />
                  {errors.email && <p className="input-error">{errors.email}</p>}
            </div>

            <div className="regform-inputs">
               {/* <label htmlFor="password" className="form-label">
                  Введите Пароль
               </label> */}
               <input 
                     id="password"
                     type="password"
                     name="password"
                     className="form-input"
                     placeholder="Введите ваш пароль"
                     value={values.password}
                     onChange={handleChange}
                  />
                  {errors.password && <p className="input-error">{errors.password}</p>}
            </div>

            <div className="form-create">
               <button className="form-input-btn" type="submit">
                  Войти
               </button>

               <Link to= "/forgotPassword">
                  Забыли пароль?
               </Link>

               <span className="form-input-login">
                  <br/> Еще не зарегистрированы? "
                  <Link to= "/registration">
                     Зарегистрироваться
                  </Link>".
               </span>
            </div>
         </form>
      </div>
      </div>
   )
}
export default withRouter(Login)