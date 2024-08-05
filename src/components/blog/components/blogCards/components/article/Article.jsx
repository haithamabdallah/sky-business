import { useParams, useLocation } from "react-router-dom";
import PageCover from "../../../../../innerPages/components/pageCover/PageCover";
import { useEffect, useState } from "react";
import sendRequest from "../../../../../../methods/fetchData";
import parse from "html-react-parser";

const Article = () => {

  const url = import.meta.env.VITE_STORAGE_URL;

  const { id } = useParams();

  const location = useLocation();
  
  const postInfo = location.state

  const [postData, setPostData] = useState( postInfo || {} );

  useEffect(() => {
    if (!postInfo) {
      sendRequest({ method: "post", endpoint: "post-page/" + id }).then((res) => {
        // console.log({ res });
        if (res.status === "success") {
          setPostData(res.data);
        }
      });
    }
  }, [])

  const articleInfo = postData;

  return (
    <>
      <PageCover title="" subtitle="" backgroundImage={`${url}/${articleInfo.image}`} />
      <div className="my-[5rem]  max-w-[75rem] mx-auto mt-[55px] font-futura px-5">
        <div className="p-5">{parse(`${articleInfo.content}`)}</div>
      </div>
    </>
  );
};

export default Article;
