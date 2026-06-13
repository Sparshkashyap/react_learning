function Pagination({
  totalPages,
  currentPage,
  setCurrentPage
}) {
  return (
    <>
      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrentPage(index + 1)
            }
          >
            {index + 1}
          </button>
        )
      )}
    </>
  );
}

export default Pagination;