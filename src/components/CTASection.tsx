"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";

export default function CTASection({ lang = "en" }: { lang?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dict = getDictionary(lang);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert(dict.inquirySent || "Inquiry sent successfully! We will reply within 30 minutes.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section className="relative bg-[#1A3D8F] py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000_100%),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000_100%)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text & Contact Info */}
          <div className="text-white">
            <div className="inline-block bg-[#E0A24A] px-3 py-1 mb-6">
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                // {dict.getInTouch || "GET IN TOUCH"}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6" style={{ fontFamily: 'Impact, sans-serif' }}>
              {dict.ctaTitle}
            </h2>
            
            <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-lg">
              {dict.ctaDesc}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <Phone className="text-[#E0A24A]" size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-blue-300 tracking-[0.2em] uppercase mb-1">{dict.callUs}</h4>
                  <p className="text-xl font-bold tracking-wide">{site.tel}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <Mail className="text-[#E0A24A]" size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-blue-300 tracking-[0.2em] uppercase mb-1">{dict.emailUs}</h4>
                  <p className="text-xl font-bold tracking-wide">{site.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <MapPin className="text-[#E0A24A]" size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-blue-300 tracking-[0.2em] uppercase mb-1">{dict.hq}</h4>
                  <p className="text-sm font-bold tracking-wide leading-relaxed max-w-xs">{site.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Area */}
          <div className="w-full">
            <div className="border border-[#E0A24A] bg-white shadow-2xl">
              {/* Header Bar */}
              <div className="bg-[#E0A24A] px-6 py-5">
                <h3 className="text-white font-bold text-sm tracking-[0.2em] uppercase flex items-center gap-3">
                  <span className="w-4 h-1 bg-white inline-block"></span>
                  {dict.inquiryForm} · {dict.minReply}
                </h3>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6 md:p-10">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[#E0A24A] font-bold text-[11px] tracking-widest uppercase mb-2">
                      {dict.name}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 focus:outline-none focus:border-[#E0A24A] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[#E0A24A] font-bold text-[11px] tracking-widest uppercase mb-2">
                      {dict.company}
                    </label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 focus:outline-none focus:border-[#E0A24A] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[#E0A24A] font-bold text-[11px] tracking-widest uppercase mb-2">
                      {dict.email}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 focus:outline-none focus:border-[#E0A24A] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-[#E0A24A] font-bold text-[11px] tracking-widest uppercase mb-2">
                      {dict.phone}
                    </label>
                    <input
                      type="tel"
                      className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 focus:outline-none focus:border-[#E0A24A] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Part Number */}
                <div className="mb-6">
                  <label className="block text-[#E0A24A] font-bold text-[11px] tracking-widest uppercase mb-2">
                    {dict.partModel}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. NM500 16mm 2000×6000 / J300 / PC200 tooth"
                    className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#E0A24A] focus:bg-white transition-all"
                  />
                </div>

                {/* Message */}
                <div className="mb-10">
                  <label className="block text-[#E0A24A] font-bold text-[11px] tracking-widest uppercase mb-2">
                    {dict.message}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Quantity, drawing, application, target price..."
                    className="w-full border-b-2 border-gray-200 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#E0A24A] focus:bg-white transition-all resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E0A24A] hover:bg-[#C58A35] text-white font-bold text-sm tracking-[0.2em] uppercase py-5 flex items-center justify-center gap-3 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? dict.sending : dict.sendInquiry} 
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
