import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Eduardo Hernández',
      image: 'https://avatars.githubusercontent.com/u/3603321?v=4',
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
