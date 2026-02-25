
import Link from "next/link";
import * as productsData from "../data/products";

export default function SustainabilitySection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image side */}
                    <div className="relative h-[450px] md:h-[550px] group">
                        <div className="absolute inset-0 bg-orange-100 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                        <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl transition-transform group-hover:-translate-y-2 duration-500">
                            <img
                                src={productsData.wall[0]}
                                alt="Sustainable Lighting"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl">
                                <p className="text-gray-900 font-bold text-lg">Eco-Friendly</p>
                                <p className="text-gray-500 text-sm font-medium">100% Recyclable Materials</p>
                            </div>
                        </div>
                    </div>

                    {/* Content side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                                Our Vision
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                Commitment <br />
                                To <span className="text-primary">Our Planet</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                We believe in meeting today's needs without compromising the future. Every product at Gsons is a testament to our dedication to sustainable living.
                            </p>

                            <ul className="space-y-3">
                                {[
                                    "Ethically Sourced Materials",
                                    "Minimal Waste Packaging",
                                    "Energy Efficient Technology"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center px-10 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/20 hover:-translate-y-1 active:scale-95"
                        >
                            Our Story
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
