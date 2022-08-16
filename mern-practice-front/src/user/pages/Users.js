import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Vlab Tarkov',
      image:
        'https://images.unsplash.com/photo-1660548312984-8f238a3396d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      placeCount: 3,
    },
    {
      id: 'u2',
      name: 'Chigrin Tarkov',
      image:
        'https://images.unsplash.com/photo-1660554042641-5f3a3216c0c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      placeCount: 5,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
