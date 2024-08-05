import PageCover from "../innerPages/components/pageCover/PageCover";
import BlogCards from "./components/blogCards/BlogCards";
import parse from 'html-react-parser';

const Blog = ( { blogData } ) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    blogData.settings && 
  <>
    <PageCover
      title=""
      subtitle=""
      backgroundImage={`${url}/${blogData.settings.cover}`}
    />
    <div className="flex flex-col max-w-[75rem] mx-auto my-[5rem] font-futura">
      <BlogCards posts={blogData.posts} />
    </div>
  </>
);}

export default Blog;
