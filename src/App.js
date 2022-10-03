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
  return (
    <div className='App'>
      <h1>Resonate Contact List</h1>
      <form>
        <label>
          Search:
          <input
            type='text'
            name='search'
            placeholder='Name'
            onChange={(e) => {
              setSearch(e.target.value);
              setData((prevData) =>
                prevData.filter((item) =>
                  search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search)
                )
              );
            }}
          />
        </label>
      </form>
      <br />
      {loading ? "Loading..." : <DisplayTable data={data} />}
      {error ? error : null}
    </div>
  );
}

export default App;
