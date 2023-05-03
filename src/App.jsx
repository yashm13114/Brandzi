import About from "./about";
import Home from "./home";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./navbar";
import Daily from "./Daily";
import Blogs from "./blogs";
import Festivals from "./Festivals";
import Categories from "./categories";
import Days from "./Days";
import Festivals2 from "./Festivals2";
import Businesscategories from "./Businesscategories";




function App() {
  return (<>
  
    <Navbar />
    
      <Routes>
        <Route path="home" element={<Home />}>
          
        </Route>
        
      
        <Route path="about" element={<About />}></Route>
        <Route path="Daily" element={<Daily />}></Route>
        <Route path="Days" element={<Days />}></Route>
        <Route path="Festivals2" element={<Festivals2 />}></Route>
        <Route path="Businesscategories" element={<Businesscategories />}></Route>
        <Route path="Blogs" element={<Blogs />}></Route>
        
        
      </Routes></>
  );
};

export default App;
