import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFetchAPI } from "./useFetch";
// import { useDebounce } from "./useDebounce";

function UserData() {
  const id = useRef();
  const { data, loading, error } = useFetchAPI(
    "https://jsonplaceholder.typicode.com/users",
    2000
  );

  const [filterData, setFilterData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const filterDataHandler = useCallback(
    (item) => {
      let newFilterData = data.filter((ele) => ele.name.includes(item));
      setFilterData(newFilterData);
    },
    [data]
  );
  // const [debounce] = useDebounce(filterDataHandler, 2000);
  const debounce = useCallback(
    (...args) => {
      console.log(id);
      clearTimeout(id.current);
      id.current = setTimeout(() => {
        console.log("run times");
        filterDataHandler.apply(this, args);
      }, 2000);
    },
    [filterDataHandler]
  );

  const changeHandler = (e) => {
    let newValue = e.target.value;
    setSearchData(e.target.value);
    debounce(newValue);
  };
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
          <input
            type="text"
            placeholder="search user"
            value={searchData}
            onChange={changeHandler}
          />
          {filterData &&
            filterData.map((ele) => {
              return <h1 key={ele?.id}>{ele.name}</h1>;
            })}
        </>
      )}
    </>
  );
}

export default UserData;
