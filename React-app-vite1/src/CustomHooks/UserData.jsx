import React, { useEffect, useState } from "react";
import { useFetchAPI } from "./useFetch";

function UserData() {
  const { data, loading, error } = useFetchAPI(
    "https://jsonplaceholder.typicode.com/users",
    2000
  );
  //   const [user, setUser] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState("");

  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const waitTime = await new Promise((res) =>
  //         setTimeout(() => {
  //           res("resolved");
  //         }, 2000)
  //       );
  //       const result = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const mainData = await result.json();
  //       console.log(mainData);
  //       setUser(mainData);
  //       setError("");
  //     } catch (err) {
  //       setError("somethingwent wrong");
  //       console.log(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <>
      {loading ? (
        <h1>Loading ......</h1>
      ) : (
        <>
          <h1>User Data</h1>
          {data &&
            data.map((ele) => {
              return <h1 key={ele?.id}>{ele.name}</h1>;
            })}
        </>
      )}
    </>
  );
}

export default UserData;
