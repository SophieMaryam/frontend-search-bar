import React from "react";
import "../index.css";

const SearchResults = ({ keyword, searchResults }) => {
  const showSearchResults = () => {
    // eslint-disable-next-line
    return searchResults.map((item, index) => {
      if (item.searchterm.includes(keyword.toLowerCase()) && keyword.length > 1) {
        return (
          <div className="text-bold" key={index}>
            <ul>
              <li className="input-fields search-results">
               {applyBoldStyle(item.searchterm)} ({item.nrResults})
              </li>
            </ul>
          </div>
        );
      }
    });
  };

  const applyBoldStyle = (input) => {
    var re = new RegExp(keyword, 'g')
    return (
        <div dangerouslySetInnerHTML={{
            __html: input.replace(re, '<span>' + keyword + '</span>')
        }} />
    )
  }
  
  return <div>{ keyword ? showSearchResults() : null }</div>;
};

export default SearchResults;