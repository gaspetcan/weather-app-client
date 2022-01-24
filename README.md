# Weather App 

## Requirements
- Node Version must be v14.17 or higher

- This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

- Openweather API

- Typescript & Sass

## Getting Started

### 1. `npm install`

Installing all needed packages when runnning react scripts on development mode.

- `react-yandex-maps`
-  `country-state-city`

This package `country-state-city` used for getting all cities on given country. If you don't want to use, also you can use data stored as a static variable name `CITIES` in `/mock.tsx.`

### 2. `npm start`

Starting to run app with development mode.

## Any Question & Problem ? 

### 1. `OpenWeather API response status 429`

- OpenWeather API Free package is limited `60 calls/minute`

- Please, [register OpenWeather API](https://openweathermap.org/price#weather) get a API Key. Please change .env environment file REACT_APP_API_KEY variable. 

- Also, For Test connection .env environment file REACT_APP_API_KEY variable. 

## More Details

### Weather API Response Models
https://openweathermap.org/current#current_JSON
