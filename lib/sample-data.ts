const users = [
  {
    email: "dinal.bandara@gmail.com",
    password: "123",
  },
  {
    email: "dinal@gmail.com",
    password: "123",
  },
  {
    email: "dinal@gmail.com",
    password: "123",
  },
];

export const getUserByEmail = (email: string) => {
  const found = users.find((user) => user.email === email);
  return found;
};
