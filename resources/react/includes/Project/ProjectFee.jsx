import React from 'react'
import { useState, useEffect } from 'react';
import Select from "react-select";
import Modall from './Modall';
import { CgDanger } from 'react-icons/cg'


export default function ProjectFee () {

  const [numberValue, setNumberValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [surnameValue, setSurnameValue] = useState('')

  function handleNameChange (e) {
    setNameValue(e.target.value)
  } 

  function handleNumberChange (e) {
      setNumberValue(e.target.value)
  } 

  function handleSurnameChange (e) {
    setSurnameValue(e.target.value)
  } 




  const [modallActive, setModallActive] = useState(false); 
  return (
    <div className="reward-col">
        <h5>
          Выберите вознаграждение
        </h5>

        <div className="reward-form">

        <img className="reward-img" src="https://media.giphy.com/media/3ov9k2DPS07zna6EaA/giphy.gif" alt=""/>

        <div className = "children-reward-form">
            <h3 className="reward-name">
              Сьедобные ложки asd asd asd asd
            </h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus eum unde ex explicabo dolor consectetur iste doloribus asperiores, illo vel libero .
            </p>

            <div className="reward-cost">
              <span>
                приобретено (123)
              </span>

              <button onClick={()=> setModallActive(true)}>
                500ед.
              </button>
            </div>
          </div>
 
          <Modall ModallShown={modallActive} setModallShown={setModallActive}>
            <div className="modall-bg">
              <h3>Введите свой адрес для доставки вознаграждение <span className="zxczxc fz18" data-tool="Только для городов Казахстана"><CgDanger/></span></h3>
              <b>Область</b>
              <Select
                placeholder="Выберите область"
              />
              <b>Город</b>
              <input type="text"  />
              <b>Почтовый индекс</b>
              <input type="number" />
              <b>Адрес доставки</b>
              <textarea name="" id="" cols="30" rows="2"></textarea>
              <b>Имя Фамилия</b>
              <div className="name-surname">
                <input 
                  type="text" 
                  required placeholder="Введите имя"
                  value={nameValue} 
                  onChange={handleNameChange}/>
                <input 
                  type="text"  
                  required placeholder="Введите фамилию" 
                  value={surnameValue} 
                  onChange={handleSurnameChange}/>
              </div>
              <div className="modall-number">
              <b>Телефон</b>
              
              <input 
                type="number" 
                required             
                value={numberValue} 
                onChange={handleNumberChange} />
              <button type="submit"  disabled={!numberValue, !nameValue, !surnameValue}>Купить</button>
        
              </div>
         
            </div>
          </Modall>
       
      </div>

    </div>
  )
}
