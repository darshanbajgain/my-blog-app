import React from "react";
import { Navbar, Footer } from "../components";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const profileImageUrl = "https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1702512000&v=beta&t=W5e1A2B-E_AynuySpH0nzwKQbxUEY4ogC9swOA1K9ZU";

const AboutPage = () => {
    return (
        <div className="bg-gray-900 pb-2">
            <Navbar />
            <div className="pt-36 pb-28 container mx-auto"> 
                <div className=" py-12 text-center">
                    <img
                        src={profileImageUrl}
                        alt="Profile"
                        className="mx-auto rounded-full w-36 h-36 object-cover shadow-lg"
                    />
                    <h2 className="text-2xl font-bold text-white mt-4">Darshan Bajgain</h2>
                    <p className="text-gray-400">Frontend Web Developer, exploring technologies</p> 
                </div>
                <div className="flex py-2 justify-center mt-4 pb-4">
                    <a href="https://www.linkedin.com/your-linkedin" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={32} className="text-white mr-4" /> 
                    </a>
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={32} className="text-white mr-4" /> 
                    </a>
                    <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={32} className="text-white" /> 
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
