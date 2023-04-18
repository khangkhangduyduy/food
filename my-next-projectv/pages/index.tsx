import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

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

      <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Bảng tin{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h2>
      <div >
        <a
          href="trangchitiet"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
              YouTube nhầm vụ cháy Nhà thờ Đức bà Paris là khủng bố 11/9
          </p>

          </a>
      </div>
      <div>
      <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
              Facebook giải thích cách sắp xếp bảng tin
          </p>
        </a>
      </div>

      <div>
      <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
              Nghi vấn Facebook hạn chế 25 bạn bè trong bảng tin
          </p>
        </a>
      </div>
    </main>
  )
}
