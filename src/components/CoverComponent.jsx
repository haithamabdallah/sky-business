const CoverComponent = ({ desktopCover, mobileCover }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <>
      <img
        className="md:block hidden w-screen"
        alt="desktop cover"
        src={`${url}/${desktopCover}`}
      />
      <img
        className="md:hidden block w-screen"
        alt="mobile cover"
        src={`${url}/${mobileCover}`}
      />
    </>
  );
};

export default CoverComponent;