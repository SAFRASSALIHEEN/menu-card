import CoffeeCard from "./coffee-card"

function Menu() {
    return (
        <>
            <div className="min-h-screen bg-[#fef7f1] px-6 py-10">
                <h1 className="text-3xl font-bold text-center text-[#3d2b1f] mb-10">Our Special Drinks</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    <CoffeeCard
                        title="Coffee"
                        label="Lactose-Free"
                        color="#e7c5a1"
                        arrowColor="#D2691E"
                        drinkImg="src/assets/coffee.png"
                    />
                    <CoffeeCard
                        title="Latte"
                        label="with Almond"
                        color="#f4d4ba"
                        arrowColor="#A0522D"
                        drinkImg="src/assets/latte.png"
                    />
                    <CoffeeCard
                        title="Mocha"
                        label="Dark Cocoa"
                        color="#d5b8a3"
                        arrowColor="#8B4513"
                        drinkImg="src/assets/mocha.png"
                    />
                    <CoffeeCard
                        title="Matcha"
                        label="Organic"
                        color="#c7e1c0"
                        arrowColor="#4B8B3B"
                        drinkImg="src/assets/matcha.png"
                    />
                    <CoffeeCard
                        title="Caramel"
                        label="Extra Sweet"
                        color="#f2cfa0"
                        arrowColor="#DAA520"
                        drinkImg="src/assets/caramel.png"
                    />
                    <CoffeeCard
                        title="Cold Brew"
                        label="With Ice"
                        color="#c4b1a4"
                        arrowColor="#6B4226"
                        drinkImg="src/assets/coldbrew.png"
                    />
                </div>
            </div>
        </>
    )
}

export default Menu