import { Routes, Route } from "react-router-dom"

import { Assortiment, Cart, Contacts, Layout } from "./components/index"
import Home from "./page/Home"


function App() {

  return (
    <div className="app">
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="assortiment" element={<Assortiment />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
