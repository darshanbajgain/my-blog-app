import { Link } from 'react-router-dom';

const PostsContents = ({blogsData}) => {
    console.log("postpage is loading");

  return (

    <div className='w-ful dark:bg-gray-900 text-white p-6'>
      <div className='lg:max-w-[1240px] md:max-w-[1100px] sm:max-w-[780px] ss:max-w-[550px] mx-auto'>
        <div className='grid lg:mt-16 ss:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-24 lg:px-4 my-10'>

          {
            blogsData.data.map((blog) =>
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
      </div>
    </div>
  )
};

export default PostsContents;