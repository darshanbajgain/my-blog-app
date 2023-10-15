import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const AboutContent = () => {
    const profileImageUrl = "https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1702512000&v=beta&t=W5e1A2B-E_AynuySpH0nzwKQbxUEY4ogC9swOA1K9ZU";

    return (
        <div className="pt-36 pb-28 container mx-auto">
            <div className="flex flex-col md:flex-row justify-around text-center py-8 px-4 my-6">
                <div className="w-full md:w-1/2 px-2 my-4">
                    <img
                        src={profileImageUrl}
                        alt="Profile"
                        className="mx-auto rounded-full w-36 h-36 object-cover shadow-lg"
                    />
                    <h1 className="text-slate-100 text-lg sm:text-xl font-bold mt-4 px-2 uppercase tracking-widest">{'</Dev.Darshan>'}</h1>
                </div>
                <div className="w-full md:w-1/2 px-4 py-4 text-gray-200 text-center">
                    <p>
                        <b className="uppercase text-xl py-2">Hello, </b> <span className="text-xl text-blue-500 py-2 mb-4 font-bold uppercase"> I am Darshan Bajgain.</span>
                    </p>
                        <br />
                    <p className="text-lg px-4 text-center">
                        I work as a Frontend Web Developer and specialize in HTML, CSS, Javascript, and React JS. Currently,
                        I am expanding my skills to include backend technologies such as Java, and have experience working with databases like SQL and MongoDB.
                    </p>
                </div>
            </div>

            <div className="flex flex-row items-center text-center text-slate-100 my-2">
                <h2 className="font-bold uppercase mx-auto text-sm md:text-xl lg:text-xl py-4">Find me on the sites below to know more..</h2>
            </div>
            <div className="flex justify-center pb-4">
                <a href="https://www.linkedin.com/in/darshanbajgain/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} className="text-white mr-4 hover:text-slate-400" />
                </a>
                <a href="https://github.com/darshanbajgai" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} className="text-white mr-4 hover-text-slate-400" />
                </a>
                <a href="https://twitter.com/thearshanbajgain" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={32} className="text-white hover-text-slate-400" />
                </a>
            </div>
        </div>
    );
}

export default AboutContent;
