import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const ForgotPassword =() => {

  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState (false)


  const reset = () => {
    axios.post('api/forgot-password', {email})
    .then (() => {
      setEmailSent(true)
    }).catch(({errors}) => {
      alert(errors[0])

      setEmailSent(false)
    })
  }


  return (
    <div className="reg__inner">
      <div className="reg">
        <form className="regform">
          <div className="reg-line2">
             <hr style={{
               border: 'black solid 1px',
               marginLeft: '15px',
               marginRight: '15px',
             }}/>

            <h1>Восстановление</h1>
          </div>

          {emailSent ? (
            <div>Восстановление пароля отправлен на почту{email}.</div>
          ) : (
            <div>
              <div className="regform-inputs">
                  <input 
                        id="email"
                        type="email"
                        required
                        name="email"
                        className="form-input"
                        placeholder="Введите свою почту"
                        onChange={e => setEmail(e.target.value)}
                    />
              </div>

              <div className="form-create">
                  <button className="form-input-btn" type="button" onClick= {reset}>
                    Восстановить
                  </button>

                  <span className="form-input-login">
                    <br/> Еще не зарегистрированы? " 
                    <Link to= "/registration">
                        Зарегистрироваться
                    </Link>".
                  </span>
              </div>
            </div>
          )}

          
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
