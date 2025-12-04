import React, { useState } from "react";


export default function MenuItem({label,link, isActive,onClick}) {

  return (
    <li className={`rounded-md py-1 px-2 ${isActive ? " bg-[#280a48] font-semibold" : ""}`}>
      <a href={link} onClick={onClick} className="text-heading hover:underline" aria-current="page">
        {label}
      </a>
    </li>
  );
}
