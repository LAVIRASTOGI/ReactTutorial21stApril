import { useLoaderData } from "react-router-dom";

function Users() {
  const postData = useLoaderData();
  //   console.log(data);
  return (
    <div>
      Users
      {postData.map((ele) => (
        <h1 key={ele?.id}>{ele.title}</h1>
      ))}
    </div>
  );
}

export default Users;
