import React from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import Stats from '../components/Stats'
function Home() {
  return (
    <div class="home-container d-flex">
      <Navbar/>
      <Dashboard/>
      <Stats/>
    </div>
  )
}

export default Home
