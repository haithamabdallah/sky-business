import BlogCards from "./components/blogCards/BlogCards";
import CoverComponent from "../CoverComponent";
import { Context } from "../../ContextProvider";
import { useContext } from "react";

const Blog = () => {
  const { state } = useContext(Context);
  return (
    state.blogData.settings && (
      <>
        <CoverComponent
          desktopCover={state.blogData.settings.cover_desktop}
          mobileCover={state.blogData.settings.cover_mobile}
          header={state.blogData.settings.cover_header}
          text={state.blogData.settings.cover_text}
          isDark={state.blogData.settings.is_dark}
        />
        <div className="flex flex-col max-w-[75rem] mx-auto my-[5rem] font-futura">
          <BlogCards />
        </div>
      </>
    )
  );
};

export default Blog;
