"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import logo from "./assets/logo.png"
import Image from 'next/image'

function Navbar() {
  const path = usePathname();

  const [dark, setDark] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    {name: "About", link: "/about"},
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    
  ]

  // load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (dark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <nav className='py-4  flex items-center justify-between'>

     
      {/* <div className='font-black text-3xl'>
        {"<THEDEVQ />"}
      </div> */}
      <Image src={logo} alt='=logo' className='w-10 h-10' />

      {/* Menu */}
      <ul className='flex items-center justify-between gap-10'>
        {menuItems.map((menu) => {
          const isActive = menu.link === path;

          return (
            <li
              key={menu.link}
              className={
                isActive
                  ? "font-bold text-primary hover:text-primary-hover"
                  : "text-text hover:text-primary-hover"
              }
            >
              <Link href={menu.link}>{menu.name}</Link>
            </li>
          )
        })}
      </ul>

      <div className="flex items-center gap-3">

       
        <button
          onClick={toggleTheme}
          className="border border-border text-text px-3 py-2 rounded-md hover:bg-card-secondary transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>

     
        <button className='bg-primary gap-4 cursor-pointer text-white py-2 px-4 rounded-sm hover:bg-primary-hover'>
          Contact me
        </button>

      </div>

    </nav>
  )
}

export default Navbar