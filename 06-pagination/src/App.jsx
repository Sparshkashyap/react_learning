import { useState } from "react";
import UserList from "./UserList";
import Pagination from "./Pagination";

function App() {
  const users = [
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "User6",
    "User7",
    "User8",
    "User9",
    "User10"
  ];

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 3;

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const endIndex =
    startIndex + itemsPerPage;

  const currentUsers =
    users.slice(startIndex, endIndex);

  const totalPages =
    Math.ceil(
      users.length /
      itemsPerPage
    );

  return (
    <>
      <h1>Pagination Demo</h1>

      <UserList users={currentUsers} />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;