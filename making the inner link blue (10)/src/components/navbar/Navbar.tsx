"use client"
import React from 'react'
import Link from 'next/link'
import styled from "./Navbar.module.css"
import { usePathname } from 'next/navigation'

function Navbar() {

    const pathName = usePathname()

    const navs = [
        {
            title: "Store",
            link: "/store"
        },
        {
            title: "About",
            link: "/about"
        }
    ]

    return (
        <div className={styled.inner}>
            <nav>
                <ul className='flex'>
                    {
                        navs.map((item)=>(
                            <li><Link className={item.link === pathName ? "text-blue-500" : "text-white"} href={item.link}>{item.title}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar