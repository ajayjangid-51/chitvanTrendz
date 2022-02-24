import React from "react";
import "./ProductView.css";
import PublishIcon from "@material-ui/icons/Publish";
import { IconButton } from "@material-ui/core";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";
import HomeIcon from "@material-ui/icons/Home";

function ProductView() {
	return (
		<div className="productview">
			<IconButton>
				<a href="/">
					<HomeIcon />
				</a>
			</IconButton>
			<strong>
				<em>
					<h1 id="section_top">ProductView page I am </h1>
				</em>
			</strong>
			<IconButton>
				<a href="#section_footer">
					<PlayForWorkIcon />
				</a>
			</IconButton>

			<div className="productview_imageview">
				<div className="productview_sideimages"></div>
				<img
					src={require("./images/Screenshot (159).png")}
					useMap="#workmap"
					alt="img error"
					width="400"
					height="379"
				/>
				{/* <img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379"> */}
				<map name="workmap">
					<area
						className="arena"
						shape="rect"
						coords="34,44,270,350"
						// coords="0,10,0,0"
						href="bottle.com"
						alt="bottle"
					/>
					<area
						className="arena"
						shape="react"
						coords="0,172,333,250"
						href="Phone"
						alt="phone.com"
					/>
				</map>

				{/* <map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map> */}
			</div>
			<a
				href="https://www.amazon.in/stores/boAt/page/C45AC738-6190-4344-A3E4-CDF7B426BC8C?ref_=ast_bln"
				target="_blank"
			>
				Visit the boAt Store
			</a>
			<a
				href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
				download="w3logo"
				target="_blank"
			>
				download
			</a>
			<hr />
			<a href="tel:+917877945707">contact Us</a>
			<a href="javascript:alert('Added to Basket!');">Add to basket</a>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1 id="section_mid">I am the section_mid </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1>hello hello </h1>
			<h1 id="section_footer">hello hello </h1>
			<a href="#section_top">
				<PublishIcon />
			</a>
			<a href="#section_mid">
				mid
				<PublishIcon />
			</a>
			<a href="mailto:linapatel518@gmail.com">Send email to us</a>
		</div>
	);
}

export default ProductView;
