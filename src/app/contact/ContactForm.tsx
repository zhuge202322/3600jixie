"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErr("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error("Submit failed");
      setStatus("ok");
      form.reset();
    } catch (e2: unknown) {
      setStatus("err");
      setErr(e2 instanceof Error ? e2.message : "Error");
    }
  }

  const inputCls =
    "mt-1 w-full border-2 border-line/60 bg-ink px-3 py-2 text-bone outline-none transition focus:border-gold";
  const labelCls =
    "font-mono text-[10px] font-bold uppercase tracking-widest text-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelCls}>Name *</label>
          <input name="name" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Company</label>
          <input name="company" className={inputCls} />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelCls}>Email *</label>
          <input type="email" name="email" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Phone / WhatsApp</label>
          <input name="phone" className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Part Number / Model / Material</label>
        <input
          name="part"
          placeholder="e.g. NM500 16mm 2000x6000 / J300 / PC200 tooth"
          className={inputCls}
        />
      </div>
      <div>
        <label className={labelCls}>Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Quantity, drawing, application, target price..."
          className={inputCls}
        />
      </div>
      <button
        disabled={status === "loading"}
        type="submit"
        className="w-full border-2 border-gold bg-gold px-5 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-ink hover:bg-ink hover:text-gold disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry →"}
      </button>
      {status === "ok" && (
        <p className="border border-gold bg-gold/10 px-3 py-2 font-mono text-xs uppercase tracking-widest text-gold">
          // THANKS — WE WILL REPLY WITHIN 30 MINUTES
        </p>
      )}
      {status === "err" && (
        <p className="border border-brandRed bg-brandRed/10 px-3 py-2 font-mono text-xs uppercase tracking-widest text-brandRed">
          // {err}
        </p>
      )}
    </form>
  );
}
