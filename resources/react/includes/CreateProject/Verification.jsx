import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { useHistory } from "react-router";
import Modall from "../Project/Modall";
import axios from "axios";


function Verification() {

    const history = useHistory()

    const [moderAfter, setModerAfter] = useState(false)
    const handleModerBtn = () => {
      setModerAfter(true)
    }

    const [author, setAuthor] = useState("");
    const [authorF, setAuthorF] = useState("");
    const [authorO, setAuthorO] = useState("");
    const [authorBirth, setAuthorBirth] = useState("");
    const [authorCity, setAuthorCity] = useState("");
    const [iin, setIin ] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [authorDocum, setAuthorDocum] = useState("");


    
    function onCreatPost(e) {
        e.preventDefault();
        const postData = {
            author,
            author_last_name,
            author_patronymic,
            author_city_id,
            iin,
            phone,
            document,
        };

        axios
            .post("", postData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={onCreatPost}>
                <div className="create-inner size3">
                    <label className="size">Автор проекта</label>
                    <div className="authorName-input">
                    <input
                        required
                        placeholder="Введите ваше имя или название организации"
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <input 
                        required
                        placeholder="Введите вашу фамилию"
                        type="text"
                        value={authorF}
                        onChange={(e) => setAuthorF(e.target.value)}/>
                    <input 
                        placeholder="Введите ваше отчество"
                        type="text"
                        value={authorO}
                        onChange={(e) => setAuthorO(e.target.value)}

                    />
                    </div>
                </div>

                <div className="create-inner">
                    <label className="size">Дата рождения</label>
                    <input
                        type="date"
                        required
                        value={authorBirth}
                        onChange={(e) => setAuthorBirth(e.target.value)}
                    />
                </div>
                
                <div className="create-inner">
                    <label className="size">Город проживания</label>
                    <select name="" id="author-city"
                        required
                        value={authorCity}
                        onChange={(e) => setAuthorCity(e.target.value)}>
                          <option value="Шымкент">Шымкент</option>
                          <option value="Алма-ата">Алма-ата</option>
                          <option value="Нур-Султан">Нур-Султан</option>
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

                        
                  
                </div>

             

                <div className="create-inner">
                    <label className="size">ИИН</label>
                    <input
                          type="text"
                          maxLength="12"
                          pattern="\d+"
                          required
                          value={iin}
                          onChange={(e) => setIin(e.target.value)}
                    />
                </div>

                <div className="create-inner">
                    <label className="size">Телефон</label>
                    <input
                        required
                        placeholder="+7 (____) __ __"
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                    />
                </div>
                <div className="create-inner">
                    <label className="size">Фото уд.личности или данные паспорта</label>
                    <input
                        placeholder="Загрузить фото уд. личности"
                        type="file"
                        required
                        value={authorDocum}
                        onChange={(e) => setAuthorDocum(e.target.value)}
                        style={{
                          paddingTop: '15px',
                          paddingLeft: '15px',
                          paddingBottom: '15px',
                        }}
                    />
                </div>
                  <div className="moder-btn">
                    <button>Сохранить</button>
                    <button onClick={handleModerBtn} className = "moderate-green"> 
                        Отправить на модерацию
                    </button>
                    <Modall ModallShown={moderAfter} setModallShown={setModerAfter} >
                      <div className="moder-after">
                        <div className="moder-after-inner">
                          <h3>Пока ваш проект рассматривает модерация предлагаем обучиться краудфандингу </h3>
                          <Link to="/" className="moder-after-link"> Пройти обучение</Link>
                          <button onClick={e => {history.push('/myProject')}}>Oк</button>
                        </div>
                      </div>
                    </Modall>
                  </div>
            </form>
        </div>  
    );
}

export default Verification;
