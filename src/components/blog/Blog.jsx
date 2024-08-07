import PageCover from "../innerPages/components/pageCover/PageCover";
import BlogCards from "./components/blogCards/BlogCards";
import CoverComponent from "../CoverComponent";
import parse from "html-react-parser";

const Blog = ({ blogData }) => {
  const desktopCover = blogData.settings.cover_desktop;
  const mobileCover = blogData.settings.cover_mobile;
  return (
    blogData.settings && (
      <>
        <CoverComponent desktopCover={desktopCover} mobileCover={mobileCover} />
        <div className="flex flex-col max-w-[75rem] mx-auto my-[5rem] font-futura">
          <BlogCards posts={blogData.posts} />
        </div>
      </>
    )
  );
};

export default Blog;
