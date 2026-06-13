function UserList({ users }) {
  return (
    <div>
      {users.length === 0 ? (
        <p>No User Found</p>
      ) : (
        users.map((user, index) => (
          <p key={index}>
            {user}
          </p>
        ))
      )}
    </div>
  );
}

export default UserList;