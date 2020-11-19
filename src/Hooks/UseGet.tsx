import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { config } from "../Config/Config";

/**
 * Custom hook call that performs a basic get request to an API
 * @string url
 * @returns object
 */
export const UseGet = (url: string) => {
  const firstUpdate = useRef(true);
  const [response, setResponse] = useState({});
  const [get, setGet] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const request = async () => {
    if (!firstUpdate.current || get) {
      setLoading(true);
      try {
        const response = await axios.get(config.baseUrl + url);
        setResponse(response);
        setLoading(false);
        setGet(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        setGet(false);
        console.log("error", error);
      }
    }
    firstUpdate.current = false;
  };

  useEffect(() => {
    get && request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [get]);

  return {
    getResponse: response,
    getLoading: loading,
    getError: error,
    getData: setGet,
  };
};
