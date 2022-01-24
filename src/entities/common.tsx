import { SetStateAction } from "react";

export interface Town {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	clouds: Clouds;
	dt: number;
	sys: Sys;
	timezone: number;
	id: number;
	name: SetStateAction<undefined>;
	cod: number;
}

export interface Coord {
	lon: number;
	lat: number;
}

export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Main {
	temp: number;
	humidity: number;
	temp_min: number;
	temp_max: number;
	feels_like: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
}

export interface Wind {
	speed: number;
	deg: number;
	gust: number;
}

export interface Clouds {
	all: number;
}

export interface Sys {
	country: string;
	sunrise: number;
	sunset: number;
}

export interface ICity {
	name: string
}

export interface IForecast {
	cod: string;
	message: number;
	cnt: number;
	list: List[];
	city: City;
}


export interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf: number;
}

export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Clouds {
	all: number;
}

export interface Wind {
	speed: number;
	deg: number;
	gust: number;
}

export interface Sys {
	pod: string;
}

export interface List {
	dt: number;
	main: Main;
	weather: Weather[];
	clouds: Clouds;
	wind: Wind;
	visibility: number;
	pop: number;
	snow: any;
	sys: Sys;
	dt_txt: string;
	rain: any;
}

export interface City {
	id: number;
	name: string;
	coord: Coord;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}