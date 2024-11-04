// custom hooks
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  //usestate for a loading message
  const [isPending, setIsPending] = useState(true);

  // storing the catch error in a state
  const [error, setError] = useState(null);

  // useEffect: for data fetching, authentication communication, site re-rendering etc
  useEffect(() => {
    //clean up useEffect code
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        //passing a response
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data from that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })

        // error handling for network issues
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            // don't wanna see the loading message when an error occur
            isPending(false);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  // returning the states data, pending and error as object
  return { data, isPending, error };
};

export default useFetch;
