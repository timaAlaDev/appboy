import React from 'react'
import { useHistory, } from 'react-router-dom';
import { useState } from 'react';

const SideBar = ({ctg}) => {
    const history = useHistory()
    const [activeItem,setActiveItem] = useState(null);

    const openroute = (name) => {
        history.push(`/AllProjects/${name}`)
    }

    const onSelectItem = (index) => {
        setActiveItem(index);
      };

    return (
        <div className="zxc">
            <button className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
                Все проекты
            </button>
            {ctg &&
             ctg.map((zxc,index) => 
                <button  
                key = {`${zxc}_${index}`}
                onClick={()=> openroute(zxc)}
                onClick={()=> onSelectItem(index)} 
                className={activeItem === index ? 'active' : ''}
                >{zxc}</button>)}
        </div>
  )
}

export default SideBar