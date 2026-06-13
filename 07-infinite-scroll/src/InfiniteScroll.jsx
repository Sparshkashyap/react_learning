import { useEffect, useState } from "react";

function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const generateItems = (pageNumber) => {
    return Array.from(
      { length: 10 },
      (_, index) =>
        `Item ${(pageNumber - 1) * 10 + index + 1}`
    );
  };

  const loadMore = () => {
    setLoading(true);

    setTimeout(() => {
      const newItems = generateItems(page);

      setItems((prevItems) => [
        ...prevItems,
        ...newItems,
      ]);

      setPage((prevPage) => prevPage + 1);

      setLoading(false);
    }, 1000);
  };

  // Initial Load
  useEffect(() => {
    loadMore();
  }, []);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        window.innerHeight;
      const fullHeight =
        document.documentElement
          .scrollHeight;

      const reachedBottom =
        scrollTop + windowHeight >=
        fullHeight - 50;

      if (reachedBottom && !loading) {
        loadMore();
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [loading, page]);

  return (
    <div>
      <h1>Infinite Scroll</h1>

      {items.map((item) => (
        <div
          key={item}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            marginBottom: "8px",
          }}
        >
          {item}
        </div>
      ))}

      {loading && <h3>Loading...</h3>}
    </div>
  );
}

export default InfiniteScroll;