import { IForecast, ICity } from "../../../../entities/common";

export interface SliderProps {
    city: ICity | undefined ,
    forecast: IForecast | undefined
}