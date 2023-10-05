import React from 'react';

const Blogs = () => {

  const blogitems = [
    {
      "id": 1,
      'title': 'How to install JDK in Linux Mint Cinnamon',
      'desc': 'lorep ipsum random text higlights',
      'coverImg': 'https://i.ytimg.com/vi/kFARYsqwlJI/maxresdefault.jpg'
    },
    {
      "id": 1,
      'title': 'How to wrtie a blog in modern way',
      'desc': 'lorep ipsum random text higlights',
      'coverImg': 'https://img.freepik.com/free-vector/blog-concept-illustration-idea-posting-sharing-following_613284-2970.jpg?w=1380&t=st=1695738861~exp=1695739461~hmac=e80be39b6e02cbc5f8d54b37ebc26609ebaa86d7654ce67d1460cd1d66375c7f'
    },
    {
      "id": 1,
      'title': 'Creating this blog using React, Tailwind and Strapi CMS',
      'desc': 'lorep ipsum random text higlights',
      'coverImg': 'https://miro.medium.com/v2/resize:fit:1400/1*y5d-je-3BZUrgg0Hxf7CyA.png'
    },
    {
      "id": 1,
      'title': 'How to install JDK in Linux Mint Cinnamon',
      'desc': 'lorep ipsum random text higlights',
      'coverImg': 'https://i.ytimg.com/vi/kFARYsqwlJI/maxresdefault.jpg'
    },
    {
      "id": 1,
      'title': 'How to install JDK in Linux Mint Cinnamon',
      'desc': 'lorep ipsum random text higlights',
      'coverImg': 'https://i.ytimg.com/vi/kFARYsqwlJI/maxresdefault.jpg'
    },
  ]



  return (

    <div className='w-ful dark:bg-gray-800 text-white p-6'>
      <div className='max-w-[1340px] mx-auto'>
        <div className='grid ss:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 py-24 px-4 my-10'>

          {
            blogitems.map((blog) =>
              <div key={blog.id} className='dark:bg-slate-800 overflow-hidden rounded-xl shadow-inner hover:bg-slate-700 drop-shadow-2xl'>
                <img className='h-62 w-[100%] object-cover rounded-2xl m-auto p-2 ' src={blog.coverImg} />
                <div className='p-4'>
                  <h3 className='font-bold text-xl my-l'>{blog.title}</h3>
                  <p className='text-gray-300 text-base py-2'>
                    {blog.desc}
                  </p>
                </div>
              </div>

            )
          }


          {
            /*
              <div className='dark:bg-slate-900 overflow-hidden rounded-xl drop-shadow-md'>
                  <img className='h-62 w-[100%] object-cover rounded-2xl m-auto p-2 ' src={"https://i.ytimg.com/vi/kFARYsqwlJI/maxresdefault.jpg"} />
                  <div className='p-4'>
                    <h3 className='font-bold text-2xl my-l'> Blog 1</h3>
                    <p className='text-gray-400 text-lg py-2'>
                      Lorepm ipsum font a ram goes to water palnt this is jigad text.
                    </p>
                  </div>
                </div>
            */
          }

        </div>
      </div>
    </div>
  )
};

export default Blogs;