export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Dot-grid background at very low opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #DDE3ED 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-6 text-center"
        style={{ paddingTop: "160px", paddingBottom: "120px" }}>

        {/* Label */}
        <p
          className="inline-block text-[#0D2466] font-medium uppercase mb-6"
          style={{ fontSize: "13px", letterSpacing: "0.12em" }}
        >
          Systems &amp; Instrumentation Engineer
        </p>

        {/* Name */}
        <h1
          className="text-[#1A1A2E] font-extrabold mb-6"
          style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: "1.05", fontWeight: 800 }}
        >
          Brandon Bell
        </h1>

        {/* Subtitle */}
        <p
          className="text-[#4A5568] font-normal mx-auto mb-10"
          style={{ fontSize: "24px", lineHeight: "1.5", maxWidth: "600px", fontWeight: 400 }}
        >
          I build the processes and tools that make precision measurement work.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#work"
            className="inline-block px-8 py-3.5 bg-[#0D2466] text-white font-medium text-[15px] hover:bg-[#162E8A] transition-colors duration-200"
            style={{ letterSpacing: "0.02em" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 border border-[#0D2466] text-[#0D2466] font-medium text-[15px] hover:bg-[#0D2466] hover:text-white transition-colors duration-200 bg-white"
            style={{ letterSpacing: "0.02em" }}
          >
            Get in Touch
          </a>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-[#DDE3ED] mx-auto mb-12" />

        {/* Stat callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { stat: "8 Years", label: "Engineering Experience" },
            { stat: "3 Industries", label: "Instruments, Devices, Lab Systems" },
            { stat: "6 Projects", label: "Featured Below" },
          ].map(({ stat, label }) => (
            <div key={stat} className="flex flex-col items-center gap-1">
              <span
                className="text-[#0D2466] font-bold"
                style={{ fontSize: "28px", lineHeight: "1.2" }}
              >
                {stat}
              </span>
              <span
                className="text-[#4A5568] font-normal text-center"
                style={{ fontSize: "14px", lineHeight: "1.5" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
