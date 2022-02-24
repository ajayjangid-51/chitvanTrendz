import React, { useState } from "react";
import backendcontacter from "./axios";

function Addproduct() {
	// const uploadproduct = (e) => {
	// 	e.preventdefault();
	// };

	const sendmessage = async (e) => {
		// async ka mtlb this function is asynchronous function.
		e.preventDefault();
		console.log("you clicked that submitbutton of form");
		await backendcontacter.post("/bkaddproduct7725", {
			// await ka mtlb hai ki yeh function jb tk return na hove tab tk apnko wait krna hai mtlb aage wali code-lines nhi chalani hai.
			message: "this will message",
			name: "ajaykumar ",
			timestamp: "just now!",
			received: true,
		});
	};
	return (
		<div className="addproduct">
			<h1>I am Addproduct...</h1>
			{/* <form action="/bkaddproduct7725" method="POST"> */}
			{/* <form>
				{/* <input type="file" name="myImage" id="" /> */}
			{/* <input type="text" name="texti" id="" /> */}
			{/* <button onClick={uploadproduct} type="submit"></button>
				<button type="submit">upload image</button>
			</form> */}
			<form action="">
				<input type="file" name="myImage" id="" />
				<button onClick={sendmessage} type="submit">
					{/* <SendOutlinedIcon />
					 */}
					submit
				</button>
			</form>
		</div>
	);
}

export default Addproduct;
