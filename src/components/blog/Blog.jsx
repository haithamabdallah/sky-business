import PageCover from "../innerPages/components/pageCover/PageCover";
import BlogCards from "./components/blogCards/BlogCards";
import CoverComponent from "../CoverComponent";
import parse from "html-react-parser";

const Blog = ({ blogData }) => {
  const settings = blogData.settings
  const desktopCover = settings.cover_desktop;
  const mobileCover = settings.cover_mobile;
  const { cover_header: header, cover_text: text } = settings;
  return (
    blogData.settings && (
      <>
        <CoverComponent
          desktopCover={desktopCover}
          mobileCover={mobileCover}
          header={header}
          text={text}
        />
        <div className="flex flex-col max-w-[75rem] mx-auto my-[5rem] font-futura">
          <BlogCards posts={blogData.posts} />
        </div>
      </>
    )
  );
};

export default Blog;
