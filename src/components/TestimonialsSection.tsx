"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Architect",
        content: "The quality of lighting fixtures from Gsons is unparalleled. I've used their products in multiple luxury projects, and the results are always stunning.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=rajesh",
    },
    {
        id: 2,
        name: "Sneha Sharma",
        role: "Interior Designer",
        content: "Fsons offers a fantastic variety of modern and sustainable lighting solutions. Their customer service is also top-notch, helping me find exactly what I need.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=sneha",
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "Homeowner",
        content: "Upgraded my entire home with Gsons smart lighting. The energy efficiency and the aesthetic appeal have completely transformed our living space.",
        rating: 4,
        avatar: "https://i.pravatar.cc/150?u=amit",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <SectionHeading title="What Our Clients Say" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={`${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 italic mb-8 grow leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-300">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 leading-none mb-1">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
