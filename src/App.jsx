import { Routes, Route, useLocation } from "react-router-dom"

import { Assortiment, Cart, Contacts, Delivery, Grow, Layout } from "./components/index"
import Home from "./page/Home"
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation()
  return (
    <div className="app">
      <AnimatePresence mode="wait">
         <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="assortiment" element={<Assortiment />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="grow" element={<Grow />} />
        </Route>
      </Routes>
      </AnimatePresence>
     
    </div>
  )
}

export default App
