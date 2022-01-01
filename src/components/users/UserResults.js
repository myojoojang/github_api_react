import React, { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

import GithubContext from '../../context/github/GithubContext'


const UserResults = () => {
  const { users, loading } = useContext(GithubContext)


  if (loading) {
    return (
      <Spinner />
    )
  }

  return (
    <div className='grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2'>
      {users && users.map((user) => (
        <UserItem user={user} key={user.node_id} />
      ))}
    </div>
  )
}

export default UserResults
