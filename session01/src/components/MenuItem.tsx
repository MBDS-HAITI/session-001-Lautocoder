import React, { useState } from "react";

interface MenuItemProps{
    label: string;
    link: string;
}

export default function MenuItem({label,link}: MenuItemProps) {

    const [activeMenu, setActiveMenu] = useState("Home");

    const handleMenuClick = (menuItem: string) => {
        setActiveMenu(menuItem);
        alert(`You clicked on ${menuItem}`);
    }

  return (
    <li>
      <a onClick={()=>handleMenuClick(label)} href={link} className="text-heading hover:underline" aria-current="page">
        {label}
      </a>
    </li>
  );
}
