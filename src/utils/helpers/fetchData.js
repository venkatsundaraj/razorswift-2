import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchData = function (api) {
  const [isLoading, setIsLoading] = useState(null);
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async function () {
      try {
        const config = {
          headers: {
            "x-rs-key": process.env.X_RS_KEY,
          },
        };
        setIsLoading(true);
        const response = await axios.post(api, config);

        if (!response.data) {
          setIsLoading(false);
          setError(response);
          throw new Error("Could not get the data");
        }

        setIsLoading(false);
        setData(response.data);
      } catch (err) {
        throw new Error(err);
      }
    };
    getData();
  }, []);

  return {
    isLoading: isLoading,
    data: data,
    error: error,
  };
};

export default fetchData;
