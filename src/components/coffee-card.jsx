// Updated drinks array with correct paths for deployment
const drinks = [
    {
        name: "Coffee",
        feature: "lactose-free",
        bgColor: "bg-[#e7c5a1]",
        textColor: "text-[#8B4513]",
        borderColor: "border-[#8B4513]",
        buttonColor: "bg-[#D2691E]",
        mainImage: "/assets/coffee.png", // Fixed path
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
        mainImage: "/assets/green-tea.png", // Fixed path
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
        mainImage: "/assets/smoothie.png", // Fixed path
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
        mainImage: "/assets/orange-juice.png", // Fixed path
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
        mainImage: "/assets/hot-chocolate.png", // Fixed path
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
        mainImage: "/assets/latte.png", // Fixed path
        ingredients: [
            { image: "/assets/ice-cube.png", alt: "ice", position: "bottom-28 left-20", size: "w-8 h-8", x: 75, y: -40, rotate: 30, duration: 1.1, delay: 0.2 },
            { image: "/assets/bean.png", alt: "coffee bean", position: "bottom-32 left-24", size: "w-7 h-7", x: 85, y: -50, rotate: -45, duration: 1.3, delay: 0.4 },
            { image: "/assets/milk.png", alt: "milk", position: "bottom-24 left-28", size: "w-7 h-7", x: 95, y: -35, rotate: 60, duration: 1.5, delay: 0.6 },
            { image: "/assets/ice-cube.png", alt: "ice", position: "bottom-36 left-16", size: "w-6 h-6", x: 70, y: -55, rotate: 120, duration: 1.0, delay: 0.3 }
        ]
    }
];