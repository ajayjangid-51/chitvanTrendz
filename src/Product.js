import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, rating, price }) {
	// const [state, pushtodatalayer] = useStateValue();
	// const [{ datalayerStore }, pushtodatalayer] = useStateValue();
	const [{ basket }, pushtodatalayer] = useStateValue();
	console.log("this is the current datalayerStore >>>", basket);
	console.log("datalayer.size() == ", basket.length);
	const addToBasket = () => {
		// this function dispatch some-action into datalayer.
		console.log("hellowww");
		// thus toh basically mtlb ki ess pushtodatalayer-fn se apna reducer-function call ho rha hai.
		pushtodatalayer({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				img: image,
				pricing: price,
				ratings: rating,
			},
		});
	};
	return (
		// <Link className="product" to="/productdetail">
		<div>
			<div className="product_image">
				{/* <img alt="img" src={require("./images/Screenshot (154).png")}></img> */}
				<img alt="img" src={require("" + image)}></img>
			</div>
			<div className="product_info">
				<p>
					<strong>{title}</strong>
					<p>🔺Style - Nike Shoes</p>
				</p>
				<div className="product_info_rating">
					{Array(rating)
						.fill()
						.map((_, i) => {
							<p>⭐</p>;
						})}
				</div>
				<p className="product_info_price">
					<small>₹</small>
					<strong>{price} ₹1,499 Save ₹1,150 (77%) </strong>
				</p>
			</div>
			<button onClick={addToBasket}> Add to Basket</button>
		</div>
		// </Link>
	);
}

export default Product;
