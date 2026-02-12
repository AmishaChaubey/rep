import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";


import Home from "./pages/home/Home";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
 
      <Route element={<Layout />}>
        <Route path="/" element={<Home/>} />
       
        
      </Route>
    </Routes>

     </>
  );
 
}

export default App;
