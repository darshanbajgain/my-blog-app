import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedBlogs from './FeaturedBlogs'

const Blogs = ({ blogsData }) => {

  {/*
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

  ]

*/}

  // Define the IDs of the featured blogs from Strapi
  const featuredBlogIds = [1, 2]; // Replace with your featured blog IDs

  // Filter the featured blogs based on their IDs
  const featuredBlogs = blogsData.data.filter((blog) => featuredBlogIds.includes(blog.id));

    // Filter the latest posts (1-2 most recent posts)
    const latestPosts = blogsData.data.filter((blog) => !featuredBlogIds.includes(blog.id))
    .slice(0,4); // Adjust the number of latest posts as needed


  return (

    <div className='w-ful dark:bg-gray-900 text-white p-6'>
      <div className='max-w-[1340px] mx-auto'>

        <div className='w-full pt-32 lg:mt-16 lg:pt-16 text-center mb-6'>
          <h2 className='lg:text-3xl text-2xl lg:py-4 font-bold text-white mb-4'>Featured Content</h2>
          <div className='grid ss:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {featuredBlogs.map((blog) => (
              <FeaturedBlogs key={blog.id} blog={blog} />
            ))}
          </div>
        </div>

        <div className='w-full text-center my-6 py-4'>
          <h2 className='text-2xl lg:text-3xl font-bold text-white py-2 mb-4'>Latest Posts</h2>
          <div className='grid ss:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            {latestPosts.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <div className='dark:bg-slate-800 overflow-hidden rounded-xl shadow-inner hover:bg-slate-700 drop-shadow-2xl'>
                  <img
                    className='h-62 w-[100%] object-cover rounded-2xl m-auto p-2'
                    src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
                  />
                  <div className='p-4'>
                    <h3 className='font-bold text-xl my-l'>{blog.attributes.blogTitle}</h3>
                    <p className='text-gray-300 text-base py-2'>{blog.attributes.blogDesc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='w-full text-center mb-6'>
            <Link to='/posts'>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full'>
                Load More
              </button>
            </Link>
          </div>

        
      </div>
    </div>
  )
};

export default Blogs;
  {/*
            blogitems.map((blog) =>
            <Link key={blog.id} to={`/blog/${blog.id}`}>
              <div  className='dark:bg-slate-800 overflow-hidden rounded-xl shadow-inner hover:bg-slate-700 drop-shadow-2xl'>
                <img className='h-62 w-[100%] object-cover rounded-2xl m-auto p-2 ' src={blog.coverImg} />
                <div className='p-4'>
                  <h3 className='font-bold text-xl my-l'>{blog.title}</h3>
                  <p className='text-gray-300 text-base py-2'>
                    {blog.desc}
                  </p>
                </div>
              </div>
            </Link>
            )

          <div className='grid  ss:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 py-24 lg:px-4 my-2'>


          {
            blogsData.data
              .filter((blog) => !featuredBlogIds.includes(blog.id))
              .map((blog) =>
                <Link key={blog.id} to={`/blog/${blog.id}`}>
                  <div className='dark:bg-slate-800 overflow-hidden rounded-xl shadow-inner hover:bg-slate-700 drop-shadow-2xl'>
                    <img className='h-62 w-[100%] object-cover rounded-2xl m-auto p-2 ' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                    <div className='p-4'>
                      <h3 className='font-bold text-xl my-l'>{blog.attributes.blogTitle}</h3>
                      <p className='text-gray-300 text-base py-2'>
                        {blog.attributes.blogDesc}
                      </p>
                    </div>
                  </div>
                </Link>
              )
          }

        
        </div>
        */}