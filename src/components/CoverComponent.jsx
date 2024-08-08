const CoverComponent = ({ desktopCover, mobileCover }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const h = `${(100*400)/1200}vw`
  return (
    <div className="max-h-[400] md:max-h-[250px] overflow-hidden">
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