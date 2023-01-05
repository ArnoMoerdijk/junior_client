import React from "react";
import "./WeerWidget.css";

export const WeerWidget = () => (
    <div id="weer-widget" className="weer-widget">
        <h1>Weer en klimaat</h1>
        <iframe className="weerbericht" scrolling="no" src="https://www.meteo.be/services/widget/.?postcode=9000&nbDay=2&type=6&lang=nl&bgImageId=1&bgColor=567cd2&scrolChoice=0&colorTempMax=A5D6FF&colorTempMin=ffffff"></iframe>
    </div>
);