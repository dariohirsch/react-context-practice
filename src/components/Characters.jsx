import { useContext } from 'react'
import { CharactersContext } from '../context/characterContext'
import { Pagination } from './Pagination'

export const Characters = () => {
	const { characters } = useContext(CharactersContext)
	console.log('characters en componente', characters)
	return (
		<div className='row'>
			<Pagination />
			{characters.map((character, idx) => (
				<div className='col-3' key={character.name + idx}>
					<div className='card mt-4'>
						<img src={character.image} class='card-img-top' alt={character.image} />
						<div class='card-body'>
							<h5 class='card-title'>{character.name}</h5>
							<p class='card-text'>
								<b>Status: {character.status}</b> <br />
								<b>Species: {character.species}</b>
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
