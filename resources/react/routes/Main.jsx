import React from "react";
import Actual from "../includes/Main/Actual";
import Kraud from "../includes/Main/Kraud";
import Carousell from './../includes/Main/Carousel';

const Main = () => {
    return (
        <div>
            <Carousell/>
            <div className="main">
                <Actual />
                <Kraud />
            </div>
        </div>
    );
};

export default Main;
