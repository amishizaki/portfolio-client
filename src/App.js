// import React, { Component, Fragment } from 'react'
import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'

import Header from './components/shared/Header'
import Home from './components/Home'
import SideNav from './components/shared/SideNav'

const App = () => {


		return (
			<Fragment>
				<Header />
				{/* <SideNav /> */}
				<Routes>
					<Route path='/' element={<Home />} />

				</Routes>

			</Fragment>
		)
}

export default App
