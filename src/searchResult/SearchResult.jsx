import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import sendRequest from "../methods/fetchData";
import BlogCards from "../components/blog/components/blogCards/BlogCards";
import CategoryBrands from "../components/brands/components/brandCategories/categoryBrands/CategoryBrands";
import { Context } from "../ContextProvider";

const handleSearch = (search, setPosts, setBrands, setStatus, setLoading) => {
  setPosts([]);
  setBrands([]);
  setStatus("");
  setLoading(false);
  if (search.length > 0) {
    setLoading(true);
    sendRequest({
      method: "post",
      endpoint: "search",
      body: { search },
    }).then((res) => {
      console.log("hello");
      if (res.status === "success") {
        setLoading(false);
        setStatus(res.status);
        setPosts(res.data.posts);
        setBrands(res.data.brands);
      }
    });
  }
};
const SearchResult = () => {
  const [posts, setPosts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const state = useLocation().state
    ? useLocation().state
    : { search: undefined };
  console.log({ state });
  const search = state.search;

  const navigate = useNavigate();

  const url = import.meta.env.VITE_STORAGE_URL;

  const { value } = useContext(Context);

  const logo = `${url}/${value.settings.logo}`;

  useEffect(() => {
    if (search === undefined || search === "") {
      navigate("/");
    } else {
      handleSearch(search, setPosts, setBrands, setStatus, setLoading);
    }
  }, [search]);
  return (
    <section className="font-futura my-10 px-4">
      {!loading && posts.length > 0 && <BlogCards posts={posts} />}
      {!loading && brands.length > 0 && <CategoryBrands brands={brands} />}
      {loading && posts.length === 0 && brands.length === 0 && (
        <div className="flex items-center justify-center min-h-20">
          <img alt="loading" src={logo} className="animate-breath w-36" />
        </div>
      )}

      {status.length > 0 && posts.length === 0 && brands.length === 0 && (
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
