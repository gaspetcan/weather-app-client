import React from "react";
import { Placemark } from "react-yandex-maps";
import { MarkProps } from "./models";

const Mark = (props: MarkProps) => {
	const { town, setCity } = props;

	const iconCaption = `${town.name} ${Math.floor(town.main?.temp)}℃`;

	const iconContent = `<img 
        src="http://openweathermap.org/img/wn/${town.weather[0].icon}.png" 
        style="height: 36px; background: #1e98ff; border-radius: 50%; margin: -8px 0px 0px -12px;"/>`;

	const balloonContentHeader = `<img 
    src="http://openweathermap.org/img/wn/${town.weather[0].icon}.png" 
    style="height: 18px;background: #1e98ff;border-radius: 50%;"/> ${iconCaption}`;

	const balloonContentBody = `
            <div>
                <b>Feels Like</b> 
                ${Math.floor(town.main?.feels_like)} ℃
            </div>
            <div>
                <b>Min Temperature </b> 
                ${Math.floor(town.main?.temp_min)} ℃
            </div>
            <div>
                <b>Max Temperature </b> 
                ${Math.floor(town.main?.temp_max)} ℃
            </div>
            <div>
                <b>Humidty</b> 
                %${town.main.humidity}
            </div>
            <div>
                <b>Temperature</b> 
                ${Math.floor(town.main?.temp)} ℃
            </div>
            `;

	const balloonContentFooter = `<div><b>Today</b> ${town.weather[0].description}.</div>`;

	return (
		<Placemark
			onClick={() => setCity(town.name)}
			geometry={[town.coord.lat, town.coord.lon]}
			modules={["geoObject.addon.balloon"]}
			properties={{
				balloonContentHeader,
				balloonContentBody,
				balloonContentFooter,
				iconContent,
				iconCaption,
			}}
		/>
	);
};
export default Mark;
