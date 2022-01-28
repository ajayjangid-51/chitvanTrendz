import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
	const [{ basket }, pushtodatalayer] = useStateValue();
	let tmp = 0;
	for (let i = 0; i < basket.length; i++) {
		if (basket) {
			tmp = tmp + Number(basket[i].pricing);
		}
	}
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Your Subtotal ({basket.length} items):
							{/* <strong>{tmp}</strong> */}
							<strong>{getBasketTotal(basket)}</strong>
						</p>
						<small className="subtotal_gift">
							<input type="checkbox" />
							This order is a Gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"₹"}
			/>
			<button>Checkout</button>
		</div>
	);
}

export default Subtotal;
