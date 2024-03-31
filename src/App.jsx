import UserDetails from "./Component/UserDetails"
import "./App.css"

const personDetails = [
  {
    id:1,
    name:"somesh",
    age:34,
    location:"Nagpur",
    domain:"Full Stack Web Developer"
  },
  {
    id:2,
    name:"Ajay",
    age:34,
    location:"Nagpur",
    domain:"Proffersor MECH"
  },
  {
    id:3,
    name:"Nikhil",
    age:34,
    location:"Pune",
    domain:"Softwear Teaster"
  },
  {
    id:4,
    name:"Ishank",
    age:34,
    location:"Mumbai",
    domain:"Game Developer"
  }
]

const name = "Somesh";

const App =()=>(
  <>
  {/* <ul>

    {
      personDetails.map(each=>
        <UserDetails userDetails={each} key={each.id}/>
        )
    }
   
   </ul> */}
    <UserDetails userDetails={name} />

  </>
)

export default App
