import Link from "next/link";
import * as React from "react";

export default function NavigationBar() {
  return (
    <div className="flex bg-gray-800 min-h-[5em] mb-10 justify-start items-center">
      <Link href="../">
        <h2 className="text-white m-2 p-2 text-2xl hover:text-sky-300">Home</h2>
      </Link>
      <Link href="../Portfolio">
        <h2 className="text-white m-2 p-2 text-2xl hover:text-sky-300">
          Portfolio
        </h2>
      </Link>
      <Link href="../Yamaan Bakir - Website Resume.pdf">
        <h2 className="text-white m-2 p-2 text-2xl hover:text-sky-300">
          Resume
        </h2>
      </Link>
    </div>
  );
}
