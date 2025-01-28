import type { Metadata } from "next"
import { Zen_Maru_Gothic } from "next/font/google"
import "./globals.css"

// Specify the weight(s) you want to use
const zenMaruGothic = Zen_Maru_Gothic({ 
  subsets: ["latin"], 
  weight: ["400"] // Adjust the weight as needed
})

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
    <html lang="zh-Hant-TW" className={zenMaruGothic.className}>
      <body>{children}</body>
    </html>
  )
}
