import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "./firebase";
import "./Login.css";
function Login() {
	// app();
	const history = useNavigate(); // by this we can programmatically change the url..
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const signin = (e) => {
		// yaha "e" is event mtlb jo filled-form hai voh as a event meh aayega.
		e.preventDefault();
		// now doing user's login-correctness match with firbase-database
		auth
			.signInWithEmailAndPassword(email, password)
			.then((rtrn) => {
				if (rtrn) {
					console.log(rtrn);
					console.log("nice you have successfully signed-in");
					history("/");
				}
			})
			.catch((err) => alert(err.message));
	};
	const signup = (e) => {
		e.preventDefault(); // esseh apna form refresh nhi hoga.
		// now doing some firebase-register in database
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth);
				if (auth) {
					history("/");
				}
			})
			.catch((error) => alert(error.message));

		/* 	const auth = getAuth();
		createUserWithEmailAndPassword(getAuth(), email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log("successful");
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("error");
				history("/");
				// ..
			}); */
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
				<button type="submit" onClick={signup} className="login_signupbtn">
					Sign-up
				</button>
			</div>
		</div>
	);
}

export default Login;
