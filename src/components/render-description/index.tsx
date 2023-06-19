export function RenderContent({ content }: { content: string }) {
  const lines = content.split('\n')
  return (
    <>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </>
  )
}
