import React from 'react'
import { useState } from 'react';
import Modall from '../Project/Modall';

const Updates = () => {

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
      </div>

       <div className="app-buttons">
         <button style={{ 
           backgroundColor: 'yellow', 
           color: 'black',}} >
          Редактировать
         </button>
         <button style={{ 
           backgroundColor: 'green' }} onClick={()=> setModallActivePass(true)}>
            Обновить
            </button>
         <button onClick={()=> setModallActiveDelete(true)}>Удалить</button>
       </div>
       <Modall ModallShown={modallActivePass} setModallShown={setModallActivePass}>
          <div className="pass-modal">
            Вы действительно хотите принять обновления?
           <button className="create-btn">Принять</button>
          </div>
       </Modall>
       <Modall ModallShown={modallActiveDelete} setModallShown={setModallActiveDelete}>
          <div className="pass-modal">
            Вы действительно хотите удалить обновления?
            <button className="create-btn">Удалить</button>
          </div>
       </Modall>
     </div>

    </div>
    </div>
  )
}

export default Updates