import SocialList from "./components/socialList/SocialList";

const Socials = () => {
  return (
    <section className="lg:mr-[-.625rem] lg:ml-0 my-0 mx-[0.625rem] font-futura">
      <div className="">
        <span
          className="lg:m-0 text-black font-semibold text-[0.875rem] leading-[1.25rem]
        uppercase"
        >
          Follow us
        </span>
        <SocialList />
      </div>
    </section>
  );
};

export default Socials;
