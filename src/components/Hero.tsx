
import Link from "next/link";
import * as productsData from "../data/products";

export default function Hero() {
    return (
        <section className="bg-orange-50 pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden relative">
            <div className="container-custom grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1.5 bg-orange-100/50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full shadow-sm border border-orange-200/50">
                            Professional Lighting Solutions
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1]">
                            Lighting That <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Defines Your Space</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-lg leading-relaxed font-medium">
                            Experience the perfect blend of innovation and elegance. Our curated collection brings professional-grade lighting to your projects.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link
                            href="/products"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all bg-primary rounded-xl hover:bg-orange-600 shadow-xl shadow-orange-500/25 hover:-translate-y-1 active:scale-95"
                        >
                            Explore Products
                        </Link>
                        <Link
                            href="/catalogues"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-bold text-gray-900 transition-all bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 active:scale-95"
                        >
                            View Catalogues
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-orange-200/30">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm">
                            <p className="font-bold text-gray-900">500+ Architects</p>
                            <p className="text-gray-500">Trust our quality</p>
                        </div>
                    </div>
                </div>

                {/* Hero Image / Composition */}
                <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-300/30 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                    <div className="absolute top-1/4 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] -z-10"></div>

                    {/* Main Image Container */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center group/hero">
                        <div className="relative w-4/5 h-4/5 overflow-hidden rounded-[2rem] shadow-2xl transition-transform duration-700 hover:rotate-1">
                            <img
                                src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2574&auto=format&fit=crop"
                                alt="Premium Lighting Design"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating Product Cards - More Professional */}
                        <div className="absolute -top-4 -right-2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-float border border-white/50 group hover:scale-105 transition-transform cursor-pointer">
                            <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center p-2">
                                <img src={productsData.hanging[0]} className="w-full h-full object-contain" alt="Hanging" />
                            </div>
                            <div className="pr-4">
                                <p className="text-sm font-bold text-gray-900">Premium Series</p>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 bg-orange-400 rounded-full"></div>)}
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-float-delayed border border-white/50 group hover:scale-105 transition-transform cursor-pointer">
                            <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center p-2">
                                <img src={productsData.fancyWall[2]} className="w-full h-full object-contain" alt="Wall" />
                            </div>
                            <div className="pr-4">
                                <p className="text-sm font-bold text-gray-900">New Arrivals</p>
                                <p className="text-xs text-primary font-semibold">Special Offer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

