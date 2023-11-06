import useSWR from 'swr'

const useGitHubUser = (username) => {
if (username === null) {
    return {
      data: null,
      error: null,
      loading: false,
    };
  }


  const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`);
  
  const handleRefetchData = () => {
  mutate()
}

  return {

    data,
    error,
    onRefetch: handleRefetchData,
    loading: !data && !error,
  };
};

export default useGitHubUser;