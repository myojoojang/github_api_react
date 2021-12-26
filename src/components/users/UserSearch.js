import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'


const UserSearch = () => {
  const [text, setText] = useState('')
  const { users, clearResults, searchUsers } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)


  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === '') {
      setAlert('Please type something', 'error')
      return
    }

    searchUsers(text)
    setText('')
  }

  return (
    <>
      <form className='w-full'>
        <div className='form-control'>
          <div className='relative'>
            <input className='w-full bg-gray-200 input input-lg text-black'
              placeholder='Search'
              type='text'
              value={text}
              onChange={handleChange}

            />
            <button type='submit'
              onClick={handleSubmit}
              className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
              Go
            </button>

          </div>
        </div>
      </form>

      {
        (users || []).length > 0 &&
        (<div>
          <button onClick={clearResults} className='btn btn-ghost mt-4 btn-lg'>
            Clear
          </button>
        </div>
        )
      }


    </>
  )
}

export default UserSearch
