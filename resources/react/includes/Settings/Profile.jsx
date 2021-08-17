import React, { useState, useRef, useEffect } from "react";

import defaulAvatar from "./../../img/default-avatar.jpg";

export default function profile() {

  const [showPassword, setShowPassword] = useState(false);
  
  const fileInputRef = useRef();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const [imageChange, setImageChange] = useState("false")

  useEffect(() => {
    
  }, [image]);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
    } else {
    }
  }, [image]);


  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
    } else {
    }
  }, [image]);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null)
    }
  }, [image]);

  const handleImageChange = () => {
    event.preventDefault();
    fileInputRef.current.click();
  }
  
  return (
  <div className="profile-page">
    <h2>Мой профиль</h2>
    <hr />
    <div className="profile-page-inner">
      <div className="profile-img">
          <img src={defaulAvatar} alt="avatar"/>
          <div className="img-change">
          <input 
            type="file" style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
            }}/>
            <button onClick={() => setImageChange(!imageChange)} >Изменить</button>
            <button onClick={handleImageChange} >Загрузить</button>
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
    
      
    </div>
    <div className="save-edit">
        <button>Сохранить изменения</button>
    </div>
  </div>
)
}