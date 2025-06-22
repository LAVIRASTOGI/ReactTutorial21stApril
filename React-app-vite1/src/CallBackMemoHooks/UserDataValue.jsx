import React from "react";
import { useFetchAPI } from "../CustomHooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import { useDebounceHook } from "./useDebounceHook";
import { useCallback } from "react";
import InputComponent from "../InputComponent";

function UserDataValue() {
  const { data, loading, error } = useFetchAPI(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [searchVal, setSearchVal] = useState("");
  const [fiterData, setFiterData] = useState([]);

  useEffect(() => {
    setFiterData(data);
  }, [data]);

  const filterHandler = useCallback(
    (item) => {
      const arrayNew = data.filter((ele) =>
        ele.name.toLowerCase().includes(item)
      );
      setFiterData(arrayNew);
    },
    [data]
  );

  const [debounceFunction] = useDebounceHook(filterHandler, 2000);
  const changeHandler = useCallback(
    (e) => {
      // console.log(e.target.value);
      // console.log("serach", searchVal);
      setSearchVal(e.target.value);
      // filterHandler(e.target.value);
      debounceFunction(e.target.value);
    },
    [debounceFunction]
  );

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <>
      {loading ? (
        <h1>Loading ......</h1>
      ) : (
        <>
          <InputComponent
            type="text"
            placeholder="Search Data"
            value={searchVal}
            onChange={changeHandler}
          />
          <h1>User Data</h1>
          {fiterData &&
            fiterData.map((ele) => {
              return <h1 key={ele?.id}>{ele.name}</h1>;
            })}
        </>
      )}
    </>
  );
}

export default UserDataValue;
