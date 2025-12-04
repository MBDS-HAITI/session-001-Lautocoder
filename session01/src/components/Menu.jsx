import { useState } from "react";
import MenuItem from "./MenuItem";

const menuItems = [
    { label: "Home", link: "#", tag: "home" },
    { label: "Notes", link: "#", tag: "grades" },
    { label: "Etudiants", link: "#", tag: "students" },
    { label: "Matières", link: "#", tag: "subjects" },
    { label: "A propos", link: "#", tag: "about" },
];


export default function Menu({activeMenu, setActiveMenu}) {


    const handleMenuClick = (menuItem) => {
        setActiveMenu(menuItem);
    }

  return (
    <div className="w-full bg-[#432866] text-white sticky top-0 z-50">
      <nav className="bg-neutral-secondary-soft border-y border-default border-default">
        <div className="px-4 py-1 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row w-full justify-center font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {menuItems.map((item,index) => (
                <MenuItem key={index} label={item.label} link={item.link} onClick={() => handleMenuClick(item.tag)} isActive={activeMenu===item.tag}/>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
