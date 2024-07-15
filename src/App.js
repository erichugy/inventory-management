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
		<div className="App">
			<Title color="red">Title</Title>
			<SearchBar updateSearchParams={updateFilters} />
			<ItemsDisplay items={data["items"]} />
			<AddItem addItem={addItemToData} />
			<p className="blue">Blue?</p>
		</div>
	);
}

export default App;
