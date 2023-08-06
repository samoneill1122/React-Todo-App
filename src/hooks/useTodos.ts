import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Todo } from "../store";

const apiClient = new APIClient<Todo>("/todos");

const useTodos = () => {
  return useQuery<FetchResponse<Todo>, Error>({
    queryKey: ["todos"],
    queryFn: () => apiClient.getAll(),
    // staleTime: ms
  });
};

export default useTodos;
