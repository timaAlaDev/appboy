import React, { useState } from "react";

import defaulAvatar from "./../../img/default-avatar.jpg";

export default function profile() {

  const [showPassword, setShowPassword] = useState(false);
  return (
  <div className="profile-page">

      <div className="profile-img">
        <img src={defaulAvatar} alt="avatar"/>
        <div className="img-change">
          <button>Изменить</button>
          <button>Удалить</button>
        </div>
      </div>

    <div className="profile-edit">
      <div className="block-1">

          <div className="profile-name">
            <input type="text"
                   placeholder="Имя пользователя" />
          </div>

          <div className="profile-password">
            <input type="text" 
                   placeholder="*******" 
                   onClick={() =>setShowPassword(!showPassword)}/>{showPassword ? (
              <div>
                <div> 
                  <input 
                    type="password" 
                    placeholder="Повторите пароль" /> 
                </div>
              </div> ) : null}
          </div>

          <div className="profile-city">
          <select
            name="change-city"
            id="change-city">
              <option value="Шымкент">
                  Шымкент
              </option>
              <option value="Алма-ата">
                  Алма-ата
              </option>
              <option value="Нур-Султан">
                  Нур-Султан
              </option>
              <option value="Актобе">
                  Актобе
              </option>
              <option value="Караганда">
                  Караганда
              </option>
              <option value="Тараз">Тараз</option>
              <option value="Павлодар">
                  Павлодар
              </option>
              <option value="Усть-Каменогорск">
                  Усть-Каменогорск
              </option>
              <option value="Семей">Семей</option>
              <option value="Атырау">
                  Атырау
              </option>
              <option value="Костанай">
                  Костанай
              </option>
              <option value="Кызылорда">
                  Кызылорда
              </option>
              <option value="Уральк">
                  Уральск
              </option>
              <option value="Петропавловск">
                  Петропавловск
              </option>
              <option value="Актау">Актау</option>
              <option value="Темиртау">
                  Темиртау
              </option>
              <option value="Туркестан">
                  Туркестан
              </option>
              <option value="Кокшетау">
                  Кокшетау
              </option>
              <option value="Талдыкорган">
                  Талдыкорган
              </option>
              <option value="Экибастуз">
                  Экибастуз
              </option>
              <option value="Рудный">
                  Рудный
              </option>
          </select>
        </div>
      </div>

      <div className="block-2">
        <div className="profile-email">
          <input type="text" 
                 readOnly
                 placeholder="kurama.zxc@mail.ru"
          />
        </div>
        <div className="profile-number">
          <input type="text" 
                 placeholder="87755372258"/>
        </div>
      </div>
    </div>

    <div className="save-edit">
      <button>Сохранить изменения</button>
    </div>
  </div>
  )
}