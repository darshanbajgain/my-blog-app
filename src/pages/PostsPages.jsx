
import { Navbar, PostsContents, Footer } from "../components";

const PostsPages = ({blogsData}) => {
    return (
        <div>
            <Navbar />
            <PostsContents blogsData={blogsData} />
            <Footer />
        </div>
    );
};

export default PostsPages;
