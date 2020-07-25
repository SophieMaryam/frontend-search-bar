import React from 'react';
import SearchResults from './SearchResults';

export default {
  component: SearchResults,
  title: 'SearchResults',
  excludeStories: /.*Data$/,
};


export const SearchResultsDropdownWithResults = () => <><SearchResults searchResults={[{searchterm: 'trui kenzo dames', nrResults: 1000}, {searchterm: 'trui kenzo heren', nrResults: 1000}]} keyword={"trui"} /></>

