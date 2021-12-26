import React from 'react'
import spinner from './assets/spinner.gif'

const Spinner = () => {
  return (
    <div className='w-100'>
      <img
        width={180}
        className='mx-auto'
        src={spinner} alt='Loading' />
    </div>
  )
}

export default Spinner
