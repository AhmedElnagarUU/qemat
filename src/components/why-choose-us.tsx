import { Check } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            THE REASONS WHY YOU SHOULD CHOOSE OUR COMPANY
          </h2>
 
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Modern and Diverse Fleet</h3>
                <p className="text-gray-300">
                  We offer a wide range of modern equipment that meets various project needs, from small-scale
                  operations to large industrial projects.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Reliable Equipment</h3>
                <p className="text-gray-300">
                  We provide the latest machinery that meets the highest safety and quality standards, ensuring reliable
                  performance throughout your project.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-gray-300">
                  We offer flexible rental solutions for all budgets, with transparent pricing and no hidden fees.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Comprehensive Technical Support</h3>
                <p className="text-gray-300">
                  Our specialized team is ready to provide maintenance and assistance to ensure uninterrupted operations
                  throughout your rental period.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                <p className="text-gray-300">
                  We ensure your equipment arrives on schedule for seamless project execution, minimizing downtime and
                  delays.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Integrated Transportation Services</h3>
                <p className="text-gray-300">
                  We guarantee the equipment reaches your worksite on time with our fleet of trucks equipped with
                  lifting cranes for safe and efficient delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

