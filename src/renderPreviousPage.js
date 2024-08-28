import { lazy } from "react";
const renderPreviousPage = (pathname) => {
  if (/^\/blog\/[0-9]+$/.test(pathname)) {
    return lazy(() =>
      import(
        "./components/blog/components/blogCards/components/article/Article"
      )
    );
  }
  switch (pathname) {
    case "/":
      return lazy(() => import("./components/home/Home"));
    case "/about":
      return lazy(() => import("./components/about/About"));
    case "/skin_care":
      return lazy(() => import("./components/skinCare/SkinCare"));
    case "/hair_care":
      return lazy(() => import("./components/hairCare/HairCare"));
    case "/makeup":
      return lazy(() => import("./components/makeup/Makeup"));
    case "/retailers":
      return lazy(() => import("./components/retailers/Retailers"));
    case "/health_care":
      return lazy(() => import("./components/healthCare/HealthCare"));
    case "/brands":
      return lazy(() => import("./components/brands/Brands"));
    case "/blog":
      return lazy(() => import("./components/blog/Blog"));
    case "/contact":
      return lazy(() => import("./components/contact/Contact"));
    case "/register":
      return lazy(() => import("./components/Register/register"));
    case "/login":
      return lazy(() => import("./components/login/Login"));
    case "/thank-you":
      return lazy(() =>
        import("./components/Register/components/thankYou/ThankYou")
      );
    case "/terms":
      return lazy(() => import("./components/staticPages/terms/Terms"));
    case "/privacy":
      return lazy(() => import("./components/staticPages/privacy/Privacy"));
    case "/returns":
      return lazy(() => import("./components/staticPages/returns/Returns"));
    default:
      return "/";
  }
};

export default renderPreviousPage;