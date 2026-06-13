import { useState } from "react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";

function App() {
  const [search, setSearch] = useState("");

  const users = [
    "Sparsh",
    "Rahul",
    "Aman",
    "Priya",
    "Rohit",
    "Neha",
    "Ankit"
  ];

  const filteredUsers = users.filter((user) =>
    user
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Search Filter</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;