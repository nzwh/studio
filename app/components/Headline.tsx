export default function Headline() {
  const headline = [[ '0',
    'hi there, i\'m van.', '0',
    'i design interfaces and', '0',
    'write the code',
  ], [
    'to bring them to life. ui/ux,', '0',
    'frontend,', '0',
    'product design,', '0',
  ], [
    'i got it.', '0',
    'and yes, i might notice if the spacing is off.', '0',
    'sorry.'
  ]]

  return (
    <div className="flex flex-col items-start -space-y-2 w-full">
        {headline.map((line, i) => (
        <div key={i} className="flex items-center gap-3 w-full overflow-hidden">
            {line.map((word, j) => word === '0' ? (
            <div key={j} className="flex-1 border border-zinc-200 rounded-full min-w-0 h-5" />
            ) : (
            <span key={j} className="font-light text-[clamp(1rem,3.7cqi,2rem)] tracking-tight whitespace-nowrap shrink-0">
                {word}
            </span>
            ))}
        </div>
        ))}
    </div>
  )
}