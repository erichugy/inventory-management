import { useState } from "react";

// {
//     name:
//     price:
//     type:
//     brand:
// };

export default function SearchBar(props) {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [type, setType] = useState("");
	const [brand, setBrand] = useState("");

    const searchButtonPressed = () => {
       console.log(name); 
       console.log(price);
       console.log(type);
       console.log(brand); 
       props.callback({name, price, type, brand});
    }

	return (
		<div>
			<h2>Search for an Item</h2>
			<form>
				<label htmlFor="name-field">Name:</label>
				<input
					type="text"
					id="name-field"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="price-field">Max Price</label>
				<input type="number" id="price-field" value={price} onChange={(e) => setPrice(e.target.value)}/>
				<label htmlFor="type-field">Type:</label>
				<input type="text" id="type-field" value={type} onChange={(e) => setType(e.target.value)}/>
				<label htmlFor="brand-field">Brand:</label>
				<input type="text" id="brand-field" value={brand} onChange={(e) => setBrand(e.target.value)}/>
				<button type="button" onClick={searchButtonPressed}>Search</button>
			</form>
		</div>
	);
}
