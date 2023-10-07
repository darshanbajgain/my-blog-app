import React from 'react';
import { Navbar, Footer, BlogContent } from '../components';


const BlogContentPage = ({blogsData}) => {
    return (
        <div>
            <Navbar />
            <BlogContent blogsData={blogsData}/> 
            <Footer />
        </div>
    )
}

export default BlogContentPage;