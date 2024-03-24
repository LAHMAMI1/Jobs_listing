import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobsListings from '../components/JobsListings'
import ViewJobs from '../components/ViewJobs'

function HomePage() {
  return (
    <>
      <Hero title="Become a React Dev" />
      <HomeCards />
      <JobsListings isJobs = {false}/>
      <ViewJobs />
    </>
  )
}

export default HomePage