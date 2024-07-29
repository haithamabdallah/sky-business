import LinkList from "./linkList/LinkList";

const MiddleFooter = () => {
  return (
    <section>
      <div className="px-[0.9375rem] mx-auto max-w-[75rem] w-full">
        <div className="mx-[-0.9375rem] lg:flex lg:flex-wrap">
          <div className="lg:px-[0.9375rem] lg:w-[66.66667%] w-auto">
            <div className="mx-[-0.9375rem] flex flex-wrap max-w-full p-5">
              <LinkList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleFooter;
