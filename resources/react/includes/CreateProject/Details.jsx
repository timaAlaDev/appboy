import React, { useState, useEffect } from "react";
import ProjectService from './../../service/ProjectService';
import { Link } from 'react-router-dom';

import { CgDanger } from 'react-icons/cg'



function Details(props) {

    const initialProjectState = {
        id: null,
        title: "",
        image: "",
        short_description: "",
        city_id: "",
        sum_of_money: "",
        closed_at: "",
        video_or_animation: "",
        detail_description: "",
        published: false
      };

    const [currentProject, setCurrentProject] = useState(initialProjectState);
    const [message, setMessage] = useState("");

    console.log(currentProject);

    const getProject = () => {
         ProjectService.getAll()
          .then(response => {
            setCurrentProject(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    };

    useEffect(() => {
    getProject(props.match.params.id);
    }, [props.match.params.id]);


    const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProject({ ...currentProject, [name]: value });
    };
    console.log(setCurrentProject)


    const updateProject = () => {
        ProjectService.update(currentProject.id, currentProject)
        .then(response => {
        console.log(response.data);
        setMessage("Проект обновился!!!!!!");
        })
        .catch(e => {
        console.log(e);
        });
    };

      
    function viewAlert() {
    alert(message);
    }
    
 

    //Вывод данных(description) для пользователя
    function valueTitle () {
      setInputTitle(titleInput.current.value);
      
    }
    function valueDescrip () {
      setInputDescrip(descripInput.current.value);
    }

    let titleInput = React.createRef();
    let descripInput = React.createRef();


    const [inputTitle, setInputTitle] = useState('');
    const [inputDescrip, setInputDescrip] = useState('');

     

    return (
        <div className="createProject-inner">
            {currentProject ? (
            <form onSubmit={updateProject}>
                <div className="create-inner size3">
                    <label className="size">Название проекта</label>
                    <input
                        
                        className="create-input"
                        placeholder="Не более 50 символов"
                        type="text"
                        value={currentProject.title}
                        onChange={handleInputChange}
                        ref={titleInput}
                        onInput={valueTitle}
                    />
                </div>

                <div className="create-inner">
                    <label className="size size2">
                        Главное изображение проекта <span className="zxczxc" data-tool="Изображение с разришением 650x350"><CgDanger/></span>
                    </label>
                    <input className="create-img"
                        type="file"
                        value={currentProject.image}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="create-inner">
                    <label className="size">Краткое описание</label>
                    <textarea 
                        maxLength="256"
                        value={currentProject.short_description}
                        onChange={handleInputChange}
                        style={{
                          resize: 'none'
                        }}
                        placeholder="Коротко о проекта"  
                        onInput={valueDescrip}
                        ref={descripInput}
                    />
                </div>

                {/* <div className="create-inner">
                    <label className="size">Город проекта</label>
                    <select name="" id="create-city"
                      
                      value={city}
                      onChange={(e) => setCity(e.target.value)}>
                        <option value="Алма-ата">Алма-ата</option>
                        <option value="Нур-Султан">Нур-Султан</option>
                        <option value="Шымкент">Шымкент</option>
                        <option value="Актобе">Актобе</option>
                        <option value="Караганда">Караганда</option>
                        <option value="Тараз">Тараз</option>
                        <option value="Павлодар">Павлодар</option>
                        <option value="Усть-Каменогорск">Усть-Каменогорск</option>
                        <option value="Семей">Семей</option>
                        <option value="Атырау">Атырау</option>
                        <option value="Костанай">Костанай</option>
                        <option value="Кызылорда">Кызылорда</option>
                        <option value="Уральк">Уральск</option>
                        <option value="Петропавловск">Петропавловск</option>
                        <option value="Актау">Актау</option>
                        <option value="Темиртау">Темиртау</option>
                        <option value="Туркестан">Туркестан</option>
                        <option value="Кокшетау">Кокшетау</option>
                        <option value="Талдыкорган">Талдыкорган</option>
                        <option value="Экибастуз">Экибастуз</option>
                        <option value="Рудный">Рудный</option>
                      </select>
                        

                </div> */}

                <div className="create-inner">
                    <label className="size size2">Сумма сбора <span className="zxczxc" data-tool="Сумма будет указана в коинах"><CgDanger/></span></label>
                    <input 
                        
                        placeholder="1 000 000"
                        type="number"
                        value={currentProject.sum_of_money}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="create-inner">
                    <label className="size">Дата завершение проекта</label>
                    <input
                        
                        value={currentProject.closed_at}
                        onChange={handleInputChange}
                        type="date"
                    />
                </div>

                
                <div className="create-inner">
                    <label className="size size1">Видео или анимация</label>
                    <input className="create-video"
                        type="file"
                        value={currentProject.video_or_animation}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="create-inner">
                    <label className="size">Детальное описание</label>
                    <textarea name="fullDescrip" id="" cols="30" 
                    rows="10"    
                        
                        value={currentProject.detail_description}
                        onChange={handleInputChange}
                        className="fullDescrip-input"
                        style={{
                          height: '350px',
                          resize: 'none',
                        }}> 
                    </textarea>
                </div>
                
                <button type="submit"  className="create-btn" onClick={viewAlert} > 
                    Сохранить
                    {/* <Link onClick={() => props.setToggleState(2)} to= "/editProject/reward" className = "link-text">
                      Сохранить и продолжить
                    </Link> */}
                </button>


            </form>
            ) : (
                <div>
                    <h5>Здесь пока нет проекта</h5>
                </div>
            )}

            <div className="createProject-item-form">
                <img
                    src="https://www.shopcrossgates.com/wp-content/uploads/sites/18/2020/05/1920x1080-356x200.png"/>
                <div className="cattegory-link">
                </div>

                <h2 className="project-title"> 
                    {inputTitle}
                </h2>
                
                <div className="project-description" > 
                    {inputDescrip}
                </div>

                <progress className="progress-line" value="1" max="100">
                </progress> 

                <div className="project-progress">
                    <div>
                        <span>0%</span>
                        <p>идет сбор</p>
                    </div>

                    <div>
                        <span>0</span>
                        <p>собрано</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Details;























// const [title, setTitle] = useState("");
// const [image, setImage] = useState("");
// const [short_description, setShort_description] = useState("");
// const [city_id, setCity_id] = useState("");
// const [sum_of_money, setSum_of_money] = useState("");
// const [closed_at, setClosed_at] = useState("");
// const [video_or_animation, setVideo_or_animation] = useState("");
// const [detail_description, setDetail_description] = useState("");



// function onCreatPost(e) {
//     e.preventDefault();
//     const postData = {
//         title,
//         image,
//         short_description,
//         city_id,
//         sum_of_money,
//         closed_at,
//         video_or_animation,
//         detail_description,
//     };

//     api
//         .post("", postData)
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
    
// }
