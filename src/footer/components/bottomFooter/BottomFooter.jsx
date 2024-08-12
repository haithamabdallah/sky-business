import BottomFooterLinks from "./components/bottomFooterLinks/BottomFooterLinks";
import Copyright from "./components/copyright/Copyright";

const BottomFooter = () => {
  return (
    <section className="mb-6">
      <div className="mx-auto max-w-[75rem] px-[15px] w-full">
        <div className="grid border-t border-t-[#d1d1d1] py-1">
          <Copyright />
        </div>
      </div>
    </section>
  );
};

export default BottomFooter;
