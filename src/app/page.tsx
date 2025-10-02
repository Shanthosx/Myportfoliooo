"use client"

import { useMemo, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { PortfolioGrid } from "@/components/PortfolioGrid"
import { Contact } from "@/components/Contact"

type PortfolioItem = {
  id: string
  title: string
  description: string
  category: "graphics" | "video" | "photo"
  image: string
  year: string
  tech: string[]
  type: "image" | "video"
}

const portfolioItems: PortfolioItem[] = [
  // Projects (mapped to "graphics")
  {
    id: "g1",
    title: "UAV Drone for Organ & Blood Transport",
    description:
      "Designed and developed a UAV drone to deliver organs/blood to hospitals and banks, recognized nationally.",
    category: "graphics",
    image: "/images/uav.jpg",
    year: "2024",
    tech: ["Arduino", "Raspberry Pi", "Embedded C", "GPS", "Telemetry"],
    type: "image",
  },
  {
    id: "g2",
    title: "Solar-Powered Bike",
    description:
      "Eco-friendly bike powered by solar energy; awarded Young Scientist by the State Minister.",
    category: "graphics",
    image: "/images/solar-bike.jpg",
    year: "2023",
    tech: ["Solar", "Battery Mgmt", "Motor Controller", "3D CAD"],
    type: "image",
  },
  {
    id: "g3",
    title: "Freelance Web Applications",
    description:
      "Full-stack freelance projects with rapid deployment and responsive UIs for client needs.",
    category: "graphics",
    image:
      "https://images.unsplash.com/photo-1551281044-8f6c1b96d02e?q=80&w=1080&fit=crop",
    year: "2025",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    type: "image",
  },

  // Experience (mapped to "video")
  {
    id: "v1",
    title: "IoT Developer – Blue Screen Programming Club",
    description:
      "Specializing in IoT within the department club; applying embedded + software skills (from Sep 2025).",
    category: "video",
    image: "/images/iot-cover.jpg",
    year: "2025",
    tech: ["IoT", "MQTT", "Python", "C/C++"],
    type: "image",
  },
  {
    id: "v2",
    title: "Awards – Young Scientist (Robotics, Solar Bike)",
    description:
      "India’s First Young Scientist (Robotics) and Young Scientist Award for Solar-Powered Bike.",
    category: "video",
    image:
      "https://images.unsplash.com/photo-1520975682031-ae5f89cd85c1?q=80&w=1080&fit=crop",
    year: "2023-2024",
    tech: ["Recognition", "Innovation", "Leadership"],
    type: "image",
  },

  // Skills (mapped to "photo")
  {
    id: "p1",
    title: "Programming & Databases",
    description: "Python, MySQL; building foundations for data analysis and services.",
    category: "photo",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080&fit=crop",
    year: "Current",
    tech: ["Python", "MySQL"],
    type: "image",
  },
  {
    id: "p2",
    title: "Robotics & IoT",
    description:
      "UAV drones, autonomous robotics, embedded systems, and IoT integration from school to university.",
    category: "photo",
    image:
      "https://images.unsplash.com/photo-1581093588401-16af2f2f5f86?q=80&w=1080&fit=crop",
    year: "Ongoing",
    tech: ["Arduino", "Raspberry Pi", "Sensors", "Actuators"],
    type: "image",
  },
  {
    id: "p3",
    title: "Full-Stack Development",
    description: "Beginner in full-stack; shipping freelance apps and learning data science foundations.",
    category: "photo",
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1080&fit=crop",
    year: "2025",
    tech: ["Next.js", "APIs", "Tailwind", "Vercel"],
    type: "image",
  },
]

export default function Page() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<"home" | "graphics" | "video" | "photo" | "contact">("home")
  const [showIntroPrompt, setShowIntroPrompt] = useState<boolean>(true)
  const [introAnswer, setIntroAnswer] = useState<string>("")

  // Matrix digital rain characters
  const matrixChars = useMemo(() => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?".split("")
    return Array.from({ length: 50 }, () => chars[Math.floor(Math.random() * chars.length)])
  }, [])

  // Control laser visibility on initial mount only
  const [showLaser, setShowLaser] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShowLaser(false), 1200)
    return () => clearTimeout(t)
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Hero setActiveSection={setActiveSection} />
      case "graphics":
        return <PortfolioGrid items={portfolioItems} category="graphics" />
      case "video":
        return <PortfolioGrid items={portfolioItems} category="video" />
      case "photo":
        return <PortfolioGrid items={portfolioItems} category="photo" />
      case "contact":
        return <Contact />
      default:
        return <Hero setActiveSection={setActiveSection} />
    }
  }

  return (
    <div className="min-h-screen bg-black-deep text-green-matrix relative overflow-x-hidden">
      {/* Thin laser line sweeping once on landing open */}
      {showLaser && activeSection === "home" && (
        <div className="pointer-events-none fixed inset-x-0 top-1/3 z-50" aria-hidden="true">
          <div className="laser-scan" />
        </div>
      )}

      {/* Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Matrix background effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-matrix/5 via-transparent to-green-matrix/5" />
        {matrixChars.map((char, index) => (
          <div
            key={index}
            className="absolute text-green-matrix font-mono text-xs animate-pulse"
            style={{
              left: `${(index * 20) % 100}%`,
              top: `${(index * 50) % 100}%`,
              animationDelay: `${index * 0.1}s`,
            }}
            aria-hidden="true"
          >
            {char}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main className={`relative z-10 transition filter ${showIntroPrompt ? "blur-sm" : "blur-0"}`}>{renderSection()}</main>

      {/* Intro Python-style prompt overlay */}
      {showIntroPrompt && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-xl mx-auto border border-green-matrix/30 rounded-lg p-5 bg-black-deep/90 shadow-xl">
            <div className="mb-3 font-mono text-[13px] text-green-matrix/80">{"python"}</div>
            <pre className="font-mono text-sm text-green-matrix overflow-auto whitespace-pre leading-relaxed">
{`print("Type YES to know about Shanthosh")\ninput()`}
            </pre>
            <label className="mt-4 block font-mono text-xs text-green-matrix/80" htmlFor="intro-answer">
              {">>>"}
            </label>
            <input
              id="intro-answer"
              className="mt-1 w-full font-mono text-sm bg-black-deep border border-green-matrix/30 rounded px-3 py-2 text-green-matrix outline-none focus:border-green-matrix/60"
              autoFocus
              placeholder="YES"
              value={introAnswer}
              onChange={(e) => setIntroAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (introAnswer.trim().toUpperCase() === "YES") {
                    // Open the landing (dismiss overlay)
                    setShowIntroPrompt(false)
                  } else {
                    setShowIntroPrompt(false)
                  }
                }
              }}
            />
          </div>
        </div>
      )}

      {/* Terminal-style footer */}
      {activeSection !== "home" && (
        <footer className="border-t border-green-matrix/30 bg-black-deep/95 py-4 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="font-mono text-green-dark text-sm">{"© 2025 Shanthosh RR | All rights reserved"}</div>
              <div className="font-mono text-green-dark text-sm mt-2 sm:mt-0">
                {"Last updated: "}
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
