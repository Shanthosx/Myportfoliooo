"use client"
import Image from "next/image"
import Link from "next/link"

export function Hero({
  setActiveSection,
}: {
  setActiveSection: (s: "graphics" | "video" | "photo" | "home" | "contact") => void
}) {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="flex justify-center md:justify-start mb-6">
              <Image
                src="/images/profilepic.png"
                alt="Profile"
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded-full border-4 border-green-matrix shadow-lg bg-black"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <h1 className="font-mono text-4xl sm:text-5xl text-balance text-green-matrix">
              {"SHANTHOSH RR"}
            </h1>
            <p className="text-sm leading-relaxed text-green-matrix/80 font-mono">
              {"Robotics Innovator & Full-Stack Developer | B.Tech CSE, Hindustan University, Chennai"}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                className="font-mono text-xs px-4 py-2 rounded border border-green-matrix text-black-deep bg-green-matrix hover:opacity-90 transition"
                onClick={() => setActiveSection("graphics")}
              >
                {"View Projects"}
              </button>
              <button
                className="font-mono text-xs px-4 py-2 rounded border border-green-matrix/40 text-green-matrix hover:border-green-matrix/70 transition"
                onClick={() => setActiveSection("video")}
              >
                {"Experience"}
              </button>
              <button
                className="font-mono text-xs px-4 py-2 rounded border border-green-matrix/40 text-green-matrix hover:border-green-matrix/70 transition"
                onClick={() => setActiveSection("photo")}
              >
                {"Skills"}
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-green-matrix/20 p-4 md:p-6 mt-6">
            <pre className="font-mono text-xs text-green-matrix/90 overflow-auto">
{`> who am i
  Shanthosh RR

> contact
  email: shanthosh1009@gmail.com
  phone: +91 8190031235

> profile
  India's First Young Scientist (Robotics)
  Young Scientist Award (Solar-Powered Bike)

> focus
  Robotics, Embedded Systems, IoT, Full-Stack Web

> education
  B.Tech CSE, Hindustan University (Pre-Final Year)`}
            </pre>
            <div className="mt-4">
              <Link
                href="/about"
                className="inline-block font-mono text-xs px-4 py-2 rounded border border-green-matrix/40 text-green-matrix hover:border-green-matrix/70 transition"
              >
                {"About Me"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
