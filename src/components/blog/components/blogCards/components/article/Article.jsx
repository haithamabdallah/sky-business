import { useParams, useLocation } from "react-router-dom";
import { articles } from "../../data";
import PageCover from "../../../../../innerPages/components/pageCover/PageCover";
const Article = () => {
  const { id } = useParams();
  const location = useLocation();
  const articleInfo = location.state
    ? location.state
    : articles.filter((article) => article.id === Number(id))[0];

  console.log(articleInfo);

  return (
    <>
      <PageCover title="" subtitle="" backgroundImage={articleInfo.imgSrc} />
      <div className="flex flex-col max-w-[75rem] mx-auto mt-[55px] font-futura px-5">
        <p className="mb-6 text-base leading-[26px] text-[#475671]">
          {articleInfo.introduction}
        </p>
        {articleInfo.sections.map(({ label, description }) => (
          <>
            <h2 className="mt-[52.5px] mb-[20.5px] text-[35px] text-[#293241] leading-[53px] font-bold">
              {label}:
            </h2>
            <p className="mb-6 text-base leading-[26px] text-[#475671]">
              {description}
            </p>
          </>
        ))}
        <h2 className="mt-[52.5px] mb-[20.5px] text-[35px] text-[#293241] leading-[53px] font-bold">
          Conclusion:
        </h2>
        <p className="mb-12 text-base leading-[26px] text-[#475671]">
          {articleInfo.conclusion}
        </p>
      </div>
    </>
  );
};

export default Article;
