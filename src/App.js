import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import AddItem from "./components/AddItem";
import ItemsDisplay from "./components/ItemsDisplay";

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
			<SearchBar updateSearchParams={updateFilters} />
			<ItemsDisplay items={data["items"]} />
			<AddItem addItem={addItemToData} />
		</div>
	);
}

export default App;
