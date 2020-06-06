import React, { useState } from "react";

function Calendar() {
	const [inputText, setInputText] = useState("");
	const [items, setItems] = useState([]);

	function handleChange(event) {
		const newValue = event.target.value;
		setInputText(newValue);
	}

	function addItem() {
		setItems((prevItems) => {
			return [...prevItems, inputText];
		});
		setInputText("");
	}

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input
					className="input1"
					onChange={handleChange}
					type="text"
					value={inputText}
				/>
				<button className="Calbutton" onClick={addItem}>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					{items.map((todoItem) => (
						<li>{todoItem}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Calendar;
