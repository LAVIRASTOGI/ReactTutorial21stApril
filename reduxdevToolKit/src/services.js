export const loginUserService = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res("dd");
    }, 2000);
  });
  // throw Error("ff");
  return {
    user: { name: "Lavi", id: 123 },
  };
};
