import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [data,setData] = useState({});
  const updateData=(searchParams) => {
    setData(searchParams);
  }


  return (
    <div className="App">
      <SearchBar callback={updateData} />
      <p>Name: {data?.name || "No data to display"}</p>
      <p>Max Price: {data?.price || "No data to display"}</p>
      <p>Type: {data?.type || "No data to display"}</p>
      <p>Brand: {data?.brand || "No data to display"}</p>
    </div>
  );
}


export default App;
