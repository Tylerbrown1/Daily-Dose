import React from "react";
import styled from "@emotion/styled";

// style for img
const ImgStyle = styled.img`
	text-align: center;
	width: 15%;
	z-index: 0;
	position: relative;
	top: -80px;
	right: 300px;
`;

const Pictures = () => {
	return (
		<section>
			<div>
				<ImgStyle
					src="https://image.flaticon.com/icons/svg/3014/3014925.svg"
					alt="Snowing"
				/>
			</div>
		</section>
	);
};

export default Pictures;
