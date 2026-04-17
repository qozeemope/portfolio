"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'



function Navbar() {
  const path = usePathname();  
  const menuItems = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Skills",
        link: "/skills"
    },
    {
        name: "Projects",
        link: "/projects"
    },
    {
        name: "Experience",
        link: "/experience"
    },

    {
        name: "Reviews",
        link: "/reviews"
    },
  ]

  
  return (
        <nav className='py-4 flex items-center justify-between'>
            <div className='font-black text-3xl'>  {"<THEDEVQ />"}</div>
            <ul className='flex items-center justify-between gap-10'>
                {
                   menuItems.map((menu) => {
                    const isActive = menu.link === path;
                    return (
                        <li key={menu.link} className={isActive ? "font-bold text-[#24b81d]" : "text-black"}>
                            <Link href={menu.link}>{menu.name}</Link>
                        </li>
                    )
                   })
                }
            </ul>
                <button className='bg-[#24b81d] gap-4 cursor-pointer text-white py-2 px-4 rounded-sm'>Contact me</button>
        </nav>
    )
}

export default Navbar