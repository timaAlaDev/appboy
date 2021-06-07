import React from "react";
import { useState } from "react";
import defaulAvatar from "./../../img/default-avatar.jpg";

export default function ProjectMain(props) {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [showName, setShowName] = useState(false);
    const [commentValue, setCommentValue] = useState('')

    function showTextArea() {
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
          <div className="main-info">

            <div className="main-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBB_T2zeI5Jo4fnwW6TMGx0-6YYS_m4HRtHMyWYctaXOXymEh0yRKMEGnd4cEO4td2PZI&usqp=CAU" />
            </div>

           <div className="main-text">
            <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quaerat unde recusandae,
                sapiente optio impedit doloremque culpa
                natus! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Eligendi, aut
                perferendis neque sequi tempore temporibus
                repellendus, debitis itaque non consectetur
                quidem commodi vitae alias quia? Dolor,
                perferendis! Repudiandae delectus libero
                odio alias iusto ipsum eaque non modi
                corporis fuga quod aliquid ipsam possimus
                facilis impedit molestias vero id totam,
                neque suscipit. Deleniti iure quae veritatis
                deserunt harum, quo similique ipsum corrupti
                amet dolores, molestiae placeat ab modi
                fuga. Nulla mollitia non aperiam debitis
                aspernatur dignissimos, voluptatum, in
                incidunt consectetur deserunt similique
                quidem eos unde vero? Veritatis eum
                excepturi, recusandae sequi sapiente
                temporibus ut exercitationem libero porro
                adipisci! Inventore, dolorum at
            </p>
          </div>

          <div className="main-video">
            <img src="https://media.giphy.com/media/l4EpjhhOhIsxydetG/giphy.gif" />
          </div>

          <div className="main-text">
            <p>
              текст
            </p>
          </div>
          
          <div className="main-text">
            <p>
              текст
            </p>
          </div>
          
          <div className="main-text">
            <p>
              текст
            </p>
          </div>

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









