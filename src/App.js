import React, { useEffect, useState } from "react";
import data from "./data.json";
import SearchResultsView from "./Components/SearchResultsView";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(data.results.docs);
  }, []);

  const sortResults = (e) => {
    const [property, direction] = e.target.value.split(',');
    const resultsCopy = [...results];

    const sorted = resultsCopy.sort((a, b) => {
      if (direction === 'asc') {
        return a[property] - b[property];
      }

      return b[property] - a[property];
    });

    setResults(sorted);
  };

  return (
      <SearchResultsView results={results} sortResults={sortResults} />
  );
}

export default App;
