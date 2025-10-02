"use client"

export function Contact() {
  return (
    <section aria-labelledby="contact-title" className="py-10 md:py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="contact-title" className="font-mono text-2xl text-green-matrix mb-4">
          {"Contact"}
        </h2>
        <p className="font-mono text-sm text-green-matrix/80 mb-6">{"Open to internships and freelance opportunities."}</p>

        <div className="rounded-lg border border-green-matrix/30 p-4 space-y-3">
          <a
            className="block font-mono text-sm text-green-matrix underline underline-offset-4 hover:opacity-90"
            href="mailto:shanthosh1009@gmail.com?subject=Portfolio%20Inquiry"
          >
            {"shanthosh1009@gmail.com"}
          </a>
          <p className="font-mono text-xs text-green-matrix/70">{"Phone: +91 8190031235 | Chennai, India"}</p>
        </div>
      </div>
    </section>
  )
}
