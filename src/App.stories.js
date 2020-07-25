import React from 'react';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
export default {
  component: App,
  title: 'App',
  excludeStories: /.*Data$/,
};


export const AppInputField = () => <App searchResults={[{searchterm: "kenzo", nrResults: 1000}]} />
