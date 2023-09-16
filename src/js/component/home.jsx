import React from "react";
import Light from "./light.jsx";
//include images into your bundle
//create your first component
const Home = () => {
	return (
		<><div className='topStick'></div><div className='body'>
			<div className='trafficLight'>
				<Light classList={["red", "light"]} />
				<Light classList={["yellow", "light"]} />
				<Light classList={["green", "light"]} />
			</div>
		</div></>
	);
};

export default Home;
