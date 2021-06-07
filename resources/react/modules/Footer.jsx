import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { BsFillChatFill } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'


const Footer = () => {
   return (
<footer className="new_footer_area bg_color">
  <div className="new_footer_top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft'}}>
            <h3 className="f-title f_600 t_color f_size_18">Погрузись в мир старпатов</h3>
            <p> Будь в курсе и не пропускай новые обновления </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft'}}>
            <h3 className="f-title f_600 t_color f_size_18">Оплата и документы</h3>
            <ul className="list-unstyled f_list">
              <li><a style={{
                color: "black"
              }} href="#">Соц. предпринемательсво</a></li>
              <li><a style={{
                color: "black"
              }}  href="#">Патенты</a></li>
              <li><a style={{
                color: "black"
              }}  href="#">Тарифы</a></li>
              <li><a style={{
                color: "black"
              }}  href="#">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft'}}>
            <h3 className="f-title f_600 t_color f_size_18">Разделы</h3>
            <ul className="list-unstyled f_list">
              <li><a style={{
                color: "black"
              }}  href="#"> Обучение краудфандинг</a></li>
              <li><a style={{
                color: "black"
              }}  href="#">FAQ</a></li>
              <li><a style={{
                color: "black"
              }}  href="#">Блог</a></li>
              <li><a style={{
                color: "black"
              }}  href="#">Кураторы </a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft'}}>
            <h3 className="f-title f_600 t_color f_size_18"  style={{
              textAlign: 'center'
            }}>Связь с нами</h3>
            <div className="f_social_icon" style={{
              textAlign: 'center'
            }} >
              <a style={{
                border: 'none'
              }} href="#" ><BsFillChatFill  style={{
                fontSize: '30px',
                paddingBottom: '4px'
                
              }}/></a>
              <a style={{
                border: 'none'
              }}  href="#" > <FaWhatsapp style={{
                fontSize: '30px',
                paddingBottom: '4px'
              }}/> </a>
              <a style={{
                border: 'none'
              }}  href="#" > <FaTelegramPlane style={{
                fontSize: '30px',
                paddingBottom: '4px'
              }}/></a>
              <a style={{
                border: 'none'
              }}  href="#" > <FaYoutube style={{
                fontSize: '30px',
                paddingBottom: '3px'
              }} /> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_bg">
      <div className="footer_bg_one" />
      <div className="footer_bg_two" />
    </div>
  </div>
</footer>
   )
}
export default Footer









 //     <div className="Footer__inner">
  //     <div className="Footer" id="Footerr" >
  //     <ul className="footer__section1">
  //         <h2>  Оплата и документы</h2>
  //         <li> <a className="social__pred" href="">Соц.предпринемательсво </a></li>
  //       <li>  <a href=""> Частые вопросы </a></li>
  //     <li> <a href=""> Правила сервиса </a></li> 
  //     <li> <a href=""> Пользовательское соглашение </a></li> 
  //     <li> <a href="">Политика конфиденциальности </a> </li> 
  //      <li><a href=""> Тарифы </a> </li>
  //     </ul>
  //     <ul className="footer__section2">
         
  //         <h2>Разделы</h2>
  //         <li><a className="patents" href=""> Патенты</a></li>
  //       <li> <a href=""> Напишите нам</a></li> 
  //       <li> <a href=""> Кураторы</a> </li>
  //    <li> <a href="">Блог</a> </li> 
  //    <li> <a href=""> Обучение краудфандинг</a></li> 
  //     </ul>
  //  </div>
  //  </div>