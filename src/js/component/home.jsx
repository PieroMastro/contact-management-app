import React from "react";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Contacts</h1>
			<a href="#" className="btn btn-success mb-5">
				If you see this green button... bootstrap is working...
			</a>
		<Footer/>
		</div >
	);
};

export default Home;
