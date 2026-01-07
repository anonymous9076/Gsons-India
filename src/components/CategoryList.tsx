import Link from "next/link";
import * as productsData from "../data/products";

const categories = [
    { name: "LED Bulbs", image: productsData.bulb[5], id: "bulb" },
    { name: "Hanging Lights", image: productsData.hanging[4], id: "hanging" },
    { name: "Wall Lights", image: productsData.wall[8], id: "wall" },
    { name: "Gate Lights", image: productsData.gate[5], id: "gate" },
    { name: "Fancy Wall", image: productsData.fancyWall[2], id: "fancyWall" },
    { name: "Strip Lights", image: productsData.strip[2], id: "strip" },
    { name: "Jhummer", image: productsData.jhummer[0], id: "jhummer" },
    { name: "Concealed", image: productsData.concield[19], id: "concield" },
];

export default function CategoryList() {
    return (
        <section className="py-12 bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                    {categories.map((cat, idx) => (
                        <Link key={idx} href={`/products?category=${cat.id}`} className="flex flex-col items-center group cursor-pointer">
                            <div className="w-24 h-24 rounded-full bg-orange-50 flex items-center justify-center mb-3 transition-transform group-hover:scale-110 group-hover:shadow-md border-2 border-transparent group-hover:border-primary overflow-hidden">
                                <img src={cat.image} alt={cat.name} className="w-full h-full object-contain p-2" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors text-center w-full block">
                                {cat.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
