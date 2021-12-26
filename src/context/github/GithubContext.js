import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(true)

  const initialState = {
    users: [],
    loading: false
  }

  // state 현재상태 vuex의 state랑 똑같음. 통합관리되어야할 데이터를 reducer의 state로 정의 후 Reducer에 dispatch해서 수정
  const [state, dispatch] = useReducer(GithubReducer, initialState)


  // get init user data for testing purposes
  const getUsers = async () => {
    setLoading()
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })
    const data = await res.json()

    // setUsers(data) // setLoading(false)
    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  }

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING'
    })
  }

  const clearResults = () => {
    dispatch({
      type: 'GET_USERS',
      payload: []
    })
  }

  const searchUsers = async (text) => {
    setLoading()
    const res = await fetch(`${GITHUB_URL}/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    }
    )

    const { items } = await res.json()
    // console.log(items)
    //===data.items
    dispatch({
      type: 'GET_USERS',
      payload: items
    })

  }

  return <GithubContext.Provider
    value={{
      users: state.users,
      loading: state.loading,

      getUsers,
      searchUsers,
      clearResults
    }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext