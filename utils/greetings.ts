type GreetingCategory = "綜合" | "家庭" | "健康" | "事業" | "英文"

const greetings: Record<GreetingCategory, string[]> = {
  綜合: [
    "新年快樂，萬事如意！",
    "恭喜發財，紅包拿來！",
    "祝您在新的一年裡身體健康，萬事如意！",
    "願您新年快樂，吉星高照！",
    "祝您新春愉快，闔家歡樂！",
    "蛇舞春風，吉祥如意！",
    "金蛇獻瑞，福運滾滾！",
    "靈蛇報喜，瑞氣盈門！",
    "蛇年大吉，萬象更新！",
    "瑞蛇迎春，祥瑞滿堂！",
    "蛇(時)來運轉！",
    "百蛇(事)可樂！",
    "喜蛇(事)臨門！",
    "好蛇(事)成雙！",
    "有蛇(捨)有得！",
    "蛇(十)拿九穩！",
    "蛇(十)分美滿！",
    "蛇蛇(事事)如意！",
    "嘶嘶(事事)順心！",
    "蛇(石)破天驚！",
    "一蛇(石)二鳥！",
    "魯蛇(Loser)翻身！",
    "豐衣足蛇(食)！",
    "蛇麼攏賀(什麼都好)！",
  ],
  家庭: [
    "金蛇添彩，家和萬事興！",
    "蛇年吉祥，萬事如意！",
    "靈蛇納福，幸福圓滿！",
    "祝您闔家安康，幸福綿長！",
    "願您全家團圓，和樂融融！",
    "蛇年平安，福滿靈蛇！",
    "蛇兆安康，蛇福滿門！",
    "壽與蛇長，吉慶滿堂！",
    "福滿人間，祥蛇護家！",
    "金蛇呈祥，日子甜美！",
  ],
  健康: [
    "蛇舞祥雲，幸福人間！",
    "金蛇送福，健康長壽！",
    "靈蛇護身，平安喜樂！",
    "願您龍馬精神，身體康泰！",
    "祝您健康長壽，福壽安康！",
    "蛇年平安，福運隨行！",
    "蛇兆康寧，健康長伴！",
    "靈蛇送瑞，壽與天齊！",
    "平安如意，蛇福安康！",
    "福滿靈蛇，健康吉祥！",
  ],
  事業: [
    "蛇氣沖天，事業興旺！",
    "金蛇添翼，學業飛躍！",
    "蛇行順風，事事順心！",
    "靈蛇點金，功成名就！",
    "祝您事業輝煌，步步高升！",
    "蛇行千里，事業昌隆！",
    "蛇步青雲，宏圖大展！",
    "靈蛇飛舞，事業興盛！",
    "瑞蛇啟運，百業興旺！",
    "龍蛇共舞，前程似錦！",
  ],
  財富: [
    "蛇財進寶，步步高升！",
    "金蛇獻瑞，財源滾滾！",
    "靈蛇吐寶，富貴滿堂！",
    "蛇行大運，財運亨通！",
    "祝您生意興隆，財源滾滾！",
    "蛇舞財源，金蛇吐寶！",
    "財如靈蛇，源源不絕！",
    "金蛇賀歲，富貴臨門！",
    "祥蛇獻瑞，財富倍增！",
    "財源廣進，瑞蛇迎春！",
  ],
  英文: [
    "Wish you good luck in the year of the snake.",
    "Wishing you luck for the new year.",
    "May you be happy and prosperous.",
    "May everything goes well for you.",
    "May the five blessings (longevity, wealth, health, virtue, and a natural death) come to you.",
    "May all that you do go smoothly.",
    "May your year be filled with an abundance of smiles and laughter.",
    "May you have rapid advancement in your career.",
    "May you have peace at every age.",
    "Surplus & abundance year after year.",
  ],
};



export function getRandomGreeting(category: GreetingCategory): string {
  const categoryGreetings = greetings[category]
  const randomIndex = Math.floor(Math.random() * categoryGreetings.length)
  return categoryGreetings[randomIndex]
}

export const categories: GreetingCategory[] = ["綜合", "家庭", "健康", "事業", "財富", "英文"]

