import React from 'react';
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Homepage = () => {
    return (
        <div>
            <Navbar /> 
            <Blogs />
            <Footer />
        </div>
    )
}

export default Homepage;