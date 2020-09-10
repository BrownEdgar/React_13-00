import React, { useState } from 'react';
import axios from 'axios';

import Search from './Components/Search';
import Results from './Components/Results';
import Popup from './Components/Popup';

import './App.css';

function App() {
	const [ state, setState ] = useState({
		s: '',
		results: [],
		selected: {}
	});
	const apiurl = 'http://www.omdbapi.com/?apikey=d8916f9f';

	const search = (e) => {
		if (e.key === 'Enter') {
			axios(apiurl + '&s=' + state.s).then(({ data }) => {
				let results = data.Search;

				setState((prevState) => {
					return { ...prevState, results: results };
				});
			})
			.catch((err)=> console.log(err));
		}
	};

	const handleInput = (e) => {
		let s = e.target.value;

		setState((prevState) => {
			return { ...prevState, s: s };
		});
	};

	const openPopup = (id) => {
		axios(`${apiurl}&i=${id}`).then(( {data} ) => {
			let result = data;

			console.log("result;",result);

			setState((prevState) => {
				return { ...prevState, selected: result };
			});
		});
	};

	const closePopup = () => {
		setState((prevState) => {
			return { ...prevState, selected: {} };
		});
	};

	return (
		<div>
			<header>
				<h1>Movie Database</h1>
			</header>
			<main>
				<Search handleInput={handleInput} search={search} />

				<Results results={state.results} openPopup={openPopup} />

				{Object.keys(state.selected).length >= 1 ? <Popup selected={state.selected} closePopup={closePopup} /> : null}
			</main>
		</div>
	);
}

export default App;
