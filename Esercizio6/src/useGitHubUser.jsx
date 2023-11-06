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


  const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher);
  
  const handleRefetchData = () => {
  mutate()
}

  return {

    data,
    error,
    fetchGithubUser: fetcher,
    onRefetch: handleRefetchData,
    loading: !data && !error,
  };
};

export default useGitHubUser;