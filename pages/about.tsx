import Link from "next/link";
import React from "react";

type Props = {};

const about = (props: Props) => {
  return (
    <div className="text-3xl bg-gradient-to-b from-slate-800 to-blue-900 text-slate-100">
      <Link href={"/"}>Mian page</Link>
      nam, asperiores veritatis placeat aperiam odio laborum dolore? Soluta
      dolorem praesentium doloribus similique molestiae repellat eum omnis
      suscipit?
    </div>
  );
};

export default about;
