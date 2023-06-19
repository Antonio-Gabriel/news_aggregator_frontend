export function shuffleContent(contents: any[]) {
  const shuffledContentsArray = [...contents]

  for (let i = shuffledContentsArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[shuffledContentsArray[i], shuffledContentsArray[randomIndex]] = [
      shuffledContentsArray[randomIndex],
      shuffledContentsArray[i],
    ]
  }
  return shuffledContentsArray
}
