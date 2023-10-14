
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";



const AboutContent = () => {
    const profileImageUrl = "https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1702512000&v=beta&t=W5e1A2B-E_AynuySpH0nzwKQbxUEY4ogC9swOA1K9ZU";

    return (

        <div className="pt-36 pb-28 container mx-auto">
            <div className=" py-12 text-center">
                <img
                    src={profileImageUrl}
                    alt="Profile"
                    className="mx-auto rounded-full w-36 h-36 object-cover shadow-lg"
                />
                <h1 className=" text-slate-100 text-lg sm:text-xl font-bold m-auto mt-4 px-5 uppercase tracking-widest">{'</Dev.Darshan>'}</h1>
                <p className="text-gray-200 py-4 px-16 text-center"> <b>Hello, I am Darshan Bajgain.</b><br/>I am a Frontend Web Developer with tech stack HTML, CSS, Javascript and React JS.
                <br/>I am also learning backend technologies with Java and have knownlegde of Database like SQL, MongoDB.</p>
            </div>
            <div className="flex flex-row items-center text-center text-slate-100">
            <h2 className="font-bold uppercase mx-auto text-sm md:text-xl lg:text-xl py-4">Find me on below sites to know more..</h2>


            </div>
            <div className="flex justify-center pb-4">
                
                <a href="https://www.linkedin.com/in/darshanbajgain/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} className="text-white mr-4 hover:text-slate-400" />
                </a>
                <a href="https://github.com/darshanbajgai" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} className="text-white mr-4 hover:text-slate-400" />
                </a>
                <a href="https://twitter.com/thearshanbajgai" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={32} className="text-white hover:text-slate-400" />
                </a>
            </div>
        </div>


    )
}

export default AboutContent