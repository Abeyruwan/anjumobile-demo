import bcrypt from "bcryptjs";

const users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true, 
  },
  {
    id: 2,
    name: "jane_doe",
    email: "jane@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    id: 3,
    name: "john_doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
