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
    <div className="mx-auto mt-24 max-w-[1400px] px-5">
      <div className="flex items-end justify-between border-b-2 border-gray-200 pb-3">
        <div className="flex items-end gap-4">
          <span className="font-mono text-sm font-bold text-[#FFCC00]">{index}</span>
          <h2 className="font-display text-2xl font-black uppercase tracking-widest text-[#1A3D8F] md:text-3xl" style={{ fontFamily: 'Impact, sans-serif' }}>
            {label}
          </h2>
        </div>
        {rightLabel && (
          <span className="hidden font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 sm:block">
            {rightLabel}
          </span>
        )}
      </div>
    </div>
  );
}
