import React from "react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiFillStar,
} from "react-icons/ai";
import { FiUser, FiFileText } from "react-icons/fi";
import { DiGitBranch } from "react-icons/di";
import { Link } from "react-router-dom";

function MobileNav({ showNav, setShowNav }) {
  return (
    <div
      className={
        showNav
          ? "fixed bg-[#151a1e] max-h-screen w-full top-[52px] left-0 border-b-2 border-white z-50 transition-all duration-500 overflow-hidden"
          : "fixed max-h-0 w-full top-[52px] left-0 z-50 transition-all duration-500 overflow-hidden"
      }
      style={{ transition: "max-height 0.5s ease" }}
    >
      <div className="block items-center justify-center text-white">
        <ul className="flex gap-8 flex-col mt-10 text-white">
          {[
            { to: "/", icon: <AiOutlineHome fontSize={20} />, label: "Home" },
            { to: "/about", icon: <FiUser fontSize={20} />, label: "About" },
            {
              to: "/projects",
              icon: <AiOutlineFundProjectionScreen fontSize={20} />,
              label: "Projects",
            },
            { to: "/resume", icon: <FiFileText fontSize={20} />, label: "Resume" },
          ].map(({ to, icon, label }) => (
            <li key={to} className="relative group text-white">
              <Link
                to={to}
                className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold text-white"
                style={{ textDecoration: "none" }}
                onClick={() => setShowNav(false)}
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
