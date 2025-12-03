import React, { useState } from "react";

interface MenuItemProps{
    label: string;
    link: string;
    isActive: boolean;
    onClick: ()=>void;
}

export default function MenuItem({label,link, isActive,onClick}: MenuItemProps) {

  return (
    <li className={`rounded-md py-1 px-2 ${isActive ? " bg-[#280a48] font-semibold" : ""}`}>
      <a href={link} onClick={onClick} className="text-heading hover:underline" aria-current="page">
        {label}
      </a>
    </li>
  );
}
