import { Link } from "react-router";
import { Player } from "@lottiefiles/react-lottie-player";

import forbiddenAnimation from "./forbidden.json";

const Forbidden = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="bg-base-100 shadow-2xl rounded-3xl p-8 max-w-xl w-full text-center">
        {/* Lottie Animation */}
        <Player
          autoplay
          loop
          src={forbiddenAnimation}
          className="w-60 h-60 mx-auto"
        />

        {/* Error Code */}
        <h1 className="text-6xl font-bold text-error mt-2">403</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mt-3">
          You Are Forbidden to Access This Page
        </h2>

        {/* Description */}
        <p className="text-base-content/70 mt-4">
          Sorry! You don't have permission to access this page.
          <br />
          Please contact the administrator if you think this is a mistake.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to="/" className="btn btn-success text-white">
            Go to Home
          </Link>

          <Link to="/dashboard/my-parcels" className="btn btn-neutral">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
