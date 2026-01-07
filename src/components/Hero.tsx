
import Link from "next/link";
import * as productsData from "../data/products";

export default function Hero() {
    return (
        <section className="bg-orange-50 pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden relative">
            <div className="container-custom grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="space-y-6">
                    <span className="inline-block px-3 py-1 bg-white text-xs font-semibold tracking-wider uppercase rounded-full text-primary shadow-sm border border-orange-100">
                        Premium Lighting Collection
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                        Illuminate Your <br />
                        <span className="text-primary">World & Space</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                        Discover our exquisite collection of hanging lights, fancy wall lamps, and LED solutions.
                        Designed to bring warmth and elegance to your home.
                    </p>
                    <div className="pt-4 flex items-center space-x-4">
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white transition-all bg-primary rounded-full hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
                        >
                            Shop Collection
                        </Link>
                        <Link
                            href="/catalogue"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-gray-900 transition-all bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300"
                        >
                            View Catalogue
                        </Link>
                    </div>
                </div>

                {/* Hero Image / Composition */}
                <div className="relative h-[500px] flex items-center justify-center">
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[100px] -z-10 animate-pulse"></div>

                    {/* Main Image */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=2574&auto=format&fit=crop"
                            alt="Premium Jhummer Light"
                            className="max-w-full max-h-full object-cover rounded-3xl drop-shadow-2xl animate-float-slow"
                        />

                        {/* Floating Product Cards */}
                        <div className="absolute top-10 right-0 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float border border-white/50">
                            <img src={productsData.hanging[0]} className="w-12 h-12 object-contain rounded-lg bg-gray-100" alt="Hanging" />
                            <div className="pr-2">
                                <p className="text-xs font-bold text-gray-900">Modern Hanging</p>
                                <p className="text-[10px] text-gray-500">Best Seller</p>
                            </div>
                        </div>

                        <div className="absolute bottom-10 left-0 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float-delayed border border-white/50">
                            <img src={productsData.fancyWall[2]} className="w-12 h-12 object-contain rounded-lg bg-gray-100" alt="Wall" />
                            <div className="pr-2">
                                <p className="text-xs font-bold text-gray-900">Fancy Wall</p>
                                <p className="text-[10px] text-gray-500">New Arrival</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

