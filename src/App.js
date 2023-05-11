import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Landingpage from "./components/landingpage/Landingpage"
import Sayhello from "./components/sayhello/Sayhello"
import AboutUs from "./components/aboutus/AboutUs"
import HowWeWork from "./components/howwework/HowWeWork"
import TheTeam from "./components/theteam/TheTeam"
import Footer from "./components/footer/Footer"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <> 
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element= {<Landingpage />} />
          {/* <Route path="/sayhello" element= {<Sayhello />} /> */}
          <Route path="/about-us" element= {<AboutUs />} />
          <Route path="/how-we-work" element= {<HowWeWork />} />
          <Route path="/the-team" element= {<TheTeam />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;