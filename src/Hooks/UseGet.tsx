import { useEffect, useState } from "react";
import axios from "axios";

type Error = {
  message?: string;
  status?: number;
};

export const UseGet = (url: string) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>({});
  const request = async () => {
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      setResponse(response);
      setLoading(false);
      console.log("response", response);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log("error", error);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return { response: response, loading: loading, error: error };
};
