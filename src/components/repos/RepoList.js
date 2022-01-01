import PropTypes from 'prop-types';

const RepoList = ({ repos }) => {

  return (
    <div className='rounded shadow-lg card bg-base-200 py-6 px-8'>
      <h1 className='font-bold text-2xl mb-4'>Latest Repos</h1>
      {
        repos.map((repo) => (
          <div className='my-2' key={repo.node_id}>
            {repo.name}
          </div>
        ))
      }
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired
}

export default RepoList