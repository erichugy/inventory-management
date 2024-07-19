import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import AddItem from "./components/AddItem";
import ItemsDisplay from "./components/ItemsDisplay";
import styled from "styled-components";

const Title = styled.h1`
	color: ${(props) => props.color || "black"};
	font-weight: bold;
`;

function App() {
	const [filters, setFilter] = useState({});
	const [data, setData] = useState({ items: [] });

	const updateFilters = (searchParams) => {
		setFilter(searchParams);
	};

	const addItemToData = (item) => {
		let items = data["items"];
		item.id = items.length;
		items.push(item);
		setData({ items });

		console.log(data);
	};

	return (
		<div className="container">
			<div className="row mt-3">
				<ItemsDisplay items={data["items"]} />
			</div>
			<div className="row mt-3">
				<SearchBar updateSearchParams={updateFilters} />
			</div>
			<div className="row mt-3">
				<AddItem addItem={addItemToData} />
			</div>
		</div>
	);
}

export default App;
