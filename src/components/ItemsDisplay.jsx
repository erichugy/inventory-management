import { useState } from "react";
import styles from "../styles/itemsDisplay.module.css";

export default function ItemsDisplay(props) {
	const showItem = (item) => {
		return (
			<div key={item.id}>
				<p style={{
					color: "red",
					fontSize: "20px"
				}}>Id: {item.id}</p>
				<p>Name: {item.name}</p>
				<p>Price: {item.price}</p>
				<p>Type: {item.type}</p>
				<p>Brand: {item.brand}</p>
				<p className={styles.blue}>Blue Text</p>
				<p className={styles.red}>Red Text</p>
			</div>
		);
	};

	return <div>{props.items?.map((item) => showItem(item))}</div>;
}
