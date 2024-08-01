import PageCover from "../innerPages/components/pageCover/PageCover";
import BlogCards from "./components/blogCards/BlogCards";

const Blog = () => (
  <>
    <PageCover
      title=""
      subtitle=""
      backgroundImage="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <div className="flex flex-col max-w-[75rem] mx-auto mt-[154px] font-futura">
      <BlogCards />
    </div>
  </>
);

export default Blog;
