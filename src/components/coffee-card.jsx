import { motion } from 'framer-motion';
import { useState } from 'react';

function DrinkCard({ drink, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`w-[280px] h-[380px] ${drink.bgColor} rounded-3xl p-6 relative overflow-hidden cursor-pointer`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Drink Title */}
            <h2 className={`text-xl font-semibold ${drink.textColor} mb-2`}>{drink.name}</h2>

            {/* Feature pill */}
            <span className={`inline-block text-xs border ${drink.borderColor} ${drink.textColor} px-3 py-1 rounded-full`}>
                {drink.feature}
            </span>

            {/* Main drink image with zoom effect */}
            <motion.img
                src={drink.mainImage}
                alt={drink.name}
                className="absolute bottom-4 left-4 h-52 z-10"
                animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Animated ingredients coming from the drink */}
            {drink.ingredients.map((ingredient, i) => (
                <motion.img
                    key={i}
                    src={ingredient.image}
                    alt={ingredient.alt}
                    className={`absolute ${ingredient.position} ${ingredient.size} z-20 drop-shadow-xl`}
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.3, rotate: 0 }}
                    animate={isHovered ?
                        { opacity: 1, x: ingredient.x, y: ingredient.y, scale: 1, rotate: ingredient.rotate } :
                        { opacity: 0, x: 0, y: 0, scale: 0.3, rotate: 0 }
                    }
                    transition={{ duration: ingredient.duration, delay: ingredient.delay, ease: "easeOut" }}
                />
            ))}

            {/* Button area - Arrow transforms to button */}
            <div className="absolute bottom-6 right-6">
                {/* Discovery Button - appears on hover */}
                <motion.button
                    className={`px-6 py-3 ${drink.buttonColor} hover:opacity-90 text-white rounded-full text-sm font-medium shadow-lg transition-opacity duration-300`}
                    initial={{ opacity: 0, scale: 0.8, x: 0 }}
                    animate={isHovered ?
                        { opacity: 1, scale: 1, x: 20 } :
                        { opacity: 0, scale: 0.8, x: 0 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Order →
                </motion.button>

                {/* Arrow Circle - visible when not hovering */}
                <motion.div
                    className={`w-12 h-12 ${drink.buttonColor} rounded-full flex items-center justify-center text-white text-xl font-bold cursor-pointer shadow-lg`}
                    initial={{ opacity: 1, scale: 1, x: 0 }}
                    animate={isHovered ?
                        { opacity: 0, scale: 0.8, x: 20 } :
                        { opacity: 1, scale: 1, x: 0 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    →
                </motion.div>
            </div>
        </motion.div>
    );
}

function DrinksMenu() {
    const drinks = [
        {
            name: "Coffee",
            feature: "lactose-free",
            bgColor: "bg-[#e7c5a1]",
            textColor: "text-[#8B4513]",
            borderColor: "border-[#8B4513]",
            buttonColor: "bg-[#D2691E]",
            mainImage: "/assets/coffee.png",
            ingredients: [
                { image: "/assets/bean.png", alt: "bean", position: "bottom-28 left-20", size: "w-8 h-8", x: 80, y: -35, rotate: 45, duration: 1.2, delay: 0.2 },
                { image: "/assets/bean.png", alt: "bean", position: "bottom-32 left-24", size: "w-7 h-7", x: 90, y: -45, rotate: -30, duration: 1.4, delay: 0.4 },
                { image: "/assets/bean.png", alt: "bean", position: "bottom-24 left-28", size: "w-7 h-7", x: 100, y: -30, rotate: 90, duration: 1.6, delay: 0.6 },
                { image: "/assets/choco.png", alt: "chocolate", position: "bottom-30 left-22", size: "w-7 h-7", x: 85, y: -40, rotate: 180, duration: 1.3, delay: 0.5 }
            ]
        },
        {
            name: "Green Tea",
            feature: "antioxidant",
            bgColor: "bg-[#c8e6c9]",
            textColor: "text-[#2e7d32]",
            borderColor: "border-[#2e7d32]",
            buttonColor: "bg-[#4caf50]",
            mainImage: "/assets/green-tea.png",
            ingredients: [
                { image: "/assets/tea-leaf.png", alt: "tea leaf", position: "bottom-28 left-20", size: "w-8 h-8", x: 75, y: -40, rotate: 30, duration: 1.1, delay: 0.2 },
                { image: "/assets/tea-leaf.png", alt: "tea leaf", position: "bottom-32 left-24", size: "w-7 h-7", x: 85, y: -50, rotate: -45, duration: 1.3, delay: 0.4 },
                { image: "/assets/mint.png", alt: "mint", position: "bottom-24 left-28", size: "w-7 h-7", x: 95, y: -35, rotate: 60, duration: 1.5, delay: 0.6 },
                { image: "/assets/mint.png", alt: "mint", position: "bottom-36 left-16", size: "w-6 h-6", x: 70, y: -55, rotate: 120, duration: 1.0, delay: 0.3 }
            ]
        },
        {
            name: "Smoothie",
            feature: "vitamin-rich",
            bgColor: "bg-[#f8bbd9]",
            textColor: "text-[#c2185b]",
            borderColor: "border-[#c2185b]",
            buttonColor: "bg-[#e91e63]",
            mainImage: "/assets/smoothie.png",
            ingredients: [
                { image: "/assets/strawberry.png", alt: "strawberry", position: "bottom-28 left-20", size: "w-8 h-8", x: 80, y: -35, rotate: 45, duration: 1.2, delay: 0.2 },
                { image: "/assets/mango.png", alt: "mango", position: "bottom-32 left-24", size: "w-7 h-7", x: 90, y: -45, rotate: -30, duration: 1.4, delay: 0.4 },
                { image: "/assets/strawberry.png", alt: "banana", position: "bottom-24 left-28", size: "w-7 h-7", x: 100, y: -30, rotate: 90, duration: 1.6, delay: 0.6 },
                { image: "/assets/mango.png", alt: "blueberry", position: "bottom-36 left-16", size: "w-6 h-6", x: 70, y: -50, rotate: 120, duration: 1.0, delay: 0.3 }
            ]
        },
        {
            name: "Orange Juice",
            feature: "fresh-squeezed",
            bgColor: "bg-[#ffe0b2]",
            textColor: "text-[#f57c00]",
            borderColor: "border-[#f57c00]",
            buttonColor: "bg-[#ff9800]",
            mainImage: "/assets/orange-juice.png",
            ingredients: [
                { image: "/assets/orange.png", alt: "orange", position: "bottom-28 left-20", size: "w-8 h-8", x: 85, y: -40, rotate: 30, duration: 1.2, delay: 0.2 },
                { image: "/assets/lemon.png", alt: "orange slice", position: "bottom-32 left-24", size: "w-7 h-7", x: 75, y: -50, rotate: -60, duration: 1.4, delay: 0.4 },
                { image: "/assets/orange.png", alt: "orange", position: "bottom-24 left-28", size: "w-7 h-7", x: 95, y: -35, rotate: 90, duration: 1.6, delay: 0.6 },
                { image: "/assets/lemon.png", alt: "lemon", position: "bottom-36 left-16", size: "w-6 h-6", x: 70, y: -55, rotate: 180, duration: 1.0, delay: 0.3 }
            ]
        },
        {
            name: "Hot Chocolate",
            feature: "comfort drink",
            bgColor: "bg-[#d7ccc8]",
            textColor: "text-[#5d4037]",
            borderColor: "border-[#5d4037]",
            buttonColor: "bg-[#795548]",
            mainImage: "/assets/hot-chocolate.png",
            ingredients: [
                { image: "/assets/choco.png", alt: "chocolate", position: "bottom-28 left-20", size: "w-8 h-8", x: 80, y: -35, rotate: 45, duration: 1.2, delay: 0.2 },
                { image: "/assets/milk.png", alt: "milk", position: "bottom-32 left-24", size: "w-7 h-7", x: 90, y: -45, rotate: -30, duration: 1.4, delay: 0.4 },
                { image: "/assets/choco.png", alt: "marshmallow", position: "bottom-24 left-28", size: "w-7 h-7", x: 100, y: -30, rotate: 90, duration: 1.6, delay: 0.6 },
                { image: "/assets/milk.png", alt: "cinnamon", position: "bottom-36 left-16", size: "w-6 h-6", x: 70, y: -50, rotate: 120, duration: 1.0, delay: 0.3 }
            ]
        },
        {
            name: "Iced Latte",
            feature: "cold brew",
            bgColor: "bg-[#e1f5fe]",
            textColor: "text-[#0277bd]",
            borderColor: "border-[#0277bd]",
            buttonColor: "bg-[#03a9f4]",
            mainImage: "/assets/latte.png",
            ingredients: [
                { image: "/assets/ice-cube.png", alt: "ice", position: "bottom-28 left-20", size: "w-8 h-8", x: 75, y: -40, rotate: 30, duration: 1.1, delay: 0.2 },
                { image: "/assets/bean.png", alt: "coffee bean", position: "bottom-32 left-24", size: "w-7 h-7", x: 85, y: -50, rotate: -45, duration: 1.3, delay: 0.4 },
                { image: "/assets/milk.png", alt: "milk", position: "bottom-24 left-28", size: "w-7 h-7", x: 95, y: -35, rotate: 60, duration: 1.5, delay: 0.6 },
                { image: "/assets/ice-cube.png", alt: "ice", position: "bottom-36 left-16", size: "w-6 h-6", x: 70, y: -55, rotate: 120, duration: 1.0, delay: 0.3 }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-8">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-gray-800 text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Drinks Menu
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {drinks.map((drink, index) => (
                        <DrinkCard key={index} drink={drink} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DrinksMenu;