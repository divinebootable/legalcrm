import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoLaw } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="items-center gap-3 ml-3 mt-4 flex text-xl 
            font-extrabold tracking-tight dark:text-white text-slate-900"
              onClick={() => {}}
            >
              <GoLaw /> <span>Kutora</span>
            </Link>
            <TooltipComponent content="menu" position="BottomCenter">
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                onClick={() => {}}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className=""></div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
