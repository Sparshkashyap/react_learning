function UserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <p key={user}>
          {user}
        </p>
      ))}
    </>
  );
}

export default UserList;