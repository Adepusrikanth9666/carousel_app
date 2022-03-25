import React, { useState } from "react";
import { SliderData } from "./sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../App.css";

const ImageSlider = (slides) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    const moveDots = (index) => {
        setCurrent(index);
    };

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            <div className="container">
                {SliderData.map((slider, index) => {
                    return (
                        <>
                            <div className={index === current ? "slide active" : "slide"} key={index}>
                                {index === current && (
                                    <>
                                        <div className="image">
                                            <img
                                                id="image"
                                                src={slider.image}
                                                alt={"Image data"}
                                                className="loader"
                                                onLoad={(e) => {
                                                    var someElement = document.getElementById("image");
                                                    someElement.classList.remove("loader");
                                                }}
                                            ></img>
                                        </div>
                                        <div className="name">{slider.first_name}</div>
                                        <div className="description">{slider.description}</div>
                                    </>
                                )}
                            </div>

                            <div className="container-dots">
                                {Array.from({ length }).map((item, index) => (
                                    <div
                                        onClick={() => moveDots(index + 1)}
                                        className={current === index + 1 ? "dot active" : "dot"}
                                    ></div>
                                ))}
                            </div>
                        </>
                    );
                })}
            </div>
        </section>
    );
};

export default ImageSlider;
