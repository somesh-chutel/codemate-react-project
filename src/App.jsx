import { Route,Routes } from "react-router-dom"
import About from "./component/About"
import ContactUs from "./component/ContactUs"
import Home from "./component/Home"
import Services from "./component/Services"
import NotFound from "./component/NotFound"

const App =()=>(

  <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
  </Routes>

)

export default App
