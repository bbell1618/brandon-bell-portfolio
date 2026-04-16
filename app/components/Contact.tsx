interface ContactLink {
  label: string;
  value: string;
  href: string;
  ariaLabel: string;
}

const links: ContactLink[] = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/brandonbell1618",
    href: "https://linkedin.com/in/brandonbell1618",
    ariaLabel: "Brandon Bell on LinkedIn",
  },
  {
    label: "GitHub",
    value: "github.com/bbell1618",
    href: "https://github.com/bbell1618",
    ariaLabel: "Brandon Bell on GitHub",
  },
  {
    label: "Email",
    value: "bbell1618@gmail.com",
    href: "mailto:bbell1618@gmail.com",
    ariaLabel: "Email Brandon Bell",
  },
];

function ChevronRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 3L11 8L6 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-white">
      <div
        className="max-w-[1200px] mx-auto px-6 text-center"
        style={{ paddingTop: "96px", paddingBottom: "96px" }}
      >
        {/* Section label */}
        <p
          className="text-[#0D2466] font-medium uppercase mb-3"
          style={{ fontSize: "13px", letterSpacing: "0.08em" }}
        >
          Contact
        </p>

        {/* Section title */}
        <h2
          className="text-[#1A1A2E] font-bold mb-6"
          style={{ fontSize: "36px", lineHeight: "1.2" }}
        >
          Let&apos;s Talk
        </h2>

        {/* Subtext */}
        <p
          className="text-[#4A5568] mx-auto mb-14"
          style={{
            fontSize: "17px",
            lineHeight: "1.7",
            maxWidth: "560px",
          }}
        >
          I&apos;m currently open to mid-level Systems, R&amp;D, and Product Development
          Engineering roles in scientific instruments, medical devices, and lab
          automation. Tri-Valley and Bay Area preferred.
        </p>

        {/* Link cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {links.map(({ label, value, href, ariaLabel }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={ariaLabel}
              className="flex flex-col items-center gap-3 px-6 py-7 group contact-card"
              style={{
                border: "1px solid #DDE3ED",
              }}
            >
              <span
                className="text-[#0D2466] font-semibold uppercase"
                style={{ fontSize: "12px", letterSpacing: "0.08em" }}
              >
                {label}
              </span>
              <span
                className="text-[#1A1A2E] group-hover:text-[#0D2466] transition-colors duration-200 flex items-center gap-1.5"
                style={{ fontSize: "14px" }}
              >
                {value}
                <ChevronRight />
              </span>
            </a>
          ))}
        </div>

        {/* Location note */}
        <p
          className="text-[#4A5568]"
          style={{ fontSize: "14px" }}
        >
          Based in Livermore, CA — open to Pleasanton, Tri-Valley, and Bay Area roles
        </p>
      </div>
    </section>
  );
}
