import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';

const useForm = (validateinfo) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  const [errors, setErrors] = useState ({})

  const history = useHistory()

  const location = useLocation()

  const switchapi = location.pathname === "/registration";

  let nameapi = 'api/login'
  if(switchapi === true) 
  {nameapi = 'api/register'};

  const handleChange = e => {
    const { name, value } = e.target;
    setValues ({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
     e.preventDefault();
     setErrors (validateinfo(values));
     axios.get('sanctum/csrf-cookie').then(() => {
       axios.post(nameapi, values).then(() => {
        console.log('Авторизация прошла успешно')
        logIn()
       })
     });

     function logIn() {
        Cookies.set('user_logged_in', 'true', { expires: 86400, sameSite: 'lax' })
        history.push('/')
        history.go(0)
    }

   };


  return {handleChange, values, errors, handleSubmit, history, location}
};

export default useForm;
