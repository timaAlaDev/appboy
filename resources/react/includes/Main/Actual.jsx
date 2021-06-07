import React from "react";
import MainRecomended from "./MainRecomended";
import MainLaunched from './MainLaunched';


export default function Actual() {
    return (
        <div>
            <div className="style_head">
                <hr style={{border: "black solid 1px",}}/>
                  <div className="text1"> Рекомендованные </div>
            </div>

            <MainRecomended/>

            <div className="style_head2">
                <hr style={{ border: "black solid 1px", }} />
                 <div className="text1"> Только что запустились </div>
            </div>

            <MainLaunched/>
    
        </div>
    );
}
