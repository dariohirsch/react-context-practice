import { createContext, useEffect, useState } from 'react'

export const CharactersContext = createContext()

export const CharacterContextProvider = ({ children }) => {
	const [characters, setCharacters] = useState([])
	const [totalResults, settotalResults] = useState(0)
	const [totalPages, setTotalPages] = useState(0)
	const [actualPage, setActualPage] = useState(1)
	const [prevPage, setPrevPage] = useState(null)
	const [nextPage, setNextPage] = useState(null)

	useEffect(() => {
		getCharacters()
	}, [])

	const getCharacters = async () => {
		try {
			const response = await fetch('https://rickandmortyapi.com/api/character')
			const data = await response.json()
			setCharacters(data.results)
			settotalResults(data.info.count)
			setTotalPages(data.info.pages)
			setPrevPage(data.info.prev)
			setNextPage(data.info.next)
		} catch (error) {
			console.log('error geting character', error)
		}
	}

	const goToPage = async (page, e) => {
		try {
			const type = e.target.dataset.type
			switch (type) {
				case 'prev':
					setActualPage(actualPage - 1)
					break
				case 'next':
					setActualPage(actualPage + 1)
					break
				case 'goTo':
					const number = Number(e.target.value)
					page = `https://rickandmortyapi.com/api/character?page=${number}`
					setActualPage(number)
					break
				default:
					break
			}
			const response = await fetch(page)
			const data = await response.json()
			setCharacters(data.results)
			setPrevPage(data.info.prev)
			setNextPage(data.info.next)
		} catch (error) {
			console.log('error geting character', error)
		}
	}

	return (
		<CharactersContext.Provider value={{ characters, totalResults, totalPages, actualPage, prevPage, nextPage, goToPage }}>
			{children}
		</CharactersContext.Provider>
	)
}
