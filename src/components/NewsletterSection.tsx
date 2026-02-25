"use client";

import React from "react";
import { Send } from "lucide-react";

export default function NewsletterSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background with decorative elements */}
            <div className="absolute inset-0 bg-gray-900">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl -ml-32 -mb-32"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto bg-linear-to-br from-gray-800 to-gray-900 p-8 md:p-16 rounded-[2.5rem] border border-gray-700 shadow-2xl overflow-hidden relative">
                    {/* Animated accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                                Don't Miss Out On <br /> <span className="text-primary italic">Exclusive Deals.</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-medium">
                                Subscribe to our newsletter and get updates on new arrivals and special offers.
                            </p>
                        </div>

                        <div>
                            <form className="relative flex items-center group" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-gray-800 border-2 border-gray-700 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-gray-500"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 bg-primary text-gray-900 p-3.5 rounded-xl hover:bg-white transition-all duration-300 active:scale-95 group-hover:shadow-[0_0_20px_rgba(255,165,0,0.4)]"
                                >
                                    <Send size={24} strokeWidth={2.5} />
                                </button>
                            </form>
                            <p className="text-gray-500 text-xs mt-4 ml-2">
                                * We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
