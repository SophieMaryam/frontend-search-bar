import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import InputField from "./components/InputField";
import SearchResults from "./components/SearchResults";
import { getDataService } from "./services/apis";

function App() {
  const [keyword, setKeyword] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const inputRef = useRef(null);

  useEffect(() => {
    async function getClothesData() {
      await getDataService(keyword)
        .then(({ data }) => {
					setSearchResults(data.suggestions);
        })
        .catch(err => console.log(err));
		}
		getClothesData()
		inputRef.current.focus()
  }, [keyword]);

  return (
    <div className="App">
      <form className="container">
        <InputField
          keyword={keyword}
          setKeyword={setKeyword}
					inputRef={inputRef}
        />
        <SearchResults keyword={keyword} searchResults={searchResults} />
      </form>
    </div>
  );
}

export default App;
