import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
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
						path="/"
						element={
							<div>
								<Header />
								<Home />
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
