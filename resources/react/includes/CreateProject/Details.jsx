import React, { useState, useEffect, useRef } from "react";
import { CgDanger } from 'react-icons/cg'
import { ImEye } from 'react-icons/im'
import Modall from './../Project/Modall';
import defualtAvatar from '../../img/default-avatar.jpg'
import ReactPlayer from 'react-player'
import { Editor } from '@tinymce/tinymce-react';
import editorInit from "../../service/EditorInit";


function Details (props){
  
  //------------Prop  s from 'EditProject'--------------
  const currentProject = props.currentProject;
  const handleInputChange = props.handleInputChange;
  const projectFormData = props.projectFormData;
  const image = props.imageChange;
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
  props.getProject(props.match.params.id)
  setDataLoaded(true)
  }, [props.match.params.id]);
  //------------------------end------------------------


  //-------------------TinyMCE Editor------------------
  const editorRef = useRef();
  const [editorValue, setEditorValue] = useState()
  const handleEditorChange = () => {
    const data = editorRef.current.getContent()
    setEditorValue(data)
  }
  useEffect(() => {
    // const data = editorRef.current.getContent()
    setEditorValue(currentProject.detail_description)
  }, [])
  //----------------------end--------------------------


  //----------------------Appends----------------------
  projectFormData.append('id', props.match.params.id);
  projectFormData.append('image', image);
  projectFormData.append('title', currentProject.title);
  projectFormData.append('short_description', currentProject.short_description);
  // projectFormData.append('city_id', currentProject.city_id);
  projectFormData.append('sum_of_money', currentProject.sum_of_money);
  projectFormData.append('closed_at', currentProject.closed_at);
  projectFormData.append('video_or_animation', currentProject.video_or_animation );
  projectFormData.append('detail.description', editorValue)
  //------------------------end------------------------ 
  

  //-----------------???????????????????? ??????????????--------------------
  const ProjectImage = (process.env.MIX_APP_URL + '/' + currentProject.image)
  const [modallActive, setModallActive] = useState(false); 
  const fileInputRef = useRef();
  const [preview, setPreview] = useState();

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
  //---------------end ???????????????????? ??????????????---------------


return (
    <div className="createProject-inner">
        {currentProject ? (
        <form>
          <div className="create-inner size3">
            <label className="size">???????????????? ??????????????</label>
            <input
              minLength="3"
              maxLength="70"
              className="create-input"
              placeholder="???? ?????????? 50 ????????????????"
              type="text"
              name ="title"
              value={currentProject.title || ''}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="create-inner">
            <label className="size size2">
              ?????????????? ?????????????????????? ?????????????? 
              <span className="tip" data-tool="?????????????????????? ?? ?????????????????????? 650x350">
                <CgDanger/>
              </span>
            </label>

            <div style={{boxShadow: '0px 0px 1px black', padding: '15px 0px 15px 15px'}} >
              <button  
                className="create-img "
                onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
                }}>   
                ?????????????????? ?????????????????????? 
              </button> 

              <input style = {{display: 'none'}}
                type="file" 
                ref={fileInputRef}
                accept="image/*"
                name="image"
                onChange={props.handleImageChange}
                required
              />
            </div>
          </div>

          <div className="create-inner">
            <label className="size">?????????????? ????????????????</label>

            <textarea
              minLength="8"
              maxLength="256"
              name ="short_description"
              value={currentProject.short_description || ''}
              onChange={handleInputChange}
              style={{
                resize: 'none'
              }}
              placeholder="?????????????? ?? ??????????????"
              required

            />
          </div>

          <div className="create-inner">
            <label className="size size2">?????????? ?????????? <span className="tip" data-tool="?????????? ?????????? ?????????????? ?? ??????????????"><CgDanger/></span></label>
            <input 
              placeholder="1 000 000"
              type="number"
              name ="sum_of_money"
              value={currentProject.sum_of_money || ''}
              onChange={handleInputChange}
              required

            />
          </div>

          <div className="create-inner">
            <label className="size">???????? ???????????????????? ??????????????</label>
            <input
                value={currentProject.closed_at || ''}
                onChange={handleInputChange}
                type="date"
                name="closed_at"
                required
            />
          </div>
          
          <div className="create-inner create-video-container">
            <label className="size size1">?????????? ?????? ????????????????</label>
            <div style={{boxShadow: '0px 0px 1px black'}}>
            <input className="create-video"
                type="text"
                name="video_or_animation"
                value={currentProject.video_or_animation || ''}
                onChange={handleInputChange}
                placeholder="???????????? ???? ?????????? (youtube)"

            />
              { dataLoaded &&
                dataLoaded ? 
                <ReactPlayer
                className='react-player'
                url={currentProject.video_or_animation}
                controls={true}
                height="225px"/>
                 : null
              }
                   
            </div>
      
          </div>

          <div className="create-inner create-editor-container">
            <label htmlFor="editor" className="size">?????????????????? ????????????????
            </label>

            <div className="pos-abs">
            <Editor
              initialValue={currentProject.detail_description}
              onInit={(evt, editor) => editorRef.current = editor}
              init={(editorInit)}
              onChange={handleEditorChange}
          />
      
              {/* <textarea name="fullDescrip"    
                  value={currentProject.detail_description || ''}
                  name="detail_description"
                  onChange={handleInputChange}
                  className="fullDescrip-input"
              > 
              </textarea> */}
            </div>
          </div>

          <button  className="create-btn" onClick = {props.updateProject} type = "button"> 
            {/* <Link to= {`/editProject/reward/${currentProject.id}`} className = "link-text">
              ?????????????????? ?? ????????????????????
            </Link> */}
            ??????????????????
          </button>
   
        </form>
        ) : (
            <div>
                <h5>?????????? ???????? ?????? ??????????????</h5>
            </div>
        )}








{/*------------------------------------ ???????????? ??????????????????????????------------------------------ */}
      <div className="create-project-item-container">
        <h3>???????????? ??????????????</h3>
        <div className="createProject-item-form">
          <img src = {
             preview &&
             preview  ?(preview) : (ProjectImage)
          }/>

          <h2 className="project-title"> 
              {currentProject.title}
          </h2>
          
          <div className="project-description" > 
            {currentProject.short_description}
          </div>


          <progress className="progress-line" value="1" max="100"> 
          </progress> 

          <div className="project-progress">
            <div>
              <span>0%</span>
              <p>???????? ????????</p>
            </div>

            <div>
              <span>0</span>
              <p>??????????????</p>
            </div>
          </div>

          <button className="preview-bg"  type="button"> 
            <ImEye/> 

            <span onClick={()=> setModallActive(true)} className="preview-btn">
              ???????????????????? 
            </span>
          </button> 
        </div>
      </div>
        <Modall ModallShown={modallActive} setModallShown={setModallActive}>
          <section className="ProjectHead">
            <aside className="head__left">
              <div className="head__img">
              <img src = { 
                preview &&
                preview ?(preview) : (ProjectImage)}/>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>

              <article className="head__under">
              </article>

              <article className="head__under">
                ????????????????
              </article>
              </div>
            </aside>

            <aside className="head__right">
              <h2 className="projectHead__title word-break">
                {currentProject.title}
              </h2>

              <p className="projectHead__descrip word-break">
                {currentProject.short_description}
              </p>

              <div className="projectHead__flex">
                <div className="head__contacts"> 
                  <div className="head__author">
                    <img src={defualtAvatar} alt=""/> 
                    ???????? ????????
                  </div>
                </div>

                <div className="head__score">
                  <div className="head__count">
                    <div className="headCurrentCount">
                      <span>

                    0 ??????????
                      </span>
                    </div>

                    <div className="headCounOf">
                      ?????????????? ???? {currentProject.sum_of_money}
                    </div>
                  </div>

                  <div className="head__patreons">
                    <div className="patreonsCount">
                      0 ??????????????(????)
                    </div>
                    <div className="daysBefore">
                      25 ????????
                    </div>
                  </div>
                </div>

                <div className="head__button">
                  <button>
                  ????????????????????????
                  </button>
                </div>


              </div>
            </aside>

          </section>
        </Modall>

    </div>
    );
}

export default Details;
