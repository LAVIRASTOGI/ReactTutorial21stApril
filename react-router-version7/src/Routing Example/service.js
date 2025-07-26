function fetchPosts() {
  return new Promise((r) => setTimeout(() => r(), 4000)).then(() =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
      if (!res.ok) throw new Error("Fetch failed");
      return res.json();
    })
  );
}

export const postsFetch = async () => {
 // let posts = await fetchPosts();
  // ← no await, just return a promise
  return {
  //  posts,
     posts: fetchPosts(),
  };
};

export async function contactAction({ request }) {
  try {
    // Get form data from the request
    const formData = await request.formData();

    // Convert FormData to a plain object
    const data = Object.fromEntries(formData);
    console.log(data);
    // console.log(formData);
    // console.log(formData.get("name"));
    // console.log(formData.get("email"));
    // console.log(formData.get("message"));

    // Validate form data
    if (!data.name || !data.email || !data.message) {
      return {
        error: "Please fill in all fields",
      };
    }

    // Simulate API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate random API errors (1 in 10 chance)
    if (Math.random() < 0.1) {
      throw new Response(
        JSON.stringify({ message: "Server is temporarily unavailable" }),
        {
          status: 503,
          statusText: "Service Unavailable",
        }
      );
    }

    // In a real app, you would send the data to a server
    console.log("Form submitted with data:", data);

    // Return success response
    return {
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    };
  } catch (error) {
    // If it's already a Response object, throw it directly
    if (error instanceof Response) {
      throw error;
    }

    // Otherwise, create a new Response with the error details
    throw new Response(JSON.stringify({ message: "Failed to submit form" }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
