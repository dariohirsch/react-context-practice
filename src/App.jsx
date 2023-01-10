import { Characters } from './components/Characters'
import { CharacterContextProvider } from './context/characterContext'

const App = () => {
	return (
		<div className='container'>
			<h2 className='alert alert-success text-center'>Rick and Morty</h2>
			<CharacterContextProvider>
				<Characters />
			</CharacterContextProvider>
		</div>
	)
}

export default App
