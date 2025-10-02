"use client"

type Section = "home" | "graphics" | "video" | "photo" | "contact"

export function Header({
  activeSection,
  setActiveSection,
}: {
  activeSection: Section
  setActiveSection: (s: Section) => void
}) {
  const navItems: { key: Section; label: string }[] = [
    { key: "home", label: "About" },
    { key: "graphics", label: "Projects" },
    { key: "video", label: "Experience" },
    { key: "photo", label: "Skills" },
    { key: "contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-20 border-b border-green-matrix/20 bg-black-deep/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="font-mono text-green-matrix text-sm">{"$"} {"echo shanthosh@portfolio"}</div>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = item.key === activeSection
              return (
                <li key={item.key}>
                  <button
                    type="button"
                    onClick={() => setActiveSection(item.key)}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-mono text-xs sm:text-sm px-3 py-1 rounded border transition-colors
                      ${
                        isActive
                          ? "bg-green-matrix text-black-deep border-green-matrix"
                          : "text-green-matrix/80 border-green-matrix/30 hover:text-green-matrix hover:border-green-matrix/60"
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
