import { Route,Routes } from "react-router-dom"
import Home from "./component/Home"
import NotFound from "./component/NotFound"
import Jobs from "./component/Jobs"
import Login from "./component/Login"
import ProtectedRoute from "./component/protectedRoute"
import JobsItemsDetails from "./component/jobsItemDetails"

const App =()=>(

  <Routes>
      <Route path="/" element={<ProtectedRoute Component={Home}/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Jobs" element={<ProtectedRoute Component={Jobs}/>}></Route>
      <Route path="/Jobs/:id" element={<ProtectedRoute Component={JobsItemsDetails}/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
  </Routes>

)

export default App
