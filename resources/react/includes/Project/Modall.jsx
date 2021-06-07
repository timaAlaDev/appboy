import React from 'react'


export default function Modall ({ModallShown, setModallShown, children})  {
  return (
    <div className={ModallShown ? "modall active" : "modall"} onClick={()=> setModallShown(false)}>
      <div className="modall-content" onClick={x => x.stopPropagation()}> {children}</div>
    </div>
  )
}