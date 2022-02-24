import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout_left">
				<img
					className="checkout_left_ad"
					src={require("./images/Screenshot (160).png")}
				></img>
				<div>
					{/* <h3>{user}</h3> */}
					<h2 className="checkout_left_title">Your Shopping List</h2>
					{basket.map((i) => (
						<CheckoutProduct
							id={i.id}
							image={i.img}
							price={i.pricing}
							rating={i.ratings}
							title={i.title}
						/>
					))}
				</div>
			</div>
			<div className="checkout_right">
				shopping check
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
