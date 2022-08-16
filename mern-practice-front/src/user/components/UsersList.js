import UserItem from './UserItem';

const UsersList = (props) => {
  return (
    <ul className='users-list'>
      {props.items.map((user) => {
        return <UserItem key={user.id} {...user} />;
      })}
    </ul>
  );
};

export default UsersList;
