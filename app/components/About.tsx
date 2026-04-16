export default function About() {
  const cards = [
    {
      title: "BS Bioengineering",
      subtitle: "University of the Pacific, 2017",
    },
    {
      title: "Livermore, CA",
      subtitle: "Open to Tri-Valley & Bay Area roles",
    },
    {
      title: "Systems Thinker",
      subtitle: "Hardware-first, AI-augmented",
    },
  ];

  return (
    <section id="about" className="w-full" style={{ background: "#F5F7FA" }}>
      <div
        className="max-w-[1200px] mx-auto px-6"
        style={{ paddingTop: "96px", paddingBottom: "96px" }}
      >
        {/* Section label */}
        <p
          className="text-[#0D2466] font-medium uppercase mb-3"
          style={{ fontSize: "13px", letterSpacing: "0.08em" }}
        >
          About
        </p>

        {/* Section title */}
        <h2
          className="text-[#1A1A2E] font-bold mb-12"
          style={{ fontSize: "36px", lineHeight: "1.2" }}
        >
          Who I Am
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Bio — takes 3 of 5 columns */}
          <div className="lg:col-span-3">
            <p
              className="text-[#1A1A2E]"
              style={{ fontSize: "17px", lineHeight: "1.8" }}
            >
              I&apos;m a systems and instrumentation engineer who walks into complex,
              partly-broken processes and turns them into something reliable,
              manufacturable, and trusted by the people who use them. I got my
              start in hands-on diagnostics and refurbishment, found my lane at
              RheoSense building manufacturing processes for viscometry instruments
              end-to-end, and have since worked across medical devices, microscopy
              NPI, and AI-backed operations tooling.
            </p>
            <p
              className="text-[#1A1A2E] mt-5"
              style={{ fontSize: "17px", lineHeight: "1.8" }}
            >
              My background spans the full product lifecycle — from assembly and
              calibration through test development, V&amp;V, and field support.
              I&apos;m trained in bioengineering, work in both hardware and software
              contexts, and I use AI as an engineering force multiplier, not a
              replacement for understanding the system. I&apos;m looking for a team
              building precision instruments or lab systems where I can own major
              chunks of the work and make them excellent.
            </p>
          </div>

          {/* Callout cards — takes 2 of 5 columns */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cards.map(({ title, subtitle }) => (
              <div
                key={title}
                className="bg-white px-6 py-5"
                style={{
                  borderLeft: "3px solid #0D2466",
                  boxShadow: "0 1px 4px rgba(13, 36, 102, 0.07)",
                }}
              >
                <p
                  className="text-[#1A1A2E] font-semibold"
                  style={{ fontSize: "16px" }}
                >
                  {title}
                </p>
                <p
                  className="text-[#4A5568] mt-1"
                  style={{ fontSize: "14px", lineHeight: "1.5" }}
                >
                  {subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
