import React from 'react';

const BlogContent = () => {
    const blog = {
        "id": 1,
        'title': 'Blog 1',
        'desc': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        'coverImg': 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
        'content': 'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content'
    };

    return (
        <div className="w-full py-16 px-8 relative bg-gray-800">
            <div className='max-w-[1340px] mx-auto pt-24'>
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl text-white font-bold mb-4">{blog.title}</h1>
                    <div className="max-w-full md:max-w-lg"> 
                        <img className='w-full h-auto mb-4' src={blog.coverImg} alt={blog.title} />
                    </div>
                    <div className="pt-4 px-8 text-white">
                        <p>{blog.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogContent;
