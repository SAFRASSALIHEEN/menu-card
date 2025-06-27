import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Foodmenu from './components/food-menu'
// import CoffeeCard from './components/coffee-card'
import DrinksMenu from './components/coffee-card'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center py-8 text-[#101828]">Our Signature Dishes</h1>
        <DrinksMenu />
      </div>
    </>
  )
}

export default App
