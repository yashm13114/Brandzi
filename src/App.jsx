import About from "./about";
import Home from "./home";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
  );
}

export default App;
