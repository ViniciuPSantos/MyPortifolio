import React from "react";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Portfolio from "./sections/Portfolio";
import TechStack from "./sections/TechStack";
import { Toaster } from "react-hot-toast";

import "./index.css";

function App(){
    return(
        <>
        <NavBar />
        <Home />
        <About />
        <TechStack/>
        <Portfolio />
        <Contact />
        <Toaster position="bottom-center" reverseOrder={false} />
        </>
    )
}

export default App;