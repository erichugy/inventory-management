import { useState } from "react";

export default function AddItem(props) {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [type, setType] = useState("");
	const [brand, setBrand] = useState("");

	const addItemButtonPressed = () => {
		props.addItem({ name, price, type, brand });
		setName("");
		setPrice(0);
		setType("");
		setBrand("");
	};

	return (
		<div className="container">
			<div className="row">
				<h2>Add an Item</h2>
			</div>
			<div className="row">
				<label htmlFor="name-field">Name:</label>
				<input
					type="text"
					id="name-field"
					className="form-control"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="price-field">Price</label>
				<input
					type="number"
					id="price-field"
					className="form-control"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<label htmlFor="type-field">Type:</label>
				<input
					type="text"
					id="type-field"
					className="form-control"
					value={type}
					onChange={(e) => setType(e.target.value)}
				/>
				<label htmlFor="brand-field">Brand:</label>
				<input
					type="text"
					id="brand-field"
					className="form-control"
					value={brand}
					onChange={(e) => setBrand(e.target.value)}
				/>
			</div>
			<div className="row mt-3">
				<button type="button" className="btn btn-secondary" onClick={addItemButtonPressed}>
					Add Item
				</button>
			</div>
		</div>
	);
}
