import ProsList from "./components/prosList/ProsList";

const Footer = () => {
  return (
    <footer className="w-full max-w-screen overflow-x-hidden bg-[#fff] relative z-10 [direction:ltr]">
      <div className="bg-[#000] ">
        <div className="px-[0.9375rem] max-w-[75rem] w-full mx-auto">
          <div className="lg:py-[1.125rem] lg:px-0 py-[0.625rem] px-[0.9375]">
            <ProsList />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
