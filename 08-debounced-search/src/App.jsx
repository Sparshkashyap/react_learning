import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import Results from "./Results";

function App() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] =
    useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const users = [
    "Sparsh",
    "Rahul",
    "Priya",
    "Neha",
    "Rohit",
    "Ankit",
  ];

  const filteredUsers = users.filter(
    (user) =>
      user
        .toLowerCase()
        .includes(
          debouncedSearch.toLowerCase()
        )
  );

  return (
    <>
      <h1>Debounced Search</h1>

      <SearchInput
        search={search}
        setSearch={setSearch}
      />

      <Results users={filteredUsers} />
    </>
  );
}

export default App;