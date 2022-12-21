import axios, { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useRef } from "react";

export const useRequest = () => {
  const abortController = useRef(new AbortController());
  useEffect(() => () => abortController.current.abort(), []);

  return useCallback((options: AxiosRequestConfig) => {
    return axios({ signal: abortController.current.signal, ...options });
  }, []);
};
