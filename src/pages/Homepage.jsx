import React from 'react';
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Homepage = ({blogsData}) => {
    

    return (
        <div>
            <Navbar /> 
            <Blogs blogsData={blogsData} />
            <Footer />
        </div>
    )
}

export default Homepage;