import "./App.css";
import React, { useState } from "react";
import DisplayTable from "./DisplayTable";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    setData((prevData) => prevData.filter((item) => item.name === search));
    event.preventDefault();
  };
  return (
    <div className='App'>
      <h1>Resonate Contact List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='search' onChange={handleChange} />
        </label>
        <input type='submit' value='Search' />
      </form>
      <br />
      <DisplayTable data={data} />
    </div>
  );
}

export default App;
