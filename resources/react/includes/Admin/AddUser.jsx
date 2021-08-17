import React from 'react'
import useForm from '../useForm';
import validateinfo from '../validateInfo';

const AddUser = () => {

  const [moderators, setModerators] = React.useState([1,2,3,])
  const [users, setUsers] = React.useState(["mal", "ishak", "mambet"])

  const [curators, setCurators] = React.useState([1,2,])

  const [busAngels, setBusAngels] = React.useState([1,])
  

  const [searchUser, setSearchUser] = React.useState('')

  const sUsers = users.filter((user) => {
    return user.includes(searchUser)
  })


  const {handleChange, values, errors, handleSubmit} = useForm(validateinfo);
  return (
    <div className="admin-create-user">
      <div className="reg admin-create-user-inner">
         <form className="regform" onSubmit={handleSubmit}>
           <div className="reg-line">
               <hr style={{
                  border: 'black solid 1px',
                  marginLeft: '15px',
                  marginRight: '15px',
               }}/>
               <h1>Добавление</h1>
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
                     placeholder="Имя пользователя"
                     value={values.name}
                     onChange={handleChange}
                  />
                  {errors.name && <p className="input-error">{errors.name}</p>}
            </div>
            
            <div className="regform-inputs">
               {/* <label htmlFor="name" className="form-label">
                  Имя пользователя
               </label> */}
               <input
                     id="role"
                     type="text"
                     name="role"
                     className="form-input"
                     placeholder="Введите роль"
                    //  value={values}
                    //  onChange={handleChange}
                  />
                  {/* {errors.name && <p className="input-error">{errors.name}</p>} */}
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
                     placeholder="Почта пользователя"
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
            {/* <span className="form-input-login">
               <br/> Уже зарегистрированы? Можете "
               <Link to= "/login">
                  войти здесь
               </Link>".
            </span> */}
            </div>
         </form>
      </div>
      <div className="admin-users-column">  
        <div className="default-mysite-enjoyers">
          <article>Пользователи</article>
          <input type="text" placeholder="поиск" onChange={e => setSearchUser(e.target.value)} />
          <div> 
            {sUsers.map((item, index) => {
              return <section key={`${item}_${index}`}>
                      <img src={""} />
                      <b>{item}</b>
                    </section>  
            })} 
          </div>
   
        </div>
        <div className="moderators">
        <article>Модераторы</article>
        <input type="text" placeholder="поиск"  />

        <div>  
        {moderators.map((item, index) => {
              return <section key={`${item}_${index}`}>
                      <img src={""} />
                      <b>userName</b>
                    </section>  
            })} 
          </div>
        </div>
        <div className="curators">
        <article>Кураторы</article>
        <input type="text"  placeholder="поиск" />

        <div>  
        {curators.map((item, index) => {
              return <section key={`${item}_${index}`}>
                      <img src={""} />
                      <b>userName</b>
                    </section>  
            })}   
          </div>
   
        </div>
        <div className="business-angels">
        <article>Бизнес Ангелы</article>
        <input type="text" placeholder="поиск"  />

          <div>  
          {busAngels.map((item, index) => {
              return <section key={`${item}_${index}`}>
                      <img src={""} />
                      <b>userName</b>
                    </section>  
            })}  
          </div>
   
        </div>
      </div>
      </div>
  )
}  

export default AddUser
