import React from "react";
import "./JobForm.css";
function JobForm() {
	return (
		<div className="jobform">
			<form action="/server.js">
				<label htmlFor="nami">Name:</label>
				<br />
				<input type="text" id="nami" name="nami" />
				<br />
				<label htmlFor="dati">Date:</label>
				<br />
				<input type="datetime" name="" id="dati" />
				{/* for seeing specfic-attributes of the html-tag then type tag-name and then colon(:) and then select and press enter.. */}
				<br />
				<label htmlFor="colori">color</label>
				<input type="color" name="" id="colori" />
				<br />
				<input type="checkbox" name="" id="" /> are you human?
				<br />
				<input type="checkbox" name="" id="" /> male?
				<input type="checkbox" name="" id="" /> female?
				<button type="submit">submit</button>
				<br />
				<input type="radio" name="n1" id="" /> dsalgo
				<input type="radio" name="n1" id="" /> projects
				<input type="radio" name="n1" id="" /> cores
				<br />
				Reset all:
				<input type="reset" value="" />
				<br />
				{/*  */}
				write your bio:-
				<br />
				<textarea name="" id="" cols="30" rows="10"></textarea>
				{/*  */}
				<br />
				<label htmlFor="selecti">select core subject</label>
				<select name="" id="selecti">
					<option value="">oops</option>
					<option value="">os</option>
					<option value="">dbms</option>
					<option value="">cn</option>
				</select>
				<input type="time" name="" id="" />
				<input type="file" name="" id="" />
			</form>
		</div>
	);
}

export default JobForm;
