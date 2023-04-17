import { useEffect } from 'react';
import { useState } from 'react';

function StarWarsSearch({ id }) {
	useEffect(() => {
		async function fetchStarWars() {
			const response = await fetch(`https://swapi.dev/api/people?search=yoda`);
			const data = await response.json();
			console.log(data);
		}
		fetchStarWars();
	});
	return <div>YO!</div>;
}

export default StarWarsSearch;
