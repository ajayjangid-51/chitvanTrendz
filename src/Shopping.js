import React from "react";
import "./Shopping.css";
import Product from "./Product";

function Shopping() {
	return (
		<div className="shopping">
			<div className="shopping_left"></div>
			<div className="shooping_right">
				<div className="shopping_right_product">
					<div class="box" id="box1">
						This is item-2
					</div>

					<div className="box">
						<Product
							id="12334"
							title="Sport Tshirts "
							price="900"
							image="./images/Screenshot (154).png"
							rating={5}
						/>
					</div>
					<div className="box">This is item-3</div>
					<div className="box">hello ji</div>
					<div className="box">This is item-4</div>
					<div className="box">This is item-5</div>
					<div className="box">This is item-6</div>
					<div className="box">This is item-7</div>
					<div className="box">This is item-8</div>
					<div className="box">This is item-9</div>
					<div className="box">This is item-10</div>
				</div>
			</div>
		</div>
	);
}

export default Shopping;
