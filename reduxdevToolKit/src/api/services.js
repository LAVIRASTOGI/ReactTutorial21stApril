export const loginUserService = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res("dd");
    }, 2000);
  });

  return {
    user: { name: "Lavi", id: 123 },
  };
};
