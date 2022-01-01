import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()


export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(true)

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  // state 현재상태 vuex의 state랑 똑같음. 통합관리되어야할 데이터를 reducer의 state로 정의 후 Reducer에 dispatch해서 수정
  const [state, dispatch] = useReducer(GithubReducer, initialState)


  return <GithubContext.Provider
    value={{
      // users: state.users,
      // loading: state.loading,
      // user: state.user,
      // repos: state.repos,
      ...state,
      dispatch,
    }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext