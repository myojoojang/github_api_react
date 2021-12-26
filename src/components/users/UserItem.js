import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card shadow-md compact py-8 bg-base-100 side'>
      <div className='mx-auto'>
        <div className='avatar'>
          <div className='rounded-full w-36 h-36 '>
            <img src={avatar_url} alt='avatar' />
          </div>
        </div>
        <div className='text-center mt-2'>
          <h1 className='font-bold'>
            {login.toUpperCase()}
          </h1>
          <Link
            className='font-light'
            to={`/users/${login}`}>
            View Profile
          </Link>
        </div>

      </div>

    </div>
  )
}


UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
