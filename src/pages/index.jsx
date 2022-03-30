import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Index page</h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
};

export default Page;
