import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import * as productsData from "../data/products";

const products = [
    {
        name: "Classic LED Bulb 9W",
        price: "$18.00",
        rating: 4.5,
        reviews: 7,
        isSale: true,
        image: productsData.bulb[1]
    },
    {
        name: "Modern Hanging Light Gold",
        price: "$150.00",
        rating: 5,
        reviews: 3,
        image: productsData.hanging[1]
    },
    {
        name: "Outdoor Gate Lamp Black",
        price: "$70.00",
        rating: 4,
        reviews: 2,
        image: productsData.gate[1]
    },
    {
        name: "Decorative Wall Sconce",
        price: "$160.00",
        rating: 5,
        reviews: 1,
        image: productsData.wall[1]
    },
];

const bestDeals = [
    {
        name: "Premium Jhummer Crystal",
        price: "$52.00",
        rating: 0,
        reviews: 0,
        isSale: true,
        image: productsData.jhummer[1]
    },
    {
        name: "Fancy Strip Light LED",
        price: "$20.00",
        rating: 5,
        reviews: 5,
        image: productsData.strip[1]
    },
    {
        name: "Concealed Downlight 6W",
        price: "$50.00",
        rating: 4,
        reviews: 12,
        isSale: true,
        image: productsData.concield[1]
    },
    {
        name: "Waterproof Exterior Wall Lamp",
        price: "$70.00",
        rating: 3,
        reviews: 2,
        image: productsData.fancyWall[1]
    }
];



export default function PopularProductsSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <SectionHeading title="Popular On The Gsons Store." />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {products.map((product, idx) => (
                        <ProductCard key={idx} {...product} />
                    ))}
                </div>

                {/* Promo Banner / Middle Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {/* Left Banner */}
                    <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden text-white flex flex-col justify-end min-h-[300px] group">
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity transform group-hover:scale-105 duration-700">
                            <img src={productsData.gate[5]} className="w-full h-full object-cover" alt="Banner" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">Chosen By <br /> Architects</h3>
                            <span className="text-sm opacity-80 decoration-slice">Discover More</span>
                        </div>
                    </div>

                    {/* Middle Banner */}
                    <div className="bg-orange-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center min-h-[300px]">
                        <span className="font-bold text-gray-900 text-lg mb-2">Carefully <br /> Crafted</span>
                        <p className="text-sm text-gray-500 mb-6">Designed for modern homes</p>
                        {/* Image Placeholder */}
                        <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md p-4">
                            <img src={productsData.hanging[4]} className="w-full h-full object-contain" alt="Hanging" />
                        </div>
                    </div>

                    {/* Right Banner */}
                    <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden text-white flex flex-col justify-center min-h-[300px] group">
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity transform group-hover:scale-105 duration-700">
                            <img src={productsData.wall[3]} className="w-full h-full object-cover" alt="Banner" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-2">15% Off Only <br /> This Week</h3>
                            <button className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-bold mt-4 hover:bg-primary hover:text-white transition-colors">Shop Now</button>
                        </div>
                    </div>
                </div>

                <SectionHeading title="Best Deals On The Gsons Store." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestDeals.map((product, idx) => (
                        <ProductCard key={`deal-${idx}`} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
