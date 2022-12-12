// import React, { Component, Fragment } from 'react'
import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'

import Header from './components/shared/Header'
import Home from './components/Home'

const App = () => {


		return (
			<Fragment>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />

				</Routes>

			</Fragment>
		)
}

export default App
