import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import Trending from './Trending'

function Homepage() {
  return (
    <div className='sachin'>
      <Sidebar/>
      <Maincontainer/>
      <Trending/>
    </div>
  )
}

export default Homepage
