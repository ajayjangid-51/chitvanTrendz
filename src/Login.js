import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
function Login() {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const signin = (e) => {
		// yaha "e" is event mtlb jo filled-form hai voh as a event meh aayega.
		e.preventDefault();
		// now doing user's login-correctness match with firbase-database
	};
	const signup = (e) => {
		e.preventDefault(); // esseh apna form refresh nhi hoga.
		// now doing some firebase-register in database
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((rtrn) => {
				console.log(rtrn);
			})
			.catch((err) => alert(err.message));
		console.log("heii you clicked signup button");
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					src={require("./images/chitvanlogomodified2.png")}
					alt=""
					className="login_img"
				/>
			</Link>
			<div className="login_container">
				<h1>Sign-in</h1>
				<form action="">
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setemail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setpassword(e.target.value)}
					/>
					<button className="login_signinbtn" type="submit" onClick={signin}>
						Sign-In
					</button>
				</form>
				<p>
					By signing in You are agreeing terms and Conditions of ChitvanTredz
				</p>
				<button onClick={signup} className="login_signupbtn">
					Sign-up
				</button>
			</div>
		</div>
	);
}

export default Login;
