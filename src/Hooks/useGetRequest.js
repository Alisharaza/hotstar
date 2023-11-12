import { useState } from "react";
import api from "../Components/Services/GlobalApi";

// Custom hook for making GET requests
export function useGetRequest(initialData = []) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const get = async (query) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await api.get(query);
      setData(response?.data?.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const post = async (query, requestData) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await api.post(query, requestData);
      setData(response?.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const patch = async (query, requestData) => {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await api.patch(query, requestData);
      setData(response?.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, isError, get, post, patch };
}
