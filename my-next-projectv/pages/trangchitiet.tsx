import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Picture from "../pages/img/anh1.jpg";
import profilePic from '../public/profile.webp'

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
          </h2>
      <div >
          <h1
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
              YouTube nhầm vụ cháy Nhà thờ Đức bà Paris là khủng bố 11/9
          </h1>
        <p>
        Tính năng chống tin tức giả của YouTube làm thông tin về vụ hỏa hoạn ở Pháp bị sai lệch do nhận nhầm nội dung trong video.
      YouTube là một trong những nền tảng liên tục thông tin về vụ cháy kinh hoàng tại Nhà thờ Đức bà ở Paris với hàng loạt video phát trực tiếp.
      Tuy nhiên, nhiều người xem cho biết YouTube đã nhầm khi các video về vụ cháy ở Pháp lại gắn kèm bảng tin liên quan đến vụ khủng bố ngày 11/9 tại Mỹ.
        </p>
        <Image src={Picture} alt="picture"/>
        <p>
        Bảng tin là tính năng mới của YouTube nhằm ngăn chặn các thông tin sai lệch lan truyền và hiện chỉ áp dụng cho người dùng YouTube tại Mỹ và Hàn Quốc. Thuật toán của Google sẽ tự động xác định khi một chủ đề trở nên và đính kèm bảng tin, giúp người dùng biết được nội dung trong video có đúng hay không.
      Chưa có báo cáo nào nói vụ cháy Nhà thờ Đức bà Paris là tấn công khủng bố, do đó việc YouTube liên kết sự kiện này với vụ khủng bố 11/9 càng khiến nhiều người đặt dấu hỏi. Đại diện công ty cho biết bảng tin đã bị kích hoạt nhầm. Người dùng YouTube tại Pháp không bị ảnh hưởng bởi nhầm lẫn này.
      Chúng tôi vô cùng đau buồn trước vụ hỏa hoạn tại Nhà thờ Đức bà Paris, một phát ngôn viên của YouTube nói.Chúng tôi đã ra mắt bảng tin để liên kết các nguồn từ bên thứ ba như Encyclopedia Britannica và Wikipedia nhằm tránh thông tin sai lệch. Tính năng này được kích hoạt theo thuật toán và đôi khi bị sai. Chúng tôi đã vô hiệu hóa bảng tin với các video liên quan đến hỏa hoạn.
        </p>
      </div>
      
    </main>
  
  )
}
