import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
    // print the data received from the server
    useEffect(() => {
        axios.get("/api/test")
            .then(res => console.log(res))
            .catch()
    }, []);

    return (
        <div className="App">
            <Header/>
            <div id="Contents">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="projects/" element={<Projects/>}/>
                    <Route path="blog/" element={<Blog/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
