import React from 'react'
import Modall from '../Project/Modall';

const Zayavki = () => {

  const [modallPass, setModallPass] = React.useState(false); 
  const [modallDelete, setModallDelete] = React.useState(false); 
  const [modallEdit, setModallEdit] = React.useState(false)

  const handleEditBtn = () => {
    setModallEdit(true)
  }

  const handlePassBtn = () => {
    setModallPass(true)
  }

  const handleDeleteBtn = () => {
    setModallDelete(true)
  }

  return (
    <div className="applications">
      <div style={{textAlign: 'center'}}> 
        <input type="text" />
      </div>
     
     <div className="application">
      <div className="project-app">
       <div className="app-name">
        <div className="project-arcticle">
            <p>Название проекта: <span>Сьдобные ложки</span></p>
        </div>
          <p>Автор:<span></span></p>
          <p>Дата добавления:<span>asdasdasd</span></p>
          <p>Дата окончания:<span>asdasdasd</span></p>
          <p>Катерогия:</p>
          <select name="admin-select" id="">
            <option value="Бизнес">Бизнес</option>
            <option value="Еда">Еда</option>
            <option value="Технологии и иновации">Технологии и иновации</option>
            <option value="Образование">Образование</option>
          </select>
       </div>
       <div className="app-buttons">
         <button onClick={handleEditBtn}>
          Редактировать
         </button>
         <button onClick={handlePassBtn}>
            Одобрить
            </button>
         <button onClick={handleDeleteBtn}>Удалить</button>
       </div>
       <Modall ModallShown={modallEdit} setModallShown={setModallEdit}>
          
       </Modall>
       <Modall ModallShown={modallPass} setModallShown={setModallPass}>
          <div className="pass-modal">
            Вы действительно хотите одобрить проект?
           <button className="create-btn">Одобрить</button>
          </div>
       </Modall>
       <Modall ModallShown={modallDelete} setModallShown={setModallDelete}>
          <div className="pass-modal">
            Вы действительно хотите удалить проект?
            <button className="create-btn delete-btn">Удалить</button>
          </div>
       </Modall>
     </div>

     <h2> Верификация </h2>

     <div className="verification-app">
          <div className="author-info">
            <div>
              <span>ФИО:</span>
              <b>asd</b>
            </div>

            <div>
              <span>ИИН:</span>
              <b></b>
            </div>

            <div>
              <span>Дата рождения: </span>
              <b></b>
            </div>

            <div>
              <span>Город: </span>
              <b></b>
            </div>

            <div>
              <span>Телефон: </span>
              <b></b>
            </div>
          </div>

          <div className="author-documents">
            <div>Документы: 
              <img src={''} alt="iin-frontside" />
              <img src={""} alt="iin-backside" />
            </div>
          </div>
     </div>
    </div>
    </div>
  )
}

export default Zayavki