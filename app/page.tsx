"use client"

import { useGreeting } from "../hooks/useGreeting"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { categories } from "../utils/greetings"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"

export default function SnakeYearGreeting() {
  const { greeting, generateGreeting, category, setCategory } = useGreeting()
  const { toast } = useToast()

  return (
    <div className="min-h-screen bg-red-600 flex flex-col items-center justify-center p-4">
      <main className="bg-background rounded-lg shadow-2xl p-8 max-w-md md:max-w-2xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">蛇年賀詞生成器</h1>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">選擇適合的賀詞類別、拿大紅包啦：</p>
          <Select value={category} onValueChange={(value) => setCategory(value as any)}>
            <SelectTrigger className="w-full text-foreground bg-background">
              <SelectValue placeholder="選擇類別" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat} className="text-foreground">
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div
          className="mb-4 h-32 flex items-center justify-center cursor-pointer hover:bg-accent rounded-lg transition-colors duration-200"
          onClick={() => {
            if (greeting) {
              navigator.clipboard.writeText(greeting)
              toast({
                title: "已複製到剪貼簿",
                description: "賀詞已成功複製，可以直接貼上使用。",
              })
            }
          }}
        >
          {greeting ? (
            <p className="text-2xl md:text-3xl font-semibold text-foreground">{greeting}</p>
          ) : (
            <p className="text-xl text-muted-foreground">點擊按鈕生成賀詞！</p>
          )}
        </div>
        {/* Add the note here */}
        <p className="text-sm text-muted-foreground mb-8">點擊生成的賀詞即可複製到剪貼簿。</p>
        <Button
          onClick={generateGreeting}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          生成賀詞
        </Button>
      </main>
      <Toaster />
      <footer className="mt-8 text-white text-sm">© 2024 蛇年賀詞生成器。版權所有。</footer>
    </div>
  )
}