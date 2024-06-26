import { useState } from "react";

export default function useFetch() {
  //const hash = import.meta.env.VITE_HASH
  const [loading, setLoading] = useState(true);

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  }

  function post(url2, body) {
    console.log(url2)
    return new Promise((resolve, reject) => {
      fetch(url2, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get,  post };
};