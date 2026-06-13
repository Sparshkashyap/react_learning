function Results({ users }) {
  return (
    <>
      {users.length === 0 ? (
        <p>No User Found</p>
      ) : (
        users.map((user) => (
          <p key={user}>
            {user}
          </p>
        ))
      )}
    </>
  );
}

export default Results;