import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
	const Icon = styled.img`
		width: 40%;
	`;

	var icon = "";
	switch (props.condition) {
		case "Clouds":
			icon = `https://image.flaticon.com/icons/svg/2948/2948195.svg`;
			break;
		case "Clear":
			icon = `https://image.flaticon.com/icons/svg/2917/2917242.svg`;
			break;
		case "Haze":
			icon = `https://image.flaticon.com/icons/svg/305/305834.svg`;
			break;
		case "Hail":
			icon = `https://image.flaticon.com/icons/svg/2445/2445201.svg`;
			break;
		case "Fog":
			icon = `https://image.flaticon.com/icons/svg/740/740817.svg`;
			break;
		case "Tornado":
			icon = `https://image.flaticon.com/icons/svg/899/899711.svg`;
			break;
		case "Dust":
			icon = `https://image.flaticon.com/icons/svg/874/874315.svg`;
			break;
		case "Mist":
			icon = `https://image.flaticon.com/icons/svg/2675/2675962.svg`;
			break;
		case "Snow":
			icon = `https://image.flaticon.com/icons/svg/740/740806.svg`;
			break;
		case "Rain":
			icon = `https://image.flaticon.com/icons/svg/2948/2948216.svg`;
			break;
		case "Drizzle":
			icon = `https://image.flaticon.com/icons/svg/2910/2910202.svg`;
			break;
		case "Thunderstorm":
			icon = `https://image.flaticon.com/icons/svg/1146/1146860.svg`;
			break;
		default:
			icon = `./img/Fog-2x.png`;
			break;
	}

	return <Icon src={icon} alt="Weather Icon" />;
};

export default Icon;
