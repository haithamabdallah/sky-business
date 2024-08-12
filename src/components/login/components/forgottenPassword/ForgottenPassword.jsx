import { Link } from "react-router-dom";

const ForgottenPassword = () => {
  return (
    <div className="flex justify-center">
      <Link
        to="/forget_password"
        className="text-black text-center my-3 font-medium hover:opacity-65"
      >
        Forgotten your password?
      </Link>
    </div>
  );
};

export default ForgottenPassword;
