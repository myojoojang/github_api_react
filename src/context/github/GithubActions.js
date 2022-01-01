import axios from "axios"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
})


// // get init user data for testing purposes
// export const getUsers = async () => {
//   const res = await fetch(`${GITHUB_URL}/users`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`
//     }
//   })
//   const data = await res.json()
//   return data
// }

export const searchUsers = async (text) => {
  const res = await github.get(`/search/users?q=${text}`)
  return res.data.items
}


export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10
  })

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`)
  ])

  return {
    user: user.data,
    repos: repos.data
  }

}



// fetch버전
// export const getUser = async (login) => {
//   const res = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`
//     }
//   })

//   if (res.status === 404) {
//     window.location = '/notfound'
//   } else {

//     return res.data
//   }
// }


// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: 'created',
//     per_page: 10
//   })

//   const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`
//     }
//   })

//   const data = await res.json()
//   return data

// }