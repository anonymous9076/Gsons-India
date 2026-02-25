"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { MapPin, Building2, Globe2 } from "lucide-react";

const cities = [
    { name: "Jalandhar", type: "Expanded", description: "Modern lighting hub" },
    { name: "Gurdaspur", type: "Expanded", description: "Rising architectural focus" },
    { name: "Amritsar", type: "Expanded", description: "Premium lighting solutions" },
    { name: "Ludhiana", type: "Expanded", description: "Industrial & Luxury" },
    { name: "Pathankot", type: "Expanded", description: "Gateway presence" },
];

export default function PresenceSection() {
    return (
        <section className="py-24 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -mr-32 -mt-32 uppercase"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -ml-32 -mb-32 uppercase"></div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <SectionHeading title="Our Growing Presence in Punjab" />
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium mt-4">
                        From our central headquarters to the most vibrant cities, Gsons is bringing premium architectural lighting to every corner of Punjab.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                    {/* Headquarters - Batala */}
                    <div className="md:col-span-5 flex">
                        <div className="bg-gray-900 rounded-4xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between group flex-grow shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Building2 size={160} strokeWidth={1} />
                            </div>

                            <div className="relative z-10">
                                <span className="inline-block px-4 py-1.5 bg-primary text-gray-900 text-xs font-black rounded-full mb-6 tracking-widest uppercase">
                                    Headquarters
                                </span>
                                <h3 className="text-5xl font-black mb-4 tracking-tighter">Batala, Punjab</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xs">
                                    The heart of our operations, where innovation meets tradition in lighting design.
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-4 text-primary font-bold">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                                    <MapPin size={24} />
                                </div>
                                <span>Main Office & Design Studio</span>
                            </div>
                        </div>
                    </div>

                    {/* Cities Grid */}
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cities.map((city, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-gray-900 transition-colors duration-300">
                                            <Globe2 size={20} />
                                        </div>
                                        <span className="text-[10px] font-black tracking-widest text-primary uppercase">{city.type}</span>
                                    </div>

                                    <h4 className="text-2xl font-black text-gray-900 mb-2">{city.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium">{city.description}</p>
                                </div>
                            </div>
                        ))}

                        {/* Future Expansion Placeholder */}
                        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-8 flex flex-col justify-center items-center text-center group">
                            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 mb-4 group-hover:border-primary group-hover:text-primary transition-colors">
                                <span className="text-2xl font-bold">+</span>
                            </div>
                            <p className="text-sm font-bold text-gray-400 group-hover:text-gray-600">More Cities Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
