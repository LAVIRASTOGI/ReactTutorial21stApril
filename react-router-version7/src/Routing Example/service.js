export const postsFetch = async () => {
  console.log("calling");
  try {
    await new Promise((res) => {
      setTimeout(() => {
        res("hello");
      }, 4000);
    });
    let dataVal = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonData = await dataVal.json();
    // throw {
    //   status: 401,
    //   message: "something went wrong",
    // };
    return jsonData;
  } catch (err) {
    throw {
      status: 401,
      message: err?.message,
    };
  }
};
