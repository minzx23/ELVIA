interface HighlightTextProps {
  text: string;
  highlight?: string;
  after?: string;
  highlightClassName?: string;
}

export default function HighlightText({
  text,
  highlight,
  after,
  highlightClassName = 'text-[#4a90e2]',
}: HighlightTextProps) {
  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, i) => {
        const isLast = i === lines.length - 1;

        return (
          <span key={i}>
            {line}
            {isLast && highlight && <span className={highlightClassName}>{highlight}</span>}
            {isLast && after}
            {!isLast && <br />}
          </span>
        );
      })}
    </>
  );
}
