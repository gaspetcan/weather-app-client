import React, { useEffect, useState } from "react";
import { State } from "country-state-city";
import { api } from "../../api";
import { Map, Forecast } from "./components";
import { Town, ICity, IForecast } from "../../entities/common";

// Mock Data & Cities Library
import { WEATHERS_RESPONSE, CITIES, FORECAST_RESPONSE } from "../../mock";

const App = () => {
	const [weathers, setWeathers] = useState<Town[]>([]);
	const [city, setCity] = useState<ICity>();
	const [forecast, setForecast] = useState<IForecast>();
	// Mock data CITIES
	const towns = State.getStatesOfCountry("BG"); // CITIES

	useEffect(() => {
		Promise.all(
			towns.map(
				async (town) =>
					await api.weather({ lat: town.latitude, lon: town.longitude })
			)
		).then((res) => setWeathers(res as Town[]));
		// Mock data
		//setWeathers(WEATHERS_RESPONSE as any)
	}, []);

	useEffect(() => {
		if (city !== undefined)
			api.forecast({ city: city }).then((res) => setForecast(res as IForecast));
		//setForecast(FORECAST_RESPONSE as IForecast)
	}, [city]);

	return (
		<>
			<Map towns={weathers} setCity={setCity} />
			<Forecast city={city} forecast={forecast} />
		</>
	);
};

export default App;
