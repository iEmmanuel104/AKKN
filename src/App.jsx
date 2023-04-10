import { useState } from 'react'
import Header from './components/Header'
import Feed from './components/Feed'
import Hero from './components/Hero'
import RecentPosts from './components/RecentPosts'
import Footer from './components/Footer'

function App() {
	return (
		<>
			<Header />
			<div class="jl_home_bw">
				<Hero />
				<Feed />
				<RecentPosts />
			</div>
			<Footer />
		</>
	)
}

export default App
