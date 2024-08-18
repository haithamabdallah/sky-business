import { Link } from "react-router-dom";

const BannerImage = ({ image, imageUrl }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return imageUrl ? (
    <Link to={imageUrl}>
      <img
        alt="SKIN CONSULT AI"
        src={`${url}/${image}`}
        className="inline-block align-middle cursor-pointer"
        width="100%"
        height="697"
      />
    </Link>
  ) : (
    <img
      alt="SKIN CONSULT AI"
      src={`${url}/${image}`}
      className="inline-block align-middle"
      width="100%"
      height="697"
    />
  );
};

export default BannerImage;
