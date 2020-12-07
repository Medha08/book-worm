import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Medha',
    email: 'medha8pandey@gmail.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'Shruti',
    email: 'shruti95@gmail.com',
    password: bcrypt.hashSync('1235', 10),
  },
  {
    name: 'Saurabh',
    email: 'pandeysaurabh@gmail.com',
    password: bcrypt.hashSync('1236', 10),
  },
];

export default users;
