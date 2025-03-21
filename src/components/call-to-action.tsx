import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="bg-yellow-500 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-0">
            GET YOUR FREE CONSULTATION AND ESTIMATE FOR YOUR PROJECT
          </h2>
          <Link
            href="#contact"
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  )
}

