import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const BlogCards = ({ posts }) => {
  const url = import.meta.env.VITE_STORAGE_URL;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 font-futura">
      {posts.map((post) => (

        <li key={post.id} className="flex flex-col border border-[#eeeeee] m-5 ">
          
          <Link
            to={`/blog/${post.id}`}
            state={post}
            className="flex flex-col"
          >

            <img
              className="object-cover h-full [aspect-ratio:_4_/_3] box-border"
              src={`${url}/${post.image}`}
              alt="thumb image"
            />
            <div className="flex flex-col px-[15px] my-5">
              <p
                to="#"
                className="mb-5 px-3 py-2 bg-[#0249af] text-white w-fit rounded-md
                text-[12px] font-semibold uppercase leading-[20px] hover:text-[#0249af]
              hover:bg-black"
              >
                {post.label}
              </p>
              <h2 className="text-xl font-bold leading-[26px] mb-[14.8px]">
                {post.title}
              </h2>
              {/* <p className="text-base leading-[26px] text-[#475671] mb-5">
                { parse( post.content.substring(0, 103) ) }...
              </p> */}
              <p
                className="text-[12px] font-semibold uppercase leading-[20px] text-[#475671]"
              >
                BY : {post.author} , On:  {post.date}
              </p>
            </div>
          </Link>
        </li>
      ))
      }
    </ul >
  );
};

export default BlogCards;
