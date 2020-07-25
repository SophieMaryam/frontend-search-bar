import React from 'react';
import '../index.css';

const InputField = ({ keyword, setKeyword, inputRef }) => {
	const onChange = (input) => {
		setKeyword(input);
	};
	
	const showCloseIcon = () => {
		return keyword.length > 0 ? <i className="fa fa-close icon icon-close" aria-label="Reset search bar" onClick={() => setKeyword("")}></i> : null;
	}
	
	return (
		<React.Fragment>
			<input 
				type="text"
				name="input-search"
				aria-label="Search bar"
				autoComplete="off"
				className="input-searchbar input-fields"
				value={keyword}
				ref={inputRef}
				onChange={(e) => onChange(e.target.value)}
				placeholder="Zoeken"
			/>
			{ showCloseIcon() }
			<i className="fa fa-search icon icon-search" aria-label="search"></i>
		</React.Fragment>
	);
}

export default InputField;
