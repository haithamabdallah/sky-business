const CoverComponent = ({ desktopCover, mobileCover }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const h = `${(100 * 400) / 1200}vw`;
  return (
    <div className="w-screen relative">
      <img
        className="md:block hidden w-full"
        alt="desktop cover"
        src={`${url}/${desktopCover}`}
      />
      <img
        className="md:hidden block w-full"
        alt="mobile cover"
        src={`${url}/${mobileCover}`}
      />
    </div>
  );
};

export default CoverComponent;
