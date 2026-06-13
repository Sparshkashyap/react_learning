import { memo } from "react";

function Header() {
  console.log("Header Rendered");

  return (
    <h1>
      React Rendering Lab
    </h1>
  );
}

export default memo(Header);