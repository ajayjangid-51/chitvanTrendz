import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import ProductView from "./ProductView";
import Header2 from "./Header2";
import JobForm from "./JobForm";
import Shopping from "./Shopping";
import Footer from "./Footer";
import Addproduct from "./Addproduct";

function App() {
	const [{ user }, gunfordatalayer] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authuser) => {
			console.log("<<<<<<<<<< Auth state is changed >>>>>>>>>");
			console.log("current singned-user is >>>>", authuser);
			if (authuser) {
				gunfordatalayer({
					type: "SET_USER",
					user: authuser,
				});
			} else {
				gunfordatalayer({
					// type: "REMOVE_USER",
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []); // in [p1 , p2]  p1 , p2 jo bhi apnne daala hai agr voh change hota hai then yeh useeeffect-fn vapis call hoga , otherwise nhi toh yeh useEffect-fn only ek hi first time hi call hota hai jab yeh <App/> call hota hai and yeh function hamesa listen krta hai.. always , listen mtlb app ko listen krta hai.
	return (
		// follwoing BEM-convention for class-naming for containers.
		<Router>
			<div className="app">
				<Routes>
					<Route
						path="/login"
						element={
							<div>
								<Login />
							</div>
						}
					></Route>
					<Route
						path="/productview"
						element={
							<div>
								<ProductView />
							</div>
						}
					></Route>
					<Route
						path="/checkout"
						element={
							<div>
								<Header />
								<Checkout />
							</div>
						}
					></Route>
					<Route
						path="/productdetail"
						element={
							<div>
								<h1>
									hey i am productdetail page which will be create by batal
								</h1>
							</div>
						}
					></Route>
					<Route
						path="/shopping"
						element={
							<div>
								<Shopping />
							</div>
						}
					></Route>
					<Route
						path="/job"
						element={
							<div>
								<h1>hey i am JOB</h1>
								<JobForm />
							</div>
						}
					></Route>
					<Route
						path="/addproduct7725"
						element={
							<div>
								<h1>Add new Product...</h1>
								<Addproduct />
							</div>
						}
					></Route>
					<Route
						path="/"
						element={
							<div>
								<Header />
								<Header2 />

								<Home />
								<Footer />
							</div>
						}
					></Route>
				</Routes>
				{/* <div className="header_quicklinks">i am quick links</div> */}
			</div>
		</Router>
	);
}

export default App;
