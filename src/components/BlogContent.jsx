import React from 'react';
import { useParams } from 'react-router-dom';

const BlogContent = () => {

    const { id } = useParams()

    { /*const blog = {
        "id": 1,
        'title': 'Blog 1',
        'desc': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        'coverImg': 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
        'content': 'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content',
        'author': 'Darshan Bajgain',
        'date': 'October 5, 2023', 
        'authorProfileImg': 'https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1701907200&v=beta&t=0ASP4jhQWmTvpo5NIi96n_Mq_OQHR83mG9_MqbbKNrE' 
    };
*/}

    const blogitems = [
        {
            "id": 1,
            'title': 'Blog 1',
            'desc': 'lorep ipsum random text higlights',
            'coverImg': 'https://i.ytimg.com/vi/kFARYsqwlJI/maxresdefault.jpg',
            'content': 'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content',
            'author': 'Darshan Bajgain',
            'date': 'October 5, 2023',
            'authorProfileImg': 'https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1701907200&v=beta&t=0ASP4jhQWmTvpo5NIi96n_Mq_OQHR83mG9_MqbbKNrE'

        },
        {
            "id": 2,
            'title': 'How to wrtie a blog in modern way',
            'desc': 'lorep ipsum random text higlights',
            'coverImg': 'https://img.freepik.com/free-vector/blog-concept-illustration-idea-posting-sharing-following_613284-2970.jpg?w=1380&t=st=1695738861~exp=1695739461~hmac=e80be39b6e02cbc5f8d54b37ebc26609ebaa86d7654ce67d1460cd1d66375c7f',
            'content': 'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content',
            'author': 'Darshan Bajgain',
            'date': 'October 5, 2023',
            'authorProfileImg': 'https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1701907200&v=beta&t=0ASP4jhQWmTvpo5NIi96n_Mq_OQHR83mG9_MqbbKNrE'

        },
        {
            "id": 3,
            'title': 'Creating this blog using React, Tailwind and Strapi CMS',
            'desc': 'lorep ipsum random text higlights',
            'coverImg': 'https://miro.medium.com/v2/resize:fit:1400/1*y5d-je-3BZUrgg0Hxf7CyA.png',
            'content': 'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content',
            'author': 'Darshan Bajgain',
            'date': 'October 5, 2023',
            'authorProfileImg': 'https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1701907200&v=beta&t=0ASP4jhQWmTvpo5NIi96n_Mq_OQHR83mG9_MqbbKNrE'

        },
        {
            "id": 4,
            'title': 'How to install JDK in Linux Mint Cinnamon',
            'desc': 'lorep ipsum random text higlights',
            'coverImg': 'https://i.ytimg.com/vi/kFARYsqwlJI/maxresdefault.jpg',
            'content': 'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content',
            'author': 'Darshan Bajgain',
            'date': 'October 5, 2023',
            'authorProfileImg': 'https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1701907200&v=beta&t=0ASP4jhQWmTvpo5NIi96n_Mq_OQHR83mG9_MqbbKNrE'

        },

    ]

    let blog = blogitems.filter(blog=> blog.id == id)
    blog = blog[0];



    return (
        <div className="w-full py-16 px-8 relative bg-gray-800">
            <div className='max-w-[1340px] mx-auto pt-24'>
                <div className="flex flex-col items-center">
                    <h1 className="md:text-4xl text-2xl text-white font-bold mb-4 p-2">{blog.title}</h1>
                    <div className="max-w-full md:max-w-2xl">
                        <img className='w-full h-auto mb-4' src={blog.coverImg} alt={blog.title} />
                    </div>
                    <div className="pt-4 lg:px-32 text-white">
                        <p className='my-2'>{blog.content}</p>
                        <div className="flex flex-col items-center max-w-[400px] mx-auto py-6 bg-slate-800 rounded-2xl mt-8">
                            <img
                                className="w-16 h-16 rounded-full mb-2"
                                src={blog.authorProfileImg}
                                alt={blog.author}
                            />
                            <p className="text-gray-400 py-2">Written by:</p>
                            <div className="text-gray-400">{blog.author}</div>
                            <div className="text-gray-400 mt-2">{blog.date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogContent;
