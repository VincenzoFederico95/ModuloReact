import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())

const useGitHubUser = (username) => {
if (username === null) {
    return {
      data: null,
      error: null,
      loading: false,
    };
  }


const{data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher);
  return {
    data,
    error,
    fetchGithubUser: fetcher,
    loading: !data && !error,
  };
};

export default useGitHubUser;