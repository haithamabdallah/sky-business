const CoverComponent = ({ desktopCover, mobileCover }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const h = `${(100 * 400) / 1200}vw`;
  return (
    <div className="h-[400px] md:h-[250px] w-screen relative">
      <img
        className="md:block hidden w-full h-full object-cover"
        alt="desktop cover"
        src={`${url}/${desktopCover}`}
      />
      <img
        className="md:hidden block w-full h-full object-cover"
        alt="mobile cover"
        src={`${url}/${mobileCover}`}
      />
    </div>
  );
};

export default CoverComponent;
