import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


const BlogContent = ({ blogsData }) => {

    console.log(blogsData);
    const { id } = useParams();

    let blog = {}
    if (blog) {
        let arr = blogsData.data.filter(blog => blog.id == id)
        blog = arr[0];
    }
    else {
        blog = {};
    }

      // Define custom styles for ReactMarkdown components
      const customComponents = {
        p: ({ node, ...props }) => <p style={{ color: 'white' }} {...props} />,
        h1: ({ node, ...props }) => <h1 style={{ color: 'white' }} {...props} />,
        // Add more elements as needed
    };

    return (
        <div className="w-full py-16 px-8 relative bg-gray-800">
            <div className='max-w-[1340px] mx-auto pt-24'>
                <div className="flex flex-col items-center">
                    <h1 className="md:text-4xl text-2xl text-white font-bold mb-4 pt-4">{blog.attributes.blogTitle}</h1>
                    <div className="max-w-full md:max-w-2xl pt-8">
                        <img className='w-full h-auto mb-4' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} alt={blog.attributes.blogTitle} />
                    </div>
                    <div className="pt-10">

                        <ReactMarkdown className="prose max-w-full lg:px-24 prose-headings:text-white prose-p:text-white">
                        
                            {blog.attributes.blogContent}
                           

                        </ReactMarkdown>

                        <div className="flex flex-col items-center max-w-[400px] mx-auto py-6 bg-slate-800 rounded-2xl mt-16">
                            <img
                                className="w-16 h-16 rounded-full mb-2"
                                src={`http://localhost:1337${blog.attributes.authorProfileImg.data.attributes.url}`}
                                alt={blog.attributes.author}
                            />
                            <p className="text-gray-300 py-2">Written by:</p>
                            <div className="text-gray-300">{blog.attributes.author}</div>
                            <div className="text-gray-300 mt-2">{blog.attributes.date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogContent;
