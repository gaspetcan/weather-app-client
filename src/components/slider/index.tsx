import React, { useState } from 'react';
import { ISlider } from "./models";
import { ReactComponent as LeftArrowIcon } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/right-arrow.svg";
import "./styled.scss";

const Slider = ({ slides, length }: ISlider) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <LeftArrowIcon className='arrow-icons left-arrow' onClick={prevSlide} />
            <RightArrowIcon className='arrow-icons right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
            >{index === current && slide}
            </div>)}
        </section>
    );
};

export default Slider;