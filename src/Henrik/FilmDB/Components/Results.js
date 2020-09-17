import React from 'react';

import Result from './Result';

function Results({ results, openPopup }) {
	let r = results ? 
	results.map((result) => <Result key={result.imdbID} result={result} openPopup={openPopup} />)
	: "Please type a movie name"


	return (
		<section className='results'>
			{r}
		</section>
	);
}

export default Results;
