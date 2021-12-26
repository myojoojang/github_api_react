//action : type-string, payload

const GithubReducer = (state, action) => {

  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case 'SET_LOADING':
      return {
        ...state.loading,
        loading: true
      }

    default:
      return state
  }

}

export default GithubReducer