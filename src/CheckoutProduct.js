import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, price, title, rating }) {
	const [{ basket }, actionondatalayer] = useStateValue();
	const removeFromBasket = () => {
		// by this function we will remove the particular-item from the basket:-
		actionondatalayer({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	return (
		<div className="checkoutproduct">
			<img
				src={require("" + image)}
				alt="imgnotfound"
				className="checkoutproduct_img"
			/>
			<div className="checkoutproduct_info">
				<p className="checkoutproduct_title">{title}</p>
				<p className="checkoutproduct_price">
					<small>₹</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutproduct_rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove from Basket</button>
				{/* <strong>{price}</strong> */}
				{/* <small>{rating}</small> */}
			</div>
		</div>
	);
}

export default CheckoutProduct;
