import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (

    <div className='text-center'>
      <h1 className='text-5xl font-bold my-8'>
        Not Found
      </h1>

      <Link to='/' className='btn btn-primary btn-lg'>
        <FaHome className='mr-3' />
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
