import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../Config/Config";

export const UseGet = (url: string) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const request = async () => {
    // Default options are marked with *
    try {
      const response = await axios.get(config.baseUrl + url);
      setResponse(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("error", error);
    }
  };

  useEffect(() => {
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response: response, loading: loading, error: error };
};
