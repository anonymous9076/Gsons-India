"use client";
import React from 'react';
import Image from "next/image";

export default function CataloguesPage() {
    const light = 'https://res.cloudinary.com/djnjmmgu8/image/upload/v1712740209/pdfs/RATAIL_ALL_ITEMS_LIST_yvtrtg.pdf';
    const switches = 'https://res.cloudinary.com/djnjmmgu8/image/upload/v1712739498/pdfs/GSONS_SWITCHES_ogrms7.pdf';
    const wire = 'https://res.cloudinary.com/djnjmmgu8/image/upload/v1713946774/pdfs/NO_PRICE_WIRE_ljn4se.pdf';
    const concield = 'https://res.cloudinary.com/djnjmmgu8/image/upload/v1714043155/pdfs/GSONS_CONCIELD_LIGHTS_compressed_1_tymgbi.pdf';
    const gate = 'https://res.cloudinary.com/djnjmmgu8/image/upload/v1714043426/pdfs/GATE_NO_PRICE_yfl0z7.pdf';

    const openPdf = (pdf: string) => {
        window.open(pdf, '_blank');
    };

    const catalogs = [
        { title: 'Wires', pdf: wire, img: '/images/catalog/wires.png', color: '#ff914d' },
        { title: 'Switches', pdf: switches, img: '/images/catalog/switches.png', color: '#ff914d' },
        { title: 'Lights', pdf: light, img: '/images/catalog/lights.png', color: '#ff914d' },
        { title: 'Concealed', pdf: concield, img: '/images/catalog/concealed.png', color: '#cfcfcf' },
        { title: 'Gate Lamps', pdf: gate, img: '/images/catalog/gate_lamps.png', color: '#cfcfcf' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="container-custom py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary uppercase tracking-widest mb-4">Our Catalogues</h1>
                    <p className="text-gray-500 max-w-xl mx-auto">Click on any catalogue below to view our detailed product specifications and designs.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {catalogs.map((cat, index) => (
                        <div
                            key={index}
                            onClick={() => openPdf(cat.pdf)}
                            className="bg-gray-50 rounded-2xl cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col h-96 relative overflow-hidden"
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={cat.img}
                                    alt={cat.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>

                            <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                                <div className="flex items-center text-white/80 text-sm font-medium group-hover:text-primary transition-colors gap-2">
                                    <span>Download PDF</span>
                                    <span>&rarr;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
