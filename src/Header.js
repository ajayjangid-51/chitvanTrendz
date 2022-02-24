import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
	const [{ basket, user }, pushtodatalayerfn] = useStateValue();
	const handlesignin = () => {
		if (user) {
			console.log("User is signed-outttt");
			auth.signOut();
			// pushtodatalayerfn({
			// 	type: "SET_USER",
			// 	user: null,
			// });  // this is already done in useState-listener-fn
		}
	};
	return (
		<div className="header">
			{/* <img src="chitvantrendz\images\chitvan_logo-modified.png"></img> */}
			<Link to="/">
				<img
					className="header_logo"
					alt="hello ji"
					src={require("./images/chitvanlogomodified.png")}
				></img>
			</Link>
			<div className="header_search">
				<input className="header_searchinput" type="text"></input>
				<SearchIcon className="header_searchicon" />
			</div>
			<div className="header_nav">
				<div className="header_nav_option">
					<span className="header_nav_option_lineone">
						{user ? user.email : "hello guest"}
					</span>
					<Link to={!user && "/login"}>
						<span className="header_nav_option_linetwo">
							{user ? "sign out" : "sign in"}
						</span>
					</Link>
					<button onClick={handlesignin}></button>
				</div>
				<div className="header_nav_option">
					<span className="header_nav_option_lineone">Returns</span>
					<span className="header_nav_option_linetwo">Your Orders</span>
				</div>
				<div className="header_nav_option">
					<span className="header_nav_option_lineone">Your</span>
					<span className="header_nav_option_linetwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header_nav_optionBasket">
						<ShoppingBasketIcon />
						<span className="header_nav_option_linetwo header_nav_basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
