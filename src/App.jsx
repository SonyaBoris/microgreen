import { Routes, Route } from "react-router-dom"

import { Assortiment, Cart, Contacts, Delivery, Grow, Layout } from "./components/index"
import Home from "./page/Home"



function App() {

  return (

    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="assortiment" element={<Assortiment />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="grow" element={<Grow />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
