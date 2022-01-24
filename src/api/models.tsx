import { ICity } from "../entities/common";

export interface WeatherPayload {
    lat: string | null | undefined,
    lon: string | null | undefined,
}

export interface ForecastPayload{
    city: ICity
}
