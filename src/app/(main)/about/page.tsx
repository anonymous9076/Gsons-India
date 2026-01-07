import Link from "next/link";
import Image from "next/image";
import { Lightbulb, Eye, Map, Handshake } from "lucide-react";

export default function AboutPage() {
    const milestones = [
        { icon: <Lightbulb className="w-8 h-8" />, title: "Founded in 2021", desc: "Started with a vision to redefine lighting in Batala, Punjab." },
        { icon: <Eye className="w-8 h-8" />, title: "Our Vision", desc: "Lighting as an art form that transforms ordinary moments." },
        { icon: <Map className="w-8 h-8" />, title: "Premium Quality", desc: "Meticulously handpicked products meeting stringent standards." },
        { icon: <Handshake className="w-8 h-8" />, title: "Customer First", desc: "Dedicated experts providing personalized service." },
    ];

    return (
        <div className="bg-white">
            {/* Hero Header */}
            <section className="bg-orange-50/50 text-center py-20 px-4 md:py-24">
                <div className="container-custom">
                    <span className="inline-block px-4 py-2 bg-orange-100 text-primary border border-orange-200 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                        Illuminating Lives <br />
                        <span className="text-primary">Since 2021</span>
                    </h1>
                </div>
            </section>

            {/* Main Story Section */}
            <section className="py-20">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://i.pinimg.com/564x/5b/fe/2c/5bfe2c2ed20f936fcce7617a68abe3f0.jpg"
                                alt="Gsons Philosophy"
                                width={600}
                                height={800}
                                className="w-full h-auto max-h-[600px] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl text-center shadow-xl hidden md:block">
                            <h3 className="text-3xl font-bold mb-1">3+ Years</h3>
                            <p className="text-sm font-bold uppercase tracking-wider">Of Excellence</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900">The Gsons Journey</h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p className="font-medium text-gray-900">
                                Welcome to Gsons, your ultimate destination for illuminating spaces and enhancing ambiances!
                                At Gsons, we're passionate about brightening up your world with our exquisite range of lights and accessories.
                            </p>
                            <p>
                                Founded in 2021 by Rakesh Goel and Sumit Goel, Gsons was born in the vibrant city of Batala, Punjab.
                                Our mission is to blend creativity with innovation, curating lighting solutions that evoke emotions
                                and enhance experiences.
                            </p>
                            <p>
                                We believe that lighting is more than just functional; it's an art form. Each piece in our collection
                                is selected to resonate with our philosophy of blending form with function perfectly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-20 bg-orange-50/30">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 bg-white text-xs font-semibold tracking-wider uppercase rounded-full text-primary shadow-sm border border-orange-100 mb-4">
                            Leadership
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Meet The Founders</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        {/* Sumit Goel */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="h-80 w-full overflow-hidden relative">
                                {/* Using img for local public assets if needed or Image if configured.
                                     Since copied to public/images, we can use simple img or next/Image.
                                     Using img tag for simplicity with the copied jpeg files. */}
                                <img
                                    src="/images/sumit-goel.jpg"
                                    alt="Sumit Goel"
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium">"Innovation involves finding a new and better way to do something."</p>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">Sumit Goel</h3>
                                <span className="text-sm font-bold text-primary uppercase tracking-wider mb-4 block">CEO</span>
                                <p className="text-gray-600 leading-relaxed">
                                    The visionary founder of Gsons, bringing a passion for innovation and a keen eye for design to every aspect of the company. As CEO, he leads with a commitment to excellence.
                                </p>
                            </div>
                        </div>

                        {/* Rakesh Goel */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="h-80 w-full overflow-hidden relative">
                                <img
                                    src="/images/rakesh-goel.jpg"
                                    alt="Rakesh Goel"
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium">"Success is not just about making money. It's about making a difference."</p>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">Rakesh Goel</h3>
                                <span className="text-sm font-bold text-primary uppercase tracking-wider mb-4 block">Founder</span>
                                <p className="text-gray-600 leading-relaxed">
                                    The main founder of the empire. A visionary entrepreneur known for his innovative spirit and strategic leadership. With a relentless drive for success, he has built a global powerhouse.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Milestones / Core Values */}
            <section className="bg-gray-50 py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {milestones.map((m, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
                                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                    {m.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{m.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-gray-900 text-white text-center">
                <div className="container-custom">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Experience the Magic of Gsons</h2>
                    <p className="max-w-2xl mx-auto text-gray-400 mb-12 text-lg">
                        Join us on our quest to illuminate homes and hearts across the globe.
                        Whether you're a design enthusiast or a homeowner, we invite you to explore our world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link href="/products" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
                            Explore Collection
                        </Link>
                        <Link href="/contact" className="bg-white/10 text-white px-8 py-3 rounded-full font-bold border border-white/20 hover:bg-white/20 transition-colors">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
