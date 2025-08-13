// src/Routing Example/Users.tsx
// ———————————————————————————————
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router"; // v7 unified package :contentReference[oaicite:0]{index=0}
import Loading from "./Loading";

export default function Users() {
  // useLoaderData() === { posts: Promise<Post[]> }
  const { posts } = useLoaderData();
  console.log(posts);

  return (
    <div>
      <h2>Users</h2>
      <Suspense fallback={<Loading />}>
        <Await resolve={posts}>
          {(loadedPosts) => (
            <ul>
              {loadedPosts?.map((ele) => (
                <h1>{ele.title}</h1>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
