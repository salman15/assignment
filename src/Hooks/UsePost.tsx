import { useEffect, useRef, useState } from "react";
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
export const UsePost = (url: string, postData: any) => {
  const firstUpdate = useRef(true);
  const [response, setResponse] = useState({ status: 0 });
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);
  const request = async () => {
    if (!firstUpdate.current || send) {
      setLoading(true);
      // Default options are marked with *
      try {
        const response = await axios.post(config.baseUrl + url, postData);
        console.log(response);
        setResponse(response);
        setLoading(false);
        setSend(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        setSend(false);
        console.log("error", error);
      }
    }
    firstUpdate.current = false;
  };

  useEffect(() => {
    send && request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send]);

  return {
    postResponse: response,
    postLoading: loading,
    postError: error,
    sendPost: setSend,
  };
};
