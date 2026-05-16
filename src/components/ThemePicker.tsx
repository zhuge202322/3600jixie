"use client";
import { useEffect, useMemo, useState } from "react";
import { Palette, X, RotateCcw, Check } from "lucide-react";

type Theme = { deep: string; mid: string; accent: string };

const DEFAULT: Theme = {
  deep: "#0A0A0B",
  mid: "#15171C",
  accent: "#FFD400",
};

const PRESETS: { name: string; theme: Theme }[] = [
  { name: "工业经典", theme: { deep: "#0A0A0B", mid: "#15171C", accent: "#FFD400" } },
  { name: "安全橙", theme: { deep: "#0A0A0B", mid: "#1A130D", accent: "#FF6B00" } },
  { name: "信号红", theme: { deep: "#0F0708", mid: "#1A0F12", accent: "#D7232A" } },
  { name: "海军深蓝", theme: { deep: "#070C18", mid: "#0F1A33", accent: "#4FB0FF" } },
  { name: "森林墨绿", theme: { deep: "#08120F", mid: "#11231D", accent: "#7DE8A6" } },
  { name: "暖金棕", theme: { deep: "#120F0A", mid: "#221C12", accent: "#E0A24A" } },
  { name: "玫瑰粉调", theme: { deep: "#1B0F14", mid: "#2B1820", accent: "#E89BB5" } },
  { name: "电光紫", theme: { deep: "#0B0816", mid: "#15102A", accent: "#B36CFF" } },
];

const STORAGE_KEY = "rg-theme";

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

function applyTheme(t: Theme) {
  if (typeof document === "undefined") return;
  const r = document.documentElement.style;
  r.setProperty("--c-deep-rgb", hexToRgb(t.deep));
  r.setProperty("--c-mid-rgb", hexToRgb(t.mid));
  r.setProperty("--c-accent-rgb", hexToRgb(t.accent));
}

export default function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(DEFAULT);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const t = JSON.parse(saved) as Theme;
        setTheme(t);
        applyTheme(t);
      }
    } catch {}
    setHydrated(true);
  }, []);

  // Persist + apply on change
  useEffect(() => {
    if (!hydrated) return;
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
    } catch {}
  }, [theme, hydrated]);

  const isPresetActive = useMemo(
    () => (p: Theme) =>
      p.deep.toLowerCase() === theme.deep.toLowerCase() &&
      p.mid.toLowerCase() === theme.mid.toLowerCase() &&
      p.accent.toLowerCase() === theme.accent.toLowerCase(),
    [theme]
  );

  function setKey(k: keyof Theme, v: string) {
    setTheme((t) => ({ ...t, [k]: v }));
  }

  const labels: { key: keyof Theme; title: string; desc: string }[] = [
    { key: "deep", title: "深色", desc: "顶栏 / 底栏 / 主背景 / 深底纹" },
    { key: "mid", title: "中色", desc: "面板 / 卡片底 / 次级容器" },
    { key: "accent", title: "主色", desc: "强调字 / 链接 / 按钮 / 价格" },
  ];

  return (
    <>
      {/* Floating launcher (left side, distinct from right contact panel) */}
      <button
        onClick={() => setOpen(true)}
        aria-label="主题颜色调节"
        className="fixed bottom-5 left-5 z-[60] flex items-center gap-2 border-2 border-bone bg-ink px-3 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-bone shadow-[4px_4px_0_rgb(var(--c-accent-rgb))] transition hover:border-gold hover:text-gold"
      >
        <Palette size={14} className="text-gold" /> Theme
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-end bg-ink/40 backdrop-blur-sm md:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="ml-auto h-[100svh] w-full max-w-[380px] overflow-y-auto border-l-2 border-gold bg-carbon text-bone shadow-[ -8px_0_24px_rgba(0,0,0,0.5) ] md:h-auto md:max-h-[88vh] md:mr-6 md:rounded-none md:border-2 md:border-gold"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-gold bg-gold px-4 py-3 text-ink">
              <div className="flex items-center gap-2">
                <Palette size={16} />
                <span className="font-display text-sm font-bold uppercase tracking-widest">
                  主题颜色调节
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="grid h-7 w-7 place-items-center border-2 border-ink hover:bg-ink hover:text-gold"
                aria-label="close"
              >
                <X size={14} />
              </button>
            </div>

            <div className="p-5">
              {/* Presets */}
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                // 快速预设
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {PRESETS.map((p) => {
                  const active = isPresetActive(p.theme);
                  return (
                    <button
                      key={p.name}
                      onClick={() => setTheme(p.theme)}
                      className={`group relative flex items-center gap-2 border-2 px-2 py-2 text-left transition ${
                        active ? "border-gold bg-gold/10" : "border-line/60 hover:border-gold"
                      }`}
                    >
                      <span className="flex">
                        <span
                          className="block h-5 w-5 border-2 border-ink"
                          style={{ background: p.theme.deep }}
                        />
                        <span
                          className="-ml-1 block h-5 w-5 border-2 border-ink"
                          style={{ background: p.theme.mid }}
                        />
                        <span
                          className="-ml-1 block h-5 w-5 border-2 border-ink"
                          style={{ background: p.theme.accent }}
                        />
                      </span>
                      <span className="flex-1 font-mono text-[11px] font-bold uppercase tracking-widest text-bone">
                        {p.name}
                      </span>
                      {active && <Check size={12} className="text-gold" />}
                    </button>
                  );
                })}
              </div>

              {/* Sliders / pickers */}
              <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                // 自定义三色
              </p>
              <div className="mt-3 space-y-3">
                {labels.map((l) => (
                  <label
                    key={l.key}
                    className="flex items-center gap-3 border-2 border-line/60 bg-ink p-3"
                  >
                    <input
                      type="color"
                      value={theme[l.key]}
                      onChange={(e) => setKey(l.key, e.target.value)}
                      className="h-12 w-12 cursor-pointer border-2 border-bone bg-transparent p-0"
                      aria-label={l.title}
                    />
                    <div className="flex-1">
                      <div className="font-display text-sm font-bold uppercase tracking-widest text-bone">
                        {l.title}
                      </div>
                      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-ash">
                        {l.desc}
                      </div>
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                      {theme[l.key].toUpperCase()}
                    </span>
                  </label>
                ))}
              </div>

              {/* Live preview */}
              <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                // 预览
              </p>
              <div className="mt-3 border-2 border-line/60">
                <div className="hazard h-2 w-full" />
                <div className="bg-ink p-4">
                  <div className="flex items-center justify-between border-b border-gold/40 pb-2">
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-bone">
                      RAYGOO PARTS
                    </span>
                    <span className="border border-gold px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-gold">
                      RFQ
                    </span>
                  </div>
                  <div className="mt-3 bg-carbon p-3">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                      // PRODUCT
                    </p>
                    <p className="mt-1 font-display text-base font-bold uppercase text-bone">
                      NM500 Wear Plate
                    </p>
                    <p className="mt-1 font-mono text-[11px] font-bold text-gold">
                      $0.95–$1.85 / kg
                    </p>
                  </div>
                  <button className="mt-3 w-full border-2 border-gold bg-gold px-3 py-2 font-display text-xs font-bold uppercase tracking-widest text-ink">
                    Get Quote →
                  </button>
                </div>
                <div className="hazard h-2 w-full" />
              </div>

              {/* Reset */}
              <button
                onClick={() => setTheme(DEFAULT)}
                className="mt-6 inline-flex items-center gap-2 border-2 border-line/60 px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-bone hover:border-gold hover:text-gold"
              >
                <RotateCcw size={12} /> 重置为默认
              </button>

              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-ash">
                // 选择保存在本机浏览器，刷新页面会保留。
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
