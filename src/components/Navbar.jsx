import React from "react";
import { AiFillGithub } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center border-b border-slaye-400 py-4 px-3 lg:px-20">
      <h1 className="font-bold italic">Minimal Izin🙏🏻</h1>
      <a
        href="https://github.com/kdandy/izindosen/tree/main"
        className="border rounded-md p-2 flex gap-2 items-center hover:bg-slate-100 transition-all duration-200 "
      >
        <AiFillGithub size={20} />
        kdandy/izindosen
      </a>
    </nav>
  );
};

export default Navbar;
