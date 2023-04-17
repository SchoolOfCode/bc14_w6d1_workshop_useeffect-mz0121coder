import { useEffect } from 'react';
import { useState } from 'react';

function PokemonViewer({ id }) {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [abilities, setAbilities] = useState([]);
	// const

	//TODO: Task 1 - send http request to `https://pokeapi.co/api/v2/pokemon/1' and display the data
	useEffect(() => {
		async function fetchPokemon() {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			const data = await response.json();
			console.log(data);
			setName(data.name);
			setImage(data.sprites.front_default);
			setAbilities(data.abilities.map(ability => ability.ability.name));
		}
		fetchPokemon();
	});
	// TODO: Task 2 - send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
	// HINT: you will need useState and useEffect!
	return (
		<div className='pokemon-viewer'>
			<h2>{name.length > 0 && `Name: ${name}`}</h2>
			{id > 0 && <img src={image} alt='' />}
			{abilities.length > 0 && (
				<ul style={{ listStyle: 'none' }}>
					Abilities:
					{abilities.map((ability, index) => (
						<li key={index}>{ability}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default PokemonViewer;
