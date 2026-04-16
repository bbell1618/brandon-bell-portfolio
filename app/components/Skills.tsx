interface SkillCategory {
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Instrumentation & Test",
    skills: [
      "Scientific instrument assembly & calibration",
      "Test fixture design",
      "QC procedure development",
      "V&V documentation",
      "Calibration protocol design",
      "Viscometry & microfluidics",
      "Field service & installs",
      "Design controls",
    ],
  },
  {
    title: "Systems & Process Engineering",
    skills: [
      "NPI (New Product Introduction)",
      "DFM / DFT",
      "BOM management",
      "Process mapping & SOP development",
      "Root cause analysis",
      "FMEA",
      "Requirements traceability",
      "Cross-functional collaboration",
    ],
  },
  {
    title: "Hardware & Prototyping",
    skills: [
      "SolidWorks / CAD",
      "FDM 3D printing",
      "Arduino & embedded systems",
      "Sensor integration",
      "PCB prototyping",
      "Mechatronics",
      "Tolerance analysis",
    ],
  },
  {
    title: "Software & AI Engineering",
    skills: [
      "Python",
      "JavaScript / TypeScript",
      "React, Next.js",
      "SQL / Supabase",
      "n8n workflow automation",
      "OpenRouter / LLM API integration",
      "Prompt engineering",
      "Vercel deployment",
    ],
  },
  {
    title: "Data & Analysis",
    skills: [
      "Experimental data processing",
      "MATLAB",
      "Statistical analysis",
      "Data visualization",
      "Instrument data analysis",
      "Calibration data modeling",
    ],
  },
  {
    title: "Communication & Documentation",
    skills: [
      "Technical report writing",
      "SOP & procedure writing",
      "Training & mentoring",
      "Application note writing",
      "Service documentation",
    ],
  },
];

function SkillBlock({ category }: { category: SkillCategory }) {
  return (
    <div
      className="bg-white px-7 py-6"
      style={{
        border: "1px solid #DDE3ED",
      }}
    >
      <h3
        className="text-[#0D2466] font-semibold mb-4"
        style={{ fontSize: "16px" }}
      >
        {category.title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="text-[#4A5568]"
            style={{ fontSize: "15px", lineHeight: "1.5" }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="w-full" style={{ background: "#F5F7FA" }}>
      <div
        className="max-w-[1200px] mx-auto px-6"
        style={{ paddingTop: "96px", paddingBottom: "96px" }}
      >
        {/* Section label */}
        <p
          className="text-[#0D2466] font-medium uppercase mb-3"
          style={{ fontSize: "13px", letterSpacing: "0.08em" }}
        >
          Skills
        </p>

        {/* Section title */}
        <h2
          className="text-[#1A1A2E] font-bold mb-12"
          style={{ fontSize: "36px", lineHeight: "1.2" }}
        >
          Technical Domains
        </h2>

        {/* 3-col on desktop, 2-col on tablet, 1-col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <SkillBlock key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
