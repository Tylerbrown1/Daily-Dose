import React from "react";
import NavvBar from "./NavvBar";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";
import Pictures from "./Pictures";
import Water from "./Water";
import Calendar from "./Calendar";

function App() {
	return (
		<div>
			<NavvBar />
			<div className="App">
				<WeatherEngine location="sydney, au" />
				<Pictures />
			</div>
			<Calendar />
			<Water />
		</div>
	);
}

export default App;
