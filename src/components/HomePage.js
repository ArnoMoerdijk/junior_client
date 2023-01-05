import React from "react";
import { WeerWidget } from "./WeerWidget";
import "./HomePage.css";

export const HomePage = () => (
    <>
        <div className="widget-content">
            <WeerWidget />
        </div>
    </>
);