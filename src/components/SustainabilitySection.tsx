
import Link from "next/link";
import * as productsData from "../data/products";

export default function SustainabilitySection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image side */}
                    <div className="relative h-[400px] bg-gray-50 rounded-3xl overflow-hidden group">
                        {/* Main Image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src={productsData.wall[0]}
                                alt="Sustainable Lighting"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content side */}
                    <div className="space-y-6">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                            Welcome To Gsons Store!
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our Commitment <br />
                            To Sustainability
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We want to meet the needs of the present without jeopardizing
                            future generations&apos; ability to meet their own. We prioritize eco-friendly packaging
                            and ethically sourced ingredients.
                        </p>
                        <Link
                            href="/about"
                            className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
                        >
                            More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
