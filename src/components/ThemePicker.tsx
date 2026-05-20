"use client";
import { useEffect, useMemo, useState } from "react";
import { Palette, X, RotateCcw, Check } from "lucide-react";

type Theme = {
  bg: string;       // page background
  panel: string;    // light panel
  accent: string;   // primary accent
  divider: string;  // section rule color
};

const DEFAULT: Theme = {
  bg: "#FFFFFF",
  panel: "#FAF7F2",
  accent: "#E0A24A",
  divider: "#C0392B",
};

const PRESETS: { name: string; theme: Theme }[] = [
  { name: "暖金 · 默认", theme: DEFAULT },
  { name: "深红典雅", theme: { bg: "#FFFFFF", panel: "#FAF5F3", accent: "#7E3F52", divider: "#A65A6F" } },
  { name: "森林墨绿", theme: { bg: "#FFFFFF", panel: "#F4F7F2", accent: "#2E5C45", divider: "#C0392B" } },
  { name: "海军深蓝", theme: { bg: "#FFFFFF", panel: "#F2F4F8", accent: "#1F3A6B", divider: "#C0392B" } },
  { name: "咖啡金棕", theme: { bg: "#FFFFFF", panel: "#F7F2EB", accent: "#8B5A2B", divider: "#C0392B" } },
  { name: "玫瑰粉调", theme: { bg: "#FFFFFF", panel: "#FBF4F7", accent: "#C97A8E", divider: "#A6485E" } },
  { name: "工业经典", theme: { bg: "#FFFFFF", panel: "#F5F5F5", accent: "#1A1A1A", divider: "#C0392B" } },
  { name: "电光紫", theme: { bg: "#FFFFFF", panel: "#F6F2FA", accent: "#6B3FA0", divider: "#C0392B" } },
];

const STORAGE_KEY = "rg-theme-v2";

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

function applyTheme(t: Theme) {
  if (typeof document === "undefined") return;
  const r = document.documentElement.style;
  r.setProperty("--c-bg-rgb", hexToRgb(t.bg));
  r.setProperty("--c-panel-rgb", hexToRgb(t.panel));
  r.setProperty("--c-accent-rgb", hexToRgb(t.accent));
  r.setProperty("--c-divider-rgb", hexToRgb(t.divider));
}

export default function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(DEFAULT);
  const [hydrated, setHydrated] = useState(false);

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

  useEffect(() => {
    if (!hydrated) return;
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
    } catch {}
  }, [theme, hydrated]);

  const isActive = useMemo(
    () => (p: Theme) =>
      p.accent.toLowerCase() === theme.accent.toLowerCase() &&
      p.divider.toLowerCase() === theme.divider.toLowerCase() &&
      p.panel.toLowerCase() === theme.panel.toLowerCase(),
    [theme]
  );

  const labels: { key: keyof Theme; title: string; desc: string }[] = [
    { key: "bg", title: "底色", desc: "页面主背景" },
    { key: "panel", title: "面板色", desc: "卡片 / 次级面板" },
    { key: "accent", title: "主色", desc: "强调字 / 链接 / 按钮 / 价格" },
    { key: "divider", title: "分割色", desc: "板块分割红线" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="主题颜色调节"
        className="fixed bottom-5 left-5 z-[60] flex items-center gap-2 border border-line bg-paper px-3 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-bone shadow-md transition hover:border-gold hover:text-gold"
      >
        <Palette size={14} className="text-gold" /> Theme
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-end bg-bone/30 backdrop-blur-sm md:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="ml-auto h-[100svh] w-full max-w-[380px] overflow-y-auto border-l border-line bg-paper text-bone shadow-xl md:h-auto md:max-h-[88vh] md:mr-6 md:border md:border-line"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between bg-gold px-4 py-3 text-paper">
              <div className="flex items-center gap-2">
                <Palette size={16} />
                <span className="font-display text-sm font-bold uppercase tracking-widest">
                  主题颜色调节
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="grid h-7 w-7 place-items-center border border-paper/70 hover:bg-paper hover:text-gold"
                aria-label="close"
              >
                <X size={14} />
              </button>
            </div>

            <div className="p-5">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-divider">
                // 快速预设
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {PRESETS.map((p) => {
                  const active = isActive(p.theme);
                  return (
                    <button
                      key={p.name}
                      onClick={() => setTheme(p.theme)}
                      className={`flex items-center gap-2 border px-2 py-2 text-left transition ${
                        active ? "border-gold bg-gold/10" : "border-line hover:border-gold"
                      }`}
                    >
                      <span className="flex">
                        <span className="block h-5 w-5 border border-line" style={{ background: p.theme.panel }} />
                        <span className="-ml-1 block h-5 w-5 border border-line" style={{ background: p.theme.accent }} />
                        <span className="-ml-1 block h-5 w-5 border border-line" style={{ background: p.theme.divider }} />
                      </span>
                      <span className="flex-1 font-mono text-[11px] font-bold uppercase tracking-widest text-bone">
                        {p.name}
                      </span>
                      {active && <Check size={12} className="text-gold" />}
                    </button>
                  );
                })}
              </div>

              <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-widest text-divider">
                // 自定义
              </p>
              <div className="mt-3 space-y-3">
                {labels.map((l) => (
                  <label
                    key={l.key}
                    className="flex items-center gap-3 border border-line bg-paper p-3"
                  >
                    <input
                      type="color"
                      value={theme[l.key]}
                      onChange={(e) => setTheme((t) => ({ ...t, [l.key]: e.target.value }))}
                      className="h-12 w-12 cursor-pointer border border-line bg-transparent p-0"
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
              <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-widest text-divider">
                // 预览
              </p>
              <div className="mt-3 border border-line bg-paper p-4">
                <div className="flex items-center justify-between border-b border-divider pb-2">
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-bone">
                    RAYGOO PARTS
                  </span>
                  <span className="bg-gold px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-paper">
                    RFQ
                  </span>
                </div>
                <div className="mt-3 border border-line bg-carbon p-3">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-divider">
                    // PRODUCT
                  </p>
                  <p className="mt-1 font-display text-base font-bold uppercase text-bone">
                    NM500 Wear Plate
                  </p>
                  <p className="mt-1 font-mono text-[11px] font-bold text-gold">
                    $0.95–$1.85 / kg
                  </p>
                </div>
                <button className="mt-3 w-full bg-gold px-3 py-2 font-display text-xs font-bold uppercase tracking-widest text-paper">
                  Get Quote →
                </button>
              </div>

              <button
                onClick={() => setTheme(DEFAULT)}
                className="mt-6 inline-flex items-center gap-2 border border-line px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-bone hover:border-gold hover:text-gold"
              >
                <RotateCcw size={12} /> 重置为默认
              </button>

              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-ash">
                // 选择保存在本机浏览器
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
