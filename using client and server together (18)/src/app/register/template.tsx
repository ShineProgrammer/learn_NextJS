import React from 'react'
import Link from 'next/link'

function layout({ children }: Readonly <{children: React.ReactNode}>) {
  return (
    <div>layout
        <Link href="/register/login">Login</Link>
        <Link href="/register/forget-password">Forget Password</Link>
        <input type="text" />
        {children}
    </div>
  )
}

export default layout