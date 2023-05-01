import About from "./about";
import Home from "./home";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./navbar";
import Daily from "./Daily";
import Blogs from "./Daily";
import Festivals from "./Festivals";
import Categories from "./categories";
function App() {
  return (<>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
      
        <Route path="about" element={<About />}></Route>
        <Route path="Daily" element={<Daily />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        

        
      </Routes></>
  );
}

export default App;
