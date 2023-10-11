import { Homepage,AboutPage,BlogContentPage } from "./pages";
import { Routes, Route } from 'react-router-dom';
import useFetch from "./hooks/useFetch";

export default function App() {
  let {loading, data, error} = useFetch('http://localhost:1337/api/blogs?populate=*');
  if(loading) return <p>Loading....</p>
  if(error) return <p>Error!</p>
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage blogsData={data} />}></Route>
        <Route path='/blog/:id' element={<BlogContentPage blogsData={data} />}></Route>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}