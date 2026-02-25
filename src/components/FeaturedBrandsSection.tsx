"use client";

import React from "react";
import SectionHeading from "./SectionHeading";

const brands = [
    { name: "Philips", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Philips_logo.svg/2560px-Philips_logo.svg.png" },
    { name: "Syska", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Syska_logo.png/1200px-Syska_logo.png" },
    { name: "Havells", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Havells_logo.svg/1200px-Havells_logo.svg.png" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png" },
    { name: "Jaquar", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jaquar_Logo.jpg/1200px-Jaquar_Logo.jpg" },
];

export default function FeaturedBrandsSection() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container-custom">
                <SectionHeading title="Brands We Partner With" />

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mt-8 opacity-60">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer transform hover:scale-110"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-8 md:h-12 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
