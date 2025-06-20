import { useEffect, useState } from "react";
import { useFetchAPI } from "./useFetch";

function PostData() {
  const { data, loading, error } = useFetchAPI(
    "https://jsonplaceholder.typicode.com/posts",
    1000
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
          <h1>Post Data</h1>
          {data &&
            data.map((ele) => {
              return <h1 key={ele?.id}>{ele.title}</h1>;
            })}
        </>
      )}
    </>
  );
}

export default PostData;
