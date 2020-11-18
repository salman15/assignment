import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../Config/Config";

/**
 * Custom hook that performs an basic post request with given parameters
 * @string url
 * @object postData
 * @boolean send
 * @function setSend
 * @returns object
 */
export const UsePost = (
  url: string,
  postData: any,
  send: boolean,
  setSend: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const request = async () => {
    // Default options are marked with *
    try {
      const response = await axios.post(config.baseUrl + url, postData);
      setResponse(response);
      setLoading(false);
      setSend(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      setSend(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    send && request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send]);

  return { response: response, loading: loading, error: error };
};
