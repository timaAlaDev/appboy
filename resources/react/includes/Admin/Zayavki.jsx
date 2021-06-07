import React from 'react'
import { useState } from 'react';
import Modall from '../Project/Modall';

const Zayavki = () => {

  const [modallActivePass, setModallActivePass] = useState(false); 
  const [modallActiveDelete, setModallActiveDelete] = useState(false); 

  return (
    <div className="applications">
     <div className="application">
      <div className="project-app">
       <div className="app-name">
        <div className="project-arcticle">
            <p>Название проекта: <span>Сьдобные ложки</span></p>
        </div>
          <p>Автор:<span></span></p>
          <p>Дата добавления:<span>asdasdasd</span></p>
          <p>Дата окончания:<span>asdasdasd</span></p>
          <select name="admin-select" id="">
            <option value="Бизнес">Бизнес</option>
            <option value="Еда">Еда</option>
            <option value="Технологии и иновации">Технологии и иновации</option>
            <option value="Образование">Образование</option>
          </select>
       </div>

       <div className="app-buttons">
         <button style={{ 
           backgroundColor: 'yellow', 
           color: 'black',}} >
          Редактировать
         </button>
         <button style={{ 
           backgroundColor: 'green' }} onClick={()=> setModallActivePass(true)}>
            Одобрить
            </button>
         <button onClick={()=> setModallActiveDelete(true)}>Удалить</button>
       </div>
       <Modall ModallShown={modallActivePass} setModallShown={setModallActivePass}>
          <div className="pass-modal">
            Вы действительно хотите одобрить проект?
           <button className="create-btn">Одобрить</button>
          </div>
       </Modall>
       <Modall ModallShown={modallActiveDelete} setModallShown={setModallActiveDelete}>
          <div className="pass-modal">
            Вы действительно хотите удалить проект?
            <button className="create-btn">Удалить</button>
          </div>
       </Modall>
     </div>

     <h2> Верификация </h2>

     <div className="verification-app">
          <div className="author-info">
            <div>ФИО: 
              <span></span>
            </div>

            <div>ИИН: 
              <span></span>
            </div>

            <div>Дата рождения: 
              <span></span>
            </div>

            <div>Город: 
              <span></span>
            </div>

            <div>Телефон: 
              <span></span>
            </div>
          </div>

          <div className="author-documents">
            <div>Документы: 
              <span>
                  img
              </span>
              <span>
                  txt
              </span>
            </div>
          </div>
     </div>
    </div>
    </div>
  )
}

export default Zayavki