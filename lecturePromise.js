// function welcomeHandler(callback) {
//   setTimeout(() => {
//     //APi call as api  i got name
//     let name = "chhavi";
//     callback(name, getRole);
//   }, 3000);
// }

// function getAge(name, callback) {
//   setTimeout(() => {
//     //api call
//     role = "techinal lead";
//     callback(role);
//   }, 5000);
//   //operation
//   console.log("the user name age 32", name);
// }

// function getRole(role) {
//   console.log("role of user", role);
// }

// welcomeHandler(getAge);
// console.log("rest code");

// function greetUser(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback(); // This is the callback function
//   }

//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }

//   greetUser("Lavi", sayGoodbye);

// Introduction to Promises
// Promises are a powerful way to handle asynchronous operations in JavaScript. Introduced in ES6, they provide a cleaner alternative to callback-based asynchronous patterns.

// A Promise represents a value that may not be available yet but will be resolved at some point in the future. It can be in one of three states:

// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

const promise1 = new Promise((resolve, reject) => {
  let flag = true;
  setTimeout(() => {
    if (flag) {
      console.log("promise running");
      //api
      resolve("lavi");
    } else {
      reject("there is some error");
    }
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  let flag = true;
  setTimeout(() => {
    if (flag) {
      //api
      resolve("techinal lead");
    } else {
      reject("there is some error");
    }
  }, 3000);
});
console.log(promise1);

promise1
  .then((result) => {
    console.log(result);

    return promise2;
  })
  .then((result) => {
    console.log("role", result);
  })
  .catch((err) => console.log(err));

const asyncFunc = async () => {
  let result = await new Promise((res, rej) =>
    setTimeout(() => {
      res("lavi");
    }, 3000)
  );
  console.log("1", result);
  let result2 = await new Promise((res, rej) =>
    setTimeout(() => {
      res("trechinal lead");
    }, 3000)
  );
  console.log("2", result2);
  return "lavi rastogi";
};
asyncFunc().then((res) => console.log(res));

// Creating Promises
// A Promise is created using the Promise constructor, which takes a function (the "executor") with two parameters: resolve and reject.

// const myPromise = new Promise((resolve, reject) => {
//   // Asynchronous operation
//   const success = true;

//   if (success) {
//     resolve('Operation succeeded!');
//   } else {
//     reject('Operation failed!');
//   }
// });

// Consuming Promises
// Promises provide .then(), .catch(), and .finally() methods to handle the results:

// myPromise
//     .then(result => {
//       console.log(result); // 'Operation succeeded!'
//     })
//     .catch(error => {
//       console.error(error); // Only runs if the promise is rejected
//     })
//     .finally(() => {
//       console.log('This runs regardless of success or failure');
//     });
// Chaining Promises
// One of the most powerful features of promises is the ability to chain them together:

// fetchUserData(userId)
//     .then(userData => {
//       return fetchUserPosts(userData.username);
//     })
//     .then(posts => {
//       console.log(posts);
//       return fetchPostComments(posts[0].id);
//     })
//     .then(comments => {
//       console.log(comments);
//     })
//     .catch(error => {
//       console.error('Error in the promise chain:', error);
//     });
// Each .then() returns a new Promise, allowing for elegant handling of sequential asynchronous operations.

// Promise.all()
// Waits for all promises in an array to resolve, or rejects if any promise rejects:

// const promise1 = fetchUser(1);
// const promise2 = fetchUser(2);
// const promise3 = fetchUser(3);

// Promise.all([promise1, promise2, promise3])
//   .then(results => {
//      results is an array containing the resolved values
//      in the same order as the promises array
//     console.log(results); // [user1, user2, user3]
//   })
//   .catch(error => {
//      This runs if ANY of the promises rejects
//     console.error(error);
//   });
// Promise.race()
// Returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects:

// const promise1 = new Promise(resolve => setTimeout(() => resolve('First'), 500));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 100));

// Promise.race([promise1, promise2])
//   .then(result => {
//     console.log(result); // 'Second' (because it resolves faster)
//   });
// Promise.allSettled()
// Waits for all promises to settle (either resolve or reject) and returns an array with their outcomes:

// const promises = [
//     Promise.resolve(1),
//     Promise.reject('Error'),
//     Promise.resolve(3)
//   ];

// Promise.allSettled(promises)
//   .then(results => {
//     // results is an array of objects with status and value/reason
//     console.log(results);
//     // [
//     //   { status: 'fulfilled', value: 1 },
//     //   { status: 'rejected', reason: 'Error' },
//     //   { status: 'fulfilled', value: 3 }
//     // ]
//   });
// Promise.any()
// Returns a promise that resolves as soon as one of the promises in the array resolves. Rejects only if all promises reject:

// const promises = [
//     Promise.reject('Error 1'),
//     Promise.resolve('Success'),
//     Promise.reject('Error 2')
//   ];

// Promise.any(promises)
//   .then(result => {
//     console.log(result); // 'Success'
//   })
//   .catch(errors => {
//     // This runs only if ALL promises reject
//     console.error(errors); // AggregateError containing all rejection reasons
//   });
// Async/Await
// ES2017 introduced async/await, which is syntactic sugar built on top of promises to make asynchronous code look and behave more like synchronous code:

// async function fetchUserData() {
//     try {
//       // The await keyword pauses execution until the promise resolves
//       const user = await fetchUser(1);
//       const posts = await fetchUserPosts(user.username);
//       const comments = await fetchPostComments(posts[0].id);

//       console.log(user, posts, comments);
//       return { user, posts, comments };
//     } catch (error) {
//       // Handles any errors from any of the await expressions
//       console.error('Error fetching data:', error);
//     }
//   }

//   // The function returns a promise that resolves with the return value
//   fetchUserData().then(data => {
//     console.log('All data:', data);
//   });
// Key points about async/await:

// An async function always returns a Promise.
// The await keyword can only be used inside an async function.
// When you await a promise, the function execution pauses until the promise resolves.
// Error handling is done with traditional try/catch blocks.
// Parallel Operations with async/await
// You can combine async/await with Promise.all for parallel operations:

// async function fetchMultipleUsers() {
//     try {
//       // Start all fetch requests simultaneously
//       const userPromises = [
//         fetchUser(1),
//         fetchUser(2),
//         fetchUser(3)
//       ];

//       // Wait for all of them to complete
//       const users = await Promise.all(userPromises);
//       console.log(users);
//       return users;
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   }
