import React from "react";
import { Link } from "react-router-dom";
import Bannercard from "./Bannercard";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__container_image"
					alt="img"
					src={require("./screenshota.png")}
				></img>
			</div>
			<div className="home_row">
				{/* <Link to="/checkout"> */}
				<Product
					id="12334"
					title="Sport Tshirts "
					price="900"
					image="./images/Screenshot (154).png"
					rating={5}
				/>
				{/* </Link> */}
				<Product
					id="12345"
					title="Style - Winter Collection"
					price="900"
					image="./images/Screenshot (155).png"
					rating={4}
				/>
				<Product
					id="1984"
					title="Designer Leather"
					price="900"
					image="./images/Screenshot (156).png"
					rating={5}
				/>
				<Product
					id="129873"
					title="Redchief Leather"
					price="1100"
					image="./images/Screenshot (159).png"
					rating={3}
				/>
				{/* <Bannercard /> */}
				{/* BannerCard */}
				{/* Product */}
			</div>
			<div className="home_row">
				<Product
					id="0978987"
					title="Redchief Leather"
					price="1100"
					image="./images/Screenshot (157).png"
					rating={3}
				/>
				<Product
					id="0984"
					title="Redchief Leather"
					price="1100"
					image="./images/Screenshot (158).png"
					rating={3}
				/>
			</div>
			<div className="home_row">today's deal</div>
		</div>
	);
}

export default Home;
