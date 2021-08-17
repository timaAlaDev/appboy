import React from "react";
import { useState } from "react";
import defaulAvatar from "./../../img/default-avatar.jpg";
import parser from 'html-react-parser'

export default function ProjectMain({project}) {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [showName, setShowName] = useState(false);
    const [commentValue, setCommentValue] = useState('')

    const showTextArea = () => {
      setShowName(!showName);
    }
  

return (
<div className="project-main-info">
  <div className="tabs-container">
      <div className="block-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}onClick={() => toggleTab(1)}>
              Проект
          </button> 

          <button 
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
              История проекта
          </button>

          <button 
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}>
              Дневник-автора
          </button>
      </div>

      <div className="content-tabs">
        <div className={ toggleState === 1 ? "content  active-content": "content"}>
          <div className="main-info"  >
          {/* {dangerouslySetInnerHTML = {{__html: (project.detail_description) }}} */}
          {parser(project.detail_description)}
          </div>
        </div>
     </div>

      <div className={toggleState === 2 ? "content  active-content": "content"} >
        <div className="project-history">
          <div className="date-change">
            <span>12.12.12</span>
          </div>
          <div className="title-change">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="descrip-change ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, tempora dolorum. Expedita, dolor est dicta error amet officiis 
          </div> 
          <div className="description-change ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed laudantium labore iste laboriosam nihil saepe explicabo tempore, at ad obcaecati aut consectetur aliquam omnis totam accusantium eaque, vel, ducimus repudiandae veritatis cupiditate nobis? Optio cupiditate nulla, accusamus modi esse aliquam non fuga nisi vel laborum accusantium, tenetur nam temporibus molestiae.
          </div>
        </div>
      </div>

    <div className={ toggleState === 3 ? "content  active-content" : "content"}>
      <section className="comment-section">
        <aside className="comment-left-col">
          <div className="comment">
            <div className="commentor-img">
              <img src={defaulAvatar} alt="" />
            </div>
            <div>
              <div className="commentor">
                <article className="commentor-name">Бред Питт</article>
                <span>Месяц назад</span>
              </div>
              <p className="comment-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quos, facere voluptatibus ipsam iusto ducimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt vel ad dolore omnis similique suscipit. Laboriosam delectus dignissimos similique.
              </p>
            </div>
          </div>
        </aside>
        <aside className="comment-right-col">
          <div className="comment right">
            <div>
              <div className="commentor textr">
                <span >
                  Месяц назад
                </span>
                <article className="commentor-name marginl">
                  Бред Питт
                </article>
              </div>
              <p className="comment-body alignr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tenetur ipsum magnam placeat minus aperiam, ab odio quos quisquam ratione repellat esse odit in. Quod quasi at sint laudantium iusto.
              </p>
            </div>

            <div className="commentor-img">
              <img src={defaulAvatar} alt="" />
            </div>
          </div>
        </aside>
        <div className="leave-comment">

          <textarea 
            value={commentValue} 
            onChange={e => setCommentValue(e.target.value)} 
            cols="30" rows="3"
            placeholder="Оставьте комментарий" > 
          </textarea>

            <button disabled={!commentValue}> Оставить комментарий </button>
        </div>
      </section>
    </div>

  </div>
</div>
    );
}









