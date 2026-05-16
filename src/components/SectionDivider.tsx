export default function SectionDivider({
  index,
  label,
  rightLabel,
}: {
  index: string;
  label: string;
  rightLabel?: string;
}) {
  return (
    <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 pt-20">
      <span className="border border-gold px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
        {index}
      </span>
      <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-bone">
        {label}
      </span>
      <span className="h-px flex-1 tick-line" />
      {rightLabel && (
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
          {rightLabel}
        </span>
      )}
    </div>
  );
}
