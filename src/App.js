import React from "react";
import "./App.css";
import ImageSlider from "./components/imageSlider";
import { SliderData } from "./components/sliderData";

function App() {
    return (
        <>
            <ImageSlider slides={SliderData} />
        </>
    );
}

export default App;
