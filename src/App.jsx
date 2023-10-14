import { Homepage,AboutPage,BlogContentPage, PostsPages } from "./pages";
import { Routes, Route } from 'react-router-dom';
import useFetch from "./hooks/useFetch";
import ScrollToTop from "./utilities/ScrollToTop";

export default function App() {
  let {loading, data, error} = useFetch('http://localhost:1337/api/blogs?populate=*');
  if(loading) return <p>Loading....</p>
  if(error) return <p>Error!</p>
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage blogsData={data} />} />
        <Route path='/blog/:id' element={<BlogContentPage blogsData={data} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostsPages blogsData={data} />} />
      </Routes>
    </div>
  )
}