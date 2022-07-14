import React from "react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <nav
      className="flex sticky flex-col justify-center items-center bg-slate-400"
      onClick={() => router.push("/")}
    >
      <h1 className="text-2xl font-medium">Ecommerce Template</h1>
    </nav>
  );
}

export default Navbar;
