import React from "react";
import ForecastBox from "./forecastBox";
import { SliderProps } from "./models";
import "./styled.scss";
import { Slider } from "../../../../components";

const Forecast = ({ city, forecast }: SliderProps) =>
    <div className="forecast-container" hidden={city === undefined}>
        <div className="title-container">Forecast 5 Days (3 hourly)</div>
        <div className="forecast-table-container">
            <Slider slides={forecast?.list.map(fc => <ForecastBox
                main={fc.main}
                city={city}
                weather={fc.weather[0]}
                date={fc.dt} />) || []} length={forecast?.list.length || 0} />

        </div>
    </div>

export default Forecast 