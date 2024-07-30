import BottomFooterLinks from "./components/bottomFooterLinks/BottomFooterLinks";
import Copyright from "./components/copyright/Copyright";

const BottomFooter = () => {
  return (
    <section>
      <div className="px-[0.9375rem] mx-auto max-w-[75rem] w-full">
        <div className="mx-[-0.9375rem] lg:flex lg:flex-wrap border-t border-t-[#d1d1d1]">
          <Copyright />
          <BottomFooterLinks />
        </div>
      </div>
    </section>
  );
};

export default BottomFooter;
