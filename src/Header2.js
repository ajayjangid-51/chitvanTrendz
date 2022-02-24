import React from "react";
import "./Header2.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
function Header2() {
	const closenav = () => {
		// console.log("hello ji");
		// alert("okay closing nav");
		// document.getElementById("header2_sidenav").style.width = "0px";
		document.getElementById("header2_sidenav").style.display = "none";
		document.getElementById("header2_list_id").style.marginLeft = "0px";
	};
	const openNav = () => {
		// alert("ookay opening nav");
		// document.getElementById("header2_sidenav").style.width = "250px";
		document.getElementById("header2_sidenav").style.display = "block";
		// document.getElementById("header2_list_id").style.display = "none";
		document.getElementById("header2_list_id").style.marginLeft = "300px";
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	};
	return (
		<div className="header2">
			<div id="header2_sidenav" className="header2_sidenavc">
				<a href="" onClick={closenav}>
					<CloseRoundedIcon />
				</a>
				<h2>Trending</h2>
				<a href="#">Best Sellers</a>
				<a href="#">New Realeases</a>
				<a href="#">Movers and Shakers</a>
				<h2>Digitals</h2>
			</div>
			<div className="header2_list" id="header2_list_id">
				<ul>
					<li onClick={openNav}>
						<MenuRoundedIcon />
						All
					</li>
					<a href="/fresh">
						<li>Fresh</li>
					</a>
					<li>
						Buy Again
						{/* <ul>
						<li>last month</li>
						<li>last year</li>
					</ul> */}
					</li>
					<li>Coupons</li>
					<li>Gift Cards</li>
					<li>Gift Idea</li>
					<li>iPay</li>
				</ul>
				{/* <ol>
					<li>Pet supplies</li>
					<li>Download the App</li>
				</ol> */}
				{/* <table>
					<thead>
						<tr>
							<th>serial no.</th>
							<th>maths</th>
							<th>physics</th>
							<th>chemistry</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>90</td>
							<td>90</td>
							<td>76</td>
						</tr>
						<tr>
							<td>2</td>
							<td>98</td>
							<td>87</td>
							<td>92</td>
						</tr>
					</tbody>
				</table> */}
			</div>
		</div>
	);
}

export default Header2;
