import React, {useState} from 'react'
import Modall from '../Project/Modall';
import Project from './../../routes/Project';
import ProjectHead from '../Project/ProjectHead';
import ProjectMain from '../Project/ProjectMain';

const Updates = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
      setToggleState(index);
  };

  const [showName, setShowName] = useState(false);
  const [commentValue, setCommentValue] = useState('')

  function showTextArea() {
    setShowName(!showName);
  }



  const [modallPass, setModallPass] = useState(false); 
  const [modallDelete, setModallDelete] = useState(false);
  const [modallEdit, setModallEdit] = useState(false)
  const [modallMain, setModallMain] = useState(false)

  const handleEditBtn = () => {
    setModallEdit(true)
  }

  const handleEditBtnMain = () => {
    setModallMain(true)
  }

  const handlePassBtn = () => {
    setModallPass(true)
  }
  const handleDeleteBTn = () => {
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
      </div>

       <div className="app-buttons">
         <button onClick={handleEditBtn} >
          Редактировать
         </button>
         <button onClick={handlePassBtn}>
            Обновить
            </button>
         <button onClick={handleDeleteBTn}>Удалить</button>
       </div>
       <Modall ModallShown={modallEdit} setModallShown={setModallEdit}>
        <div className="admin-edit-page">
          <div className="prev-project">
            <b>Проект</b>
            <img src={"https://pbs.twimg.com/media/Du7x1lvU8AAevOi.jpg"} />
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi repudiandae sequi perferendis exercitationem libero dignissimos.</p>

            <span>video or animation</span>
          </div>
          <div className="updated-project">
            <b>Обновленя</b>
          <img src={"https://pbs.twimg.com/media/Du7x1lvU8AAevOi.jpg"} />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magnam.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam a modi laudantium obcaecati dignissimos nihil eligendi libero, corrupti error facilis, repellendus minima explicabo? Nesciunt, qui?</p>
            <span>video or animation</span>
          </div>
        </div>
         
       </Modall>
       <Modall ModallShown={modallPass} setModallShown={setModallPass}>
          <div className="pass-modal">
            Вы действительно хотите принять обновления?
           <button className="create-btn">Принять</button>
          </div>
       </Modall>
       <Modall ModallShown={modallDelete} setModallShown={setModallDelete}>
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