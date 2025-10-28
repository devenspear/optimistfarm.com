export interface BookPage {
  id: number
  title: string
  text: string
  spreadId: string
  imagePosition: 'random' | 'left' | 'right' | 'center'
  backgroundColor: string
  textColor: string
  sound?: 'soil' | 'sun' | 'rain' | 'wind' | 'bees' | 'magic' | 'crunch' | 'gentle' | 'sparkle'
  interactive?: boolean
  randomPosition?: { top: string; left: string; rotate: string }
}

export const pages: BookPage[] = [
  // Cover Page
  {
    id: 0,
    title: "Barnaby Bunny's Garden",
    text: "A Story About Patience and Gratitude",
    spreadId: "BunnyCover",
    imagePosition: "center",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "gentle"
  },

  // Spread 1-2: Setup
  {
    id: 1,
    title: "In a Sunny Garden",
    text: "In a sunny garden, in his overalls blue,\nBarnaby Bunny had work to do.\nHe held his new watering can, shiny and red,\nTo water the seeds in their cozy soil bed.",
    spreadId: "1-2",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "gentle",
    interactive: true
  },

  // Spread 3-4: Problem Setup
  {
    id: 2,
    title: "Waiting and Waiting",
    text: "One day, two days, three days went past,\nBarnaby wanted his sprouts up fast.\nHe watched the soil, his heart sank down,\nHis hopeful smile turned to a frown.",
    spreadId: "3-4",
    imagePosition: "right",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "gentle"
  },

  // Spread 5-6: Problem
  {
    id: 3,
    title: "Barnaby Gets Frustrated",
    text: "He stomped his foot, his mind in a rush,\nHe checked every morning, he made such a fuss.\n(Harrumph!) \"They won't grow! This is all too tough!\"\nHe huffed and he puffed. He'd had quite enough.",
    spreadId: "4-5",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "gentle",
    interactive: true
  },

  // Spread 7-8: Rising Action/Guide
  {
    id: 4,
    title: "Ollie the Owl",
    text: "He sat by his garden, \"What can I do?\nMy carrots won't grow, I'm feeling so blue!\"\nOllie the Owl, with his spectacles bright,\nHooted from his perch, \"Patience, my friend. Just look for the light.\"",
    spreadId: "6-7",
    imagePosition: "right",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "gentle"
  },

  // Spread 9-10: Turning Point
  {
    id: 5,
    title: "The Magic Light",
    text: "As Ollie spoke, a soft light gleamed,\nHis wisdom woke the magic, it seemed!\nBarnaby sat still, his worries took drift,\nHe looked for the day's small, wonderful gift.",
    spreadId: "8-9",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "magic",
    interactive: true
  },

  // Spread 11-12: Practice/Growth
  {
    id: 6,
    title: "Thank You, Sun and Rain!",
    text: "He saw a small sprout, and sang with glee,\n\"Thank you, dear Sun, for shining on me!\"\nHe felt the cool drops, so happy and low,\n\"Thank you, dear Rain, for helping it grow!\"",
    spreadId: "10-11",
    imagePosition: "right",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "sun",
    interactive: true
  },

  // Spread 13-14: Growth
  {
    id: 7,
    title: "Thank You, Earth and Bees!",
    text: "\"Thank you, good Earth,\" he twirled with a zing.\nHe heard the bee hum and the soft wind sing.\n\"Thank you, new sprout, for growing right here!\"\nHis happy, joyful heart felt full of cheer.",
    spreadId: "12-13",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "bees",
    interactive: true
  },

  // Spread 15-16: Growth
  {
    id: 8,
    title: "Day After Day",
    text: "Day after day, he practiced this way,\nFinding new things to be grateful for each day.\nThe sprouts grew up tall, glowing green and bright,\nHis heart filled with joy, his heart filled with light.",
    spreadId: "14-15",
    imagePosition: "right",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "sparkle",
    interactive: true
  },

  // Spread 17-18: Climax
  {
    id: 9,
    title: "Carrots Pop Up!",
    text: "Then carrots popped up! Orange, crisp, and new!\nHis patience and gratitude helped them push through.\nHe let out a breath, quiet and deep,\nThe happy reward the garden loves to keep.",
    spreadId: "16-17",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "magic",
    interactive: true
  },

  // Spread 18-20: Resolution
  {
    id: 10,
    title: "Sharing with Friends",
    text: "He shared with his friends! Crunch, crunch, yum!\nGus the Goat nibbled, (beard and all, what fun!)\nChristy the Cow did a happy dance,\n\"Thank you, dear Barnaby!\" they cheered at first glance.",
    spreadId: "18-19",
    imagePosition: "right",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "crunch"
  },

  // Spread 21-22: Falling Action
  {
    id: 11,
    title: "Starry Night",
    text: "That night by the meadow, the friends looked up high,\nWatching the stars in the dark, velvet sky.\nBarnaby's heart glowed, both happy and bright,\nGratitude sparkled in the soft, quiet night.",
    spreadId: "20-21",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "sparkle",
    interactive: true
  },

  // Spread 23-24: Final Affirmation
  {
    id: 12,
    title: "Your Turn!",
    text: "A 'thank you' helps love and kindness grow,\nIt's a magical seed that you can sow.\nYour heart is a garden, happy and true!\nWhat's one small thing you are grateful for, too?",
    spreadId: "22-24",
    imagePosition: "left",
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    sound: "sparkle",
    interactive: true
  }
]