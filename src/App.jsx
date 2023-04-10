import { useState } from 'react'
import Header from './components/Header'
import Feed from './components/Feed'
import Hero from './components/Hero'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<Hero/>
			<Feed />
		</>
	)
}

export default App
