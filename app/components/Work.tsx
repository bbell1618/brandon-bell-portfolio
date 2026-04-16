interface Project {
  category: string;
  title: string;
  oneliner: string;
  body: string;
  resultStat: string;
  resultContext: string;
  placeholder: string;
}

const projects: Project[] = [
  {
    category: "Process Engineering",
    title: "Converting a Stalled Prototype into a Shippable Product",
    oneliner: "Viscometer chip cleaning station — RheoSense, Inc.",
    body: "Inherited a chip cleaning station that had been stalled in prototype limbo. I redesigned the cost structure, built custom test fixtures and SOPs, defined acceptance criteria, and launched 20 pre-order units in under six months. What was a cost center became a revenue-generating product line with full documentation, quality controls, and a repeatable production process.",
    resultStat: "242%",
    resultContext: "product-pipeline revenue increase — contributed by this and companion initiatives launched in the same cycle",
    placeholder: "HARDWARE PHOTO",
  },
  {
    category: "Instrumentation",
    title: "End-to-End Manufacturing Ownership, Initium Viscometer Platform",
    oneliner: "Manufacturing & process engineering — RheoSense, Inc.",
    body: "Owned the manufacturing process for the Initium and Initium One+ viscometer product lines — assembly, calibration, QC, BOM management, and vendor coordination. Designed calibration workflows targeting ≤0.3% measurement variance across production units, built out test fixtures, and supported Initium One+ production implementation from engineering samples through first production builds.",
    resultStat: "Full manufacturing ownership",
    resultContext: "across two commercial instrument lines — assembly through ISO-compliant QC",
    placeholder: "INSTRUMENT PHOTO",
  },
  {
    category: "Software & Systems",
    title: "Automating Technical Documentation for Microscopy NPI",
    oneliner: "Python workflow automation — ZEISS Microscopy",
    body: "At ZEISS, I supported new product introduction for microscopy platforms and built service documentation for the field organization. Identified a bottleneck in the documentation workflow — repetitive, high-effort formatting and content migration tasks — and automated it with a Python pipeline. Cut document production time significantly and freed the team to focus on content quality rather than formatting mechanics.",
    resultStat: "~47%",
    resultContext: "reduction in documentation cycle time through workflow automation",
    placeholder: "WORKFLOW DIAGRAM",
  },
  {
    category: "AI-Augmented Engineering",
    title: "PaperLens: Engineering an AI Pipeline for Scientific Literature",
    oneliner: "Full-stack AI product — Next.js, OpenRouter, Vercel",
    body: "Built PaperLens as an application of the same systems thinking I use in hardware — except the system is a scientific paper and the output is structured understanding. The product takes dense academic papers and produces plain-language explanations, methodology breakdowns, and key finding summaries using a multi-step AI reasoning pipeline I designed and implemented. Built with Next.js, deployed on Vercel, integrated with OpenRouter for model routing.",
    resultStat: "End-to-end AI product",
    resultContext: "design — from system architecture through deployment and user testing",
    placeholder: "PRODUCT SCREENSHOT",
  },
  {
    category: "Systems Engineering",
    title: "Building Operating Infrastructure from Zero",
    oneliner: "Data architecture, workflow automation, AI tooling — Golden Era Insurance Agency",
    body: "Joined a three-person team with no data infrastructure, no documentation system, and manual processes for everything. Applied the same instinct I use in instruments: map the system, find the failure modes, build structure around them. Designed and built a carrier and market data architecture, created risk appetite and comparison tools, and developed AI-backed automation including an email assistant and ACORD form auto-filler. Built using React, Next.js, Supabase, and n8n.",
    resultStat: "Full operational data architecture",
    resultContext: "and AI tooling suite built with zero prior infrastructure",
    placeholder: "SYSTEMS DIAGRAM",
  },
  {
    category: "Independent Projects",
    title: "Engineering Is Everywhere — Home Automation & Hardware Builds",
    oneliner: "Arduino, 3D printing, embedded systems — independent",
    body: "The same optimization instinct that drives my professional work shows up at home. Ongoing projects include custom Arduino-based sensing and automation systems, FDM 3D-printed parts designed in CAD for specific functional purposes, and electronics projects that let me stay sharp on embedded systems and hardware prototyping outside of work. These are learning projects, curiosity projects, and proof that the engineering mindset doesn't clock out — it just finds new problems to solve.",
    resultStat: "Active hardware builds",
    resultContext: "using Arduino, FDM 3D printing, and custom CAD — ongoing",
    placeholder: "HARDWARE PHOTO",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="bg-white flex flex-col group card-hover"
      style={{
        border: "1px solid #DDE3ED",
        boxShadow: "0 1px 3px rgba(13, 36, 102, 0.05)",
      }}
    >
      {/* Image placeholder */}
      <div
        className="w-full flex items-center justify-center"
        style={{ height: "200px", background: "#EEF1F6" }}
      >
        <span
          className="text-[#9AA5B8] font-medium uppercase"
          style={{ fontSize: "12px", letterSpacing: "0.1em" }}
        >
          {project.placeholder}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">
        {/* Category tag */}
        <span
          className="inline-block self-start mb-4 px-3 py-1 text-[#0D2466] uppercase font-medium"
          style={{
            fontSize: "11px",
            letterSpacing: "0.08em",
            background: "#EEF1F6",
            borderRadius: "2px",
          }}
        >
          {project.category}
        </span>

        {/* Title */}
        <h3
          className="text-[#1A1A2E] font-bold mb-2"
          style={{ fontSize: "20px", lineHeight: "1.3" }}
        >
          {project.title}
        </h3>

        {/* One-liner */}
        <p
          className="text-[#4A5568] mb-4"
          style={{ fontSize: "14px", lineHeight: "1.5" }}
        >
          {project.oneliner}
        </p>

        {/* Body */}
        <p
          className="text-[#4A5568] flex-1"
          style={{ fontSize: "15px", lineHeight: "1.75" }}
        >
          {project.body}
        </p>

        {/* Key result callout */}
        <div
          className="mt-6 px-5 py-4"
          style={{
            borderLeft: "3px solid #0D2466",
            background: "#F0F4FF",
          }}
        >
          <span
            className="text-[#0D2466] font-bold"
            style={{ fontSize: "16px" }}
          >
            {project.resultStat}
          </span>{" "}
          <span
            className="text-[#4A5568]"
            style={{ fontSize: "14px" }}
          >
            {project.resultContext}
          </span>
        </div>

        {/* Read more */}
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1.5 text-[#0D2466] font-medium hover:text-[#162E8A] transition-colors duration-200"
          style={{ fontSize: "14px" }}
        >
          Read More
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="w-full bg-white">
      <div
        className="max-w-[1200px] mx-auto px-6"
        style={{ paddingTop: "96px", paddingBottom: "96px" }}
      >
        {/* Section label */}
        <p
          className="text-[#0D2466] font-medium uppercase mb-3"
          style={{ fontSize: "13px", letterSpacing: "0.08em" }}
        >
          Work
        </p>

        {/* Section title */}
        <h2
          className="text-[#1A1A2E] font-bold mb-12"
          style={{ fontSize: "36px", lineHeight: "1.2" }}
        >
          Selected Projects
        </h2>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
