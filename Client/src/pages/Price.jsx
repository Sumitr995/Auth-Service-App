import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Price = ({ Sign, setSign }) => {
	return (
		<div className="min-h-screen pt-16 bg-(--canvas-soft) selection:bg-(--link-blue) selection:text-white">
			<Navbar Sign={Sign} setSign={setSign} />
			<main />
		</div>
	)
}

export default Price
