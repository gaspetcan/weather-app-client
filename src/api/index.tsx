import Axios, { AxiosResponse } from 'axios'
import { WeatherPayload, ForecastPayload } from "./models"

const instance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const responseBody = (response: AxiosResponse) => response?.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

const constants = `appid=${process.env.REACT_APP_API_KEY}&units=metric&`

export const api = {
  weather: ({lat, lon}: WeatherPayload) => requests.get(`/weather?${constants}lat=${lat}&lon=${lon}`),
  forecast: ({city}: ForecastPayload) => requests.get(`/forecast?${constants}q=${city}`)
};
