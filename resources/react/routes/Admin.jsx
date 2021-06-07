import React, { useState }  from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Zayavki from "./../includes/Admin/Zayavki";
import Updates from "./../includes/Admin/Updates";
import Balances from "./../includes/Admin/Balances";
import Invest from "./../includes/Admin/Invest";
import Slider from "./../includes/Admin/Slider";


const Admin = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="admin-panel">
      
      <div className="admin-tabs">
        <Link to= "/admin/zayavki"
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
          Заявки
        </Link> 

        <Link to= "/admin/updates"
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
          Обновления
        </Link> 

        <Link to= "/admin/balances"
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}> 
          Средства на счету
        </Link>

        <Link to= "/admin/invest"
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}> 
          Инвестиций транзакций
        </Link>

        <Link to= "/admin/slider"
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}> 
          Карусель
        </Link>
        
      </div>

      <div>
        <Switch>
          <Route path="/admin/zayavki" component = {Zayavki}/>
          <Route path="/admin/updates" component = {Updates}/>
          <Route path="/admin/balances" component = {Balances}/>
          <Route path="/admin/invest" component = {Invest}/>
          <Route path="/admin/slider" component = {Slider}/>
        </Switch>
      </div>
      
    </div>
  )
}

export default Admin
