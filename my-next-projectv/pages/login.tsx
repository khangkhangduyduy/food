import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main id="main">

      <div >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <ul>
      <li>
        <Link href="/">Trang chủ</Link>
      </li>
      <li>
        <Link href="trangchitiet">Chi Tiết</Link>
      </li>
      <button type="submit" ><a href="login">login</a></button>
    </ul>
      </div>

    <div >
    <div >
      <h2>Login</h2>
      <form action="#">
        <div >
          <label style={{ display: 'flex'}}>Email </label>
          <input type="email" required/>
        </div>
        <div >
          <label style={{ display: 'flex'}}>Password </label>
          <input type="password" required/>
        </div>
        <div>
          <label><input type="checkbox"/>
          Remember me</label>
          <a href="#">Forgot Password</a>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
    </main>
  )
}




