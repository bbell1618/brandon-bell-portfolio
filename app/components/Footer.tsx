export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{ background: "#0D2466" }}
    >
      <div
        className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <p
          className="text-white"
          style={{ fontSize: "14px", opacity: 0.85 }}
        >
          &copy; 2026 Brandon Bell
        </p>
        <p
          className="text-white"
          style={{ fontSize: "14px", opacity: 0.85 }}
        >
          Systems &amp; Instrumentation Engineer
        </p>
      </div>
    </footer>
  );
}
