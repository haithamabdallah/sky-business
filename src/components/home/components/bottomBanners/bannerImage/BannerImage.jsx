import { Link } from "react-router-dom";

const BannerImage = ({ image, imageUrl }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <Link to={imageUrl}>
      <img
        alt="SKIN CONSULT AI"
        src={`${url}/${image}`}
        className="inline-block align-middle cursor-pointer"
        width="100%"
        height="697"
      />
    </Link>
  );
};

export default BannerImage;
