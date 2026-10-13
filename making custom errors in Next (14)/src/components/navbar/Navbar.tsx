"use client"
import React from 'react'
import Link from 'next/link'
import styled from "./Navbar.module.css"
import { usePathname, useRouter } from 'next/navigation'


function Navbar() {


    const pathName = usePathname()

    const router = useRouter()
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
    const back = () => {
        router.back()
    }
    const forward = () => {
        router.forward()
    }
    const push = () => {
        router.push("https://www.w3schools.com")
    }
    const refresh = () => {
        router.refresh()
    }

    return (
        <div className={styled.inner}>
            <nav>
                <ul className='flex'>
                    {
                        navs.map((item) => (
                            <li><Link className={item.link === pathName ? "text-blue-500" : "text-white"} href={item.link}>{item.title}</Link></li>
                        ))
                    }
                    <button onClick={back}>back</button>
                    <button onClick={forward}>forward</button>
                    <button onClick={push}>push</button>
                    <button onClick={refresh}>refresh</button>

                </ul>

            </nav>
        </div>
    )
}

export default Navbar