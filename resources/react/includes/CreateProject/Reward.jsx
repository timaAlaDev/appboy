import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
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



  const fileInputRef = useRef();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();


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

  const handleImageChange = (e) => {
    setPhoto(e.target.value)
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }

  }


  return (
      <div className="createReward-inner ">
              <form onSubmit={onCreatPost}>
                  <div className="create-inner size3">
                      <label className="size">???????????????? ????????????????????????????</label>
                      <input
                          required
                          value={rewardName}
                          onChange={(e) => setRewardName(e.target.value)}
                          ref={rewardTitleInput}
                          onInput={valueTitle}
                          maxLength="50"
                          placeholder="???????????????? ????????????????????????????"
                      />
                  </div>

                  <div className="create-inner ">
                      <label className="size">???????? ????????????????????????????</label>
                      <div style={{boxShadow: '0px 0px 1px black', padding: '15px 0px 15px 15px'}}>
                      <button  
                        className="create-img "
                        onClick={(event) => {
                        event.preventDefault();
                        fileInputRef.current.click();}}>  ?????????????????? ?????????????????????? </button> 
                      <input
                          required
                          type="file"
                          accept="image/*"
                          value={photo}
                          onChange={handleImageChange}
                          style={{
                              padding: "15px 0px 15px 15px",
                              display: "none" 
                          }}
                          ref={fileInputRef}

                      />
                      </div>
                  </div>

                  <div className="create-inner">
                      <label className="size">?????????????????? ????????????????????????????</label>
                      <input
                          required
                          value={cost}
                          onChange={(e) => setCost(e.target.value)}
                          ref={rewardCostInput}
                          onInput={valueCost}
                          maxLength="6"
                          placeholder="1234 ??????????"
                      />
                  </div>

                  <div className="create-inner">
                      <label className="size">???????????????? ????????????????????????????</label>
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
                          placeholder="???????????? ?????????????????????? ???????????????? ??????????????????, ?????? ???????????????????????? ?????????????? ?????? ???????????? ?????????????? ????????????.?????????? ???????????? ???????????????? ?????? ???????????????????????????? ?? ???????????? ????????????????????????????."
                      ></textarea>
                  </div>
                  <div className="create-inner">
                      <label className="size">
                          ?????? ???????????????? ????????????????????????????
                      </label>
                      <textarea
                          name=""
                          id=""
                          cols="10"
                          rows="10"
                          placeholder="?????????????? ???????????? ???????????????? ????????????????????????????"
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
                          ???????????????????? ????????????????????????????
                      </label>
                      <input
                          required
                          value={rewardNum}
                          onChange={(e) => setRewardNum(e.target.value)}
                          type="number"
                          placeholder=""
                      />
                  </div>

                  <div className="create-inner">
                      <label className="size">
                          ???????? ???????????????? ????????????????????????????
                      </label>
                      <input
                          placeholder="?????????????? ????????"
                          required
                          value={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.value)}
                          type="date"
                      />
                  </div>
                    <div className = "moder-btn">
                        <button className="create-btn" >
                            ???????????????? ?????? ????????????????????????????
                        </button>

                        <button type="button"  className="create-btn" onClick = {""}> 
                            <Link to= {`/editProject/verification/${3}`} className = "link-text">
                                ?????????????????? ?? ????????????????????
                            </Link>
                        </button>
                    </div>
                    
              </form>
        
          <div className="createProject-reward-form">
              <div className="reward-img">
                  <img
                      src={preview}
                      alt=""
                  />
              </div>
              <div className="children-reward-form">
                <div className="reward-name">
                    {rewardTitle}
                </div>
        
                <p className="reward-description">
                  {rewardDescrip}
                </p>
                <div className="reward-delivery-date"></div>
                <div className="reward-cost">
                    <span>{rewardCost}</span> <button>????????????</button>
                </div>
              </div>
          </div>
      </div>
    );
}

export default Reward;
