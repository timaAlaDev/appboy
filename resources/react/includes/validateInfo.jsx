export default function validateinfo (values) {
  let errors = {}

  if(!values.name.trim()) {
    errors.name = "Введите имя"
  }
  else if (!/^([а-яА-ЯёЁa-zA-Z]{1,}?(['-]{1}|[а-яА-ЯёЁa-zA-Z]{1,19})){2,20}$/.test(values.name.trim())) {
    errors.name = 'Введите корректное имя';
  }

  //Email
  if(!values.email) {
    errors.email = "Введите почту"
  } else if (!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(values.email)) {
    errors.email = 'Введите корректную почту';
  }   

  //Password
  if (!values.password) {
    errors.password = 'Введите пароль';
  } else if (values.password.length < 8) {
    errors.password = 'Ненадежный пароль, введите более 8 символов';
  }

  if (!values.password_confirmation) {
    errors.password_confirmation = 'Повторите пароль';
  } else if (values.password_confirmation !== values.password) {
    errors.password_confirmation = 'Пароли не совпадают';
  }

  return errors;
}