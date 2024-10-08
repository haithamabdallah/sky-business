import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import sendRequest from "../methods/fetchData";
import BlogCards from "../components/blog/components/blogCards/BlogCards";
import CategoryBrands from "../components/brands/components/brandCategories/categoryBrands/CategoryBrands";
import { Context } from "../ContextProvider";

const handleSearch = (search, setState, setStatus, setLoading) => {
  setLoading(false);
  if (search.length > 0) {
    setLoading(true);
    sendRequest({
      method: "post",
      endpoint: "search",
      body: { search },
    }).then((res) => {
      if (res.status === "success") {
        setLoading(false);
        setStatus(res.status);
        setState((prev) => ({
          ...prev,
          searchBlogPosts: res.data.posts,
          searchBrands: res.data.brands,
        }));
      }
    });
  }
};
const SearchResult = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const state = useLocation().state
    ? useLocation().state
    : { search: undefined };

  const search = state.search;

  const navigate = useNavigate();

  const url = import.meta.env.VITE_STORAGE_URL;

  const { state: globalState, setState } = useContext(Context);

  const logo = `${url}/${globalState.general.settings.logo}`;

  useEffect(() => {
    if (search === undefined || search === "") {
      navigate("/");
    } else {
      handleSearch(search, setState, setStatus, setLoading);
    }
  }, [search]);
  return (
    <section className="font-futura my-10 px-4 flex flex-col gap-y-3">
      {!loading && globalState.searchBlogPosts.length > 0 && (
        <>
          <p className="text-[18px] leading-6 uppercase ml-[21px]">Articles</p>
          <BlogCards />
        </>
      )}
      {!loading && globalState.searchBrands.length > 0 && (
        <>
          <p className="text-[18px] leading-6 uppercase ml-[21px] my-5">
            Brands
          </p>
          <CategoryBrands brands={globalState.searchBrands} />
        </>
      )}
      {loading &&
        globalState.searchBlogPosts.length === 0 &&
        globalState.searchBrands.length === 0 && (
          <div className="flex items-center justify-center min-h-20">
            <img alt="loading" src={logo} className="animate-breath w-36" />
          </div>
        )}

      {status.length > 0 &&
        globalState.searchBlogPosts.length === 0 &&
        globalState.searchBrands.length === 0 && (
          <p
            className="flex items-center text-[24px] justify-center leading-7 flex-[0_0_auto]
                w-auto min-h-20"
          >
            There is no results with the term provided above.
          </p>
        )}
    </section>
  );
};

export default SearchResult;
