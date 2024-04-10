import { Route,Routes } from "react-router-dom"
import Home from "./component/Home"
import NotFound from "./component/NotFound"
import Jobs from "./component/Jobs"
import Login from "./component/Login"
import ProtectedRoute from "./component/protectedRoute"

const App =()=>(

  <Routes>
      <Route path="/" element={<ProtectedRoute Component={Home}/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Jobs" element={<ProtectedRoute Component={Jobs}/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
  </Routes>

)

export default App
