import React from "react";
import MenuItem from "./MenuItem";

const menuItems = [
    { label: "Home", link: "#" },
    { label: "Notes", link: "#" },
    { label: "Etudiants", link: "#" },
    { label: "Matières", link: "#" },
    { label: "A propos", link: "#" },
];

export default function Menu() {

    

  return (
    <div className="fixed w-full z-20 top-0 start-0  bg-[#432866] text-white">
      <nav className="bg-neutral-secondary-soft border-y border-default border-default">
        <div className="px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {menuItems.map((item) => (
                <MenuItem label={item.label} link={item.link}/>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
