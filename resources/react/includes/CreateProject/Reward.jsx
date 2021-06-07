import axios from "axios";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Reward(props) {
  const [rewardName, setRewardName] = useState("");
  const [photo, setPhoto] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [rewardGet, setRewardGet] = useState("");
  const [rewardNum, setRewardNum] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  function onCreatPost(e) {
      e.preventDefault();
      const postData = {
          rewardName,
          photo,
          cost,
          description,
          rewardGet,
          rewardNum,
          deliveryDate,
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
  let rewardTitleInput = React.createRef();
  let rewardDescripInput = React.createRef();
  let rewardCostInput = React.createRef();

  const [rewardTitle, setRewardTitle] = useState('');
  const [rewardDescrip, setRewardDescrip] = useState('');
  const [rewardCost, setRewardCost] = useState('');

  function valueTitle () {
    setRewardTitle(rewardTitleInput.current.value)

  }
  function valueDescrip () {
    setRewardDescrip(rewardDescripInput.current.value)
    
  }
  function valueCost () {
    setRewardCost(rewardCostInput.current.value)
    
  }

  return (
      <div className="createReward-inner ">
              <form onSubmit={onCreatPost}>
                  <div className="create-inner size3">
                      <label className="size">Название вознаграждения</label>
                      <input
                          required
                          value={rewardName}
                          onChange={(e) => setRewardName(e.target.value)}
                          ref={rewardTitleInput}
                          onInput={valueTitle}
                          maxLength="50"
                      />
                  </div>

                  <div className="create-inner ">
                      <label className="size">Фото вознаграждения</label>
                      <input
                          required
                          type="file"
                          value={photo}
                          onChange={(e) => setPhoto(e.target.value)}
                          style={{
                              padding: "15px 0px 15px 15px",
                          }}
                          
                      />
                  </div>

                  <div className="create-inner">
                      <label className="size">Стоимость вознаграждения</label>
                      <input
                          required
                          value={cost}
                          onChange={(e) => setCost(e.target.value)}
                          ref={rewardCostInput}
                          onInput={valueCost}
                          maxLength="6"
                      />
                  </div>

                  <div className="create-inner">
                      <label className="size">Описание вознаграждения</label>
                      <textarea
                          className="reward-descrip"
                          name=""
                          id=""
                          cols="30"
                          rows="10"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          ref={rewardDescripInput}
                          onInput={valueDescrip}
                          maxLength="300"
                      ></textarea>
                  </div>
                  <div className="create-inner">
                      <label className="size">
                          Как получить вознаграждение
                      </label>
                      <textarea
                          name=""
                          id=""
                          cols="10"
                          rows="10"
                          placeholder="Опишите способ отправки вознаграждения"
                          required
                          value={rewardGet}
                          onChange={(e) => setRewardGet(e.target.value)}
                          style={{
                              height: "150px",
                              resize: "none",
                          }}
                      ></textarea>
                  </div>
                  <div className="create-inner">
                      <label className="size">
                          Количество вознаграждений
                      </label>
                      <input
                          required
                          value={rewardNum}
                          onChange={(e) => setRewardNum(e.target.value)}
                          type="number"
                      />
                  </div>

                  <div className="create-inner">
                      <label className="size">
                          Дата отправки вознаграждения
                      </label>
                      <input
                          placeholder="Укажите дату"
                          required
                          value={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.value)}
                          type="date"
                      />
                  </div>
                    <div className = "moder-btn">
                        <button className="create-btn" >
                            Добавить еще вознаграждения
                        </button>

                        <button className="create-btn" > 
                            <Link  onClick={() => props.setToggleState(3)} to= "/editProject/verification" className = "link-text">
                                Сохранить и продолжить
                            </Link>
                        </button>
                    </div>
                    
              </form>
        
          <div className="createProject-reward-form">
              <div className="reward-img">
                  <img
                      src="https://media.giphy.com/media/3ov9k2DPS07zna6EaA/giphy.gif"
                      alt=""
                  />
              </div>
              <div className="reward-name">
                  {rewardTitle}
              </div>
              <div className="children-reward-form">
              <p className="reward-description">
        {rewardDescrip}
              </p>
              <div className="reward-delivery-date"></div>
              <div className="reward-cost">
                  <span>{rewardCost}</span> <button>Купить</button>
              </div>
              </div>
          </div>
      </div>
    );
}

export default Reward;
