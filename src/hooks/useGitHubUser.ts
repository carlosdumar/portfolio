import { useQuery } from "@tanstack/react-query";
import octokit from "../lib/octokit";

const useGitHubUser = (initialData: any) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["githubUser"],
    queryFn: async () => {
      const { data } = await octokit.request("GET /users/adminDreamBike/repos");
      return data;
    },
    initialData: initialData,
  });
  return { user: data, isLoading, isError, error };
};

export default useGitHubUser;
