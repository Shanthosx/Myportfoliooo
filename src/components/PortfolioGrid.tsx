"use client"
import Image from "next/image"

type Item = {
  id: string
  title: string
  description: string
  category: "graphics" | "video" | "photo"
  image: string
  year: string
  tech: string[]
  type: "image" | "video"
}

export function PortfolioGrid({
  items,
  category,
}: {
  items: Item[]
  category: "graphics" | "video" | "photo"
}) {
  const filtered = items.filter((i) => i.category === category)

  return (
    <section aria-labelledby={`${category}-title`} className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between mb-6">
          <h2 id={`${category}-title`} className="font-mono text-2xl text-green-matrix">
            {category === "graphics" ? "Projects" : category === "video" ? "Experience" : "Skills"}
          </h2>
          <span className="font-mono text-xs text-green-matrix/70">
            {filtered.length} {"items"}
          </span>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <li
              key={item.id}
              className="group rounded-lg border border-green-matrix/20 overflow-hidden hover:border-green-matrix/50 transition"
            >
              <div className="aspect-video bg-black-deep relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={70}
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  priority={false}
                />
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-green-matrix text-sm">{item.title}</h3>
                  <span className="font-mono text-[10px] text-green-matrix/70 border border-green-matrix/20 rounded px-1.5 py-0.5">
                    {item.year}
                  </span>
                </div>
                <p className="text-[12px] leading-relaxed text-green-matrix/80">{item.description}</p>

                <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies">
                  {item.tech.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-[10px] text-green-matrix/80 border border-green-matrix/20 rounded px-1.5 py-0.5"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
