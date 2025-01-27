import type { Metadata } from "next"
import { Noto_Sans_TC } from "next/font/google"
import "./globals.css"

const notoSansTC = Noto_Sans_TC({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "蛇年賀詞生成器",
  description: "一鍵生成蛇年新春祝福語！",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant-TW" className={notoSansTC.className}>
      <body>{children}</body>
    </html>
  )
}

