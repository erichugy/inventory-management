import { useState } from "react";

export default function ItemsDisplay(props) {
	const showItem = (item) => {
		return (
			<div key={item.id}>
				<p>Id: {item.id}</p>
				<p>Name: {item.name}</p>
				<p>Price: {item.price}</p>
				<p>Type: {item.type}</p>
				<p>Brand: {item.brand}</p>
			</div>
		);
	};

	return <div>{props.items?.map((item) => showItem(item))}</div>;
}
