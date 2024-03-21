import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobsListings from './components/JobsListings'
import ViewJobs from './components/ViewJobs'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero title = "Become a React Dev"/>
      <HomeCards />
      <JobsListings />
      <ViewJobs />
    </>
  )
}

export default App