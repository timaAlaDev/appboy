import React from 'react';
import useForm from './../includes/useForm.jsx'
import validateinfo from './../includes/validateInfo.jsx'
// import { withRouter } from 'react-router-dom'

const SignUp = () => {
   const {handleChange, values, errors, handleSubmit} = useForm(validateinfo);

   return (
     <div className="reg__inner">
      <div className="reg">
         <form className="regform" onSubmit={handleSubmit}>
           <div className="reg-line">
             <hr style={{
               border: 'black solid 1px',
               marginLeft: '15px',
               marginRight: '15px',
             }}/>
            <h1>Регистрация</h1>
            </div>
            <div className="regform-inputs">
               {/* <label htmlFor="name" className="form-label">
                  Имя пользователя
               </label> */}
               <input
                     id="name"
                     type="text"
                     name="name"
                     className="form-input"
                     placeholder="Введите свое имя"
                     value={values.name}
                     onChange={handleChange}
                  />
                  {errors.name && <p className="input-error">{errors.name}</p>}
            </div>

            <div className="regform-inputs">
               {/* <label htmlFor="email" className="form-label">
                  Почта
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
                  {errors.email && <p className="input-error"> {errors.email}</p>}
            </div>
            <div className="regform-inputs">
               {/* <label htmlFor="password" className="form-label">
                  Пароль
               </label> */}
               <input 
                     id="password"
                     type="password"
                     name="password"
                     className="form-input"
                     placeholder="Придумайте пароль"
                     value={values.password}
                     onChange={handleChange}
                  />
                  {errors.password && <p className="input-error">{errors.password}</p>}
            </div>

            <div className="regform-inputs">
               {/* <label htmlFor="password_confirmation" className="form-label">
                  Подтверждение пароля
               </label> */}
               <input 
                     id="password_confirmation"
                     type="password"
                     name="password_confirmation"
                     className="form-input"
                     placeholder="Подтвердите пароль"
                     value={values.password_confirmation}
                     onChange={handleChange}
                  />
                  {errors.password_confirmation && <p className="input-error">{errors.password_confirmation}</p>}
            </div>
            <div className="form-create">
            <button className="form-input-btn" type="submit">
               Создать профиль
            </button>
            <span className="form-input-login">
               <br/> Уже зарегистрированы? Можете <a href="#">войти здесь</a>.
            </span>
            </div>
         </form>
      </div>
      </div>
   )
}
export default SignUp