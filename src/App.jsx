import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobSinglePage, { JobLoader } from './pages/JobSinglePage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

const App = () => {

  const addJob = async (newJob) => {
    const response = await fetch('api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  }

  const editJob = async (Job) => {
    const response = await fetch(`/api/jobs/${Job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Job)
    })
    return;
  }

  const deleteJob = async (id) => {
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path='/jobs'
          element={<JobsPage />}
        />
        <Route
          path='/add-job'
          element={<AddJobPage addJobSubmit={addJob} />}
        />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage editJobSubmit={editJob} />}
          loader={JobLoader}
        />
        <Route
          path='/jobs/:id'
          element={<JobSinglePage deleteJob={deleteJob} />}
          loader={JobLoader}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App