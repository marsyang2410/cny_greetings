import { useState } from "react"
import { getRandomGreeting } from "../utils/greetings"

type GreetingCategory = "綜合" | "家庭" | "健康" | "事業" | "財富" | "英文"

export function useGreeting() {
  const [greeting, setGreeting] = useState<string>("")
  const [category, setCategory] = useState<GreetingCategory>("綜合")

  const generateGreeting = () => {
    setGreeting(getRandomGreeting(category))
  }

  return { greeting, generateGreeting, category, setCategory }
}

