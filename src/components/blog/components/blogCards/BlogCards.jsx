import { Link } from "react-router-dom";
import { articles } from "./data";

const BlogCards = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 font-futura">
      {articles.map((article) => (
        <li key={article.id} className="flex flex-col p-4">
          <Link
            to={`/blog/${article.id}`}
            state={article}
            className="mb-[30px]"
          >
            
            <img
              className="object-cover h-full [aspect-ratio:_4_/_3] box-border"
              src={article.imgSrc}
              alt="thumb image"
            />
            </Link>
            <div className="flex flex-col px-[15px]">
              <Link
                to="#"
                className="mb-5 px-3 py-2 bg-[#0249af] text-white w-fit rounded-md
                text-[12px] font-semibold uppercase leading-[20px] hover:text-[#0249af]
              hover:bg-black"
              >
                {article.category}
              </Link>
              <h2 className="text-xl font-bold leading-[26px] mb-[14.8px]">
                {article.label}
              </h2>
              <p className="text-base leading-[26px] text-[#475671] mb-5">
                {article.introduction.substring(0, 103)}...
              </p>
              <p
                className="text-[12px] font-semibold uppercase leading-[20px] text-center
              text-[#475671] mb-5"
              >
                {article.date}
              </p>
            </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogCards;
