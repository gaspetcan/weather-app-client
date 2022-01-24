import React from "react";
import { IForecastBox } from "./models";
import { stringDateFormatter } from "./utils";
import "./styled.scss";

const ForecastBox = ({ main, weather, date, city }: IForecastBox) =>
	<div className="forecast-box-container">
		<div className="temp-container">{Math.floor(main.temp)} ℃ </div>
		<img alt="icon-not-found" className="icon-container" src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`} />
		<div className="date-container">{city} {stringDateFormatter(date)}</div>
		<div className="description-container">
			<span className="temperature">
				<b>Max Temperature </b>
				{Math.floor(main.temp_max)} ℃
			</span>
			<span className="temperature">
				<b>Min Temperature </b>
				{Math.floor(main.temp_min)} ℃
			</span>
			<span className="humidity">
				<b>Humidity </b>
				{main.humidity} %
			</span>
		</div>
	</div>

export default ForecastBox;
