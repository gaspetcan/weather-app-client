import { ICity, Main, Weather } from "../../../../../entities/common";

export interface IForecastBox {
	main: Main
	weather: Weather
	date: number
	city: ICity | undefined
}
